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
    startDate: string;
    recruitersQty: number;
    employmentType: string[]; 
    workingSchedule: Array<string>;
    workingType: string[]; 
    agreementType: string[];
    benefits: string[];
    other: string;
    education: string[];
    language_skills: number[];
    language_level: string[];
    driving_skills: string[];
    has_medical_sertificate: boolean;
    citizenship: number[];
    requirements_description: string;
    experience: string[];
    recruiter_responsibilities: string[];
    description: string;
    candidate_resume_form: string;
    stop_list: string;
    numberOfPayment: number;
    paymentFormat: string;
    recruit_experience: string;

};

const INITIAL_DATA = {
    name: "",
    profession: 1,
    location: 1,
    lowestSalary: 500,
    highestSalary: 1000,
    numberOfEmployees: 1,
    recruitersQty: 2,
    startDate: 'tomorrow',
    workingSchedule: Array<string>(),
    workingType: ["office"],
    employmentType: ['full-time'],
    agreementType: Array<string>(),
    benefits: Array<string>(),
    other: '',
    education: Array<string>(),
    experience: Array<string>(),
    language_skills: Array<number>(),
    language_level: Array<string>(),
    driving_skills: Array<string>(),
    has_medical_sertificate: false,
    citizenship: [1],
    requirements_description: "",
    recruiter_responsibilities: Array<string>(),
    description: "",
    candidate_resume_form: "no_pre_interview",
    stop_list: "",
    numberOfPayment: 30000,
    paymentFormat: '',
    recruit_experience: 'no_important'
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


    const [currentIndex, setCurrentIndex] = useState(0);
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
