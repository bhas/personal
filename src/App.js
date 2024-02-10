import ContactInfoSection from "./components/sections/ContactInfoSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import "./App.css";
import SkillsSection from "./components/sections/SkillsSection";
import PersonalSection from "./components/sections/PersonalSection";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <div className="contact-info-container">
        <h1>Bjørn Vinther</h1>
        <div className="subtitle">Software Engineer</div>
      </div>
      <Header />
      <ContactInfoSection />
      <PersonalSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection /> */}
    </>
  );
}
