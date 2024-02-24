import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { companies } from "../../data/resumeData";
import PdfExperienceEntry from "../components/PdfExperienceEntry";
import PdfEducationEntry from "../components/PdfEducationEntry";
import PdfBulletList from "../components/PdfBulletList";

function CreateStyles(colors) {
  return StyleSheet.create({
    title: {
      fontSize: 40,
      fontWeight: 900,
      color: colors.accent,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 500,
      color: colors.lightBlue,
    },
    text: {
      marginTop: 5,
    },
    link: {
      color: colors.accent,
    },
    header: {
      color: colors.accent,
      fontWeight: 500,
      fontSize: 18,
      marginTop: 15,
    },
    listItem: {
      display: "list-item",
    },
  });
}

export default function PdfPage1MainContent({ colors }) {
  const styles = CreateStyles(colors);
  return (
    <>
      <Text style={styles.title}>Bjørn Vinther</Text>
      <Text style={styles.subtitle}>Software Engineer</Text>
      <Text style={styles.text}>
        I'm a dedicated senior fullstack developer with a great passion for all
        areas of software development. I embrace coding as a craft and put a lot
        of pride and effort into the work I deliver. It motives me to learn new
        skills and create user friendly, scalable solutions in collaborating
        with others. With a proactive approach, I tackle complex challenges and
        deliver high-quality results. My strength lies in analyzing requirements
        and finding elegant technical solutions.
      </Text>
      <Text style={styles.text}>
        I believe teamwork and a supportive work environment are crucial for
        success. That's why I actively participate in efforts to create a
        positive work culture. With my friendly and humorous nature, I build
        strong relationships with people around me.
      </Text>
      {/* <Text style={styles.text}>
        If you are interested in learning more about me and my work, please
        visit my website at{" "}
        <Link style={styles.link} src="https://bvinther.com/">
          bvinther.com
        </Link>
      </Text> */}

      <Text style={styles.header}>Experience</Text>
      <PdfExperienceEntry
        startDate={new Date(2022, 0, 1)}
        endDate={null}
        company={companies.maersk.name}
        companyUrl={companies.maersk.linkedInUrl}
        position="Software Engineer"
        colors={colors}
      >
        <Text style={styles.text}>
          At Maersk, I played an essential role in the implementation and
          maintenance of our integration between Maersk's platform and
          customers' systems. A significant challenge involved migrating our
          legacy Golang-based integration to a .NET microservice architecture.
        </Text>
        <PdfBulletList
          text={"Key contributions:"}
          items={[
            "Mordenized of our system by designing and implementing core components using technologies such as Kafka, PostgreSQL, and .NET.",
            "Supported junior developers by providing guidance, and constructive feedback, fostering their professional growth and contribution to the team.",
            "Enhanced system reliability by implementing robust monitoring solutions, enabling the early detection and resolution of issues within our production environment.",
            "Contributed to the frontend development efforts, utilizing Vue.js to implement new features and enhance the overall user experience.",
            "Planned social events for the Copenhagen based people such as beach volley and board game sessions.",
          ]}
        />
      </PdfExperienceEntry>
      <PdfExperienceEntry
        startDate={new Date(2020, 7, 1)}
        endDate={new Date(2022, 0, 1)}
        company={companies.republica.name}
        companyUrl={companies.republica.linkedInUrl}
        position="Senior System Developer"
        colors={colors}
      >
        <Text style={styles.text}>
          During my time at Republica, I was a member of a small tech team
          responsible for overseeing the internal platform used to manage
          product data and associated assets. When I started, the existing
          codebase was in a poor state and the system was not reliable so our
          first objective was to get it into a reliable state.
        </Text>
        <PdfBulletList
          text={"Key contributions:"}
          items={[
            "Successfully enhanced the performance and reliability of the system through codebase optimizations and the introduction of automated testing, resulting in a more robust and stable platform.",
            "Implemented a comprehensive cross-service search solution utilizing Apache Solr. This solution empowered users to seamlessly search through millions of products at realtime.",
            "Collaborated with the team to implement new functionalities within our user interface developed using React.",
          ]}
        />
      </PdfExperienceEntry>
    </>
  );
}
