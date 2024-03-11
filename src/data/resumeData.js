
export const companies = {
  maersk: {
    name: "Maersk",
    linkedInUrl: "https://www.linkedin.com/company/maersk-group/about/",
    iconUrl: process.env.PUBLIC_URL + "/logos/maersk.svg",
    startDate: new Date(2022, 0, 1),
    endDate: null,
  },
  republica: {
    name: "Republica",
    linkedInUrl: "https://www.linkedin.com/company/republica/about",
    iconUrl: process.env.PUBLIC_URL + "/logos/republica.jpg",
    startDate: new Date(2020, 7, 1),
    endDate: new Date(2022, 0, 1),
  },
  dalux: {
    name: "Dalux",
    linkedInUrl: "https://www.linkedin.com/company/dalux/about",
    iconUrl: process.env.PUBLIC_URL + "/logos/dalux.png",
    startDate: new Date(2017, 5, 1),
    endDate: new Date(2020, 7, 1),
  },
  dtu: {
    name: "Technical University of Denmark",
    linkedInUrl: "https://www.linkedin.com/school/technical-university-of-denmark/about/",
    iconUrl: process.env.PUBLIC_URL + "/logos/dtu.jpg",
    startDate: new Date(2015, 7, 1),
    endDate: new Date(2017, 6, 1),
  },
  itu: {
    name: "IT University of Copenhagen",
    linkedInUrl: "https://www.linkedin.com/school/it-university-of-copenhagen/about/",
    iconUrl: null,
    startDate: undefined,
    endDate: undefined,
  },
  hyf: {
    name: "HackYourFuture Denmark",
    linkedInUrl: "https://www.linkedin.com/school/hackyourfuture-denmark/about/",
    iconUrl: null,
    startDate: new Date(2023, 10, 1),
    endDate: null,
  }
}

const frontendColor = "#373";
const backendColor = "#359";
const devOpsColor = "#549";
const otherColor = "#953";
export const badges = {
  react: {
    label: "React",
    color: frontendColor
  },
  vue: {
    label: "Vue.js",
    color: frontendColor
  },
  angular: {
    label: "Angular",
    color: frontendColor
  },
  typescript: {
    label: "Typescript",
    color: frontendColor
  },
  javascript: {
    label: "Javascript",
    color: frontendColor
  },
  css: {
    label: "CSS",
    color: frontendColor
  },
  d3: {
    label: "D3.js",
    color: frontendColor
  },



  dotnet: {
    label: ".NET",
    color: backendColor
  },
  csharp: {
    label: "C#",
    color: backendColor
  },
  go: {
    label: "Golang",
    color: backendColor
  },
  sql: {
    label: "SQL",
    color: backendColor
  },


  azure: {
    label: "Azure",
    color: devOpsColor
  },
  aws: {
    label: "AWS",
    color: devOpsColor
  },
  azureDevOps: {
    label: "Azure DevOps",
    color: devOpsColor
  },
  githubActions: {
    label: "GitHub Actions",
    color: devOpsColor
  },
  kafka: {
    label: "Kafka",
    color: devOpsColor
  },



  github: {
    label: "GitHub",
    color: otherColor
  },
  jira: {
    label: "Jira",
    color: otherColor
  },
  unity: {
    label: "Unity",
    color: otherColor
  },
}
