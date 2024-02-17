// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PdfResume from './pdf/PdfResume';

const App = () => (
  <PDFViewer width="100%" height="900px">
    <PdfResume />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));
