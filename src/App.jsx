import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ItineraryPDF from "./ItineraryPDF";
import sampleItinerary from "./sampleItinerary"; // Import the sample data
import { PDFViewer } from "@react-pdf/renderer";

function App() {
  const [itinerary] = useState(sampleItinerary);

  return (
    <div className="App">
      <h1>Itinerary PDF Generator</h1>
      <PDFDownloadLink
        // style={{ width: "100%", height: "100vh" }}
        document={<ItineraryPDF itinerary={itinerary} />}
        fileName="itinerary.pdf"
      >
        {({ loading }) =>
          loading ? "Loading document..." : "Download Itinerary PDF"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
