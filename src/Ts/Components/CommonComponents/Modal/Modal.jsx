import React from "react";
import { useSelector } from "react-redux";
import { getCurrentModal } from "../../../Redux/Selectors/Modal/ModalSelectors";
import { ModalTexts } from "../../../Utils/Text";
import { GenerateAssessments } from "../../Modals/Applicants/GenerateAssessments";
import { ProfileContactInfoModal } from "../../Modals/Hr/ProfileContactInfoModal";
import { PostJobsModal } from "../../Modals/PostJobs/PostJobsModal";

export default () => {
  const currentModal = useSelector(getCurrentModal);

  switch (currentModal) {
    case ModalTexts.postANewJobs:
    case ModalTexts.editJob:
      return <PostJobsModal />;
    case ModalTexts.generateAssessment:
      return <GenerateAssessments />;
    case ModalTexts.contactInfo:
      return <ProfileContactInfoModal />;
    default:
      return null;
  }
};
