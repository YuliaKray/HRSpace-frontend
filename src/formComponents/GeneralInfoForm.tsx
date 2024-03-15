import { SelectedItemContainer } from "../Components/Checkbox/SelectedItemContainer";
import { firstWorkDay, workSchedule } from "../assets/constants"; //Это константы для переиспользования компонентов
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
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
                maxWidth: "500px",
                margin: "0 auto",
            }}
        >
            <h2>Шаг 1 из 5. Общая информация</h2>
            {/* тут будут три карточки */}
            <ul>
                <li>
                    <label htmlFor="name">Название</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => updateFields({ name: e.target.value })}
                        value={name}
                        required
                    />
                </li>
                <li>
                    <label htmlFor="title">Профессия</label>
                    <input
                        type="select"
                        id="title"
                        name="title"
                        onChange={(e) => updateFields({ title: e.target.value })}
                        value={title}
                        required
                    />
                </li>
                <label htmlFor="location">Город</label>
                <input
                    type="select"
                    id="phone"
                    name="location"
                    onChange={(e) => updateFields({ location: e.target.value })}
                    value={location}
                    required
                />
                <li>
                    <label htmlFor="salary">Зарплата gross (до вычета НДФЛ), ₽</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        placeholder="от"
                        onChange={(e) => updateFields({ lowestSalary: parseInt(e.target.value) })}
                        value={lowestSalary}
                        required
                    />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        placeholder="до"
                        onChange={(e) => updateFields({ lowestSalary: parseInt(e.target.value) })}
                        value={highestSalary}
                        required
                    />
                </li>
                <li>
                    <label htmlFor="numberOfEmployees">Количество сотрудников*</label>
                    <input
                        type="number"
                        id="numberOfEmployees"
                        name="numberOfEmployees"
                        onChange={(e) => updateFields({ numberOfEmployees: parseInt(e.target.value) })}
                        value={numberOfEmployees}
                        required
                    />
                </li>
                <li>
                    {/*Переисопльзованный компанент*/}
                    <SelectedItemContainer
                        isCheckbox={false}
                        constants={firstWorkDay} />
                    {/* <fieldset>
                    <legend >Выход на работу</legend>
                        <div>
                            <label htmlFor="startTommorow">Сможет приступить завтра</label>
                            <input type="checkbox" id="startDate" name="startTommorow" />

                            <label htmlFor="startWithinWeek">В течение недели</label>
                            <input type="checkbox" id="startDate" name="startWithinWeek" />

                            <label htmlFor="startWithinMonth">В течение месяца</label>
                            <input type="checkbox" id="startDate" name="startWithinMonth" />

                            <label htmlFor="noRush">Не спешу с поиском</label>
                            <input type="checkbox" id="startDate" name="noRush" />
                        </div>
                    </fieldset> */}
                </li>

                <li>
                    {/* <label>Кол-во рекрутеров</label> */}
                    <fieldset className="">
                        <legend>Кол-во рекрутеров</legend>
                        <div className="form_radio_btn">
                            <input type="radio" id="radio-1" name="recruitersQty" checked={recruitersQty === 1} onChange={e => updateFields({ recruitersQty: parseInt(e.target.value) })} value="1" />
                            <label htmlFor="radio-1">1</label>
                        </div>

                        <div className="form_radio_btn">
                            <input type="radio" id="radio-2" name="recruitersqty" checked={recruitersQty === 2} onChange={e => updateFields({ recruitersQty: parseInt(e.target.value) })} value="2" />
                            <label htmlFor="radio-2">2</label>
                        </div>

                        <div className="form_radio_btn">
                            <input type="radio" id="radio-3" name="recruitersqty" checked={recruitersQty === 3} onChange={e => updateFields({ recruitersQty: parseInt(e.target.value) })} value="3" />
                            <label htmlFor="radio-3">3</label>
                        </div>
                    </fieldset>
                </li>


                {/* Проверка как работает переиспользованый компонент */}
                <SelectedItemContainer
                    constants={workSchedule}
                    isCheckbox={true} />
            </ul>
        </div>
    );
}
