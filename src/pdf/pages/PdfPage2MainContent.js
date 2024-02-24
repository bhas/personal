import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { companies } from "../../data/resumeData";
import PdfExperienceEntry from "../components/PdfExperienceEntry";
import PdfEducationEntry from "../components/PdfEducationEntry";
import PdfBulletList from "../components/PdfBulletList";
import PdfProjectEntry from "../components/PdfProjectEntry";

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
      marginTop: 10,
    },
    listItem: {
      display: "list-item",
    },
  });
}

export default function PdfPage2MainContent({ colors }) {
  const styles = CreateStyles(colors);
  console.log("Color1", colors);
  return (
    <>
      <PdfExperienceEntry
        startDate={new Date(2017, 5, 1)}
        endDate={new Date(2020, 7, 1)}
        company={companies.dalux.name}
        companyUrl={companies.dalux.linkedInUrl}
        position="Software Engineer"
        colors={colors}
      >
        <Text style={styles.text}>
          My professional journey started at Dalux, where I served as a
          full-stack developer. With time, I got more responsibilities and
          supported the team by designing an implementating core system
          components in collaboration with project owners.
        </Text>
        <PdfBulletList
          text={"Key contributions:"}
          items={[
            "Drove the development of new features across both backend and frontend domains, contributing to end-to-end enhancements of our systems.",
            "Collaborated with colleagues on a large-scale project aimed at modernizing our single-page application, using Angular and TypeScript.",
            "Initiated and organized social initiatives, including sports events and Friday bars, maintaining a healthy company culture.",
            "Acted as the primary architect and implementer of a data-handover system bridging crucial information between the company's core platforms.",
          ]}
        />
      </PdfExperienceEntry>

      <Text style={[styles.header, { marginTop: 0 }]}>Education</Text>
      <PdfEducationEntry
        startDate={new Date(2015, 7, 1)}
        endDate={new Date(2017, 6, 1)}
        company={companies.dtu.name}
        companyUrl={companies.dtu.linkedInUrl}
        colors={colors}
        position="MSc in Digital Media Engineering"
      ></PdfEducationEntry>
      <PdfEducationEntry
        startDate={new Date(2011, 9, 1)}
        endDate={new Date(2015, 7, 1)}
        company={companies.itu.name}
        companyUrl={companies.itu.linkedInUrl}
        colors={colors}
        position="BSc in Software Development"
      ></PdfEducationEntry>

      <Text style={styles.header}>Side Projects</Text>
      <PdfProjectEntry
        startDate={new Date(2023, 10, 1)}
        endDate={null}
        company={companies.hyf.name}
        companyUrl={companies.hyf.linkedInUrl}
        position="Volunteering Mentor"
        colors={colors}
      >
        <Text style={styles.text}>
          HackYourFuture Denmark is a non-profit organization that teaches
          newcomers web development and helps them get a job within IT. We teach
          topics such as CSS, JavaScript, Node.js, React, and SQL.
        </Text>
        <Text style={styles.text}>
          Volunteering at HackYourFuture is a great opportunity for me to give
          back to the community and help newcomers get a foothold in the Danish
          IT industry. I'm helping by teaching classes, mentoring students, and
          reviewing homework. It also allows me to improve my
          teaching and mentoring as well as my technical skills and
          communication skills.
        </Text>
      </PdfProjectEntry>

      {/* <PdfProjectEntry
        startDate={null}
        endDate={null}
        position="Personal website"
        colors={colors}
      >
        <Text style={styles.text}>
          My personal website{" "}
          <Link src={"http://bvinther.com"}>bvinther.com</Link> is a side
          project I'm doing to showcase some of what I can do. It is built with
          React and hosted on AWS.
        </Text>
      </PdfProjectEntry> */}
    </>
  );
}
