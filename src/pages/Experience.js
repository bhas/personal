import BadgeContainer from "../components/BadgeContainer";
import Card from "../components/Card";
import HistoryEntry from "../components/HistoryEntry";
import { badges, companies } from "../data/resumeData";

export default function Experience() {
  return (
    <Card title={"Experience"}>
      <HistoryEntry
        company={companies.maersk}
        position={"Software Engineer"}
        startDate={new Date(2022, 0, 1)}
        endDate={null}
        type={"work"}
      >
        <BadgeContainer
          badges={[
            badges.dotnet,
            badges.csharp,
            badges.sql,
            badges.vue,
            badges.css,
            badges.azure,
            badges.githubActions,
            badges.kafka,
            badges.jira,
            badges.github,
          ]}
        />
        <p>
          Maersk is a global leader in container logistics and is currently
          undergoing a digital transformation to become the world's leading
          integrator of container logistics. To achieve this ambitious goal we
          are using the latest technologies and best practices including Azure,
          Kubernetes, Github Pipelines, and Kafka.
        </p>

        <p>
          Since I started in Maersk January 2022 I have had the opportunity to
          work with a lot of talented developers in several different areas and
          technologies.
          <ul>
            <li>
              Most of my time I have spent in the backend where I have been
              tasked to migrate our old integration system written in Golang to
              a .NET microservice. This has been a great opportunity for me to
              further enhance my skills knowlegde on how to implement scalable
              and maintainable microservices using .NET, Kafka, and Postgres
              SQL.
            </li>
            <li>
              In the frontend I have been working with Vue.js to implement new
              features and improve the user experience.
            </li>
          </ul>
          Additionally, I have taken the initiative on a lot of supporting tasks
          such as:
          <ul>
            <li>Designing and implementing core system components.</li>
            <li>
              Providing support, guidance, and feedback to junior developers
            </li>
            <li>Refining and estimating new tasks in Jira</li>
            <li>
              Monitoring and providing support in our production environment
            </li>
            <li>Highlighting and reducing potential risks and tech debt.</li>
          </ul>
        </p>
        <p>
          I am particularly proud of my continuos effort to improve the quality
          of our codebase and the upskilling of our team members. To which I
          have recieved a lot of positive feedback and two company awards for.
          🏆
        </p>
        <p>
          Outside of my regular work I am trying my best to actively contribute
          to the social environment in the company by:
          <ul>
            <li>
              Joining for weekly sports sessions with my colleagues such as
              volley ball and badminton
            </li>
            <li>Arrange board game sessions</li>
            <li>
              Remember and celebrate birthdays and other special occasions
            </li>
          </ul>
        </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.republica}
        position={"Senior System Developer"}
        startDate={new Date(2020, 7, 1)}
        endDate={new Date(2022, 0, 1)}
        type={"work"}
      >
        <BadgeContainer
          badges={[
            badges.dotnet,
            badges.csharp,
            badges.sql,
            badges.react,
            badges.css,
            badges.azureDevOps,
          ]}
        />
        <p>
          Republica was the first place where I really got to stand on my own
          feet. Beforehand I had mostly worked with a monolithic architecture
          and tools developed inhouse in Dalux. Republica was had implemented
          their APIs as microservices using .NET Core with SQL Server and all
          communication between the services was implemented using event queues
          or API calls. For the UI we used React. Everything was managed using
          Azure DevOps and deployed to local Linux servers.
        </p>
        <p>
          Although we were using a lot of new technologies, I quickly found that
          the code quality was quite low which caused the system to be very
          unstable and slow. I therefore took it upon myself to improve the code
          quality and stability of the system.
        </p>
        <p>
          In my time in the team I accomplished the following:
          <ul>
            <li>
              Refactored and optimized our service used for importing all our
              data into the system. Not only did it make the system much more
              stable but it also cut down the time it took to import data from 2
              hours to less than 2 minutes. Most of the performance increase was
              achieved by optimizing the SQL queries and the data structures
              used in the service.
            </li>
            <li>
              Implement a search service which enabled users quickly search
              through millions of data entries with complex queries. The service
              was implemented using Apache Solr and C#.
            </li>
            <li>
              improved our supporting features such as CI/CD deployments and
              documentation in Azure DevOps, documentation, and logging via
              Graylog.
            </li>
            <li>Help implement new features in our UI developed in React</li>
          </ul>
        </p>
        <p>
          After a little more than a year I found that I had reached the limit
          to what I could learn at Republica and I decided it was time to look
          for opportunities elsewhere.
        </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.dalux}
        position={"Software Engineer"}
        startDate={new Date(2017, 5, 1)}
        endDate={new Date(2020, 7, 1)}
        type={"work"}
      >
        <BadgeContainer
          badges={[
            badges.dotnet,
            badges.csharp,
            badges.sql,
            badges.angular,
            badges.typescript,
            badges.javascript,
            badges.css,
            badges.d3,
          ]}
        />
        <p>
          I started my professional carreer at Dalux where I worked as a
          fullstack developer in a rapidly growing environment. Initially, I was
          mostly solving smaller tasks, but as leadership realised my talent I
          was given more responsibilities and eventually moved on to design and
          implement core systems and guiding junior developers.
        </p>
        <p>
          I was involved in many different projects and tasks, but the most
          notable ones were:
          <ul>
            <li>
              I participated a major project to migrate our single page
              application of more than 1 million lines of code. I was
              responsible for converting several modules of our UI as well as
              creating core UI compoenents to be used all over the application.
              The new UI was implemented using Angular with Typescript and CSS.
            </li>
            <li>
              I designed and implemented two integrations using C# and SQL:
              <ul>
                <li>
                  One integration was used to transfer all data between our two
                  main systems. The main challenge was to ensure the accuracy of
                  the data transfer and handle any inconsistencies or
                  discrepancies between the systems.
                </li>
                <li>
                  The other integration was to the external APIs of{" "}
                  <a href="https://en.energinet.dk/" target="_blank">
                    EnergyNet
                  </a>{" "}
                  where we daily imported thousands of energy readings.
                  Furthermore, I developed the system used for analyzing the
                  readings and visualize them using{" "}
                  <a
                    href="https://observablehq.com/@d3/gallery?utm_source=d3js-org&utm_medium=nav&utm_campaign=try-observable"
                    target="_blank"
                  >
                    D3.js
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              I performed customer support and attended workshops with customers
              to understand their needs and challenges.
            </li>
            <li>
              Refactored and improved the code quality of our central systems.
            </li>
          </ul>
        </p>

        <p>
          I formed a lot of good friendships at Dalux, friendships that are
          still strong today. Dalux' great culture inspired me to take the
          initiative to arrange social events such as football, friday bars, and
          beach trips. I believe that a good culture is essential for a good
          work environment and I believe that my efforts helped create a great
          culture at Dalux.
        </p>
        <p>
          After 3 years I decided to leave Dalux because I wanted to try
          something new and I was curious to see what challenges I would find in
          other companies.
        </p>
      </HistoryEntry>

      <HistoryEntry
        company={companies.dtu}
        position={"Master of Science in Engineering"}
        startDate={new Date(2015, 7, 1)}
        endDate={new Date(2017, 6, 1)}
        type={"studies"}
      >
        <BadgeContainer badges={[badges.csharp, badges.unity]} />
        <p>
          For my master I studied digital media technologies with a focus on
          game development and 3D graphics. Here I learned how to develop games
          and apps using Unity and C#.
        </p>
        <p>
          I got an A for my thesis where I developed new ways of visualizing the
          digital 3D models on the construction site using Mixed Reality. The
          project was created in collaboration with Dalux and was later refined
          into the product{" "}
          <a href="https://www.dalux.com/dalux-field/twinbim/" target="_blank">
            TwinBIM
          </a>
          .
        </p>
      </HistoryEntry>
    </Card>
  );
}
