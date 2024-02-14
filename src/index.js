// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import ResumePdf from './pdf/ResumePdf';

const App = () => (
  <PDFViewer width="100%" height="900px">
    <ResumePdf />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));
