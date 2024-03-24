import './FormModal.scss';
type GeneralInfo ={
    profession: number, 
    location: number,
    citizenship: number[]
}

type Props = GeneralInfo & {
    city: {
        id: number;
        name?: string;
        title?: string
    }[],
    professions: {
        id: number;
        name?: string;
        title?: string
    }[],
    citizenships: {
        id: number;
        name?: string;
        title?: string
    }[],
} & {
    isProfessionModalOpen: boolean,
    isCityModalOpen: boolean,
    isCitizenshipModalOpen: boolean
} & {
    handleProfessionOpen: () => void
} & {
    handleCityOpen: () => void
} & {
    handleCitizenshipOpen: () => void
} & {
    updateFields: (fields: Partial<GeneralInfo>) => void;
}
// type Props = {
//     profession: number[],
//     city: number[],
//     citizenship: number[],
// }

// const prof = [
//     {
//         "id": 1,
//         "name": "Люберцы"
//     },
//     {
//         "id": 2,
//         "name": "Ленинград"
//     }
// ]

export function FormModal(
    { 
        // profession, location, 
        citizenship,
        professions,
         city, 
         citizenships, 
         isProfessionModalOpen, handleProfessionOpen, isCityModalOpen, handleCityOpen, isCitizenshipModalOpen, handleCitizenshipOpen,  updateFields }: Props
) {

    // function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     if (e.target.checked) {
    //         updateFields({ title: [...title, parseInt(e.target.value)] })
    //     }
    //     else {
    //         updateFields({ title: title.filter((item) => item !== parseInt(e.target.value)) })
    //     }
    // }

    function renderProfession() {
        if (isProfessionModalOpen === true) {
            const professionRender = professions.map((profession) => {
                return (
                    <div key={profession.id}>
                        <input type='radio' name='profession' value={profession.id} id={profession.title} onChange={(e) => updateFields({ profession: parseInt(e.target.value) })}/>
                        <label htmlFor={profession.title} >{profession.title}</label>
                    </div>
                )
            })

            return professionRender
        }
    }

    function renderCity() {
        if (isCityModalOpen === true) {
        const cityRender = city.map((city) => {
            return (
                <div key={city.id}>
                    <input type='radio' name='location' value={city.id} id={city.name} onChange={(e) => updateFields({ location: parseInt(e.target.value) })}/>
                    <label htmlFor={city.name} >{city.name}</label>
                </div>
            )
        })

        return cityRender
    }
    }

    function handexCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'citizenship') {
            if (e.target.checked) {
                updateFields({ citizenship: [...citizenship, parseInt(e.target.value)] })
            } else {
                updateFields({ citizenship: citizenship.filter((item) => item !== parseInt(e.target.value)) })
            }

        }
    }

    function renderCitizenship() {
        if (isCitizenshipModalOpen === true) {
        const citizenshipRender = citizenships.map((item) => {
            return (
                <div key={item.id}>
                    <input type='checkbox' name='citizenship' value={item.id} id={item.name} checked={citizenship.includes(item.id)} onChange={handexCheckboxChange}/>
                    <label htmlFor={item.name} >{item.name}</label>
                </div>
            )
        })

        return citizenshipRender
    }
    }


    return (
        <div className="formModal__container">

            <div className='formModal__content'>
                {isProfessionModalOpen ? <h2 className="formModal__title"> Укажите профессию</h2> : <></>}
                <fieldset className='formModal__text-container'>
                    {renderProfession()}
                    {renderCity()}
                    {renderCitizenship()}
                    {/* <div key={prof.id}>
                <input type='radio' name='profession' value={prof.id}/>
                <label htmlFor={prof.id} >{prof.name}</label>
                </div> */}
                </fieldset>
                <div className='formModal__btn-wrapper'>
                {isCityModalOpen && <button type='button' onClick={handleCityOpen} className='formModal__btn formModal__btn_close'>Отменить</button>}
                {isCitizenshipModalOpen && <button type='button' onClick={handleCitizenshipOpen} className='formModal__btn formModal__btn_close'>Отменить</button>}
                {isProfessionModalOpen && <button type='button' onClick={handleProfessionOpen} className='formModal__btn formModal__btn_close'>Отменить</button>}
                {isProfessionModalOpen && <button type='button' onClick={handleProfessionOpen} className='formModal__btn'>Выбрать профессию</button>}
                {isCityModalOpen && <button type='button' onClick={handleCityOpen} className='formModal__btn'>Выбрать город</button>}
                {isCitizenshipModalOpen && <button type='button' onClick={handleCitizenshipOpen} className='formModal__btn'>Выбрать гражданство</button>}

                </div>
            </div>

        </div>
    )
}