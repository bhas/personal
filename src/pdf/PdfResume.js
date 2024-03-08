import React from "react";
import { Page, Document, StyleSheet, Font, View } from "@react-pdf/renderer";
import PdfPage1SideContent from "./pages/PdfPage1SideContent";
import PdfPage1MainContent from "./pages/PdfPage1MainContent";
import PdfPage2MainContent from "./pages/PdfPage2MainContent";
import PdfPage2SideContent from "./pages/PdfPage2SideContent";

function SetupFonts() {
  Font.register({
    family: "Noto",
    fonts: [
      { src: process.env.PUBLIC_URL + "/fonts/NotoSans-Light.ttf", fontWeight: 100 },
      {
        src: process.env.PUBLIC_URL + "/fonts/NotoSans-Regular.ttf",
        fontWeight: 500,
      },
      {
        src: process.env.PUBLIC_URL + "/fonts/NotoSans-SemiBold.ttf",
        fontWeight: 900,
      },
    ],
  });
  Font.register({
    family: "RobotoSlab",
    src: process.env.PUBLIC_URL + "/fonts/RobotoSlab-Medium.ttf",
  });
}

function CreateStyles(colors) {
  SetupFonts();
  return StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#FFF",
      fontSize: 10,
      color: "#777",
      fontFamily: "Noto",
      fontWeight: 100,
      lineHeight: 1.4,
    },
    sidePanel: {
      flexShrink: "1 0 auto",
      fontSize: 10,
      alignItems: "stretch",
      flexDirection: "column",
      backgroundColor: colors.accent,
      padding: 20,
      paddingTop: 0,
    },
    mainPanel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: 25,
      paddingTop: 20,
      paddingBottom: 20,
      flexGrow: 1,
      flexShrink: 1,
    },
  });
}

export default function PdfResume() {
  const colors = {
    accent: "#374053",
    lightBlue: "#8da5db",
    default: "#777",
    light: "#666",
  };
  const styles = CreateStyles(colors);
  return (
    <Document title="Bjorn Vinther Resume" author="Bjorn Vinther">
      <Page wrap={true} style={styles.page} size={"A4"}>
        <View style={styles.sidePanel}>
          <PdfPage1SideContent colors={colors} />
        </View>
        <View style={styles.mainPanel}>
          <PdfPage1MainContent colors={colors} />
        </View>
      </Page>

      <Page wrap={true} style={styles.page} size={"A4"}>
        <View style={styles.sidePanel}>
          <PdfPage2SideContent colors={colors} />
        </View>
        <View style={styles.mainPanel}>
          <PdfPage2MainContent colors={colors} />
        </View>
      </Page>
    </Document>
  );
}
