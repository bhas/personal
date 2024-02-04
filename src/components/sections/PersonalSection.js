import Card from "../Card";
import Image from "../Image";
import "./PersonalSection.css";

export default function PersonalSection() {
  return (
    <>
      <Card title={"About Me"}>
        <div className="personal-container">
          <div>
            <p>
              I am a 31 year old guy with a great interest in programming. My
              analytical and structured way of working helps me to design and
              implement complex but scalable solutions. I see code as a craft
              and I put a lot of pride and effort into the work I deliver.
              Growing as a person and software developer is one of my main
              motivations and I constantly seek out opportunities for that.
            </p>

            <p>
              Besides that, I’m a very social, relaxed, and humorous person who
              gets along with most people. be creative though drawing or costume
              crafting. Having a healthy work environment where people thrive
              means a lot to me and I actively engage in activities to foster
              that.
            </p>

            <p>
              One of my big weaknesses as a developer is that I don’t drink
              coffee, and I have come to terms with the fact that it will become
              my inevitable downfall. But until then, I strut around spreading
              my positive energy and expertise. ☀️
            </p>
          </div>
          <Image src={process.env.PUBLIC_URL + "portrait.png"} width={200} />
        </div>
      </Card>
    </>
  );
}
