import React from "react";
import { useSelector } from "react-redux";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";
import { ModalTexts } from "../../../Utils/Text";
import { GenerateAssessments } from "../../Modals/Applicants/GenerateAssessments";
import { SubmittingsAssessmentModal } from "../../Modals/Candidate/Assessments/SubmittingsAssessmentModal";
import { JobDescription } from "../../Modals/Candidate/Jobs/JobDescription";
import { ProfileContactInfoModal } from "../../Modals/Hr/ProfileContactInfoModal";
import { PostJobsModal } from "../../Modals/PostJobs/PostJobsModal";

export default () => {
  const currentModal = useSelector(getCurrentModal);

  switch (currentModal) {
    case ModalTexts.postANewJobs:
    case ModalTexts.editJob:
      return <PostJobsModal />;
    case ModalTexts.generateAssessment:
    case ModalTexts.assignAssessment:
      return <GenerateAssessments />;
    case ModalTexts.contactInfo:
      return <ProfileContactInfoModal />;
    case ModalTexts.jobDescription:
      return <JobDescription />;
    case ModalTexts.submittingAssessment:
      return <SubmittingsAssessmentModal />;
    default:
      return null;
  }
};
