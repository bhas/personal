import ContactInfoSection from "../components/sections/ContactInfoSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-white font-bold mb-3 text-5xl">Bjørn Vinther</h1>
        <div className="text-orange-400 font-normal text-2xl">Passionate Software Engineer</div>
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
