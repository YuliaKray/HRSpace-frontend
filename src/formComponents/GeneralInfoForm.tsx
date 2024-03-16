import { SelectedItemContainer } from "../Components/Checkbox/SelectedItemContainer";
import { firstWorkDay } from "../assets/constants"; //Это константы для переиспользования компонентов
import "./GeneralInfoForm.scss";

type GeneralInfo = {
    name: string;
    title: string;
    location: string;
    lowestSalary: number;
    highestSalary: number;
    numberOfEmployees: number;
    recruitersQty: number;
}

type GeneralInfoFormProps = GeneralInfo & {
    updateFields: (fields: Partial<GeneralInfo>) => void;
}

export function GeneralInfoForm({ name, title, location, lowestSalary, highestSalary, numberOfEmployees, recruitersQty, updateFields }: GeneralInfoFormProps) {
    

    return (
        <>
            <h2 className="form__title">Шаг 1 из 5. Общая информация</h2>
            {/* тут будут три карточки */}
            <ul
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    // width: "100%",
                    maxWidth: "719px",
                    margin: "0",
                    padding: "0",
                    listStyle: "none"
                }}
            >
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
                <li>
                    {/*Переисопльзованный компанент для радиокнопок*/}
                    <SelectedItemContainer
                        isCheckbox={false}
                        constants={firstWorkDay} />
                </li>

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
                                <label htmlFor="rrecruitersQty-2">2</label>
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
