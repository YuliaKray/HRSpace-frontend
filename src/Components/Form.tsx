import React, { useState } from "react";
import { useMultistepForm } from "../assets/useMultistepForm";
import { GeneralInfoForm } from "../formComponents/GeneralInfoForm";

type FormData = {
  name: string;
  title: string;
  location: string;
  lowestSalary: number;
  highestSalary: number;
  numberOfEmployees: number;
  recruitersQty: number;
};

const INITIAL_DATA = {
  name: "",
  title: "",
  location: "",
  lowestSalary: 500,
  highestSalary: 1000,
  numberOfEmployees: 1,
  recruitersQty: 1
};

export function Form() {
  const [formData, setFormData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }
  const {
    step,
    steps,
    currentStepIndex,
    previousStep,
    nextStep,
    isFirstStep,
    isLastStep,
  } = useMultistepForm([
    <GeneralInfoForm {...formData} updateFields={updateFields} />,
    <div>Step 2</div>,
    <div>Step 3</div>,
  ]);

  function handleNextStep(e: React.FormEvent) {
    e.preventDefault();
    nextStep();
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(formData)
  }
  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
          margin: "0 auto",
          gap: "10px",
        }}
        action=""
      >
        <div>
          {currentStepIndex + 1} / {steps.length}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >

        </div>
        {step}
        {!isFirstStep && (
            <button type="button" onClick={previousStep}>
              previous step
            </button>
          )}
          {isLastStep ? (
            <button type="submit">submit</button>
          ) : (
            <button type="button" onClick={handleNextStep}>
              next step
            </button>
          )}
      </form>
    </>
  );
}
