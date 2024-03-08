import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";

function CreateStyles(colors) {
  return StyleSheet.create({
    portrait: {
      alignSelf: "center",
      width: 120,
      borderRadius: 60,
    },
    header: {
      color: colors.lightBlue,
      fontSize: 18,
      fontWeight: 900,
      marginTop: 25,
    },
    label: {
      fontFamily: "RobotoSlab",
      fontWeight: 900,
      fontSize: 11,
      color: "#FFF",
      marginTop: 6,
    },
    text: {
      fontWeight: 500,
      color: "#BBC",
      marginTop: 2,
    },
  });
}

export default function PdfPage2SideContent({ colors }) {
  const styles = CreateStyles(colors);
  return (
    <>
      <Text style={styles.header}>Certificates</Text>
      <Text style={styles.text}>Azure Fundamentals</Text>
      <Text style={styles.text}>Azure Data Fundamentals</Text>

      <Text style={styles.header}>Languages</Text>
      <Text style={styles.text}>Danish</Text>
      <Text style={styles.text}>English</Text>
    </>
  );
}
