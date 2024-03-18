import './Form.scss';
import React, { useState } from "react";
import { useMultistepForm } from "../assets/useMultistepForm";
import { GeneralInfoForm } from "../formComponents/GeneralInfoForm";
import { WorkingConditionsForm } from '../formComponents/workingConditionsForm'
import spangebob from '../images/SpongeBob_SquarePants_character.svg.png'
import { EmployeeRequirementsForm } from '../formComponents/EmployeeRequirementsForm';
import { RecruitersRequirementsForm } from '../formComponents/RecruitersRequirementsForm';
import { PaymentForm } from '../formComponents/PaymentForm';

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
    gender: string[];
    minimum_age: number;
    maximum_age: number;
    education: string[];
    core_skills: string;
    driving_skills: string[];
    has_medical_sertificate: boolean;
    requirements_description: string;
    rating: string;
    experience: string[];
    completed_orders: string;
    recruiters_experience: string;
    respond_speed: string;
    fulfillment_speed: string;
    recruiter_responsibilities: string[];
    description: string;
    candidate_resume_form: Array<string>;
    stop_list: string;
    numberOfPayment: number;
    paymentFormat: string;


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
    gender: Array<string>(),
    minimum_age: 14,
    maximum_age: 99,
    education: Array<string>(),
    experience: Array<string>(),
    core_skills: "",
    driving_skills: Array<string>(),
    has_medical_sertificate: false,
    requirements_description: "",
    rating: "",
    completed_orders: "",
    recruiters_experience: "",
    respond_speed: "",
    fulfillment_speed: "",
    recruiter_responsibilities: Array<string>(),
    description: "",
    candidate_resume_form: Array<string>(),
    stop_list: "",
    numberOfPayment: 30000,
    paymentFormat: '',

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
        <EmployeeRequirementsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <RecruitersRequirementsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <PaymentForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
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
                className={`form ${isLastStep ? "form_last-step" : ""} `}
                onSubmit={handleSubmit}
                action=""
            >
                {step}

                { !isLastStep && <img className='form__img' src={spangebob} />}

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
                        <button type="submit" className='form__btn'>Опубликовать</button>
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
