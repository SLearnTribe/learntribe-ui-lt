import { EditResume } from "../Components/ResumeBuilder/EditResume";
import { FinalResume } from "../Components/ResumeBuilder/FinalResume";
import { ResumeTemplates } from "../Components/ResumeBuilder/ResumeTemplates";

export const currentResumeScreen = {
  0: <ResumeTemplates />,
  1: <EditResume />,
  2: <FinalResume />,
};
