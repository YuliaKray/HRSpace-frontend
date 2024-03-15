import './Form.scss';
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
        action=""
      >
        {/* <div>
          {currentStepIndex + 1} / {steps.length}
        </div> */}
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >

        </div> */}
        {step}
        <div className='form__btn-wrapper'>
          <button type="button" className='form__btn form__btn_close'>
            Выйти
          </button>
          {!isFirstStep && (
            <button type="button" onClick={previousStep} className='form__btn form__btn_previous'>
              Назад
            </button>
          )}
          {isLastStep ? (
            <button type="submit">submit</button>
          ) : (
            <button type="button" onClick={handleNextStep} className='form__btn'>
              Продолжить
            </button>
          )}
        </div>
      </form>
    </>
  );
}
