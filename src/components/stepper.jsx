import { Fragment, useState } from 'react';

import { Stepper, Step, StepLabel } from '@mui/material';

import './stepper.css';

import { CtaButton } from './services';

import { IoArrowBackSharp, IoArrowForward  } from "react-icons/io5";


const FormStepper = ({step1, step2, step3, step4}) => {

    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { title: "Structure your paper" },
        { title: "Add files" },
        { title: "Specify deadline" },
        { title: "Make payment" }
    ];

    // determine component to be displayed per step
    const displayStepComponent = () => {
        
        switch (activeStep) {
            case 0: return step1;
            case 1: return step2;
            case 2: return step3;
            case 4: return step4;
            default: return null;
        }
    }
    
    const goToPreviousStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const gotToNextStep = () => {
        setActiveStep((prevActiveStep) => activeStep === steps.length - 1 ? prevActiveStep : prevActiveStep + 1);
    }
    
    return (
        <Fragment>
            <Fragment>
                <Stepper className='form-stepper' activeStep={activeStep} alternativeLabel sx={{mt:6, mb:8,fontSize:5, width:'100%'}}>
                    {steps.map((step, index) => {
                        return (
                            <Step key={index}>
                                <StepLabel className='step-label' ><div  className='step-title'>{ step.title }</div></StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
                {displayStepComponent()}
                <div className='step-navigation'>
                    {
                        activeStep!==0 && <CtaButton id={`previous`} message={`Back`} onClick={goToPreviousStep} />                        
                    }
                    <CtaButton id={`next`} message={activeStep===steps.length-1?`Make Payment`:`Next`} onClick={gotToNextStep} />
                </div>

            </Fragment>
        </Fragment>
    )
}
export {}
export default FormStepper;