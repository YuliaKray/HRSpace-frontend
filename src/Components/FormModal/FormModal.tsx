import './FormModal.scss';

// type Props = {
//     profession: number[],
//     city: number[],
//     citizenship: number[],
// }

const prof = [
    {
        "id": 1,
        "name": "Люберцы"
    },
    {
        "id": 2,
        "name": "Ленинград"
    }
]

export function FormModal(
    // { profession, city, citizenship }: Props
    ) {

    function renderProfession() {
        const professionRender = prof.map((profession) => {
            return (
                <div key={profession.id}>
                    <input type='radio' name='profession' value={profession.id} id={profession.name} />
                    <label htmlFor={profession.name} >{profession.name}</label>
                </div>
            )
        })

        return professionRender
    }

    return (
        <div className="formModal__container">
            <div className='formModal__content'>
                <h2 className="formModal__title"> Укажите профессию</h2>
                <fieldset className='formModal__text-container'>
                    {renderProfession()}
                    {/* <div key={prof.id}>
                <input type='radio' name='profession' value={prof.id}/>
                <label htmlFor={prof.id} >{prof.name}</label>
                </div> */}
                </fieldset>
            </div>

        </div>
    )
}