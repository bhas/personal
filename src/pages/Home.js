import Card from "../components/ui/Card";
import ContactInfoSection from "../components/sections/ContactInfoSection";
import Header from "../components/ui/Header";
import IconLabel from "../components/ui/IconLabel";
import IconLink from "../components/ui/IconLink";
import Timeline from "../components/timeline/Timeline";
import Skill from "../components/skill/Skill";
import SkillHeader from "../components/skill/SkillHeader";
import Stars from "../components/skill/Stars";
import SkillLevelTip from "../components/skill/SkillLevelTip";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center py-10 text-center lg:text-left">
        <h1 className="text-white font-bold mb-3 text-5xl">Bjørn Vinther</h1>
        <div className="text-orange-400 font-normal text-2xl mt-2">Your friendly neighborhood code tinkerer and problem solver.</div>
      </div>

      <div className="flex my-5 flex-row flex-wrap gap-8 items-center justify-center text-xl">
        <IconLink icon="fa-solid fa-envelope" href="mailto:g.bvinther@gmail.com">g.bvinther@gmail.com</IconLink>
        <IconLink icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/bjorn-vinther/">Bjørn Vinther</IconLink>
        <IconLink icon="fa-brands fa-github" href="https://github.com/bhas">github.com/bhas</IconLink>
        <IconLabel icon="fa-solid fa-location-dot">Copenhagen, Denmark</IconLabel>
      </div>

      <div className="text-xl my-2 text-left">
        I use my passion and expertise in software development to build large-scale software systems to make an ambitious and meaningful impact.
      </div>


      <Header title="My Skills" />
      <div className="text-center">
        Here you can see my current skillset.
      </div>

      <div className="flex flex-row gap-6 mt-10 flex-wrap">
        <SkillLevelTip level={1} title={"Fundamental"}>
          I understand the core concepts, but have little to no hands-on experience with the technology.
        </SkillLevelTip>
        <SkillLevelTip level={2} title={"Skilled"}>
          I have hands-on experience with the technology and can work with it independently.
        </SkillLevelTip>
        <SkillLevelTip level={3} title={"Expert"}>
          I have extensive experience with the technology and can lead / mentor others.
        </SkillLevelTip>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8">

        <div>
          <SkillHeader>Frontend</SkillHeader>
          <Skill name="React" level={3}>
            I have a little more than a year of experience with React where I implemented complex user flows and components.
            Additionally, I have been teaching React at HackYourFuture which has given me a deep understanding of the library.
          </Skill>
          <Skill name="Vue" level={2}>
            At Maersk I have been working with Vue 2 for a few months where I have implemented smaller features and bug fixes.
            Addiotionally, I have been learning Vue 3 in my spare time and have implemented a few small projects.
          </Skill>
          <Skill name="Angular" level={1}>
            I spent a little more than a year working with Angular 2 at Dalux. Here I implemented several features and components.
            Since it has been a while since I worked with Angular, I would need to refresh my memory before working with it again.
          </Skill>
          <Skill name="HTML" level={3}>
            I understand how to write semantic HTML and have experience with implementing complex layouts.
          </Skill>
          <Skill name="Javascript" level={3}>
            I have been working with Javascript for several years and have a good understanding of the language.
            I have mostly been using it in combination with React and Angular.
          </Skill>
          <Skill name="CSS" level={2}>
            I have a solid understanding of CSS and can figure out how to implement most designs. CSS animations is the only area which I am not proficient.
          </Skill>
          <Skill name="TailwindCSS" level={2}>
            I took it upon myself to learn TailwindCSS as a part of creating this website.
            I found it very easy to pick up the framework and am glad to have it as a permanent part of my toolkit.
          </Skill>
          <Skill name="Sass" level={1}>
            Some time back I played around with Sass as a part of a spare time project.
          </Skill>
          <Skill name="Typescript" level={2}>
            Given my proficiency in C#, typescript has been easy for me to adapt. Though, only few of the projects I have worked on used it.
          </Skill>
          <Skill name="D3" level={2}>
            During my studies and time in Dalux I used D3 to create data-driven and interactive line- and bar charts.
          </Skill>
          <Skill name="Testing" level={1}>
            I have some experience with frontend testing using Jest and CodeceptJS with Playwright.
          </Skill>


        </div>
        <div>
          <SkillHeader>Backend</SkillHeader>
          <Skill name="C# / .NET" level={3}>
            In my 7+ years of software developer carreer I have always been using C# / .NET in the backend.
            This includes several large-scale projects some of which I have been mentoring and leading.
          </Skill>
          <Skill name="Databases" level={2}>
            My knowledge of databases is mostly limited to relational databases, which I have used in all my career. Such include Postgres, MySQL, and SQL Server.
            I know how to design a normalized database, but have little experience with other databases such as NoSQL databases or graph databases.
          </Skill>
          <Skill name="Microservices" level={3}>
            I have a great interest in microservices and have worked on several projects using this architecture.
            I have experience with designing and implementing microservices using .NET and also some of the challenges that comes with distributed systems.
          </Skill>
          <Skill name="Events" level={2}>
            I have worked with event-driven architectures and have experience with implementing event-driven systems using Kafka and RabbitMQ.
          </Skill>
          <Skill name="APIs" level={3}>
            I have a lot of experience with designing and implementing APIs in .NET. APIs are the backbone of most of the systems I have worked on and I have a good understanding of the best practices and patterns.
          </Skill>
          <Skill name="Cloud" level={2}>
            Though I have limited hands-on experience with configuring and setting up the cloud environment, I have a good understanding of the core concepts and have read a lot about cloud architecture.
            I understand the services provided by popular cloud providers such as Azure and AWS and have a good understanding of the benefits they bring. I hosted this service in AWS.
          </Skill>
          <Skill name="Security" level={1}>
            I have a basic understanding of application security and learned about the OWASP-10 and how to guard against this exploits.
            Futhermore, I have a little expirence working with OAuth.
          </Skill>
          <Skill name="Testing" level={3}>
            At Maersk I have been designing and setting up a lot of unit- and integration tests in .NET using xUnit, Moq, Bogus, and FluentAssertions.
            Additionally, I also implemented a few load tests using K6.
          </Skill>

          <SkillHeader>Tools</SkillHeader>
          <Skill name="Jira" level={2}>
            I am currently using Jira in my daily work in Maersk.
          </Skill>
          <Skill name="Azure DevOps" level={2}>
            During my time in Republica I used Azure DevOps to manage pipelines, boards, documentation and repositories.
          </Skill>
          <Skill name="Github / Git" level={3}>
            Github is my go-to version control system and in my daily work I use branches, pull requests, and code reviews.
            I also have some experience with Github Actions.
          </Skill>
          <Skill name="Unity" level={2}>
            During my studies I used Unity for game development and Augemented Reality apps.
            The recent years, I've used it occationally when attending game jams or working on spare time projects.
          </Skill>
          <Skill name="Docker" level={1}>
            I know the benefits of using Docker and have been writing a few docker files for spare time projects, but my hands-on experience is quite limited.
          </Skill>
          <Skill name="Postman" level={3}>
            I designed the postman collections used by our team and use it on a daily basis at Maersk.
          </Skill>
        </div>
      </div>



      <Header title="My Qualities" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <Card
          title="Quality-driven"
          icon={"fa-solid fa-medal"}>
          The quality of the work I deliver is always my top priority. Only then can major goals be achieved.
        </Card>

        <Card
          title="Flexible"
          icon={"fa-solid fa-handshake"}>
          There is a time and place for everything and I'm always ready to adapt to new situations.
        </Card>
        <Card
          title="Hard working"
          icon={"fa-solid fa-wrench"}>
          I lead by example and I'm always ready to put in the extra effort to get the job done.
        </Card>
        <Card
          title="Team player"
          icon={"fa-solid fa-users"}>
          Great accomplishments are achieved through team work. I thrive in collaboration with people of all backgrounds and make sure to support the team to the best of my ability.
        </Card>
        <Card
          title="Caretaker"
          icon={"fa-solid fa-heart"}>
          Human first, worker second. It is essential for me to create a safe and inclusive environment for everyone. I'm always ready to help and support my colleagues and friends.
        </Card>
        <Card
          title="Mentor & mentee"
          icon={"fa-solid fa-seedling"}>
          Teaching and learning has always been a big part of my life. I'm always try to share my knowledge and learn from others.
        </Card>
      </div>

      <Header title="My Road to Glory!" />
      <div className="text-center mb-5 text-lg text-slate-300">Below you can see my journey to where I am today.</div>
      <Timeline />

      {/* <Header title="Side Projects" /> */}

      <Header title="This Motivates Me!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Card
          title="Ambitions"
          icon={"fa-solid fa-rocket"}>
          Working with people who have the ambitions and drive to develop world-class software systems. I want to be a part of something big with a meaningful impact.
        </Card>
        <Card
          title="Socializing"
          icon={"fa-solid fa-champagne-glasses"}>
          Being a part of a dynamic workplace where and each day brings new challenges and opportunities and people are socially engaged with one another.
        </Card>
        <Card
          title="Learning"
          icon={"fa-solid fa-book"}>
          Learning new technologies and methodologies is a passion of mine. I love facing challenges which enables me to grow and develop.
        </Card>
        <Card
          title="Improving code"
          icon={"fa-solid fa-snowplow"}>
          Unlike many developers, I enjoy the process of debugging and refactoring. Thanks to my perfectionism, improving old code can feel just as rewarding as writing new code.
        </Card>
      </div>

      <Header title="My Journey Ahead!" />
      The future is uncertain, but I'm ready to take on the challenges that come my way. I hope to find the opportunities to further improve the below skills
      <div className="flex flex-col gap-10 max-w-xl self-center mt-10">
        <Subsection title="Cloud computing">
          Cloud computing and cloud architecture is a field I'm eager to learn more about. I want to be able to design and implement large-scale cloud solutions using popular cloud providers such as Azure or AWS.
        </Subsection>
        <Subsection title="+1 Backend">
          Currently, most of my backend experience is with C#/.NET, and though I like the language, I would love to learn another modern backend languages such as Golang or Python.
          This would further widen my skillset and make me a more versatile developer.
        </Subsection>
        <Subsection title="Large-scale UIs">
          I have extensive experience with developing large-scale backend systems, but I have yet to learn how to build a large-scale frontend application.
        </Subsection>
        <Subsection title="Leadership">
          Collaborating with people and learning how to shape a team to achieve great things is something I find fascinating.
          I have spent a lot of time reading about leadership and execution and are now ready to get some hands-on practice.
        </Subsection>
      </div>
    </>
  );
}

function Subsection({ title, children }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-3xl text-center text-slate-300">{title}</h2>
      <div className="text-center text-slate-400">{children}</div>
    </div>
  )
}