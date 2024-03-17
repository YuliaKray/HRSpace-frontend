import './Form.scss';
import React, { useState } from "react";
import { useMultistepForm } from "../assets/useMultistepForm";
import { GeneralInfoForm } from "../formComponents/GeneralInfoForm";
// import { WorkingConditionsForm } from '../formComponents/WorkingConditionsForm'
import { WorkingConditionsForm } from '../formComponents/workingConditionsForm'
import spangebob from '../images/SpongeBob_SquarePants_character.svg.png'

type FormData = {
    name: string;
    title: string;
    location: string;
    lowestSalary: number;
    highestSalary: number;
    numberOfEmployees: number;
    startDate: Array<number>;
    recruitersQty: number;
    employmentType: number;
    workingSchedule: Array<string>;
    workingType: string;
    agreementType: string[];
    benefits: string[];
    other: string;
};

const INITIAL_DATA = {
    name: "",
    title: "",
    location: "",
    lowestSalary: 500,
    highestSalary: 1000,
    numberOfEmployees: 1,
    recruitersQty: 2,
    startDate: Array<number>(),
    workingSchedule: Array<string>(),
    workingType: "office",
    employmentType: 1,
    agreementType: Array<string>(),
    benefits: Array<string>(),
    other: '',
};

export function Form() {

    const [currentIndex, setCurrentIndex] = useState(1); //попытка сделать чтобы вспывашкив начале сами менялись
    const [formData, setFormData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<FormData>) {
        setFormData((prev) => ({ ...prev, ...fields }));
        // setCurrentIndex(currentStepIndex);
    }

    const {
        step,
        currentStepIndex,
        previousStep,
        nextStep,
        isFirstStep,
        isLastStep,
    } = useMultistepForm([
        <GeneralInfoForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <WorkingConditionsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <div>Step 3</div>,
    ]);

    function handleNextStep(e: React.FormEvent) {
        e.preventDefault();

        nextStep();
        setCurrentIndex(currentStepIndex);

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
                {step}

                <img className='form__img' src={spangebob} />

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
