import { useMultistepForm } from "./assets/useMultistepForm"
import './App.css'
import { GeneralInfoForm } from "./formComponents/GeneralInfoForm"


function App() {
  const { step, steps, currentStepIndex, previousStep, nextStep } = useMultistepForm([<GeneralInfoForm/>, <div>Step 2</div>, <div>Step 3</div>])
  return (
    <>
      <form style={{
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
          {currentStepIndex +1} / {steps.length}
        </div>
        <div style={{
          display: 'flex',
          width: '100%',
          margin: '0 auto',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}>
          {currentStepIndex !== 0 && <button type="button" onClick={previousStep}>previous step</button>}
          {currentStepIndex !== steps.length - 1 && <button type="button" onClick={nextStep}>next step</button>}
        </div>
        {step}
      </form>
    </>
  )
}

export default App
