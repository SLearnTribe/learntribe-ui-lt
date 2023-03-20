import { random, sample, sampleSize, uniqueId } from "lodash";

const roles = [
  "Software Engineer",
  "Front End Developer",
  "UI Developer",
  "Java Developer",
];

const jobTitles = ["SDE-1", "SDE-2", "SDE-3", "SDE-4"];

export const skills = [
  "SpringBoot",
  "Phython",
  "SQL",
  "DBMS",
  "ReactJs",
  "Redux",
  "HTML",
  "CSS",
  "JavaScript",
  "Ruby On Rails",
  "Java",
];

const options = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const dates = [
  "22/06/2021",
  "14/09/2020",
  "06/09/2022",
  "02/07/2022",
  "01/01/2022",
];

const applicantsNames = [
  "Syed Adil",
  "Mahesh Babu",
  "Virat Kohli",
  "Babar Azam",
  "Sheefa Ara Mashalkar",
];

const emails = [
  "adil143420@gmail.com",
  "adil.shezin@gmail.com",
  "virat@yahoo.com",
  "maheshbabu@gmail.com",
];

const jobStatus = ["Completed", "On Hold"];

const companyNames = ["Imperva", "Oracle Cerner", "Thomson Reuters"];

const companies = [
  { companyName: "Imperva", companyShortName: "IM" },
  { companyName: "Oracle Cerner", companyShortName: "OC" },
  { companyName: "Thomson Reuters", companyShortName: "TR" },
];

const jobLevels = ["Mid Senior level", "Senior level", "Fresher", "Lead level"];

const employmentTypes = ["Full time", "Part time", "Freelancing"];

const locations = ["Bengaluru", "Mumbai", "Dehli", "Kolkata"];

const postedOnTimes = ["5hrs ago", "1 day ago", "a week ago"];

const difficultyLevel = ["Easy", "Medium", "Difficult"];

const AssessmentStatus = ["Pending", "Completed", "Completed", "Blocked"];

export const CandidateJobsMockData = [
  {
    id: uniqueId(),
    location: "Bengaluru",
    companyName: "Imperva",
    companyShortName: "IM",
    jobType: "Full time",
    jobTitle: "UI Developer",
  },
  {
    id: uniqueId(),
    location: "Bengaluru",
    companyName: "Oracle Cerner",
    companyShortName: "OC",
    jobType: "Full time",
    jobTitle: "Front End Developer",
  },
  {
    id: uniqueId(),
    location: "Mumbai",
    companyName: "Thomson Reuters",
    companyShortName: "TR",
    jobType: "Full time",
    jobTitle: "QA Engineer",
  },
];

export const RecommendedJobsMockData = [
  //1230174, 9036605231
  {
    assessmentMainTitle: "Advance Java",
    assessmentDescription: "Collections, JDBC and Spring Boot",
    time: "45 mins",
  },
  {
    assessmentMainTitle: "ReactJs",
    assessmentDescription: "JavaScript, react hooks, html and css",
    time: "30 mins",
  },
  {
    assessmentMainTitle: "SQL/PLSQL",
    assessmentDescription: "DBMS, ETL, Data Migration",
    time: "60 mins",
  },
  {
    assessmentMainTitle: "Advance Java",
    assessmentDescription: "Collections, JDBC and Spring Boot",
    time: "45 mins",
  }, //
  {
    assessmentMainTitle: "Redux",
    assessmentDescription: "Collections, JDBC and Spring Boot",
    time: "45 mins",
  },
  {
    assessmentMainTitle: "Phython",
    assessmentDescription: "Collections, JDBC and Spring Boot",
    time: "45 mins",
  },
  {
    assessmentMainTitle: "JavaScript",
    assessmentDescription: "Collections, JDBC and Spring Boot",
    time: "45 mins",
  },
  {
    assessmentMainTitle: "Ruby On Rails",
    assessmentDescription: "Collections, JDBC and Spring Boot",
    time: "45 mins",
  },
];

export const AssessmentsMockData = (len = 5) => {
  const data = [];

  for (let i = 0; i < len; i++) {
    data.push({
      id: uniqueId(),
      progress: 33.33,
      numOfQuestions: 25,
      type: "OBJECTIVE",
      status: sample(AssessmentStatus),
      difficulty: sample(difficultyLevel),
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      title: sample(skills),
      subTitle: "Test",
      saved: i === 0 ? true : false,
    });
  }

  return data;
};

export const AssessmentsMockData2 = {
  all: [
    {
      title: "Advance Java - I",
      tags: ["Difficult"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Completed",
      isSaved: true,
    },
    {
      title: "SQL/DBMS",
      tags: ["Easy"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Pending",
      isSaved: false,
    },
    {
      title: "Springboot",
      tags: ["Medium"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Blocked",
      isSaved: true,
    },
    {
      title: "Javascript",
      tags: ["Easy"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Completed",
      isSaved: false,
    },
  ],
  completed: [
    {
      title: "Advance Java - I",
      tags: ["Difficult"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Completed",
      isSaved: true,
    },
    {
      title: "Javascript",
      tags: ["Easy"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Completed",
      isSaved: false,
    },
  ],
  blocked: [
    {
      title: "Springboot",
      tags: ["Medium"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Blocked",
      isSaved: true,
    },
  ],
  saved: [
    {
      title: "Advance Java - I",
      tags: ["Difficult"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Completed",
      isSaved: true,
    },
    {
      title: "Springboot",
      tags: ["Medium"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Blocked",
      isSaved: true,
    },
  ],
  pending: [
    {
      title: "SQL/DBMS",
      tags: ["Easy"],
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      status: "Pending",
      isSaved: false,
    },
  ],
};

export const HrHiringInLastMonthTableMockData = () => {
  const data = [];

  for (let i = 0; i < 100; i++) {
    data.push({
      id: uniqueId(),
      role: sample(roles),
      skills: sampleSize(skills, random(1, 10)),
      hiredCount: random(1, 100),
      jobPostedOn: sample(dates),
      jobStatus: sample(jobStatus),
      interviewsInProgress: random(1, 100),
    });
  }
  return data;
};

export const ApplicantsListMockData = (len = 5) => {
  const data = [];

  for (let i = 0; i < len; i++) {
    data.push({
      userProfileId: uniqueId(),
      country: "India",
      name: sample(applicantsNames),
      currentRole: sample(roles),
      skills: sampleSize(skills, random(2, 10)).join(", "),
      totalExperience: `${i + 1}+ years`,
      email: sample(emails),
      phone: random(9900000000, 9999999999),
      about: "Description about the candidate Description about the candidate",
      breifExp: "Brief about Experience",
      workExperiences: [
        {
          designation: "UI Developer",
          endDate: "2022-10-01",
          id: 0,
          location: "Bengaluru",
          orgName: "Imperva",
          startDate: "2021-10-01",
          years: 4,
        },
      ],
    });
  }

  return data;
};

export const PostJobsMockData = (len = 5) => {
  const data = [];

  for (let i = 0; i < len; i++) {
    data.push({
      jobId: uniqueId(),
      description:
        "Description about the candidate Description about the candidate",
      experience: "5+ years",
      qualification: "BE",
      jobTitle: sample(roles),
      companyName: sample(companies).companyName,
      employmentType: sample(employmentTypes),
      companyShortName: sample(companies).companyShortName,
      jobLevel: sample(jobLevels),
      jobLocation: sample(locations),
      postedOn: sample(postedOnTimes),
      skills: skills,
    });
  }

  return data;
};

export const GenerateAssessmentsDropdownMockData = [
  { label: "Jobs Assessed For", multiple: true, options: options },
  {
    label: "Default/Previously Generated Assessments",
    multiple: false,
    options: options,
  },
  { label: "Skills List", multiple: true, options: options },
  { label: "Difficulty Level", multiple: false, options: options },
];

export const userProfileMockData = {
  userProfileId: 29101292,
  keyCloakId: "abcd-erfgaha98-11212euh-zzzyx",
  currentRole: "UI Developer",
  name: "Syed Adil",
  email: "adil143420@gmail.com",
  skills: "Java, C++, Node, ReactJS",
  country: "India",
  linkedIn: "http://www.google.com",
  gitHub: "http://www.google.com",
  about: "I belive in war not in morality",
  totalExperience: "4+ years",
  workExperiences: [
    {
      id: 3342,
      orgName: "Imperva",
      designation: "UI Developer",
      startDate: "2022-11-07",
      endDate: "2022-11-19",
      years: "3",
      location: "Bangalore",
    },
    {
      id: 3342,
      orgName: "Oracle Cerner",
      designation: "Software Engineer I",
      startDate: "2018-10-29",
      endDate: "2022-11-04",
      years: "2",
      location: "Bangalore",
    },
  ],
  phone: "8904473364",
  city: "Bengaluru",
  gender: "male",

  educationExperiences: [
    {
      collegeName: "NCET",
      degree: "BE",
      dateOfCompletion: "05/11/2021",
      fieldOfStudy: "Computer Science Engineering",
    },
    {
      collegeName: "Vijaya PU college",
      degree: "MBA",
      dateOfCompletion: "05/11/2021",
      fieldOfStudy: "PCMC",
    },
  ],
  resume: "AdilResume.pdf",
  assessmentsCompleted: ["Advance Java", "JavaScript", "Springboot", "Python"],
};

export const AvailableDegreeOptions = [
  { title: "BE" },
  { title: "PG" },
  { title: "MBA" },
  { title: "MS" },
  { title: "BSC" },
  { title: "MSC" },
  { title: "MTECH" },
];

export const JobsMockData = (len = 5) => {
  const data = [];
  for (let i = 0; i < len; i++) {
    data.push({
      title: sample(jobTitles),
      location: "India",
      businessName: sample(companyNames),
      city: sample(locations),
      jobLevel: sample(jobLevels),
      role: sample(roles),
      employmentType: sample(employmentTypes),
      description:
        "Description We put you in touch with your preferred coworking space locations and help you get settled with no hassle.",
      assessmentsRequired: [
        { name: "Advance Java", status: sample(AssessmentStatus) },
        { name: "JavaScript", status: sample(AssessmentStatus) },
        { name: "Spring Boot", status: sample(AssessmentStatus) },
        { name: "ReactJs", status: "start" },
      ],
      rolesAndResponsibilities:
        "Designing, developing, and testing UI for mobile and web applications \nBuild reusable code and libraries for future use \nAccurately translate user and business needs into functional frontend code",
      qualifications: [
        "A Bachelors of Computer Science or a related field is required ",
        "5+ years of IT experience in the development of scalable consumer facing digital solutions",
        "(consumer websites, web applications, mobile sites etc) in HTML, CSS3 and JavaScript framework is required ",
        "A Bachelors of Computer Science or a related field is required",
        "Experience in client-side scripting and JavaScript frameworks, like SCSS, HTML5, AngularJS, ReactJS, REST/JSON API is a must.",
        "Experience with HTML5, Bootstrap, Foundation for mobile/responsive design is desired",
        "Exposure to cross-browser, multiple device testing and debugging is a required.",
        "Experience working on an agile team adopting DevOps and CI/CD",
        "Experience with Cloud ecosystems including Azure, Sitecore Cloud or AWS is a plus",
      ],
    });
  }
  return data;
};

export const loggedInUserDetailsMockData = {
  exp: 1668273472,
  iat: 1668237473,
  auth_time: 1668237472,
  jti: "1131bcce-8d83-43b7-ada7-923d3758adf1",
  iss: "https://www.smilebat.xyz/auth/realms/master",
  aud: "account",
  sub: "953dbd82-f34c-4ae6-b7a8-159f4d98bdc3",
  typ: "Bearer",
  azp: "cloud-gateway-client",
  session_state: "c88d030b-870a-4a64-ae8b-b7a5a1ad7c4b",
  acr: "1",
  realm_access: {
    roles: ["default-roles-master", "offline_access", "uma_authorization"],
  },
  resource_access: {
    account: {
      roles: ["manage-account", "manage-account-links", "view-profile"],
    },
  },
  scope: "openid profile email",
  sid: "c88d030b-870a-4a64-ae8b-b7a5a1ad7c4b",
  role: "HR",
  email_verified: true,
  name: "Adil C",
  preferred_username: "smilebathr",
  given_name: "Adil",
  family_name: "C",
  email: "adil.shezin94@gmail.com",
};

export const CandidateActivitiesData = [
  {
    title: "Assessments Completed",
    total: 0,
    color: "success",
  },
  {
    title: "Jobs Applied",
    total: 0,
    color: "info",
  },
  {
    title: "Interview Calls",
    total: 0,
    color: "warning",
  },
];
