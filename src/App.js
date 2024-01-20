import ContactInfoSection from "./components/ContactInfoSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="contact-info-container">
        <h1>Bjørn Vinther</h1>
        <div className="subtitle">Software Engineer</div>
      </div>
      <ContactInfoSection />
      <ExperienceSection />
      <ProjectsSection/>
    </>
  );
}
