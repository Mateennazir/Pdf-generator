import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

// Register fonts if needed
// Font.register({ family: 'CustomFont', src: 'path/to/font.ttf' });

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 10,
  },
  logo: {
    width: 80,
    height: "auto",
  },
  headerText: {
    textAlign: "right",
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  sectionTitle: {
    fontSize: 20,
    Color: "blue",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  daySection: {
    marginBottom: 15,
  },
  dayTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
    lineHeight: 1.5,
  },
  boldText: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
  },
  listItem: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 3,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    fontSize: 8,
    textAlign: "left",
    color: "#666",
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  tableCol: {
    width: "50%",
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  lastCol: {
    width: "50%",
    padding: 5,
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: 10,
  },
});

const ItineraryPDF = ({ itinerary }) => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.page}>
      <Image
        src={itinerary.companyImages.companyBackgroundImage}
        style={styles.image}
      />
      <View style={styles.headerContainer}>
        <Image src={itinerary.companyImages.companyLogo} style={styles.logo} />
        <View style={styles.headerText}>
          <Text style={styles.companyName}>
            {itinerary.companyInfo.companyName}
          </Text>
          <Text style={styles.text}>
            Itinerary for {itinerary.travellerDetails.guestName}
          </Text>
        </View>
      </View>
    </Page>

    {/* Traveller Details */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Travel Information</Text>
      <Text style={styles.boldText}>Guest Information</Text>
      <Text style={styles.text}>
        Guest Name: {itinerary.travellerDetails.guestName}
      </Text>
      <Text style={styles.text}>
        Arrival:{" "}
        {new Date(itinerary.travellerDetails.arrivalDate).toLocaleDateString()}
      </Text>
      <Text style={styles.text}>
        Contact: {itinerary.travellerDetails.contactNumber}
      </Text>
      <Text style={styles.text}>
        Number of Adults: {itinerary.travellerDetails.adults}
      </Text>
      <Text style={styles.text}>
        Number of Children: {itinerary.travellerDetails.children}
      </Text>
      <Text style={styles.text}>
        Meal Plan: {itinerary.travellerDetails.mealPlan}
      </Text>
      <Text style={styles.text}>
        Holiday Duration: {itinerary.travellerDetails.packageNights} nights &{" "}
        {itinerary.travellerDetails.packageNights + 1} days
      </Text>
      <Text style={styles.text}>
        Vehicles:{" "}
        {itinerary.travellerDetails.vehicle
          .map((v) => `${v.name} x ${v.count} (${v.type})`)
          .join(", ")}
      </Text>
      <Text style={styles.footer}>
        {itinerary.companyInfo.companyName} | Powered by Tripdocks
      </Text>
    </Page>

    {/* Itinerary Days */}
    {itinerary.itineraryDetails.map((day, index) => (
      <Page key={index} size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Day {day.dayNumber}</Text>
        <View style={styles.daySection}>
          <Text style={styles.dayTitle}>
            Route:{" "}
            {index === 0
              ? itinerary.travellerDetails.arrivalLocation
              : itinerary.itineraryDetails[index - 1].nightStayLocation}{" "}
            -{" "}
            {day.nightStayLocation ||
              itinerary.travellerDetails.departureLocation}
          </Text>
          {index === 0 && (
            <Text style={styles.text}>
              Arrival in {itinerary.travellerDetails.arrivalLocation}{" "}
              {new Date(
                itinerary.travellerDetails.arrivalDate
              ).toLocaleDateString()}
            </Text>
          )}
          {day.nightStayLocation && (
            <Text style={styles.text}>Night Stay: {day.nightStayLocation}</Text>
          )}
          {day.hotelName && <Text style={styles.text}>{day.hotelName}</Text>}
          {day.destinations.length > 0 && (
            <>
              <Text style={styles.boldText}>Sightseeing</Text>
              {day.destinations.map((dest, idx) => (
                <View key={idx}>
                  <Text style={styles.text}>+ {dest.destinationName}</Text>
                  <Text style={styles.text}>{dest.destinationDescription}</Text>
                  <Image src={dest.destinationImages} style={styles.image} />
                  {dest.attractions.map((attr, i) => (
                    <Text key={i} style={styles.listItem}>
                      + {attr}
                    </Text>
                  ))}
                </View>
              ))}
            </>
          )}
          {index === itinerary.itineraryDetails.length - 1 && (
            <Text style={styles.text}>
              Departure from {itinerary.travellerDetails.departureLocation}
            </Text>
          )}
        </View>
        <Text style={styles.footer}>
          {itinerary.companyInfo.companyName} | Powered by Tripdocks
        </Text>
      </Page>
    ))}

    {/* Accommodations */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Accommodations</Text>
      {itinerary.accomodations.map((acc, index) => (
        <View key={index} style={styles.daySection}>
          <Text style={styles.dayTitle}>
            Night {acc.night} at {acc.hotelLocation} | Check-in{" "}
            {new Date(itinerary.travellerDetails.arrivalDate).getDate() +
              acc.night -
              1}{" "}
            May 2025
          </Text>
          <Text style={styles.text}>Breakfast & Dinner Included</Text>
          <Text style={styles.text}>{acc.roomType}</Text>
          <Text style={styles.text}>Rooms: {acc.roomCount}</Text>
          <Text style={styles.text}>{acc.adults} Adult(s)</Text>
          {acc.aweb > 0 && (
            <Text style={styles.text}>
              INCLUDING {acc.aweb} AWEB (ADULT WITH EXTRA BED)
            </Text>
          )}
        </View>
      ))}
      <Text style={styles.footer}>
        {itinerary.companyInfo.companyName} | Powered by Tripdocks
      </Text>
    </Page>

    {/* Package Details */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Package Details</Text>
      <Text style={styles.boldText}>Traveller Details</Text>
      <Text style={styles.text}>
        TRAVELLER NAME: {itinerary.travellerDetails.guestName}
      </Text>
      <Text style={styles.text}>
        PACKAGE: {itinerary.travellerDetails.packageNights} NIGHTS/
        {itinerary.travellerDetails.packageNights + 1} DAYS
      </Text>
      <Text style={styles.text}>
        ARRIVAL DATE:{" "}
        {new Date(itinerary.travellerDetails.arrivalDate).toLocaleDateString()}
      </Text>
      <Text style={styles.text}>
        NUMBER OF PAX: {itinerary.travellerDetails.adults} ADULTS
      </Text>

      <Text style={styles.sectionTitle}>Bank Details</Text>
      {itinerary.bankDetails.map((bank, index) => (
        <View key={index}>
          <Text style={styles.boldText}>Bank Details - {index + 1}</Text>
          <Text style={styles.text}>ACCOUNT: {bank.accountNumber}</Text>
          <Text style={styles.text}>BANK NAME: {bank.bankName}</Text>
          <Text style={styles.text}>IFSC CODE: {bank.ifscCode}</Text>
          <Text style={styles.text}>HOLDER NAME: {bank.holderName}</Text>
          <Text style={styles.text}>
            UPI NUMBER: {bank.upiNumber.join(", ")}
          </Text>
          <Text style={styles.text}>
            UPI ADDRESS: {bank.upiAddress.join(", ")}
          </Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Tour Cost</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.boldText}>TOUR DETAILS</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.boldText}>TOTAL TOUR COST</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.text}>
              {itinerary.travellerDetails.packageNights} NIGHTS /{" "}
              {itinerary.travellerDetails.packageNights + 1} DAYS
            </Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.text}>
              RS {itinerary.pricingDetails.totalCost}
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.text}>
        The Booking process will start after an advanced deposit of Rs 15%
      </Text>

      <Text style={styles.footer}>
        {itinerary.companyInfo.companyName} | Powered by Tripdocks
      </Text>
    </Page>

    {/* Inclusions & Exclusions */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Inclusion & Exclusion</Text>
      <Text style={styles.boldText}>Inclusions</Text>
      {itinerary.inclusionExclusions.inclusions.map((item, index) => (
        <Text key={index} style={styles.listItem}>
          - {item}
        </Text>
      ))}
      <Text style={styles.boldText}>Exclusions</Text>
      {itinerary.inclusionExclusions.exclusions.map((item, index) => (
        <Text key={index} style={styles.listItem}>
          - {item}
        </Text>
      ))}
      <Text style={styles.footer}>
        {itinerary.companyInfo.companyName} | Powered by Tripdocks
      </Text>
    </Page>

    {/* Terms & Conditions */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Terms & Conditions</Text>
      {itinerary.termsAndConditions.termsAndConditions.map((term, index) => (
        <View key={index}>
          <Text style={styles.boldText}>{term.heading}</Text>
          {term.tncList.map((item, idx) => (
            <Text key={idx} style={styles.listItem}>
              - {item.terms}
            </Text>
          ))}
        </View>
      ))}
      <Text style={styles.footer}>
        {itinerary.companyInfo.companyName} | Powered by Tripdocks
      </Text>
    </Page>

    {/* Last Page */}
    <Page size="A4" style={styles.page}>
      <Image
        src={itinerary.companyImages.companyLastPageImage}
        style={styles.image}
      />
      <Text style={styles.companyName}>
        {itinerary.companyInfo.companyName}
      </Text>
      <Text style={styles.text}>MORE HAPPINESS WITH US</Text>
      <Text style={styles.footer}>
        {itinerary.companyInfo.companyName} | Powered by Tripdocks
      </Text>
    </Page>
  </Document>
);

export default ItineraryPDF;
