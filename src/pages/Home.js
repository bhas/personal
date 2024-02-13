import ContactInfoSection from "../components/sections/ContactInfoSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="contact-info-container">
        <h1>Bjørn Vinther</h1>
        <div className="subtitle">Software Engineer</div>
      </div>
      <ContactInfoSection />
    </>
  );
}
