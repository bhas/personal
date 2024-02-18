import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { companies } from "../../data/resumeData";
import PdfExperienceEntry from "./PdfExperienceEntry";
import PdfEducationEntry from "./PdfEducationEntry";
import PdfBulletList from "./PdfBulletList";

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

export default function PdfPage2MainContent({ colors }) {
  const styles = CreateStyles(colors);
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
          full-stack developer within a rapidly evolving environment. As my
          capabilities became evident to leadership, I was entrusted with
          progressively more significant responsibilities, ultimately
          transitioning to the design and implementation of core system
          components. Furthermore, due to my active engagement in social
          initiatives I was acknowledged by leadership as one of the most
          important people for the company's culture.
        </Text>
        <PdfBulletList
          text={"Key contributions:"}
          items={[
            "Drove the development of new features across both backend and frontend domains, contributing to end-to-end enhancements of our systems.",
            "Collaborated with colleagues on a large-scale project aimed at modernizing our single-page application, utilizing Angular and TypeScript.",
            "Initiated and organized various social initiatives, including sports events and Friday bars, fostering a healthy company culture.",
            "Acted as the primary architect and implementer of a data-handover system bridging crucial information between the company's core platforms.",
          ]}
        />
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

      <Text style={styles.header}>Projects</Text>
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
    </>
  );
}
