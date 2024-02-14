import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
} from "@react-pdf/renderer";
import { companies } from "../data/resumeData";
import { formatDate, formatTimeElapsed } from "../utilities/DateUtilities";

Font.register({
  family: "Noto",
  fonts: [
    { src: process.env.PUBLIC_URL + "/NotoSans-Light.ttf", fontWeight: 100 },
    { src: process.env.PUBLIC_URL + "/NotoSans-Regular.ttf", fontWeight: 500 },
    { src: process.env.PUBLIC_URL + "/NotoSans-SemiBold.ttf", fontWeight: 900 },
  ],
});
Font.register({
  family: "Noto-Bold",
  src: process.env.PUBLIC_URL + "/NotoSans-ExtraBold.ttf",
});
Font.register({
  family: "Noto-Regular",
  src: process.env.PUBLIC_URL + "/NotoSans-Regular.ttf",
});
// Font.register({
//   family: "Roboto",
//   src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
// });
Font.register({
  family: "Protest",
  src: process.env.PUBLIC_URL + "/protest.ttf",
});
Font.register({
  family: "RobotoSlab",
  src: "http://fonts.gstatic.com/s/robotoslab/v6/y7lebkjgREBJK96VQi37Zp0EAVxt0G0biEntp43Qt6E.ttf",
});

const colors = {
  accent: "#0D335E",
  default: "#777",
  light: "#666",
}
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFF",
    fontSize: 10,
    color: "#777",
    fontFamily: "Noto",
    fontWeight: 100,
    lineHeight: 1.3,
  },

  // side panel
  sidePanel: {
    flexShrink: "1 0 auto",
    fontSize: 10,
    fontWeight: 500,
    alignItems: "stretch",
    flexDirection: "column",
    backgroundColor: "#EEEEF2",
    padding: 20,
  },
  sideImg: {
    alignSelf: "center",
    width: 120,
    borderRadius: 60,
  },
  sideHeader: {
    // color: "#0D335E",
    color: colors.accent,
    fontSize: 16,
    fontWeight: 500,
    marginTop: 30
  },
  sideLabel: {
    color: "#333",
    fontWeight: 500,
    fontSize: 11,
    marginTop: 8,
  },
  sideText: {
    color: "#666",
    marginTop: 2,
  },

  // main panel
  mainPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: 20,
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
    color: colors.accent,
  },
  text: {
    marginTop: 5,
  },
  header: {
    color: colors.accent,
    fontWeight: 500,
    fontSize: 17,
    marginTop: 20,
  },
  expEntry: {
    marginTop: 5,
    marginBottom: 20,
  },
  expTime: {
    fontSize: 10,
    color: "#666",
  },
  expCompany: {
    fontSize: 11,
    // fontFamily: "Noto-Regular",
    color: "#333",
  },
  expPosition: {
    fontSize: 14,
    fontWeight: 500,
    color: "#333",
    marginRight: 5,
  },
  companyWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
});

export default function ResumePdf() {
  return (
    <Document title="Bjorn Vinther Resume" author="Bjorn Vinther">
      <Page wrap={true} style={styles.page}>
        <View style={styles.sidePanel}>
          <Image
            style={styles.sideImg}
            src={process.env.PUBLIC_URL + "/portrait4.jpg"}
          />

          <Text style={styles.sideHeader}>Contact</Text>
          <Text style={styles.sideLabel}>Email</Text>
          <Text style={styles.sideText}>g.bvinther@gmail.com</Text>
          <Text style={styles.sideLabel}>Website</Text>
          <Link style={styles.sideText} src="https://bvinther.com">
            bvinther.com
          </Link>
          <Text style={styles.sideLabel}>LinkedIn</Text>
          <Link
            style={styles.sideText}
            src="https://www.linkedin.com/in/bj%C3%B8rn-vinther-402499bb/"
          >
            linkedin.com/bjørn-vinther
          </Link>
          <Text style={styles.sideLabel}>Location</Text>
          <Text style={styles.sideText}>Copenhagen, Denmark</Text>

          <Text style={styles.sideHeader}>Technical Skills</Text>
          <Text style={styles.sideLabel}>Frontend</Text>
          <Text style={styles.sideText}>React</Text>
          <Text style={styles.sideText}>Vue.js</Text>
          <Text style={styles.sideText}>Angular</Text>
          <Text style={styles.sideText}>HTML / Javascript / CSS</Text>
          <Text style={styles.sideLabel}>Backend</Text>
          <Text style={styles.sideText}>C# / .NET Core</Text>
          <Text style={styles.sideText}>SQL</Text>
          <Text style={styles.sideText}>Azure</Text>

          {/* <Text style={styles.sideHeader}>Soft Qualities</Text>
          <Text style={styles.sideText}>Eye for detail</Text>
          <Text style={styles.sideText}>Strong analytical</Text>
          <Text style={styles.sideText}>Serviceminded</Text>
          <Text style={styles.sideText}>Strong communication</Text>
          <Text style={styles.sideText}>Growth mindset</Text>
          <Text style={styles.sideText}>Care for others</Text> */}

          <Text style={styles.sideHeader}>Certificates</Text>
          <Text style={styles.sideText}>Azure Fundamentals</Text>
          <Text style={styles.sideText}>Azure Data Fundamentals</Text>

          <Text style={styles.sideHeader}>Languages</Text>
          <Text style={styles.sideText}>Danish</Text>
          <Text style={styles.sideText}>English</Text>
        </View>

        <View style={styles.mainPanel}>
          <Text style={styles.title}>Bjørn Vinther</Text>
          <Text style={styles.subtitle}>Software Engineer</Text>
          <Text style={styles.text}>
            I am a 31 year old guy with a great interest in programming. My
            analytical and structured way of working helps me to design and
            implement complex but scalable solutions. I see code as a craft and
            I put a lot of pride and effort into the work I deliver. Growing as
            a person and software developer is one of my main motivations and I
            constantly seek out opportunities for that.
          </Text>
          <Text style={styles.text}>
            Besides that, I’m a very social, relaxed, and humorous person who
            gets along with most people. be creative though drawing or costume
            crafting. Having a healthy work environment where people thrive
            means a lot to me and I actively engage in activities to foster
            that.
          </Text>

          <Text style={styles.header}>Experience</Text>
          <ExperienceEntry
            startDate={new Date(2022, 0, 1)}
            endDate={null}
            company={companies.maersk.name}
            position="Software Engineer"
          >
            <Text style={styles.text}>
              Maersk is a global leader in container logistics and is currently
              undergoing a digital transformation to become the world's leading
              integrator of container logistics. To achieve this ambitious goal
              we are using the latest technologies and best practices including
              Azure, Kubernetes, Github Pipelines, and Kafka.
            </Text>
          </ExperienceEntry>
          <ExperienceEntry
            startDate={new Date(2020, 7, 1)}
            endDate={new Date(2022, 0, 1)}
            company={companies.republica.name}
            position="Senior System Developer"
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
          </ExperienceEntry>
          <ExperienceEntry
            startDate={new Date(2017, 5, 1)}
            endDate={new Date(2020, 7, 1)}
            company={companies.dalux.name}
            position="Software Engineer"
          >
            <Text style={styles.text}>
              I started my professional carreer at Dalux where I worked as a
              fullstack developer in a rapidly growing environment. Initially, I
              was mostly solving smaller tasks, but as leadership realised my
              talent I was given more responsibilities and eventually moved on
              to design and implement core systems and guiding junior
              developers.
            </Text>
            <Text style={styles.text}>
              I was involved in many different projects and tasks, but the most
              notable ones were:
            </Text>
          </ExperienceEntry>

          <Text style={styles.header}>Education</Text>
          <View style={styles.expEntry}>
            <Text style={styles.expTime}>
              {formatDate(new Date(2017, 6, 1))}
            </Text>
            <Text style={styles.expCompany}>{companies.dtu.name}</Text>
            <Text style={styles.expPosition}>
              Master of Science in Engineering
            </Text>
            <Text style={styles.text}>
              For my master I studied digital media technologies with a focus on
              game development and 3D graphics. Here I learned how to develop
              games and apps using Unity and C#.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function ExperienceEntry({ company, position, startDate, endDate, children }) {
  return (
    <View style={styles.expEntry}>
      <Text style={styles.expTime}>
        {formatDate(startDate)} - {formatDate(endDate)} (
        {formatTimeElapsed(startDate, endDate)})
      </Text>
      <View style={styles.companyWrapper}>
        <Text style={styles.expPosition}>{position}</Text>
        <Text style={styles.expCompany}>at {company}</Text>
      </View>
      {children}
    </View>
  );
}
