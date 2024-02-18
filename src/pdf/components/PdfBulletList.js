import { StyleSheet, Text, View } from "@react-pdf/renderer";

function CreateStyles(colors) {
  return StyleSheet.create({
    bulletList: {
      display: "flex",
      flexDirection: "column",
    },
    bulletItem: {
      display: "flex",
      flexDirection: "row",
    },
    bullet: {
      marginLeft: 10,
      width: 10,
    },
    text: {
      flex: 1,
    },
    bold: {
      marginTop: 5,
      fontWeight: 500,
      color: "#555"
    },
  });
}

export default function PdfBulletList({ text, items }) {
  const styles = CreateStyles();
  return (
    <>
      <Text style={styles.bold}>{text}</Text>
      <View style={styles.bulletList}>
        {items.map((item, index) => (
          <PdfBulletItem key={index}>{item}</PdfBulletItem>
        ))}
      </View>
    </>
  );
}

function PdfBulletItem({ children }) {
  const styles = CreateStyles();
  return (
    <View style={styles.bulletItem}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
