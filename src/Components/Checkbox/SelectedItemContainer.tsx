import './SelectedItemContainer.scss';
import '../Form.scss';

// Элемент для отрисовки классических чекбоксов и радиокнопок 
export function SelectedItemContainer({ constants, isCheckbox }) {

    function itemRender() {
        let render: JSX.Element[] = []; //Хз, правильный ли тип
        if (isCheckbox) {
        for (let i = 0; i < Object.values(constants.answer).length; i++) {
            // console.log(Object.values(constants.answer)[i])
            render = render.concat(
                <>
                    <input type="checkbox" id={Object.keys(constants.answer)[i]} name={constants.id} className='form__checkbox'/>
                    <label className='form__box-title' htmlFor={Object.keys(constants.answer)[i]}>{Object.values(constants.answer)[i]}</label>
                </>
            )
        }
        return (
            <>{render}</>
        )
        } else {
            for (let i = 0; i < Object.values(constants.answer).length; i++) {
                render = render.concat(
                    <>
                        <input type="radio" id={Object.keys(constants.answer)[i]} name={constants.id}  className='form__radio'/>
                        <label className='form__box-title' htmlFor={Object.keys(constants.answer)[i]}>{Object.values(constants.answer)[i]}</label>
                    </>
                )
            }
            return (
                <>{render}</>
            ) 
        }
        // const checkbox = Object.values(constants.answer).map(item => {

        //     return(
        //         <>
        //         <label htmlFor="startTommorow">{item}</label>
        //         <input type="checkbox" id="startDate" name="startTommorow" />
        //         </>
        //     )
        // })
    }

    return (
        <fieldset id={constants.id} className='form__box'>
            <p className='form__subtitle'>{constants.title}</p>
            <div className='form__chekbox-wrapper'>
            {itemRender()}
            </div>
        </fieldset>
    )
}
