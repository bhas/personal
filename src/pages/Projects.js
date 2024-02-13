import BadgeContainer from "../components/BadgeContainer";
import Card from "../components/Card";
import IconLabel from "../components/IconLabel";
import Image from "../components/Image";
import Project from "../components/Project";
import { badges } from "../data/resumeData";
import "./Projects.css";

export default function Projects() {
  return (
    <Card title={"Projects"}>
      <Project title={"HackYourFuture Denmark"} subtitle={"Volunteering"}>
        <BadgeContainer
          badges={[badges.sql, badges.react, badges.javascript]}
        />
        <p>
          In Oct 2023 I started volunteering as a mentor at{" "}
          <a href="https://www.hackyourfuture.dk/" target="_blank">
            HackYourFuture Denmark
          </a>
          , a non-profit organization that teaches refugees and asylum seekers
          how to code.
        </p>
        <p>
          I have have always loved learning and teaching, and HackYourFuture is
          a great opportunity for me to do both while also helping people in
          need. Since I joined, I have taught students how to code in
          Javascript, SQL, and React and provided them feedback and guidance on
          their projects. It has also enabled my to connect with a lot of
          talented people with different backgrounds and cultures, which is
          still an enjoyable and great learning experience for me.
        </p>
      </Project>

      <Project title={"This webpage"} subtitle={"Webpage"}>
        <BadgeContainer badges={[badges.react, badges.aws, badges.github]} />
        <IconLabel
          iconClass="fa-brands fa-github"
          label="github.com/bhas"
          url="https://github.com/bhas"
        />
        <p>
          This webpage was a fun little project I did to improve my React skills
          and showcase some of what I can do. I have challenged myself to learn
          how to use AWS and GitHub Actions to host the webpage on a custom
          domain and automatically deploy new versions of the webpage when I
          push new code to GitHub.
        </p>
        <p>
          I am planning to continusly work on this webpage and add more features
          such as:
          <ul>
            <li>Translation to Danish version</li>
            <li>Dynamically generated resume as a downloadable pdf</li>
            <li>Easy search for keywords</li>
            <li>sub pages for future projects</li>
            <li>Adding improved styling and animations</li>
            <li>Make the website mobile friendly</li>
            <li>Styling using Tailwind.css</li>
          </ul>
          If you have any good ideas please let me know. 😊
        </p>
      </Project>

      <Project title={"Game Jams"} subtitle={"Game Project"}>
        <BadgeContainer badges={[badges.csharp, badges.unity, badges.github]} />
        <p>
          A game jam is an event where you have to make a game in a short amount
          of time, usually over a weekend. It really forces you to keep focus
          and prioritize you work according to your skill level and limited time
          available. It is also common that you with people of different skill
          sets and backgrounds, which teaches you how to work in teams and how
          to communicate with people of different backgrounds.
        </p>
        <p>
          Since my student days I have participated in several game jams,
          including{" "}
          <a href="https://nordicgamejam.com/" target="_blank">
            Nordic Game Jam
          </a>{" "}
          and{" "}
          <a href="https://levelonejam.com/" target="_blank">
            Level One Jam
          </a>
          . Most recently I participated with my friend in Jan 2023 Game Jam
          where we developed a small game in Unity where the player is trying to
          navigate a teddy bear through a world with various challenges.
        </p>
        <p>
          I normally do mostly coding but this time I decided to challenge
          myself by taking on the role of the creative artist and focus more on
          the visual aspects of the game such as 3D modelling, animations, and
          tieing it all together with the game code.
        </p>
        {/* https://itch.io/jam/nordic-game-jam-2023/rate/2018091 */}
      </Project>

      <Project title={"The Danish Redcross Youth"} subtitle={"Volunteering"}>
        <p>
          My first experience as a volunteer started in{" "}
          <a href="https://www.urk.dk/english" target="_blank">
            The Danish Red Cross Youth
          </a>{" "}
          where I was responsible for helping kids age 8 to 18 with their
          homework. This homework could be anything from math and physics to
          history and litterature.
        </p>
        <p>
          It taught me a lot about how to communicate with people of all ages
          and how to explain difficult topics in simple or creative ways. I also
          experienced how my teaching style and approach would have a
          significant effect on the students ability to learn. I found that
          building trust and keeping the atmostphere light and fun was the best
          way to get the students to open up and stay engaged.
        </p>
        <p>
          Eventually, I decided to stop volunteering at the Red Cross because I
          moved to the other end of Copenhagen and it was no longer practical
          for me to continue. 😢
        </p>
      </Project>

      <Project
        title={
          "Improved Construction and Facility Management using Mixed Reality"
        }
        subtitle={"Master's Thesis"}
      >
        <div className="thesis-content-container">
          <div>
            <p>
              My friend and I wrote our thesis in collaboration with Dalux on
              the topic:{" "}
              <i>
                Improved Construction and Facility Management using Mixed
                Reality
              </i>
              . In overly simplified words, we made{" "}
              <a
                href="https://www.webwise.ie/parents/pokemon-go/"
                target="_blank"
              >
                Pokemon Go
              </a>{" "}
              for the construction industry.
            </p>
            <p>
              The construction industry is using digital 3D models to design and
              plan the construction of buildings. These models are not only used
              to visualize the building, but also contain technical
              specifications to help the construction workers understand how the
              building should be built. It is therefore crucial that the
              construction workers have easy access to these models on the
              construction site.
            </p>
            <p>
              However, these 3D models can be huge, sometimes several gigabytes
              in size. Imagine a 3D model of a hospital with thousands of rooms
              that contains all details about the pipes, wires, and other
              technical specifications. We faced two main challenges:
              <ul>
                <li>
                  How do we manage such a big files on a small mobile device
                  with limited processing power and wifi signal?
                </li>
                <li>
                  How do you visualize such a huge model on a small screen so
                  non-technical people can easily understand and use it?
                </li>
              </ul>
            </p>
            <p>
              Using Unity and C# we managed to develop an app that could overlay
              the digital model on top of the mobile device's camera. But to do
              that we had to:
              <ul>
                <li>
                  Determine the location of the user by using the camera to
                  build a spatial model of the room the user was in and then
                  identifying the position in the digital model
                </li>
                <li>
                  design algorithms to preprocess, compress and organize the
                  data of the 3D models to enable the app to stream the data
                  fast and effienciently
                </li>
                <li>
                  write custom code to visualize the 3D graphics and enable the
                  user to select elements to inspect their tehcnical details.
                </li>
              </ul>
            </p>
            <p>
              In the end the project was a great success, we got an A, and the
              project was later refined into the product{" "}
              <a
                href="https://www.dalux.com/dalux-field/twinbim/"
                target="_blank"
              >
                TwinBIM
              </a>
              .
            </p>
          </div>
          <Image
            src={process.env.PUBLIC_URL + "/thesis.png"}
            alt={"Thesis"}
            width={250}
            height={250}
            caption={
              "Screenshot of our app in action. You can see the virtual 3D model rendered on top of the camera. The striped rendering is used to indicate that the object is behind the wall or under the floor."
            }
          />
        </div>
      </Project>
    </Card>
  );
}
