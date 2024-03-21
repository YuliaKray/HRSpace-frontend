import './Form.scss';
import React, { useEffect, useState } from "react";
import { useMultistepForm } from "../assets/useMultistepForm";
import { GeneralInfoForm } from "../formComponents/GeneralInfoForm";
import { WorkingConditionsForm } from '../formComponents/workingConditionsForm'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png';
import step4 from '../images/step4.png'
import { EmployeeRequirementsForm } from '../formComponents/EmployeeRequirementsForm';
import { RecruitersRequirementsForm } from '../formComponents/recruitersRequirementsForm';
import { PaymentForm } from '../formComponents/PaymentForm';
import { Modal } from './Modal/Modal';
import { SubmitModal } from './SubmitModal/SubmitModal';
import { FormModal } from './FormModal/FormModal';

type FormProps = {
    langData: {
        id: number;
        name?: string;
        title?: string
    }[],
    professions: {
        id: number;
        name?: string;
        title?: string
    }[],
    city: {
        id: number;
        name?: string;
        title?: string
    }[],
    citizenships: {
        id: number;
        name?: string;
        title?: string
    }[],

} & {
    getProfession: () => void
} & {
    getCity: () => void
} & {
    getCitizenship: () => void
} & {
    createForm: (formData: FormData) => void
} ;

type FormData = {
    name: string;
    profession: number;
    location: number;
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
    citizenship: number;
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
    profession: 0,
    location: 0,
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
    language_skills: Array<number>(),
    language_level: Array<string>(),
    core_skills: "",
    driving_skills: Array<string>(),
    has_medical_sertificate: false,
    citizenship: 0,
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

export function Form({ langData, getProfession, professions, city, getCity, citizenships, getCitizenship, createForm }: FormProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isProfessionModalOpen, setisProfessionModalOpen] = useState(false);
    const [isCityModalOpen, setisCityModalOpen] = useState(false);
    const [isCitizenshipModalOpen, setisCitizenshipModalOpen] = useState(false);



    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }



    function handleProfessionOpen() {
        setisProfessionModalOpen(!isProfessionModalOpen);
    }

    function handleCityOpen() {
        setisCityModalOpen(!isCityModalOpen);
    }

    function handleCitizenshipOpen() {
        setisCitizenshipModalOpen(!isCitizenshipModalOpen);
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
        <GeneralInfoForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} getProfession={getProfession} handleProfessionOpen={handleProfessionOpen} handleCityOpen={handleCityOpen} getCity={getCity}/>,
        <WorkingConditionsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} />,
        <EmployeeRequirementsForm {...formData} updateFields={updateFields} currentStepIndex={currentIndex} getCitizenship={getCitizenship} handleCitizenshipOpen={handleCitizenshipOpen} langData={langData}/>,
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

    function submitForm() {
        console.log(INITIAL_DATA);
        createForm(formData);
        closeModal()
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

        } else if (currentStepIndex === 3) {

            const imgSrc = step4
            return imgSrc

        } else {
            const imgSrc = step3
            return imgSrc
        }

    }


    return (
        <>
            <Modal modalOpen={isModalOpen || isProfessionModalOpen || isCityModalOpen || isCitizenshipModalOpen} closeModal={closeModal}>
                {/* Я влезла сюда, но вроде написанная логика для модалки сабмита не нарушилась */}
                {isProfessionModalOpen || isCityModalOpen || isCitizenshipModalOpen ? 
                <FormModal {...formData} updateFields={updateFields}
                    professions={professions}
                    city={city}
                    citizenships={citizenships}
                    isProfessionModalOpen={isProfessionModalOpen}
                    isCityModalOpen={isCityModalOpen}
                    isCitizenshipModalOpen={isCitizenshipModalOpen}
                    handleProfessionOpen={handleProfessionOpen}
                    handleCityOpen={handleCityOpen}
                    handleCitizenshipOpen={handleCitizenshipOpen}
                /> :
                (<SubmitModal closeModal={closeModal} submitForm={submitForm} />
                /*вот сюда вставляется модальное окно для сохранить и выйти */)}
            </Modal>
            <form
                className={`form ${isLastStep ? "form_last-step" : ""} `}
                onSubmit={handleSubmit}
                action=""
            >
                {step}

                {!isLastStep && <img className='form__img' src={changeImg()} />}

                <div className='form__btn-wrapper'>
                    <button type="button" className='form__btn form__btn_close' onClick={openModal}>
                        Сохранить и выйти
                    </button>
                    {!isFirstStep && (
                        <button type="button" onClick={previousStep} className='form__btn form__btn_previous'>
                            Назад
                        </button>
                    )}
                    {isLastStep ? (
                        <button type="submit" className='form__btn' onClick={openModal}>Опубликовать</button>
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
