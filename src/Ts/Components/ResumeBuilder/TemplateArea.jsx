import React from "react";
import { useSelector } from "react-redux";
import { currentResumeScreen } from "../../JsxUtils/ResumeBuilderJsxUtils";
import { getResumeBuilderActiveStepper } from "../../Redux/Selectors/ResumeBuilder/ResumeBuilderSelectors";

export const TemplateArea = () => {
  const activeStep = useSelector(getResumeBuilderActiveStepper);

  return <>{currentResumeScreen[activeStep]}</>;
};
