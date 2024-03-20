import './Form.scss';
import React, { useEffect, useState } from "react";
import { useMultistepForm } from "../assets/useMultistepForm";
import { GeneralInfoForm } from "../formComponents/GeneralInfoForm";
import { WorkingConditionsForm } from '../formComponents/workingConditionsForm'
import spangebob from '../images/SpongeBob_SquarePants_character.svg.png'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import { EmployeeRequirementsForm } from '../formComponents/EmployeeRequirementsForm';
import { RecruitersRequirementsForm } from '../formComponents/recruitersRequirementsForm';
import { PaymentForm } from '../formComponents/PaymentForm';
import { Modal } from './Modal/Modal';
import { SubmitModal } from './SubmitModal/SubmitModal';

type FormProps = {
    langData: number[]
} & {
    getProfession: () => void
} & {
    openModal: () => void
};

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
    // gender: string[];
    // minimum_age: number;
    // maximum_age: number;
    education: string[];
    core_skills: string;
    language_skills: number[];
    language_level: string[];
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
    // gender: Array<string>(),
    // minimum_age: 14,
    // maximum_age: 99,
    education: Array<string>(),
    experience: Array<string>(),
    language_skills:  Array<number>(),
    language_level: Array<string>(),
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

export function Form({langData, getProfession}: FormProps) {
const [isModalOpen, setIsModalOpen] = useState(true);


function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function submitForm(){
    console.log(INITIAL_DATA);
    closeModal()
  }

    const [currentIndex, setCurrentIndex] = useState(0); //попытка сделать чтобы вспывашкив начале сами менялись
    const [formData, setFormData] = useState(INITIAL_DATA);

    function updateFields(fields: Partial<FormData>) {
        setFormData((prev) => ({ ...prev, ...fields }));
    }

    const {
        step,
        currentStepIndex,
        previousStep,
        nextStep,
        isFirstStep,
        isLastStep,
    } = useMultistepForm([
        <GeneralInfoForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} getProfession={getProfession} openModal={openModal}/>,
        <WorkingConditionsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <EmployeeRequirementsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <RecruitersRequirementsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <PaymentForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
    ]);
    
    useEffect(() => {
        setCurrentIndex(currentStepIndex)
    }, [step])


    function handleNextStep(e: React.FormEvent) {
        e.preventDefault();

        nextStep();
        setCurrentIndex(currentStepIndex);

    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log(formData)
    }

    function changeImg() {
        if (currentStepIndex === 0) {
            const imgSrc = step1
            return imgSrc

        } 
        else if (currentStepIndex === 1) {

            const imgSrc = step2
            return imgSrc
            
        } else {
            const imgSrc = spangebob
            return imgSrc
        }

    }


    return (
        <>
        <Modal modalOpen={isModalOpen} closeModal={closeModal}>
          {/* <FormModal 
          profession={profession}
          /> */}
          <SubmitModal closeModal={closeModal} submitForm={submitForm}/>
        </Modal>
            <form
                className={`form ${isLastStep ? "form_last-step" : ""} `}
                onSubmit={handleSubmit}
                action=""
            >
                {step}

                { !isLastStep && <img className='form__img' src={changeImg()} />}

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
