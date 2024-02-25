import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfResume from "../pdf/PdfResume";

export default function Resume() {
  return (
    // <PDFDownloadLink document={<PdfResume />} fileName="bjorn-resume.pdf">
    //   {({ blob, url, loading, error }) =>
    //     loading ? "Loading document..." : "Download now!"
    //   }
    // </PDFDownloadLink>

    <PDFViewer width="100%" height="2500vh">
      <PdfResume />
    </PDFViewer>
  );
}
