import ContactInfoSection from "./components/ContactInfoSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <>
      <h1>Bjørn Vinther</h1>
      <h2>Software Engineer</h2>

      <ContactInfoSection 
        email="g.bvinther@gmail.com" 
        githubUrl={"some-github-url"} 
        linkedInUrl="https://www.linkedin.com/in/bj%C3%B8rn-vinther-402499bb/"
        location="Copenhagen, Denmark" 
      />

      <h2>Experience</h2>
      <ExperienceSection />


      <h2>Education</h2>
      <EducationSection/>

      <h2>Projects</h2>
      <ProjectsSection/>
    </>
  );
}
