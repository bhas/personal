import { PDFViewer } from "@react-pdf/renderer";
import PdfResume from "../pdf/PdfResume";

export default function Resume() {
  return (
    <PDFViewer width="100%" height="2500vh">
      <PdfResume />
    </PDFViewer>
  );
}
