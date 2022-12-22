import { isEmpty, isNull } from "lodash";

export const handleValidateUserInfo = (userProfileDetails) => {
  const {
    name,
    email,
    phone,
    country = null,
    location = null,
    gender,
    workExperiences = [],
    skills = null,
    educationExperiences = [],
  } = userProfileDetails;

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  ); //"([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"

  let errorObject = {};

  if (isEmpty(name) || isNull(name)) {
    errorObject.nameError = true;
  }
  if (phone?.length < 10 || isNull(phone)) {
    errorObject.phoneError = true;
  }
  if (!emailRegex.test(email) || isNull(email)) {
    errorObject.emailError = true;
  }
  if (isNull(gender)) {
    errorObject.genderError = true;
  }
  if (isNull(country) || isNull(country)) {
    errorObject.cityError = true;
  }
  if (isNull(skills) || isEmpty(skills)) {
    errorObject.skillsError = true;
  }
  if (workExperiences.length === 0) {
    errorObject.workExperienceError = true;
  } else {
    workExperiences.forEach(
      ({ orgName, designation, startDate, endDate }, index) => {
        if (isNull(orgName) || isEmpty(orgName)) {
          errorObject[orgName + index] = true;
        }
        if (isNull(designation) || isEmpty(designation)) {
          errorObject[designation + index] = true;
        }
        if (isNull(startDate) || isEmpty(startDate)) {
          errorObject[startDate + index] = true;
        }
        if (isNull(endDate) || isEmpty(endDate)) {
          errorObject[endDate + index] = true;
        }
      }
    );
  }

  if (educationExperiences.length === 0) {
    errorObject.educationExperienceErrors = true;
  } else {
    educationExperiences.forEach(
      ({ fieldOfStudy, dateOfCompletion, collegeName, degree }, index) => {
        if (isNull(fieldOfStudy) || isEmpty(fieldOfStudy)) {
          errorObject[fieldOfStudy + index] = true;
        }
        if (isNull(dateOfCompletion) || isEmpty(dateOfCompletion)) {
          errorObject[dateOfCompletion + index] = true;
        }
        if (isNull(collegeName) || isEmpty(collegeName)) {
          errorObject[collegeName + index] = true;
        }
        if (isNull(degree) || isEmpty(degree)) {
          errorObject[degree + index] = true;
        }
      }
    );
  }

  return errorObject;
};
