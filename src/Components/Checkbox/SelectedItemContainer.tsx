import './SelectedItemContainer.scss';


// Элемент для чекбоксов и радиокнопок классических
export function SelectedItemContainer({ constants, isCheckbox }) {

    function itemRender() {
        let render: JSX.Element[] = []; //Хз, правильный ли тип
        if (isCheckbox) {
        for (let i = 0; i < Object.values(constants.answer).length; i++) {
            console.log(Object.values(constants.answer)[i])

            render = render.concat(
                <>
                    <input type="checkbox" id={Object.keys(constants.answer)[i]} name={constants.id} />
                    <label htmlFor={Object.keys(constants.answer)[i]}>{Object.values(constants.answer)[i]}</label>
                </>
            )
        }
        console.log(render)
        return (
            <>{render}</>
        )
        } else {
            for (let i = 0; i < Object.values(constants.answer).length; i++) {
                console.log(Object.values(constants.answer)[i])
    
                render = render.concat(
                    <>
                        <input type="radio" id={Object.keys(constants.answer)[i]} name={constants.id} />
                        <label htmlFor={Object.keys(constants.answer)[i]}>{Object.values(constants.answer)[i]}</label>
                    </>
                )
            }
            console.log(render)
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
        <fieldset>
            <legend >{constants.title}</legend>
            {itemRender()}
        </fieldset>
    )
}
