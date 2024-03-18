import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "../Components/Form.scss"

type RecruitersRequirements = {
    rating: string;
    completed_orders: string;
    recruiters_experience: string;
    respond_speed: string;
    fulfillment_speed: string;
    recruiter_responsibilities: string[];
    // workingType: string;
    // agreementType: string[];
    // benefits: string[];
    description: string;
    candidate_resume_form: string[];
    stop_list: string;

}

type RecruitersRequirementsFormProps = RecruitersRequirements & {
    updateFields: (fields: Partial<RecruitersRequirements>) => void;
} & { currentStepIndex: number }


export function RecruitersRequirementsForm({ rating, completed_orders, recruiters_experience, respond_speed, fulfillment_speed, recruiter_responsibilities, description, candidate_resume_form, stop_list, updateFields, currentStepIndex }: RecruitersRequirementsFormProps) {

    function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'recruiter_responsibilities') {
            if (e.target.checked) {
                updateFields({ recruiter_responsibilities: [...recruiter_responsibilities, e.target.value] })
            }
            else {
                updateFields({ recruiter_responsibilities: recruiter_responsibilities.filter((item) => item !== e.target.value) })
            }
        }
        if (e.target.name === 'candidate_resume_form') {
            if (e.target.checked) {
                updateFields({ candidate_resume_form: [...candidate_resume_form, e.target.value] })
            } else {
                updateFields({ candidate_resume_form: candidate_resume_form.filter((item) => item !== e.target.value) })
            }
        }
        // if (e.target.name === 'driving_skills') {
        //     if (e.target.checked) {
        //         updateFields({ driving_skills: [...driving_skills, e.target.value] })
        //     } else {
        //         updateFields({ driving_skills: driving_skills.filter((item) => item !== e.target.value) })
        //     }
        // }
    }


    return (
        <>
            <h2 className="form__title">Шаг 4 из 5. Требования к рекрутеру</h2>
            <Tooltips currentStepIndex={currentStepIndex} />

            <ul className="form__wrapper">

                {/*Рейтинг*/}
                <li>
                    {/* <label htmlFor="city-select">Ваш город</label> */}
                    <select onChange={e =>  updateFields({ rating: e.target.value })} defaultValue={rating} name="rating" id="rating" className="form__input-text form__input-text_small">
                        <option value="rating" disabled>Рейтинг</option>
                        <option value="4.9">4,9 и выше</option>
                        <option value="4.5">4,5 и выше</option>
                        <option value="4">4 и выше</option>
                        <option value="3">3 и выше</option>
                        <option value="0">не имеет значение</option>
                    </select>

                {/*Закрытые заявки*/}
                    {/* <label htmlFor="city-select">Ваш город</label> */}
                    <select id="experience" onChange={e => updateFields({ completed_orders: e.target.value})} defaultValue={completed_orders} name="completed_orders" className="form__input-text form__input-text_small">
                        <option value="completed_orders" disabled>Закрытые заявки</option>
                        <option value="500">от 500</option>
                        <option value="100">от 100</option>
                        <option value="50">от 50</option>
                        <option value="10">от 10</option>
                        <option value="0">не имеет значение</option>
                    </select>

                {/*Опыт*/}
                    {/* <label htmlFor="city-select">Ваш город</label> */}
                    <select name="recruiters_experience" defaultValue={recruiters_experience} onChange={e => updateFields({ recruiters_experience: e.target.value})} id="recruiters_experience" className="form__input-text form__input-text_small">
                        <option value="recruiters_experience" disabled>Опыт</option>
                        <option value="6+">более 6 лет</option>
                        <option value="from3to6">от 3 до 6 лет</option>
                        <option value="from1to3">от 1 года до 3 лет</option>
                        <option value="noExperience">без опыта</option>
                        <option value="notAplicable">не имеет значение</option>
                    </select>

                {/*отвечает на сообщение*/}
                    {/* <label htmlFor="city-select">Ваш город</label> */}
                    <select name="respond_speed"id="respond_speed" defaultValue={respond_speed} onChange={e => updateFields({ respond_speed: e.target.value})} className="form__input-text form__input-text_small">
                        <option value="respond_speed" disabled>отвечает на сообщение</option>
                        <option value="30">в течение 30 мин</option>
                        <option value="120">в течение 2 часов</option>
                        <option value="1440">в течение дня</option>
                    </select>

                {/*средняя скорость закрытия заявки*/}
                    {/* <label htmlFor="city-select">Ваш город</label> */}
                    <select name="fulfillment_speed" id="fulfillment_speed" onChange={e => updateFields({ fulfillment_speed: e.target.value})} defaultValue={fulfillment_speed} className="form__input-text form__input-text_small">
                        <option value="fulfillment_speed" disabled>средняя скорость закрытия заявки</option>
                        <option value="fast">быстро, менее недели</option>
                        <option value="standart">средняя, до трех недель</option>
                        <option value="notApplicable">не имеет значение</option>
                    </select>
                </li>



                {/*Опыт в подборе вакансий в отрасли */}
                <li className="form__box">
                    <p className="form__subtitle">Опыт в подборе вакансий в отрасли</p>
                    <button className="form__btn-popup" type="button">Выберите отрасль из списка</button>
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
                        // type="text"
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
                            <input type="radio" name="candidate_resume_form" id="no_pre_interview" checked={candidate_resume_form.includes('no_pre_interview')} onChange={e => handexCheckboxChange(e)} value='no_pre_interview' className='form__radio' />
                            <label htmlFor="no_pre_interview" className='form__box-title'>Резюме без предварительного собеседования</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="candidate_resume_form" id="with_pre_interview" checked={candidate_resume_form.includes('with_pre_interview')} onChange={e => handexCheckboxChange(e)} value='with_pre_interview' className='form__radio' />
                            <label htmlFor="with_pre_interview" className='form__box-title'>Резюме кандидатов, с которыми проведено интервью, с комментариями по кандидату</label>
                        </div>

                    </fieldset>
                </li>


                {/* Стоп-лист */}
                <li className="form__box">

                    <label htmlFor="stop_list" className="form__subtitle">Стоп-лист сотрудников</label>
                    <textarea
                        className="form__input-text form__input-text_area"
                        // type="text"
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