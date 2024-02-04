
export const companies = {
  maersk: {
    name: "Maersk",
    linkedInUrl: "https://www.linkedin.com/company/maersk-group/about/",
    iconUrl: process.env.PUBLIC_URL + "/logos/maersk.svg",
  },
  republica: {
    name: "Republica",
    linkedInUrl: "https://www.linkedin.com/company/republica/about",
    iconUrl: process.env.PUBLIC_URL + "/logos/republica.jpg"
  },
  dalux: {
    name: "Dalux",
    linkedInUrl: "https://www.linkedin.com/company/dalux/about",
    iconUrl: process.env.PUBLIC_URL + "/logos/dalux.png",
  },
  dtu: {
    name: "Technical University of Denmark",
    linkedInUrl: "https://www.linkedin.com/school/technical-university-of-denmark/about/",
    iconUrl: process.env.PUBLIC_URL + "/logos/dtu.jpg",
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
