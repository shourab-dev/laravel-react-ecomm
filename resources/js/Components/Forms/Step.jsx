import React from "react";

const Step = ({ step, currentStep, updateStep }) => {

    return (
        <div className="relative cursor-pointer" onClick={e=>updateStep(step.step)}>
            <span
            
                className={`rounded-full border size-[30px] text-center leading-[30px] ${
                    currentStep == step.step
                        ? "bg-primary text-white"
                        : "bg-white"
                } shadow-md block`}
            >
                {step.step}
            </span>
            <p
                className={`absolute translate-x-[-50%] left-1/2 text-sm font-bold text-${
                    currentStep == step.step ? "primary" : "gray-800"
                } whitespace-nowrap mt-1`}
            >
                {step.title}
            </p>
        </div>
    );
};

export default Step;
