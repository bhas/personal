import Card from "../components/Card";
import ContactInfoSection from "../components/sections/ContactInfoSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="contact-info-container">
        <h1>Bjørn Vinther</h1>
        <div className="subtitle">Passionate Software Engineer</div>
      </div>
      <ContactInfoSection />
      {/* <h1>Who I am</h1>
      <h1>Technical Skills</h1>
      <h1>What I offer</h1>
      <h1>Work experience</h1>
      <h1>Side projects</h1>
      <h1>What motives me</h1> */}
    </>
  );
}
