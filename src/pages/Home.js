import FeatureItem from "../components/FeatureItem";
import ContactInfoSection from "../components/sections/ContactInfoSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-white font-bold mb-3 text-5xl">Bjørn Vinther</h1>
        <div className="text-orange-400 font-normal text-2xl">Passionate Software Engineer</div>
      </div>
      <ContactInfoSection />


      {/* <h1>Who I am</h1> */}
      I'm Bjorn, your friendly neighborhood code tinkerer and problem solver.
      I use passion and expertise in software development to build large-scale software systems to make an ambitious and meaningful impact.

      <h1 className="text-white text-4xl mb-2 mt-8">What I offer</h1>
      <div className="flex flex-row flex-wrap">
        <FeatureItem
          title="Quality-driven"
          description="I strive to deliver high-quality solutions that meet the needs of the user and the business."
        />
        <FeatureItem
          title="Quality-driven"
          description="I strive to deliver high-quality solutions that meet the needs of the user and the business."
        />
        <FeatureItem
          title="Quality-driven"
          description="I strive to deliver high-quality solutions that meet the needs of the user and the business."
        />
        <FeatureItem
          title="Quality-driven"
          description="I strive to deliver high-quality solutions that meet the needs of the user and the business."
        />
        <FeatureItem
          title="Quality-driven"
          description="I strive to deliver high-quality solutions that meet the needs of the user and the business."
        />
        <FeatureItem
          title="Quality-driven"
          description="I strive to deliver high-quality solutions that meet the needs of the user and the business."
        />


      </div>
      <ul>
        <li>Quality-driven</li>
        <li>Flexible</li>
        <li>Constant learner</li>
        <li>Smart worker</li>
        <li>Social</li>
        <li>Team player</li>
      </ul>

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


      <h1>Technical Skills</h1>
      Frontend

      Backend
      
      Other

      list languages I have worked with 
      slider
      
      


      
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
