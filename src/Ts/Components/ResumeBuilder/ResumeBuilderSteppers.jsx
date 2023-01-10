import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getResumeBuilderActiveStepper } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";

const steps = [
  "Choose a Template",
  "Update Your Information",
  "Preview & Download",
];

export const ResumeBuilderSteppers = () => {
  const activeStep = useSelector(getResumeBuilderActiveStepper);

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
