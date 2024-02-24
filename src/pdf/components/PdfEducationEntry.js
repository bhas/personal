import { StyleSheet, Text, View, Link } from "@react-pdf/renderer";
import { formatDate } from "../../utilities/DateUtilities";

function CreateStyles(colors) {
  return StyleSheet.create({
    entry: {
      marginTop: 5,
      marginBottom: 10,
    },
    time: {
      fontSize: 10,
      fontWeight: 500,
      marginRight: 3,
      color: colors.lightBlue,
    },
    company: {
      // marginLeft: 5,
      color: "#666",
    },
    position: {
      fontSize: 12,
      fontWeight: 500,
      color: "#333",
    },
  });
}

export default function PdfEducationEntry({ company, companyUrl, position, startDate, endDate, colors}) {
  const styles = CreateStyles(colors);
  return (
    <View style={styles.entry}>
      <Text style={styles.time}>
        {/* {formatDate(startDate)} - {formatDate(endDate)} */}
        {formatDate(endDate)}
      </Text>
      <Text style={styles.position}>{position}</Text>
      <Link src={companyUrl} style={styles.company}>{company}</Link>
    </View>
  );
}