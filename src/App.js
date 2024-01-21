import ContactInfoSection from "./components/sections/ContactInfoSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import "./App.css";
import SkillsSection from "./components/sections/SkillsSection";

export default function App() {
  return (
    <>
      <div className="contact-info-container">
        <h1>Bjørn Vinther</h1>
        <div className="subtitle">Software Engineer</div>
      </div>
      <ContactInfoSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection/>
    </>
  );
}
