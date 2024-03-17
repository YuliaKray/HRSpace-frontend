import "../Components/Form.scss"
import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 

type EmployeeRequirements = {
    education: string[];
    experience: string[];
    core_skills: string;
    driving_skills: string[];
    has_medical_sertificate: boolean;
    requirements_description: string;

}

type EmployeeRequirementsFormProps = EmployeeRequirements & {
    updateFields: (fields: Partial<EmployeeRequirements>) => void;
} & { currentStepIndex: number }

export function EmployeeRequirementsForm({ education, experience, core_skills, driving_skills, has_medical_sertificate, requirements_description, updateFields, currentStepIndex }: EmployeeRequirementsFormProps) {
    
    function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'education') {
            if (e.target.checked) {
                updateFields({ education: [...education, e.target.value] })
            }
            else {
                updateFields({ education: education.filter((item) => item !== e.target.value) })
            }
        }
        if (e.target.name === 'experience') {
            if (e.target.checked) {
                updateFields({ experience: [...experience, e.target.value] })
            } else {
                updateFields({ experience: experience.filter((item) => item !== e.target.value) })
            }
        }
        if (e.target.name === 'driving_skills') {
            if (e.target.checked) {
                updateFields({ driving_skills: [...driving_skills, e.target.value] })
            } else {
                updateFields({ driving_skills: driving_skills.filter((item) => item !== e.target.value) })
            }
        }
    }

    return (
        <>
            <h2 className="form__title">Шаг 3 из 5. Требования к соискателю</h2>
            <Tooltips currentStepIndex={currentStepIndex} />
            <ul className="form__wrapper">

                {/*Образование */}
                <li className="form__box">
                <p className='form__subtitle'>Образование</p>
                    <fieldset className="form__fieldset">
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="education" checked={education.includes('not_required')} id="not_required" value="not_required" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="not_required" className='form__box-title'>Не имеет значения</label>
                    </div>
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="education" checked={education.includes('higher')} id="higher" value="higher" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="higher" className='form__box-title'>Высшее</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="education" checked={education.includes('vocational')} id="vocational" value="vocational" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="vocational" className='form__box-title'>Среднее профессиональное</label>
                    </div>
                </fieldset>
                </li>

                {/*Опыт работы*/}
                <li className="form__box">
                <p className='form__subtitle'>Опыт работы</p>
                    <fieldset className="form__fieldset">
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="experience" checked={experience.includes('not_required')} id="not_required" value="not_required" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="not_required" className='form__box-title'>Не имеет значения</label>
                    </div>
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="experience" checked={experience.includes('no_experience')} id="no_experience" value="no_experience" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="no_experience" className='form__box-title'>Нет опыта</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="experience" checked={experience.includes('1-3_years')} id="1-3_years" value="1-3_years" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="1-3_years" className='form__box-title'>От 1 года до 3 лет</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="experience" checked={experience.includes('3-6_years')} id="3-6_years" value="3-6_years" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="3-6_years" className='form__box-title'>От 3 до 6 лет</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="experience" checked={experience.includes('over_6_years')} id="over_6_years" value="over_6_years" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="over_6_years" className='form__box-title'>Более 6 лет</label>
                    </div>

                </fieldset>
                </li>

                {/*Ключевые навыки*/}
                {/*здесь не просто инпут, потом надо вернуться подумать*/}
                <li className="form__box">
                    <label htmlFor="core_skills" className="form__subtitle">Ключевые навыки</label>
                    <input
                        className="form__input-text"
                        type="text"
                        id="core_skills"
                        name="core_skills"
                        onChange={(e) => updateFields({ core_skills: e.target.value })}
                        value={core_skills}
                        placeholder="Введите"
                    />
                </li>

                {/*Водительское удостоверение*/}
                <li className="form__box">
                <p className='form__subtitle'>Водительское удостоверение</p>
                    <fieldset className="form__fieldset">
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="driving_skills" checked={driving_skills.includes('B')} id="B" value="B" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="not_required" className='form__box-title'>Категория B, легковые автомобили</label>
                    </div>
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="driving_skills" checked={driving_skills.includes('C')} id="C" value="C" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="no_experience" className='form__box-title'>Категория C, грузовые автомобили</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="driving_skills" checked={driving_skills.includes('D')} id="D" value="D" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="1-3_years" className='form__box-title'>Категория D, автобусы</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="driving_skills" checked={driving_skills.includes('M')} id="M" value="M" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="3-6_years" className='form__box-title'>Категория M, мопеды</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="driving_skills" checked={driving_skills.includes('A')} id="A" value="A" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="over_6_years" className='form__box-title'>Категория A, мотоциклы</label>
                    </div>

                </fieldset>
                </li>

                {/*Водительское удостоверение*/}
                {/*бекенд ожидает булен  True / False */}
                <li className="form__box">
                <p className='form__subtitle'>Медкнижка</p>
                    <fieldset className="form__fieldset">
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="has_medical_sertificate" 
                        // checked={has_medical_sertificate.includes('has_medical_sertificate')} 
                        id="has_medical_sertificate" value="has_medical_sertificate" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="has_medical_sertificate" className='form__box-title'>Есть</label>
                    </div>

                </fieldset>
                </li>

                {/*Гражданство */}
                <li className="form__box">
                    <p className="form__subtitle">Гражданство </p>
                    <button className="form__btn-popup" type="button">Выберите из списка</button>
                </li>

                {/* Требования и обязанности */}
                <li className="form__box">

                    <label htmlFor="requirements_description" className="form__subtitle">Требования и обязанности</label>
                    <textarea
                        className="form__input-text form__input-text_area"
                        // type="text"
                        id="requirements_description"
                        name="requirements_description"
                        onChange={(e) => updateFields({ requirements_description: e.target.value })}
                        value={requirements_description}
                        placeholder="Напишите требования к соискателю и его обязанности"
                    />
                </li>




            </ul>
        </>
    );
}