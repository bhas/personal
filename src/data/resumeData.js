export const experiences = [
  {
    startDate: new Date(2022, 0, 1),
    endDate: null,
    position: "Software Engineer",
    type: "work",
    company: {
      name: "Maersk",
      linkedInUrl: "https://www.linkedin.com/company/maersk-group/about/",
      iconUrl: process.env.PUBLIC_URL + "/logos/maersk.svg",
    },
    description: `Maersk’s ambitions are clear and bold - implement a world class platform for supply chain management. Designing and implementing these systems used by some of the biggest brands in the world quickly becomes an immensely complex task since Maersk has high expectations for the quality, scalability, uptime, maintainability and security of the platform. 
    In Maersk I am currently responsible for managing a migrating project where me and 3 other developers  are converting an old system from Golang into a  .NET microservice. I have taken charge of  creating, estimating and assigning user stories in Jira, communicating our progress to the stakeholders, identifying potential problems and work out solutions, and supporting/mentoring our junior developers. 
    I have also implemented a few Vue.js frontend stories and looked into DevOps related deployment tasks using Github. 
    `
  },
  {
    startDate: new Date(2020, 7, 1),
    endDate: new Date(2022, 0, 1),
    position: "Senior System Developer",
    type: "work",
    company: {
      name: "Republica",
      linkedInUrl: "https://www.linkedin.com/company/republica/about",
      iconUrl: process.env.PUBLIC_URL + "/logos/republica.jpg"
    },
    description: `As a developer at Republica I am responsible for maintaining, documenting, and improving the most central parts of the system. This includes designing a scalable system that can handle complex workflows with many different users involved. My tasks mostly take place in the backend where I help design and implement our microservice structure in .Net Core and Entity Framework. Additionally, I am also doing a fair amount of frontend development in React.`
  },
  {
    startDate: new Date(2017, 5, 1),
    endDate: new Date(2020, 7, 1),
    position: "Software Engineer",
    type: "work",
    company: {
      name: "Dalux",
      linkedInUrl: "https://www.linkedin.com/company/dalux/about",
      iconUrl: process.env.PUBLIC_URL + "/logos/dalux.png",
    },
    description: `At Dalux I’ve worked as a fullstack developer in a rapidly growing environment. Backend has primarily consisted of C# og SQL and frontend has primarily consisted of Angular, HTML, Typescript og CSS. Additionally, I have been responsible for creating integrations to external systems, migrating customer data, test and maintenance, mentoring juniors developers, refactoring central code, and designing and developing new central systems and functionality in the system.`
  },
  {
    startDate: new Date(2017, 6, 1),
    endDate: new Date(2015, 7, 1),
    position: "Master of Science in Engineering",
    type: "studies",
    company: {
      name: "Technical University of Denmark",
      linkedInUrl: "https://www.linkedin.com/school/technical-university-of-denmark/about/",
      iconUrl: process.env.PUBLIC_URL + "/logos/dtu.jpg",
    },
    description: `I studied Digital media technologies with a focus on game development and 3D graphics. I got an A for my thesis where I developed new ways of visualizing data on the construction site using Mixed Reality. The project was created in collaboration with Dalux.  `
  }
];
