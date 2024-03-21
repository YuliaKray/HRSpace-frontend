import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "../Components/Form.scss"


type workingConditions = {
    employmentType: number;
    workingSchedule: string[];
    workingType: string;
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
                updateFields({ employmentType: parseInt(e.target.value) })
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
            updateFields({ workingType: e.target.value })
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
                                <input type="radio" id="employmentType-1" name="employmentType" checked={employmentType === 1} onChange={e => updateFields({ employmentType: parseInt(e.target.value) })} value="1" />
                                <label htmlFor="employmentType-1">Полная</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="employmentType-2" name="employmentType" checked={employmentType === 2} onChange={e => updateFields({ employmentType: parseInt(e.target.value) })} value="2" />
                                <label htmlFor="employmentType-2">Частичная</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="employmentType-3" name="employmentType" checked={employmentType === 3} onChange={e => updateFields({ employmentType: parseInt(e.target.value) })} value="3" />
                                <label htmlFor="employmentType-3">Проект</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="employmentType-4" name="employmentType" checked={employmentType === 4} onChange={e => updateFields({ employmentType: parseInt(e.target.value) })} value="4" />
                                <label htmlFor="employmentType-4">Вахта</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="employmentType-5" name="employmentType" checked={employmentType === 5} onChange={e => updateFields({ employmentType: parseInt(e.target.value) })} value="5" />
                                <label htmlFor="employmentType-5">Стажировка</label>
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
                            checked={workingType === 'office'}
                            onChange={handexCheckboxChange}
                            name="workingType"
                            id="office"
                            value="office" />
                        <label htmlFor="office">Офис</label>
                    </div>

                    <div className="form_radio_btn">
                        <input type="radio"
                            checked={workingType === 'remote'}
                            onChange={handexCheckboxChange}
                            name="workingType"
                            id="remote"
                            value="remote" />
                        <label htmlFor="remote">Удалённый</label>
                    </div>

                    <div className="form_radio_btn">
                        <input
                            checked={workingType === 'hybrid'}
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
                            <input type="checkbox" id="jobAgreement" name="agreementType" checked={agreementType.includes('jobAgreement')} onChange={handexCheckboxChange} value="jobAgreement" className='form__checkbox' />
                            <label htmlFor="jobAgreement" className='form__box-title'>Трудовой договор</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="GPH" name="agreementType" checked={agreementType.includes('GPH')} onChange={handexCheckboxChange} value="GPH" className='form__checkbox' />
                            <label htmlFor="GPH" className='form__box-title'>ГПХ</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="IP" name="agreementType" checked={agreementType.includes('IP')} onChange={handexCheckboxChange} value="IP" className='form__checkbox' />
                            <label htmlFor="IP" className='form__box-title'>ИП</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="selfEmployed" name="agreementType" checked={agreementType.includes('selfEmployed')} onChange={handexCheckboxChange} value="selfEmployed" className='form__checkbox' />
                            <label htmlFor="selfEmployed" className='form__box-title'>Самозанятый</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" id="sovmestitelstvo" name="agreementType" checked={agreementType.includes('sovmestitelstvo')} onChange={handexCheckboxChange} value="sovmestitelstvo" />
                            <label htmlFor="sovmestitelstvo" className='form__box-title'>Совместительство</label>
                        </div>
                    </fieldset>
                </li>

                {/* дополнительно */}
                <li className="form__box">
                
                    <p className='form__subtitle'>Дополнительно</p>
                    <fieldset className="form__fieldset">
                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="DMS" value="DMS" checked={benefits.includes('DMS')} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="DMS">ДМС</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="fitness" value="fitness" checked={benefits.includes("fitness")} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="fitness">Фитнес</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="freeFood" value="freeFood" checked={benefits.includes("freeFood")} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="freeFood">Оплата питания</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="freeParking" value="freeParking" name="benefits" checked={benefits.includes("freeParking")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="freeParking">Бесплатная парковка</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="freeCellPhone" value="freeCellPhone" name="benefits" checked={benefits.includes("freeCellPhone")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="freeCellPhone">Оплата мобильной связи</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="freeTransportPass" value="freeTransportPass" name="benefits" checked={benefits.includes("freeTransportPass")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="freeTransportPass">Оплата проезда</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="freeLanguageCourse" value="freeLanguageCourse" name="benefits" checked={benefits.includes("freeLanguageCourse")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="freeLanguageCourse">Языковые курсы</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="freeProfessionalCourses" value="freeProfessionalCourses" name="benefits" checked={benefits.includes("freeProfessionalCourses")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="freeProfessionalCourses">Профессиональные курсы</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="suitableForUnderages" value="suitableForUnderages" name="benefits" checked={benefits.includes("suitableForUnderages")} onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="suitableForUnderages">Подходит подросткам с 14 лет</label>
                    </div>

                    <div className="form__radio-wrapper">
                        <input type="checkbox" id="suitableForDisabled" value="suitableForDisabled" checked={benefits.includes("suitableForDisabled")} name="benefits" onChange={handexCheckboxChange} className='form__checkbox' />
                        <label className='form__box-title' htmlFor="suitableForDisabled">Подходит людям с ограниченными возможностями</label>
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
        // </div>
    );
}