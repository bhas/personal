import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { companies } from "../../data/resumeData";
import PdfExperienceEntry from "./PdfExperienceEntry";
import PdfEducationEntry from "./PdfEducationEntry";

function CreateStyles(colors) {
  return StyleSheet.create({
    mainPanel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: 25,
      flexGrow: 1,
      flexShrink: 1,
    },
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
    header: {
      color: colors.accent,
      fontWeight: 500,
      fontSize: 18,
      marginTop: 20,
    },
  });
}



export default function PdfMainContent({colors}) {
  const styles = CreateStyles(colors);
  return (
    <View style={styles.mainPanel}>
          <Text style={styles.title}>Bjørn Vinther</Text>
          <Text style={styles.subtitle}>Software Engineer</Text>
          <Text style={styles.text}>
            Dedicated senior fullstack developer with a great passion for all
            areas of software development. Proficient in tackling complex
            challenges with a proactive approach to development and learning. I
            embrace coding as a craft and I put a lot of pride and effort into
            the work I deliver.
          </Text>
          <Text style={styles.text}>
            I recognize the significance of teamwork and a supportive work
            environment, and am dedicated to fostering collaboration and
            positivity within the organization. I actively engage in initiatives
            aimed at cultivating a healthy workplace culture, and I leverage my
            positive demeanor and adept communication skills to build strong
            relationships with people around me.
          </Text>



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
              Maersk is a global leader in container logistics and is currently
              undergoing a digital transformation to become the world's leading
              integrator of container logistics. To achieve this ambitious goal
              we are using the latest technologies and best practices including
              Azure, Kubernetes, Github Pipelines, and Kafka.
            </Text>
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
              Republica was the first place where I really got to stand on my
              own feet. Beforehand I had mostly worked with a monolithic
              architecture and tools developed inhouse in Dalux. Republica was
              had implemented their APIs as microservices using .NET Core with
              SQL Server and all communication between the services was
              implemented using event queues or API calls. For the UI we used
              React. Everything was managed using Azure DevOps and deployed to
              local Linux servers.
            </Text>
          </PdfExperienceEntry>
          <PdfExperienceEntry
            startDate={new Date(2017, 5, 1)}
            endDate={new Date(2020, 7, 1)}
            company={companies.dalux.name}
            companyUrl={companies.dalux.linkedInUrl}
            position="Software Engineer"
            colors={colors}
          >
            <Text style={styles.text}>
              I started my professional carreer at Dalux where I worked as a
              fullstack developer in a rapidly growing environment. Initially, I
              was mostly solving smaller tasks, but as leadership realised my
              talent I was given more responsibilities and eventually moved on
              to design and implement core systems and guiding junior
              developers.
            </Text>
          </PdfExperienceEntry>



          
          <Text style={styles.header}>Education</Text>
          <PdfEducationEntry
            startDate={new Date(2015, 7, 1)}
            endDate={new Date(2017, 6, 1)}
            company={companies.dtu.name}
            position="Master of Science (M.Sc.) in Engineering"
          ></PdfEducationEntry>
          <PdfEducationEntry
            startDate={new Date(2011, 9, 1)}
            endDate={new Date(2015, 7, 1)}
            company={companies.itu.name}
            position="Bachelor of Science (B.Sc.) in Software Development"
          ></PdfEducationEntry>
        </View>
  )
}