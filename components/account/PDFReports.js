import { Document, Page } from "react-pdf";
import json2pdf from 'json2pdf';


export default function createPDF(jsonData) {
  const pdfData = json2pdf(jsonData);
  return (
    <Document>
      <Page>{pdfData}</Page>
    </Document>
  );
}
