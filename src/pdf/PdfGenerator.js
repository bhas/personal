
import ReactPDF from '@react-pdf/renderer';
import ResumePdf from './ResumePdf';

export function GenerateDocument() {
  ReactPDF.render(<ResumePdf />, `${__dirname}/example.pdf`);
}