import { Tooltips } from "../Components/Tooltips/Tooltips"; //Компонент начальных зеленых карточек 

type workingConditions = {
    employmentType: number;
    other: string;

}

type WorkingConditionsFormProps = workingConditions & {
    updateFields: (fields: Partial<workingConditions>) => void;
} & { currentStepIndex: number }

export function WorkingConditionsForm({ employmentType, other, updateFields, currentStepIndex }: WorkingConditionsFormProps) {
    return (
        // <div>
        <>
            <h2 className="form__title">Шаг 2 из 5. Условия труда</h2>
            <Tooltips currentStepIndex={currentStepIndex} />

            <div className="form__wrapper"
            // style={{
            //     display: "flex",
            //     flexDirection: "column",
            //     gap: "40px",
            //     // width: "100%",
            //     maxWidth: "719px",
            //     margin: "0",
            //     padding: "0",
            //     listStyle: "none"
            // }}
            >
                <fieldset className="form__box">
                    <p className='form__subtitle'>Тип занятости</p>
                    <div>
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



            </div>
        </>
        // </div>
    );
}