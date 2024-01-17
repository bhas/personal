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
        <p>
            Republica was the first place where I really got to stand on my own feet. 
            In Dalux we had mostly worked with a monolithic architecture and tools developed inhouse.
            In Republica the backend was developed as a microservice using <span className="badge">.NET Core</span> with <span className="badge">SQL Server</span> and we used <span className="badge">React</span> for the UI. 
            All communication happened using RabbitMQ or Rest APIs.
            Everything was managed using <span className="badge">Azure DevOps</span> and deployed to local Linux servers.
        </p>
        <p>
            Although we were using a lot of new technologies, I quickly found that the code quality was quite low which caused the system to be very unstable and slow.
            I therefore took it upon myself to improve the code quality and stability of the system.
        </p>
        <p>
             I was responsible for the following tasks:
            <ul>
                <li>
                    Help optimize our service used for importing all our data into the system. 
                    Not only did it make the system much more stable but it also cut down the time it took to import data from 2 hours to less than 2 minutes.
                </li>
                <li>
                    Implement a search service which enabled users quickly search through millions of data entries with complex queries. 
                    The service was implemented using Apache Solr.
                </li>
                <li>
                    Help implement new features in our UI developed in <span className="badge">React</span>
                </li>
            </ul>
        </p>
        <p>
            After a little more than a year I found that I had reached the limit to what I could learn at Republica and I decided it was time to look for opportunities elsewhere.
        </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.dalux}
        position={"Software Engineer"}
        startDate={new Date(2017, 5, 1)}
        endDate={new Date(2020, 7, 1)}
        type={"work"}
      >
        <p>
            I started my professional carreer at Dalux where I worked as a fullstack developer in a rapidly growing environment. 
            Initially, I was mostly solving smaller tasks, but as leadership realised my talent I was given more responsibilities. 
            Eventually moved on to design and implement core systems and guiding junior developers.
        </p>
        <p>
            My accomplishments at Dalux include:
            <ul>
                <li>
                    I participated a major project to migrate our single page application of more than 1 million lines of code using <span className="badge">Angular</span> with <span className="badge">Typescript</span> and <span className="badge">CSS</span>.
                </li>
                <li>
                    I designed and implemented two integrations, one between our two major systems and one to an external system. Both were implemented using <span className="badge">C#</span> and <span className="badge">SQL</span>.
                </li>
                <li>
                    I performed customer support and attended workshops with customers to understand their needs and challenges.
                </li>
                <li>
                    Refactored and improved the code quality of our central systems.
                </li>
            </ul>
        </p>
        <p>
            After 3 years I decided to leave Dalux because I wanted to try something new and I was curious to see what challenges I would find in other companies.
        </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.dtu}
        position={"Master of Science in Engineering"}
        startDate={new Date(2015, 7, 1)}
        endDate={new Date(2017, 6, 1)}
        type={"studies"}
      >
        <p>
            For my master I studied digital media technologies with a focus on game development and 3D graphics. 
            Here I learned how to develop games and apps using <span className="badge">Unity</span> and <span className="badge">C#</span> focusing on the games kdevelopment and graphics.
        </p>
        <p>
            I got an A for my thesis where I developed new ways of visualizing the digital 3D models on the construction site using Mixed Reality. 
            The project was created in collaboration with Dalux and was later refined into the product <a href="https://www.dalux.com/dalux-field/twinbim/" target="_blank">TwinBIM</a>.
        </p>
      </HistoryEntry>
    </Card>
  );
}
