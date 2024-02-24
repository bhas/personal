import { Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { formatDate, formatTimeElapsed } from "../../utilities/DateUtilities";

function CreateStyles(colors) {
  return StyleSheet.create({
    entry: {
      marginTop: 0,
      marginBottom: 20,
    },
    timeWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
    },
    time: {
      fontSize: 10,
      fontWeight: 500,
      marginRight: 3,
      color: colors.lightBlue,
    },
    timeDiff: {
      fontSize: 9,
      color: "#999",
    },
    company: {
      marginLeft: 5,
      color: "#666",
    },
    position: {
      fontSize: 13,
      fontWeight: 500,
      color: "#333",
      marginRight: 5,
    },
    companyWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline",
      color: "#333",
      fontSize: 11,
    },
  });
}

export default function PdfProjectEntry({
  company,
  companyUrl,
  position,
  startDate,
  endDate,
  children,
  colors,
}) {
  const styles = CreateStyles(colors);
  return (
    <View style={styles.entry}>
      {startDate && (
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>
            {formatDate(startDate)} - {formatDate(endDate)}
          </Text>
          <Text style={styles.timeDiff}>
            ({formatTimeElapsed(startDate, endDate)})
          </Text>
        </View>
      )}
      <View style={styles.companyWrapper}>
        <Text style={styles.position}>{position}</Text>
        {company && (
          <>
            <Text>at</Text>
            <Link src={companyUrl} style={styles.company}>
              {company}
            </Link>
          </>
        )}
      </View>
      {children}
    </View>
  );
}
