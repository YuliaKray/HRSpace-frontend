type workingConditions = {
    employmentType: number;

}

type WorkingConditionsFormProps = workingConditions & {
    updateFields: (fields: Partial<workingConditions>) => void;
}

export function WorkingConditionsForm({employmentType, updateFields}: WorkingConditionsFormProps) {
    return (
        <div>
            <h2>Шаг 2 из 5. Условия труда</h2>
            <div>
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


            </div>
        </div>
    );
}