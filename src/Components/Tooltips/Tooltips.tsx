import icon from '../../images/free-icon-font-flame-3917741.svg'
import './Tooltips.scss';
import { tooltip_1, tooltip_2, tooltip_3, tooltip_4, tooltip_5, tooltip_6, tooltip_7, tooltip_8, tooltip_9 } from '../../assets/constants';
import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

type TooltipsProps = {
    currentStepIndex: number
}

type tooltip = {
    id: number,
    src: string,
    alt: string,
    title: string,
    text: string
}


export function Tooltips({ currentStepIndex }: TooltipsProps) {

    function getTooltip(tooltipData: tooltip): JSX.Element {
        return (
            <article className='tooltip' key={tooltipData.id}>
                <img className='tooltip__img' src={icon} alt='исонка' />
                <h3 className='tooltip__title'>{tooltipData.title}</h3>
                <p className='tooltip__text'>{tooltipData.text}</p>
            </article>

        )
    }

    function renderTooltip() {
        // console.log(currentStepIndex === 1)
        const firstStep = [tooltip_1, tooltip_2, tooltip_3];
        const secondStep = [tooltip_4];
        const thirdStep = [tooltip_5];
        const foursStep = [tooltip_6];
        const fivesStep = [tooltip_7, tooltip_8, tooltip_9];


        if (currentStepIndex === 1) {
            // console.log(currentStepIndex)
            const firstStepElement = firstStep.map((item) => {
                return getTooltip(item)
            })
            return firstStepElement

        } else if (currentStepIndex === 2) {
            // console.log(currentStepIndex)

            const secondStepElement = secondStep.map((item) => {
                return getTooltip(item)
            })
            return secondStepElement
        
        } else if (currentStepIndex === 3) {
            // console.log(currentStepIndex)

            const thirdStepElement = thirdStep.map((item) => {
                return getTooltip(item)
            })
            return thirdStepElement

        } else if (currentStepIndex === 4) {
            
            const foursStepElement = foursStep.map((item) => {
                return getTooltip(item)
            })
            return foursStepElement

        } else {
            const fivesStepElement = fivesStep.map((item) => {
                return getTooltip(item)
            })
            return fivesStepElement
        }
    }

    return (
        <div className="tooltips">
            {/* {console.log(currentStepIndex)} */}
            {renderTooltip()}
            {/* {getTooltip(tooltip_1)} */}
            {/* <article className='tooltip'>
                <img className='tooltip__img' src={icon} alt='исонка' />
                <h3 className='tooltip__title'>Поиск новой профессии в каталоге стал легче</h3>
                <p className='tooltip__text'>Мы обновили каталог профессий: сократили список позиций и сделали привязку к профобластям более логичной </p>
            </article> */}
        </div>
    )
}