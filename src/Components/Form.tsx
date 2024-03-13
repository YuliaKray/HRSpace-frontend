import { useMultistepForm } from "../assets/useMultistepForm"
import { GeneralInfoForm } from "../formComponents/GeneralInfoForm"
import spongeBob from '../images/SpongeBob_SquarePants_character.svg.png'


export function Form() {
    const { step, steps, currentStepIndex, previousStep, nextStep, isFirstStep, isLastStep } = useMultistepForm([<GeneralInfoForm />, <div>Step 2</div>, <div>Step 3</div>])

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log(event.target);

        if (isLastStep) {
            console.log('submit')
        } else {
            nextStep()
        }
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100vh',
                    margin: '0 auto',
                    gap: '10px'
                }} action="">
                <div>
                    {currentStepIndex + 1} / {steps.length}
                </div>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    margin: '0 auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    {!isFirstStep && <button type="button" onClick={previousStep}>previous step</button>}
                    {!isLastStep && <button type="submit">next step</button>}
                </div>
                {step}
            </form>
            <img style={{
                width: "405px",
                height: "520px"
            }} src={spongeBob} />
        </>
    )
}