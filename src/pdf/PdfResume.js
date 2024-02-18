import React from "react";
import { Page, Document, StyleSheet, Font, View } from "@react-pdf/renderer";
import PdfPage1SideContent from "./components/PdfPage1SideContent";
import PdfPage1MainContent from "./components/PdfPage1MainContent";
import PdfPage2MainContent from "./components/PdfPage2MainContent";
import PdfPage2SideContent from "./components/PdfPage2SideContent";

function SetupFonts() {
  Font.register({
    family: "Noto",
    fonts: [
      { src: process.env.PUBLIC_URL + "/NotoSans-Light.ttf", fontWeight: 100 },
      {
        src: process.env.PUBLIC_URL + "/NotoSans-Regular.ttf",
        fontWeight: 500,
      },
      {
        src: process.env.PUBLIC_URL + "/NotoSans-SemiBold.ttf",
        fontWeight: 900,
      },
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
