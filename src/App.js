import ContactInfoSection from "./components/ContactInfoSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <>
      <h1>Bjørn Vinther</h1>
      <div class="subtitle">Software Engineer</div>

      <ContactInfoSection />

      <h2>Experience</h2>
      <ExperienceSection />


      <h2>Education</h2>
      <EducationSection/>

      <h2>Projects</h2>
      <ProjectsSection/>
    </>
  );
}
