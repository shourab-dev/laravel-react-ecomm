import React, { useState } from "react";
import Progress from "./Progress";
import AddProduct from "../Products/AddProduct";
import PrimaryButton from "../PrimaryButton";

const MultiStepForm = ({
    steps = [
        {
            step: 1,
            title: "Product Title",
            component: <AddProduct />,
        },
        {
            step: 2,
            title: "Profile",
            component: <PrimaryButton >Submit</PrimaryButton>,
        },
        {
            step: 3,
            title: "Finish",
        },
    ],
    isProgress = true,
}) => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div>
            {isProgress && (
                <Progress
                    steps={steps}
                    updateStep={setCurrentStep}
                    currentStep={currentStep}
                />
            )}

            <div className="components">
                {steps?.map(
                    (step) => step.step == currentStep && step.component
                )}
            </div>

            <div className="navigation"></div>
        </div>
    );
};

export default MultiStepForm;
