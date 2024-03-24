import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "./GeneralInfoForm.scss";
import "../Components/Form.scss"

type GeneralInfo = {
    name: string;
    lowestSalary: number;
    highestSalary: number;
    numberOfEmployees: number;
    recruitersQty: number;
    startDate: string;
}

type GeneralInfoFormProps = GeneralInfo & {
    updateFields: (fields: Partial<GeneralInfo>) => void;
} & { currentStepIndex: number } & {
    getProfession: () => void
} & {
    getCity: () => void
} & {
    handleProfessionOpen: () => void
} & {
    handleCityOpen: () => void
}

export function GeneralInfoForm({ name, startDate, lowestSalary, highestSalary, numberOfEmployees, recruitersQty, updateFields, currentStepIndex, getProfession, handleProfessionOpen, handleCityOpen, getCity }: GeneralInfoFormProps) {

    // function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     if (e.target.checked) {
    //         // updateFields({ startDate: [...startDate, e.target.value] })
    //         updateFields({ startDate: [ e.target.value] })

    //     }
    //     else {
    //         updateFields({ startDate: startDate.filter((item) => item !== e.target.value) })
    //     }
    //     console.log(startDate)
    // }

    
    function handleButtonProfessionClick() {
        getProfession();
        handleProfessionOpen();
    }

    function handleButtonCityClick() {
        getCity();
        handleCityOpen();
    }

    return (
        <>
            <h2 className="form__title">Шаг 1 из 5. Общая информация</h2>
            <Tooltips currentStepIndex={currentStepIndex} />
            {/* {console.log(currentStepIndex)} */}
            <ul className="form__wrapper">
                <li className="form__box">
                    <label htmlFor="name" className="form__subtitle">Название <span className="form__required">*</span></label>
                    <input
                        className="form__input-text"
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => updateFields({ name: e.target.value })}
                        value={name}
                        placeholder="Введите название заявки"
                        required
                    />
                </li>
                <li className="form__box">
                    <p className="form__subtitle">Профессия <span className="form__required">*</span></p>
                    <button className="form__btn-popup" type="button" onClick={handleButtonProfessionClick}>Выберите из списка</button>
                    {/* Закоментировала этот кусок, потому что тут ссылка открывет модальное окно

                    <label htmlFor="title" className="form__subtitle">Профессия <span className="form__required">*</span></label>
                    <input
                        type="select"
                        id="title"
                        name="title"
                        onChange={(e) => updateFields({ title: e.target.value })}
                        value={title}
                        required
                    /> */}
                </li>
                <li className="form__box">
                    <p className="form__subtitle">Город <span className="form__required">*</span></p>
                    <button className="form__btn-popup" type="button" onClick={handleButtonCityClick}>Выберите из списка</button>

                    {/* Закоментировала этот кусок, потому что тут ссылка открывет модальное окно

                     <label htmlFor="location" className="form__subtitle">Город <span className="form__required">*</span></label>
                    <input
                        type="select"
                        id="phone"
                        name="location"
                        onChange={(e) => updateFields({ location: e.target.value })}
                        value={location}
                        required
                    /> */}
                </li>
                <li className="form__box">
                    <label htmlFor="salary" className="form__subtitle">Зарплата gross, ₽ <span className="form__required">*</span></label>
                    <div className="form__input-small-wrapper">
                        <input
                            className="form__input-text form__input-text_small"
                            type="number"
                            id="salary"
                            name="salary"
                            placeholder="от"
                            onChange={(e) => updateFields({ lowestSalary: parseInt(e.target.value) })}
                            value={lowestSalary}
                            required
                        />
                        <input
                            className="form__input-text form__input-text_small"
                            type="number"
                            id="salary"
                            name="salary"
                            placeholder="до"
                            onChange={(e) => updateFields({ highestSalary: parseInt(e.target.value) })}
                            value={highestSalary}
                            required
                        />
                    </div>
                </li>
                <li className="form__box">
                    <label htmlFor="numberOfEmployees" className="form__subtitle">Количество сотрудников <span className="form__required">*</span></label>
                    <input
                        className="form__input-text form__input-text_small"
                        type="number"
                        id="numberOfEmployees"
                        name="numberOfEmployees"
                        onChange={(e) => updateFields({ numberOfEmployees: parseInt(e.target.value) })}
                        value={numberOfEmployees}
                        required
                    />
                </li>

                <li className="form__box">
                    <p className='form__subtitle'>Выход на работу</p>
                    <fieldset className="form__fieldset" >

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="tomorrow"  checked={startDate === "tomorrow"} onChange={e => updateFields({ startDate: e.target.value})} value="tomorrow" className='form__checkbox' />
                            <label htmlFor="tomorrow" className='form__box-title'>В течение 1-3 дней</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="withinTwoWeeks" checked={startDate === "withinTwoWeeks"} onChange={e => updateFields({ startDate: e.target.value})} value="withinTwoWeeks" className='form__checkbox' />
                            <label htmlFor="withinTwoWeeks" className='form__box-title'>В течение 2 недель</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="withinMonth" checked={startDate === "withinMonth"} onChange={e => updateFields({ startDate: e.target.value})} value="withinMonth" className='form__checkbox' />
                            <label htmlFor="withinMonth" className='form__box-title'>В течение месяца</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="withinThreeMonth" checked={startDate === "withinThreeMonth"} onChange={e => updateFields({ startDate: e.target.value})} value="withinThreeMonth" className='form__checkbox' />
                            <label htmlFor="withinThreeMonth" className='form__box-title'>В течение 3 месяцев</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="not_hurry" checked={startDate === "not_hurry"} onChange={e => updateFields({ startDate: e.target.value})} value="not_hurry" className='form__checkbox' />
                            <label htmlFor="not_hurry" className='form__box-title'>Не спешу с поиском</label>
                        </div>


                    </fieldset>
                </li>

                {/* <li>
                    Переисопльзованный компанент для радиокнопок 
                    <SelectedItemContainer
                        isCheckbox={false}
                        constants={firstWorkDay} />
                </li> */}

                <li>
                    <fieldset className="form__box">
                        <p className='form__subtitle'>Кол-во рекрутеров</p>
                        <div className="form__box_type_radio">
                            <div className="form_radio_btn">
                                <input type="radio" id="recruitersQty-1" name="recruitersQty" checked={recruitersQty === 1} onChange={e => updateFields({ recruitersQty: parseInt(e.target.value) })} value="1" />
                                <label htmlFor="recruitersQty-1">1</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="recruitersQty-2" name="recruitersqty" checked={recruitersQty === 2} onChange={e => updateFields({ recruitersQty: parseInt(e.target.value) })} value="2" />
                                <label htmlFor="recruitersQty-2">2</label>
                            </div>

                            <div className="form_radio_btn">
                                <input type="radio" id="recruitersQty-3" name="recruitersqty" checked={recruitersQty === 3} onChange={e => updateFields({ recruitersQty: parseInt(e.target.value) })} value="3" />
                                <label htmlFor="recruitersQty-3">3</label>
                            </div>
                        </div>
                    </fieldset>
                </li>


                {/* Проверка как работает переиспользованый компонент */}
                {/* <SelectedItemContainer
                    constants={workSchedule}
                    isCheckbox={true} /> */}
            </ul>
        </>
    );
}
