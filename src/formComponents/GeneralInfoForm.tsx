import "./GeneralInfoForm.scss"

export function GeneralInfoForm() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto'

        }}>
            <h2>Шаг 1 из 5. Общая информация</h2>
            <label htmlFor="name">Название</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="title">Профессия</label>
            <input type="select" id="title" name="title" required />

            <label htmlFor="location">Город</label>
            <input type="select" id="phone" name="location" required />

            <label htmlFor="salary">Зарплата gross (до вычета НДФЛ), ₽</label>
            <input type="number" step={500} id="salary" name="salary" placeholder="от" required />
            <input type="number" step={500} id="salary" name="salary" placeholder="до" required />

            <label htmlFor="numberOfEmployees">Количество сотрудников*</label>
            <input type="number" id="numberOfEmployees" name="numberOfEmployees" required />

            <label >Дата начала работы</label>
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



            <label>Кол-во рекрутеров</label>
            <div className="">
                <div className="form_radio_btn">
                    <input type="radio" id="radio-1" name="radio" value="1" />
                    <label htmlFor="radio-1">1</label>
                </div>

                <div className="form_radio_btn">
                    <input type="radio" id="radio-2" name="radio" value="2" />
                    <label htmlFor="radio-2">2</label>
                </div>

                <div className="form_radio_btn">
                    <input type="radio" id="radio-3" name="radio" value="3" />
                    <label htmlFor="radio-3">3</label>
                </div>
            </div>
            {/* я хз как сделать такой чекбокс. Возможно, это не чекбокс, а input type="select" */}
            
            {/*Вычитала этот вариант в интернете. Мне кажется, он подойдет для подобных кнопок, где надо выбрать один вариант*/}



        </div>
    )
}