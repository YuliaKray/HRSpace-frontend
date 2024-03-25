import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "../Components/Form.scss"

type RecruitersRequirements = {
    recruiter_responsibilities: string[];
    description: string;
    candidate_resume_form: string;
    stop_list: string;
    recruit_experience: string;

}

type RecruitersRequirementsFormProps = RecruitersRequirements & {
    updateFields: (fields: Partial<RecruitersRequirements>) => void;
} & { currentStepIndex: number }


export function RecruitersRequirementsForm({ recruiter_responsibilities, description, candidate_resume_form, stop_list, recruit_experience, updateFields, currentStepIndex }: RecruitersRequirementsFormProps) {

    function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'recruiter_responsibilities') {
            if (e.target.checked) {
                updateFields({ recruiter_responsibilities: [...recruiter_responsibilities, e.target.value] })
            }
            else {
                updateFields({ recruiter_responsibilities: recruiter_responsibilities.filter((item) => item !== e.target.value) })
            }
        }
    }


    return (
        <>
            <h2 className="form__title">Шаг 4 из 5. Требования к рекрутеру</h2>
            <Tooltips currentStepIndex={currentStepIndex} />

            <ul className="form__wrapper">


                {/*Опыт в подборе вакансий в отрасли */}
                <li className="form__box">
                    <p className="form__subtitle">Опыт рекрутера в найме на аналогичные позиции</p>
                    <fieldset className="form__fieldset" >

                        <div className="form__radio-wrapper">
                            <input type="radio" name="recruit_experience" id="important" checked={recruit_experience.includes('important')} onChange={e => handexCheckboxChange(e)} value='important' className='form__radio' />
                            <label htmlFor="important" className='form__box-title'>Важно</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="recruit_experience" id="no_important" checked={recruit_experience.includes('no_important')} onChange={e => handexCheckboxChange(e)} value='no_important' className='form__radio' />
                            <label htmlFor="no_important" className='form__box-title'>Не важно</label>
                        </div>

                    </fieldset>

                </li>

                {/*Обязанности рекрутера*/}
                <li className="form__box">
                    <p className='form__subtitle'>Обязанности рекрутера</p>
                    <fieldset className="form__fieldset">

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="recruiter_responsibilities" checked={recruiter_responsibilities.includes('resume_searching')} id="resume_searching" value="resume_searching" onChange={handexCheckboxChange} className='form__checkbox' />
                            <label htmlFor="resume_searching" className='form__box-title'>Поиск и предоставление релевантных резюме</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="recruiter_responsibilities" checked={recruiter_responsibilities.includes('interview_organizing')} id="interview_organizing" value="interview_organizing" onChange={handexCheckboxChange} className='form__checkbox' />
                            <label htmlFor="interview_organizing" className='form__box-title'>Организация собеседований с заказчиком, синхронизация по времени заказчика и соискателя</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="recruiter_responsibilities" checked={recruiter_responsibilities.includes('recomendation_request')} id="recomendation_request" value="recomendation_request" onChange={handexCheckboxChange} className='form__checkbox' />
                            <label htmlFor="recomendation_request" className='form__box-title'>Запрос рекомендаций с предыдущих мест работы</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="recruiter_responsibilities" checked={recruiter_responsibilities.includes('sending_tests')} id="sending_tests" value="sending_tests" onChange={handexCheckboxChange} className='form__checkbox' />
                            <label htmlFor="sending_tests" className='form__box-title'>Отправка кандидату тестового задания</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="recruiter_responsibilities" checked={recruiter_responsibilities.includes('sending_security_service_form')} id="sending_security_service_form" value="sending_security_service_form" onChange={handexCheckboxChange} className='form__checkbox' />
                            <label htmlFor="sending_security_service_form" className='form__box-title'>Отправка кандидату анкеты службы безопасности</label>
                        </div>

                        <div className="form__checkbox-wrapper">
                            <input type="checkbox" name="recruiter_responsibilities" checked={recruiter_responsibilities.includes('sending_offer')} id="sending_offer" value='sending_offer' onChange={handexCheckboxChange} className='form__checkbox' />
                            <label htmlFor="sending_offer" className='form__box-title'>Отправка кандидату приглашения на работу</label>
                        </div>

                    </fieldset>
                </li>

                {/* Другое */}
                <li className="form__box">

                    <label htmlFor="description" className="form__subtitle">Другое</label>
                    <textarea
                        className="form__input-text form__input-text_area"
                        id="description"
                        name="description"
                        onChange={(e) => updateFields({ description: e.target.value })}
                        value={description}
                        placeholder="Добавьте, если нужно, еще описание требований к рекрутеру"
                    />
                </li>

                {/* В каком виде предоставить резюме кандидатов? */}
                <li className="form__box">
                    <p className='form__subtitle'>В каком виде предоставить резюме кандидатов?</p>
                    <fieldset className="form__fieldset" >

                        <div className="form__radio-wrapper">
                            <input type="radio" name="candidate_resume_form" id="no_pre_interview" checked={candidate_resume_form === "no_pre_interview"} onChange={e => updateFields({ candidate_resume_form: e.target.value})} value='no_pre_interview' className='form__radio' />
                            <label htmlFor="no_pre_interview" className='form__box-title'>Резюме без предварительного собеседования</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="candidate_resume_form" id="with_pre_interview" checked={candidate_resume_form === "with_pre_interview"}onChange={e => updateFields({ candidate_resume_form: e.target.value})} value='with_pre_interview' className='form__radio' />
                            <label htmlFor="with_pre_interview" className='form__box-title'>Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидату</label>
                        </div>

                    </fieldset>
                </li>


                {/* Стоп-лист */}
                <li className="form__box">

                    <label htmlFor="stop_list" className="form__subtitle">Стоп-лист сотрудников</label>
                    <textarea
                        className="form__input-text form__input-text_area"
                        id="stop_list"
                        name="stop_list"
                        onChange={(e) => updateFields({ stop_list: e.target.value })}
                        value={stop_list}
                        placeholder="Добавьте перечень компаний или сотрудников, с которыми вы не готовы сотрудничать. Укажите вредные привычки или недопустимый опыт работы для кандидата"
                    />
                </li>


            </ul>
        </>
    )
}