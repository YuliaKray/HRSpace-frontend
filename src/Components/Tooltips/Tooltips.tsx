import icon from '../../images/subway_tick.svg'
import './Tooltips.scss';
import { tooltip_1, tooltip_2, tooltip_3, tooltip_4, tooltip_5, tooltip_6, tooltip_7, tooltip_8, tooltip_9 } from '../../assets/constants';

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

        const firstStep = [tooltip_1, tooltip_2, tooltip_3];
        const secondStep = [tooltip_4];
        const thirdStep = [tooltip_5];
        const foursStep = [tooltip_6];
        const fivesStep = [tooltip_7, tooltip_8, tooltip_9];


        if (currentStepIndex === 0) {
            const firstStepElement = firstStep.map((item) => {
                return getTooltip(item)
            })
            return firstStepElement

        } else if (currentStepIndex === 1) {

            const secondStepElement = secondStep.map((item) => {
                return getTooltip(item)
            })
            return secondStepElement
        
        } else if (currentStepIndex === 2) {

            const thirdStepElement = thirdStep.map((item) => {
                return getTooltip(item)
            })
            return thirdStepElement

        } else if (currentStepIndex === 3) {
            
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
            {renderTooltip()}
        </div>
    )
}