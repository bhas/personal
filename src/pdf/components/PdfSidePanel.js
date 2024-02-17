import { Image, Link, StyleSheet, Text, View } from "@react-pdf/renderer";

function CreateStyles(colors) {
  return StyleSheet.create({
    sidePanel: {
      flexShrink: "1 0 auto",
      fontSize: 10,
      alignItems: "stretch",
      flexDirection: "column",
      backgroundColor: colors.accent,
      padding: 20,
    },
    portrait: {
      alignSelf: "center",
      width: 120,
      borderRadius: 60,
    },
    header: {
      color: colors.lightBlue,
      fontSize: 18,
      fontWeight: 900,
      marginTop: 30,
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

export default function PdfSidePanel({ colors }) {
  const styles = CreateStyles(colors);
  return (
    <View style={styles.sidePanel}>
          <Image
            style={styles.portrait}
            src={process.env.PUBLIC_URL + "/portrait4.jpg"}
          />

          <Text style={styles.header}>Contact</Text>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.text}>+45 53 56 81 12</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>g.bvinther@gmail.com</Text>
          <Text style={styles.label}>Website</Text>
          <Link style={styles.text} src="https://bvinther.com">
            bvinther.com
          </Link>
          <Text style={styles.label}>LinkedIn</Text>
          <Link
            style={styles.text}
            src="https://www.linkedin.com/in/bj%C3%B8rn-vinther-402499bb/"
          >
            linkedin.com/bjørn-vinther
          </Link>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.text}>Copenhagen, Denmark</Text>

          <Text style={styles.header}>Skills</Text>
          <Text style={styles.label}>Backend</Text>
          <Text style={styles.text}>C# / .NET Core</Text>
          <Text style={styles.text}>SQL</Text>
          <Text style={styles.text}>Azure</Text>
          <Text style={styles.label}>Frontend</Text>
          <Text style={styles.text}>React</Text>
          <Text style={styles.text}>Vue.js</Text>
          <Text style={styles.text}>Angular</Text>
          <Text style={styles.text}>HTML / Javascript / CSS</Text>

          <Text style={styles.header}>Soft Qualities</Text>
          <Text style={styles.text}>Eye for details</Text>
          <Text style={styles.text}>Proactive team player</Text>
          <Text style={styles.text}>Constant learning</Text>
          <Text style={styles.text}>Caring for others</Text>

          <Text style={styles.header}>Certificates</Text>
          <Text style={styles.text}>Azure Fundamentals</Text>
          <Text style={styles.text}>Azure Data Fundamentals</Text>

          <Text style={styles.header}>Languages</Text>
          <Text style={styles.text}>Danish</Text>
          <Text style={styles.text}>English</Text>
        </View>
  )
}