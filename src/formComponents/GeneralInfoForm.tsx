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

                </li>
                <li className="form__box">
                    <p className="form__subtitle">Город <span className="form__required">*</span></p>
                    <button className="form__btn-popup" type="button" onClick={handleButtonCityClick}>Выберите из списка</button>

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
                            <input type="radio" name="startDate" id="in_week" checked={startDate === "in_week"} onChange={e => updateFields({ startDate: e.target.value})} value="in_week" className='form__checkbox' />
                            <label htmlFor="in_week" className='form__box-title'>В течение 2 недель</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="in_month" checked={startDate === "in_month"} onChange={e => updateFields({ startDate: e.target.value})} value="in_month" className='form__checkbox' />
                            <label htmlFor="in_month" className='form__box-title'>В течение месяца</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="in_3_month" checked={startDate === "in_3_month"} onChange={e => updateFields({ startDate: e.target.value})} value="in_3_month" className='form__checkbox' />
                            <label htmlFor="in_3_month" className='form__box-title'>В течение 3 месяцев</label>
                        </div>

                        <div className="form__radio-wrapper">
                            <input type="radio" name="startDate" id="not_hurry" checked={startDate === "not_hurry"} onChange={e => updateFields({ startDate: e.target.value})} value="not_hurry" className='form__checkbox' />
                            <label htmlFor="not_hurry" className='form__box-title'>Не спешу с поиском</label>
                        </div>


                    </fieldset>
                </li>

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

            </ul>
        </>
    );
}
