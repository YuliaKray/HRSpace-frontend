import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "../Components/Form.scss"


type workingConditions = {
    employmentType: string[];
    workingSchedule: string[];
    workingType: string[];
    agreementType: string[];
    benefits: string[];
    other: string;

}

type WorkingConditionsFormProps = workingConditions & {
    updateFields: (fields: Partial<workingConditions>) => void;
} & { currentStepIndex: number }

export function WorkingConditionsForm({ employmentType, workingSchedule, workingType, agreementType, benefits, other, updateFields, currentStepIndex }: WorkingConditionsFormProps) {

    function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'employmentType') {
            if (e.target.checked) {
                updateFields({ employmentType: [...employmentType, e.target.value] })
            } else {
                updateFields({ employmentType: employmentType.filter((item) => item !== e.target.value) })
            }

        }
        if (e.target.name === 'workingSchedule') {
            if (e.target.checked) {
                updateFields({ workingSchedule: [...workingSchedule, e.target.value] })
            }
            else {
                updateFields({ workingSchedule: workingSchedule.filter((item) => item !== e.target.value) })
            }
        }
        if (e.target.name === 'workingType') {
            if (e.target.checked) {
                updateFields({ workingType: [...workingType, e.target.value] })
            }
            else {
                updateFields({ workingType: workingType.filter((item) => item !== e.target.value) })
            }
        }
        if (e.target.name === 'agreementType') {
            if (e.target.checked) {
                updateFields({ agreementType: [...agreementType, e.target.value] })
            } else {
                updateFields({ agreementType: agreementType.filter((item) => item !== e.target.value) })
            }
        }
        if (e.target.name === 'benefits') {
            if (e.target.checked) {
                updateFields({ benefits: [...benefits, e.target.value] })
            } else {
                updateFields({ benefits: benefits.filter((item) => item !== e.target.value) })
            }
        }

    }
    return (
        <>
            <h2 className="form__title">Шаг 2 из 5. Условия труда</h2>
            <Tooltips currentStepIndex={currentStepIndex} />

            <ul className="form__wrapper">
                {/* тип занятости */}
                <li className="form__box">

                    <p className='form__subtitle'>Тип занятости</p>
                    <fieldset className="form__box">
                        <div className="form__box_type_radio">
                            <div className="form_radio_btn">
                                <input type="radio" id="full-time" name="employmentType" checked={employmentType.includes('full-time')} onChange={handexCheckboxChange} value="full-time" />
                                <label htmlFor="full-time">Полная</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="part-time" name="employmentType" checked={employmentType.includes('part-time')} onChange={handexCheckboxChange} value="part-time" />
                                <label htmlFor="part-time">Частичная</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="project" name="employmentType" checked={employmentType.includes('project')} onChange={handexCheckboxChange} value="project" />
                                <label htmlFor="project">Проект</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="shift_work" name="employmentType" checked={employmentType.includes('shift_work')} onChange={handexCheckboxChange} value="shift_work" />
                                <label htmlFor="shift_work">Вахта</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="traineeship" name="employmentType" checked={employmentType.includes('traineeship')} onChange={handexCheckboxChange} value="traineeship" />
                                <label htmlFor="traineeship">Стажировка</label>
                            </div>
                        </div>
                    </fieldset>
                </li>

                {/* график работы */}
                <li className="form__box">
            
                    <p className='form__subtitle'>График работы</p>
                    <fieldset className="form__fieldset">
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('full-time')} id="full-time" value="full-time" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="full-time" className='form__box-title'>Полный день</label>
                    </div>
                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('part-time')} id="part-time" value="part-time" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="part-time" className='form__box-title'>Неполный день</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('5/2')} id="5/2" value="5/2" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="5/2" className='form__box-title'>Пятидневка</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('2/2')} id="2/2" value="2/2" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="2/2" className='form__box-title'>Два через два</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('1/3')} id="1/3" value="1/3" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="1/3" className='form__box-title'>Сутки / трое</label>
                    </div>

                    <div className="form__checkbox-wrapper">
                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('freeLance')} id="freeLance" value='freeLance' onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="freeLance" className='form__box-title'>Свободный</label>
                    </div>
                    <div className="form__checkbox-wrapper">

                        <input type="checkbox" name="workingSchedule" checked={workingSchedule.includes('shift')} id="shift" value="shift" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label htmlFor="shift" className='form__box-title'>Вахтовый метод</label>
                    </div>
                </fieldset>
                </li>

                {/*режим работы  */}
                <li className="form__box">
                    <p className='form__subtitle'>Режим работы</p>
                    <fieldset className="form__fieldset">

                    <div className="form_radio_btn">
                        <input type="radio"
                            checked={workingType.includes('office')}
                            onChange={handexCheckboxChange}
                            name="workingType"
                            id="office"
                            value="office" />
                        <label htmlFor="office">Офис</label>
                    </div>

                    <div className="form_radio_btn">
                        <input type="radio"
                            checked={workingType.includes('remote')}
                            onChange={handexCheckboxChange}
                            name="workingType"
                            id="remote"
                            value="remote" />
                        <label htmlFor="remote">Удалённый</label>
                    </div>

                    <div className="form_radio_btn">
                        <input
                            checked={workingType.includes('hybrid')}
                            onChange={handexCheckboxChange}
                            type="radio"
                            value="hybrid"
                            id="hybrid"
                            name="workingType"
                        />
                        <label htmlFor="hybrid">Гибрид</label>
                    </div>
                </fieldset>
                </li>

                {/*  оформление */}
                <li className="form__box">
                
                    <p className='form__subtitle'>Оформление</p>
                    <fieldset className="form__fieldset">
                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="contract" name="agreementType" checked={agreementType.includes('contract')} onChange={handexCheckboxChange} value="contract" className='form__checkbox' />
                            <label htmlFor="contract" className='form__box-title'>Трудовой договор</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="civil-personal_contract" name="agreementType" checked={agreementType.includes('civil-personal_contract')} onChange={handexCheckboxChange} value="civil-personal_contract" className='form__checkbox' />
                            <label htmlFor="civil-personal_contract" className='form__box-title'>ГПХ</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="individual_entrepreneurship" name="agreementType" checked={agreementType.includes('individual_entrepreneurship')} onChange={handexCheckboxChange} value="individual_entrepreneurship" className='form__checkbox' />
                            <label htmlFor="individual_entrepreneurship" className='form__box-title'>ИП</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="self-employed" name="agreementType" checked={agreementType.includes('self-employed')} onChange={handexCheckboxChange} value="self-employed" className='form__checkbox' />
                            <label htmlFor="self-employed" className='form__box-title'>Самозанятый</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="holding_multiple_positions" name="agreementType" checked={agreementType.includes('holding_multiple_positions')} onChange={handexCheckboxChange} value="holding_multiple_positions" />
                            <label htmlFor="holding_multiple_positions" className='form__box-title'>Совместительство</label>
                        </div>
                    </fieldset>
                </li>

                {/* дополнительно */}
                <li className="form__box">
                
                    <p className='form__subtitle'>Дополнительно</p>
                    <fieldset className="form__fieldset">
                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="VMI" value="VMI" checked={benefits.includes('VMI')} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="VMI">ДМС</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="fitness" value="fitness" checked={benefits.includes("fitness")} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="fitness">Фитнес</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="meal_compensation" value="meal_compensation" checked={benefits.includes("meal_compensation")} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="meal_compensation">Оплата питания</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="free_parking" value="free_parking" name="benefits" checked={benefits.includes("free_parking")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="free_parking">Бесплатная парковка</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="mobile_phone_compensation" value="mobile_phone_compensation" name="benefits" checked={benefits.includes("mobile_phone_compensation")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="mobile_phone_compensation">Оплата мобильной связи</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="transportation_compensation" value="transportation_compensation" name="benefits" checked={benefits.includes("transportation_compensation")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="transportation_compensation">Оплата проезда</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="language_training" value="language_training" name="benefits" checked={benefits.includes("language_training")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="language_training">Языковые курсы</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="professional_training" value="professional_training" name="benefits" checked={benefits.includes("professional_training")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="professional_training">Профессиональные курсы</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="from_age_14" value="from_age_14" name="benefits" checked={benefits.includes("from_age_14")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="from_age_14">Подходит подросткам с 14 лет</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="for_people_with_disabilities" value="for_people_with_disabilities" checked={benefits.includes("for_people_with_disabilities")} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="for_people_with_disabilities">Подходит людям с ограниченными возможностями</label>
                    </div>
                </fieldset>
                </li>
                {/* описание */}
                <div className="form__box">

                    <label htmlFor="other" className="form__subtitle">Другое</label>
                    <textarea
                        className="form__input-text form__input-text_area"
                        // type="text"
                        id="other"
                        name="other"
                        onChange={(e) => updateFields({ other: e.target.value })}
                        value={other}
                        placeholder="Добавьте описание условий труда"
                    />
                </div>


            </ul>
        </>
    );
}