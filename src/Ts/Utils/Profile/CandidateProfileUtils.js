import { isEmpty, isNull } from "lodash";

export const handleValidateUserInfo = (userProfileDetails) => {
  const { name, email, phone } = userProfileDetails;

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  ); //"([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"

  let errorObject = {};

  if (isEmpty(name) || isNull(name)) {
    errorObject.nameError = true;
  }
  if (phone?.length !== 10 || isNull(phone)) {
    errorObject.phoneError = true;
  }
  if (!emailRegex.test(email) || isNull(email)) {
    errorObject.emailError = true;
  } else {
    errorObject = {};
  }

  return errorObject;
};
