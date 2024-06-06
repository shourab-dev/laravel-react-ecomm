import React from "react";
import Step from "./Step";

const Progress = ({ steps, currentStep, updateStep }) => {
    return (
        <div className="progress px-5   mt-4 mb-10 ">
            <div className="relative flex justify-between">
                <div className="border-b z-[-1] w-full absolute top-1/2 translate-y-[-50%]"></div>

                {/* STEPS HERE */}
                {steps.map((step) => (
                    <Step
                        updateStep={updateStep}
                        currentStep={currentStep}
                        key={step.step}
                        step={step}
                    />
                ))}

                {/* STEPS ends */}
            </div>
        </div>
    );
};

export default Progress;
