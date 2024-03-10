import Card from "../components/ui/Card";
import ContactInfoSection from "../components/sections/ContactInfoSection";
import Header from "../components/ui/Header";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center py-10 text-center lg:text-left">
        <h1 className="text-white font-bold mb-3 text-5xl">Bjørn Vinther</h1>
        {/* <div className="text-orange-400 font-normal text-2xl">Passionate Software Engineer</div> */}
        <div className="text-orange-400 font-normal text-2xl mt-2">Your friendly neighborhood code tinkerer and problem solver.</div>
      </div>

      {/* <ContactInfoSection /> */}

      <div className="text-xl my-2 text-left">
        I use my passion and expertise in software development to build large-scale software systems to make an ambitious and meaningful impact.
      </div>


      <Header title="Skills" />
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
            {/* Tailwind, d3 */}
            <li>And more...</li>
          </ul>
        </Card>
      </div>

      <Header title="Qualities" />
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


      {/* 

<ContactInfoSection />
      
       */}

      {/* 
      
      <h1>Who I am</h1>
      Your friendly neighborhood code tinkerer and problem solver. I'm Bjorn, a Copenhagen-based, fullstack developer passionated about building large software systems to accomplish ambitious goals. I have a strong interest in the social environment and how it can be improved through technology. I am a fast learner and I am always looking for new challenges to grow and improve my skills. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment. I am a very relaxed and humorous person who gets along with most people. I am a very social person and I thrive in a social environment.

      

<h1>What I offer</h1>
Quality-driven
Flexible
Constant learner
Smart worker
Social
Team player


      
      
      


      
      <h1>Work experience</h1>
      

      <h1>Side projects</h1>
      
      
      <h1>What motives me</h1> 
      social environment
      building large-scale ambitios systems
      Learning
      Making a difference
      improving existing solutions

      How I would like to improve
      Cloud computing
      new backend languages
      large scale frontends



      */}



    </>
  );
}
