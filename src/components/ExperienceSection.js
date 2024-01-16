import { companies } from "../data/resumeData";
import Card from "./Card";
import HistoryEntry from "./HistoryEntry";

export default function ExperienceSection() {
  return (
    <Card title={"Experience"}>
      <HistoryEntry
        company={companies.maersk}
        position={"Software Engineer"}
        startDate={new Date(2022, 0, 1)}
        endDate={null}
        type={"work"}
      >
        <p>Maersk’s ambitions are clear and bold - implement a world class platform for supply chain management. Designing and implementing these systems used by some of the biggest brands in the world quickly becomes an immensely complex task since Maersk has high expectations for the quality, scalability, uptime, maintainability and security of the platform. 
    In Maersk I am currently responsible for managing a migrating project where me and 3 other developers  are converting an old system from Golang into a  .NET microservice. I have taken charge of  creating, estimating and assigning user stories in Jira, communicating our progress to the stakeholders, identifying potential problems and work out solutions, and supporting/mentoring our junior developers. 
    I have also implemented a few Vue.js frontend stories and looked into DevOps related deployment tasks using Github. 
    </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.republica}
        position={"Senior System Developer"}
        startDate={new Date(2020, 7, 1)}
        endDate={new Date(2022, 0, 1)}
        type={"work"}
      >
        <p>As a developer at Republica I am responsible for maintaining, documenting, and improving the most central parts of the system. 
            This includes designing a scalable system that can handle complex workflows with many different users involved. 
            My tasks mostly take place in the backend where I help design and implement our microservice structure in .Net Core and Entity Framework. 
            Additionally, I am also doing a fair amount of frontend development in React.
            </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.dalux}
        position={"Software Engineer"}
        startDate={new Date(2017, 5, 1)}
        endDate={new Date(2020, 7, 1)}
        type={"work"}
      >
        <p>At Dalux I’ve worked as a fullstack developer in a rapidly growing environment. 
            Backend has primarily consisted of C# og SQL and frontend has primarily consisted of Angular, HTML, Typescript og CSS. 
            Additionally, I have been responsible for creating integrations to external systems, migrating customer data, test and maintenance, mentoring juniors developers, refactoring central code, and designing and developing new central systems and functionality in the system.</p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.dtu}
        position={"Master of Science in Engineering"}
        startDate={new Date(2015, 7, 1)}
        endDate={new Date(2017, 6, 1)}
        type={"studies"}
      >
        <p>
            I studied digital media technologies with a focus on game development and 3D graphics. 
            Here I learned how to develop games and apps using <span className="badge">Unity</span> and <span className="badge">C#</span> focusing on the visiual presentation algorithms, Unity, Graphics
        </p>
        <p>
            I got an A for my thesis where I developed a new ways of visualizing the architectural models on the construction site using Mixed Reality. 
            The project was created in collaboration with Dalux and was later refined into the product <a href="https://www.dalux.com/dalux-field/twinbim/" target="_blank">TwinBIM</a>.
        </p>
      </HistoryEntry>
    </Card>
  );
}
