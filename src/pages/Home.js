import Card from "../components/ui/Card";
import ContactInfoSection from "../components/sections/ContactInfoSection";
import Header from "../components/ui/Header";
import IconLabel from "../components/ui/IconLabel";
import IconLink from "../components/ui/IconLink";
import Timeline from "../components/timeline/Timeline";

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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card title={"Backend"}>
          <ul>
            <li>.NET</li>
            <li>C#</li>
            <li>SQL</li>

            {/* Go */}
            <li>And more...</li>
          </ul>

        </Card>

        <Card title={"Frontend"}>
          <ul>
            <li>React</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            {/* Tailwind, d3 */}
            <li>And more...</li>
          </ul>
        </Card>



        <Card title={"Other"}>
          <ul>
            <li>Jira</li>
            <li>Github</li>
            <li>Azure DevOps</li>
            <li>Kafka</li>
            <li>Unity</li>
            <li>And more...</li>
          </ul>
        </Card>
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

function Subsection({title, children}) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-3xl text-center text-slate-300">{title}</h2>
        <div className="text-center text-slate-400">{children}</div>
      </div>
    )
}