import { ReactElement } from "react";
import { useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function nextStep() {
        setCurrentStepIndex((index) => {
            if (index === steps.length - 1) {
                return index;
            }
            return index + 1;
        });
    }

    function previousStep() {
        setCurrentStepIndex((index) => index - 1);
    }

    function goTo(index: number) {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        nextStep,
        previousStep,
        steps
    }
}
