import { SelectedItemContainer } from "../Components/Checkbox/SelectedItemContainer";
import { firstWorkDay } from "../assets/constants"; //Это константы для переиспользования компонентов
import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 
import "./GeneralInfoForm.scss";
import "../Components/Form.scss"

type GeneralInfo = {
    name: string;
    title: string;
    location: string;
    lowestSalary: number;
    highestSalary: number;
    numberOfEmployees: number;
    recruitersQty: number;
    startDate: Array<number>;
}

type GeneralInfoFormProps = GeneralInfo & {
    updateFields: (fields: Partial<GeneralInfo>) => void;
} & { currentStepIndex: number }

export function GeneralInfoForm({ name, title, location, startDate, lowestSalary, highestSalary, numberOfEmployees, recruitersQty, updateFields, currentStepIndex }: GeneralInfoFormProps) {

    function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.checked) {
            updateFields({ startDate: [...startDate, parseInt(e.target.value)] })
        }
        else {
            updateFields({ startDate: startDate.filter((item) => item !== parseInt(e.target.value)) })
        }
    }

    return (
        <>
            <h2 className="form__title">Шаг 1 из 5. Общая информация</h2>

            {/* тут будут три карточки */}
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
                    <button className="form__btn-popup" type="button">Выберите из списка</button>
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
                    <p className="form__subtitle">Профессия <span className="form__required">*</span></p>
                    <button className="form__btn-popup" type="button">Выберите из списка</button>

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
                    <label htmlFor="salary" className="form__subtitle">Зарплата gross (до вычета НДФЛ), ₽ <span className="form__required">*</span></label>
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
                            onChange={(e) => updateFields({ lowestSalary: parseInt(e.target.value) })}
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
                    <p className='form__subtitle'>Когда нужно начать работу</p>
                    <fieldset className="form__fieldset" >

                        <div className="form__radio-wrapper">
                            <input type="checkbox" name="startDate" id="startTommorow" checked={startDate.includes(1)} onChange={e => handexCheckboxChange(e)} value="1" className='form__checkbox' />
                            <label htmlFor="startTommorow" className='form__box-title'>Сможет приступить завтра</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="checkbox" name="startDate" id="withinWeek" checked={startDate.includes(2)} onChange={e => handexCheckboxChange(e)} value="2" className='form__checkbox' />
                            <label htmlFor="startTommorow" className='form__box-title'>В течение недели</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="checkbox" name="startDate" id="withinMonth" checked={startDate.includes(3)} onChange={e => handexCheckboxChange(e)} value="3" className='form__checkbox' />
                            <label htmlFor="startTommorow" className='form__box-title'>В течение месяца</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="checkbox" name="startDate" id="nuRush" checked={startDate.includes(4)} onChange={e => handexCheckboxChange(e)} value="4" className='form__checkbox' />
                            <label htmlFor="startTommorow" className='form__box-title'>Не спешу с поиском</label>
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
                        <div>
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
