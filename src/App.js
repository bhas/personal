import ContactInfoSection from "./components/ContactInfoSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <>
      <h1>Bjørn Vinther</h1>
      <div class="subtitle">Software Engineer</div>
      <ContactInfoSection />
      <ExperienceSection />
      <ProjectsSection/>
    </>
  );
}
