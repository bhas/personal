
import ReactPDF from '@react-pdf/renderer';
import PdfResume from './PdfResume';

export function GenerateDocument() {
  ReactPDF.render(<PdfResume />, `${__dirname}/example.pdf`);
}