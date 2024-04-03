import BadgeContainer from "../components/BadgeContainer";
import Card from "../components/Card";
import HistoryEntry from "../components/HistoryEntry";
import Highlight from "../components/ui/Highlight";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import { badges, companies } from "../data/resumeData";

export default function Experience() {
  return <>
    <PageHeader>Experience</PageHeader>

    <Section id="maersk">
      <Header icon={companies.maersk.iconUrl}>{companies.maersk.name}</Header>
      <div>
        <div className="text-slate-500 text-sm md:text-base">React • Angular • C#/.NET • Jira • Angular • C#/.NET • Jira</div>

        <img className="h-60 float-right m-3 rounded-md" src="https://www.maersk.com/~/media_sc9/maersk/news/news/images/2019/02/chastine-maersk-feeder_1024x586_v1.jpg"></img>
        {/* <ImgContainer
        urls={[
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/VISTULA_MAERSK_%2848821017642%29.jpg/1200px-VISTULA_MAERSK_%2848821017642%29.jpg",
        ]}>
      </ImgContainer> */}
        <p>
          Maersk is a global leader in container logistics and is currently
          undergoing a digital transformation to become the world's leading
          integrator of container logistics. To achieve this ambitious goal they
          are using the latest technologies and best practices such as Azure,
          Kubernetes, Kafka etc.
        </p>

        <p>
          Since I started in Maersk January 2022 I have had the opportunity to
          work with a lot of talented developers in several different areas and
          technologies.
        </p>
        <ul>
          <li>
            Most of my time I have spent in the backend where I have been
            tasked to migrate our old integration system written in Golang to
            a <Highlight>.NET</Highlight> microservice. This has been a great opportunity for me to
            further enhance my skills knowlegde on how to implement scalable
            and maintainable microservices using <Highlight>.NET</Highlight>, <Highlight>Kafka</Highlight>, and <Highlight>Postgres
              SQL.</Highlight>
          </li>
          <li>
            In the frontend I have been working with <Highlight>Vue.js</Highlight> to implement new
            features and improve the user experience.
          </li>
        </ul>

        <p>
          Additionally, I have taken the initiative on a lot of supporting tasks
          such as:
        </p>
        <ul>
          <li>Designing and implementing core system components.</li>
          <li>
            Providing support, guidance, and feedback to junior developers
          </li>
          <li>Refining and estimating new tasks in <Highlight>Jira</Highlight></li>
          <li>
            Monitoring and providing support in our production environment
          </li>
          <li>Highlighting and reducing potential risks and tech debt.</li>
        </ul>

        <p>
          I am particularly proud of my continuos effort to improve the quality
          of our codebase and the upskilling of our team members. To which I
          have recieved a lot of positive feedback and two company awards for.
          🏆
        </p>
        <p>
          Outside of my regular work I am trying my best to actively contribute
          to the social environment in the company by:
        </p>
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
      </div>

    </Section>

    <Section id="republica">
      <Header icon={companies.republica.iconUrl}>{companies.republica.name}</Header>
      {/* <ImgContainer
        urls={[
          "https://bureaubiz.dk/wp-content/uploads/2020/01/Coop-1536x960.png",
          "https://images.weare365.io/filters:format(.webp)/1920x0/dk/full/181f46c1ab374665b5b3591efc2dcea59793cc74.jpg"
        ]}>
      </ImgContainer> */}

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
      </p>
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
      <p>
        After a little more than a year I found that I had reached the limit
        to what I could learn at Republica and I decided it was time to look
        for opportunities elsewhere.
      </p>
    </Section>

    <Section id="dalux">
      <Header icon={companies.dalux.iconUrl}>{companies.dalux.name}</Header>
      <ImgContainer
        urls={[
          "https://aecmag.com/wp-content/uploads/2017/07/Dalux-FW.gif"
        ]}>
      </ImgContainer>
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
      </p>
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
    </Section>

    <Section id="university">
      <Header icon={companies.dtu.iconUrl}>{companies.dtu.name}</Header>
      <ImgContainer
        urls={[
          "https://www.dtu.dk/-/media/DTUdk/Nyheder/Webnyheder/2021/01/Skylab-Larua-Stamer.ashx?mw=700&hash=ED8E87678C2244B39D815A186C1707BD",
          process.env.PUBLIC_URL + "/thesis.png"
        ]}>
      </ImgContainer>
      <p>
        For my master I studied digital media technologies with a focus on
        game development and 3D graphics. Here I learned how to develop games
        and apps using Unity and C#.
      </p>
      <p>
        I got an A for my thesis where I developed new ways of visualizing the
        digital 3D models on the construction site using Mixed Reality. The
        project was created in collaboration with Dalux and was later refined
        into the product <a href="https://www.dalux.com/dalux-field/twinbim/" target="_blank">TwinBIM</a>.
      </p>
    </Section>
  </>
}

function ImgContainer({ urls }) {
  // return <div className="flex flex-row items-stretch justify-start max-h-64">
  //   {urls.map(x => <img className="object-contain" src={x}></img>)}
  // </div>
}

function Header({ children, icon }) {
  return <>
    <div className="flex flex-row items-center">
      <img src={icon} className="h-12 w-12 mr-3 rounded-sm" />
      <h2 className="text-4xl">{children}</h2>
    </div>
  </>
}