import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ItineraryPDF from "../../ItineraryPDF";
import sampleItinerary from "../../sampleItinerary";

export const KashmirEscapades = () => {
  const [itinerary] = useState(sampleItinerary);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 30px",
    background: isHovered
      ? "linear-gradient(45deg, #2980b9, #3498db)"
      : "linear-gradient(45deg, #3498db, #2980b9)",
    color: "white",
    textDecoration: "none",
    borderRadius: "25px",
    fontSize: "1.2rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
    boxShadow: isHovered ? "0 5px 15px rgba(52, 152, 219, 0.4)" : "none",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "15px",
          padding: "40px",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(4px)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "2.5rem",
            color: "#2c3e50",
            marginBottom: "30px",
            fontWeight: 700,

            letterSpacing: "1.5px",
          }}
        >
          Kashmir Escapades PDF Generator
        </h1>
        <PDFDownloadLink
          document={<ItineraryPDF itinerary={itinerary} />}
          fileName="kashmir-itinerary.pdf"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {({ loading }) =>
            loading
              ? "Preparing Your Itinerary..."
              : "Download Your Kashmir Itinerary"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default KashmirEscapades;
