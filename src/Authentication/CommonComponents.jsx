import { CommonTexts } from "../Ts/Utils/Text";
import { ErrorPage } from "./ErrorPage";

export const SessionLostComponent = () => {
  return (
    <ErrorPage
      title={CommonTexts.sessionTimedOutTitle}
      subTitle={CommonTexts.sessionTimedOutSubTitle}
    />
  );
};
