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
    justifyContent: "flex-end",
  },
  headerText: {
    textAlign: "right",
  },
  companyName: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 15,
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
  image: {
    width: "100%",
    height: "auto",
    marginBottom: 10,
  },
  // Overview page styles
  overviewContainer: {
    flexDirection: "row",
    height: "100%",
  },
  overviewMain: {
    width: "60%",
    paddingRight: 20,
  },
  overviewSidebar: {
    width: "40%",
    backgroundColor: "#1A7A6D",
    padding: 20,
    color: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#000",
    marginBottom: 10,
  },
  itinerarySubtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dayBlock: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  dayBlockOdd: {
    backgroundColor: "#A3C7D6",
  },
  dayBlockEven: {
    backgroundColor: "#4B8E9F",
    color: "#fff",
  },
  dayLabel: {
    width: "20%",
    fontSize: 12,
    fontWeight: "bold",
  },
  dayDetails: {
    width: "80%",
    fontSize: 10,
  },
  sidebarTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#fff",
  },
  sidebarTagline: {
    fontSize: 10,
    textTransform: "uppercase",
    textAlign: "center",
    color: "#F5A623",
    marginTop: 10,
  },
  sidebarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: "center",
  },
  // Additional styles for other pages
  descriptionText: {
    fontSize: 10,
    marginBottom: 10,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 3,
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
  centeredText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  dayImage: {
    width: 550,
    height: 250,
    marginTop: 20,
  },

  ////

  travelPage: {
    padding: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  guestInformation: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    flexDirection: "row",
  },
  label: {
    fontWeight: "bold",
    marginRight: 100,
    flexDirection: "row",
  },
  value: {
    marginLeft: 10,
  },
});

const ItineraryPDF = ({ itinerary }) => (
  <Document>
    {/* Page 1: Cover Page */}
    <Page size="A4" style={styles.page}>
      <Image
        src={itinerary.companyImages.companyBackgroundImage}
        style={styles.image}
      />
      <View style={styles.headerContainer}>
        <Image src={itinerary.companyImages.companyLogo} style={styles.logo} />
        <View style={styles.headerText}>
          <Text style={styles.companyName}>Kashmir Escapades</Text>
        </View>
      </View>
      <Text style={styles.footer}>
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/* Page 2: Travel Information */}

    <Page size="A4" style={styles.travelPage}>
      <Text style={styles.sectionTitle}>Travel Information</Text>
      <Text style={styles.guestInformation}>Guest Information</Text>
      <View style={styles.infoContainer}>
        <View style={styles.text}>
          <Text style={styles.label}>Guest Name:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.guestName}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Arrival:</Text>
          <Text style={styles.value}>
            {new Date(
              itinerary.travellerDetails.arrivalDate
            ).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Contact:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.contactNumber}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Number of Adults:</Text>
          <Text style={styles.value}>{itinerary.travellerDetails.adults}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Number of Children:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.children} [0 yrs, 0 yrs, 0 yrs]
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Meal Plan:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.mealPlan}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Holiday Duration:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.packageNights} nights &{" "}
            {itinerary.travellerDetails.packageNights + 1} days
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Vehicles:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.vehicle
              .map((v) => `${v.name} x ${v.count}`)
              .join(", ")}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.label}>Vehicle Type:</Text>
          <Text style={styles.value}>
            {itinerary.travellerDetails.vehicle[0]?.type || "Non-AC"}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />
      <Text style={styles.boldText}>Our Contact</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Consultant Name: Imran Makhdoomi</Text>
        <Text style={styles.text}>Contact: 9797112227</Text>
        <Text style={styles.text}>Email: kashmireescapades@gmail.com</Text>
        <Text style={styles.text}>Address: 90ft Soura, Srinagar</Text>
        <Text style={styles.text}>Company Contact: 9797112227</Text>
        <Text style={styles.text}>
          Company Email: kashmireescapades@gmail.com
        </Text>
        <Text style={styles.text}>
          Company Website: www.tour.kash-mireescapades.com
        </Text>
      </View>
      <Text style={styles.footer}>
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/* Page 4: Overview */}
    <Page size="A4" style={styles.page}>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewMain}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.itinerarySubtitle}>
            Itinerary for {itinerary.travellerDetails.packageNights} Nights &{" "}
            {itinerary.travellerDetails.packageNights + 1} Days
          </Text>
          <Text style={styles.itinerarySubtitle}>
            Arrival:{" "}
            {new Date(
              itinerary.travellerDetails.arrivalDate
            ).toLocaleDateString()}{" "}
            Departure:{" "}
            {new Date(
              itinerary.travellerDetails.departureDate
            ).toLocaleDateString()}
          </Text>
          {itinerary.itineraryDetails.map((day, index) => (
            <View
              key={index}
              style={[
                styles.dayBlock,
                index % 2 === 0 ? styles.dayBlockOdd : styles.dayBlockEven,
              ]}
            >
              <Text style={styles.dayLabel}>Day {day.dayNumber}</Text>
              <View style={styles.dayDetails}>
                {day.destinations.length > 0 && (
                  <Text style={styles.text}>
                    Sightseeing:{" "}
                    {day.destinations
                      .map((dest) => dest.destinationName)
                      .join(", ")}
                  </Text>
                )}
                {day.destinations.length === 0 &&
                  index !== itinerary.itineraryDetails.length - 1 && (
                    <Text style={styles.text}>Sightseeing: No Sightseeing</Text>
                  )}
                {day.nightStayLocation && (
                  <Text style={styles.text}>
                    Night Stay: {day.nightStayLocation}
                  </Text>
                )}
                {day.hotelName && (
                  <Text style={styles.text}>Night Stay: {day.hotelName}</Text>
                )}
                {index === itinerary.itineraryDetails.length - 1 && (
                  <Text style={styles.text}>
                    Departure: {itinerary.travellerDetails.departureLocation}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.overviewSidebar}>
          <View>
            <Text style={styles.sidebarTitle}>Kashmir Escapades</Text>
            <Text style={styles.sidebarTagline}>Customised Holidays</Text>
            {itinerary.companyImages.sidebarImage1 && (
              <Image
                src={itinerary.companyImages.sidebarImage1}
                style={styles.sidebarImage}
              />
            )}
          </View>
          <View>
            <Text style={styles.sidebarTagline}>Exotic Destinations</Text>
            {itinerary.companyImages.sidebarImage2 && (
              <Image
                src={itinerary.companyImages.sidebarImage2}
                style={styles.sidebarImage}
              />
            )}
          </View>
          <View>
            <Text style={styles.sidebarTagline}>Travel Planner</Text>
            {itinerary.companyImages.sidebarImage3 && (
              <Image
                src={itinerary.companyImages.sidebarImage3}
                style={styles.sidebarImage}
              />
            )}
          </View>
        </View>
      </View>
      <Text style={styles.footer}>
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/*Itinerary Days */}
    {itinerary.itineraryDetails.map((day, index) => (
      <Page key={index} size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Day {day.dayNumber}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.boldText}>
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
          {day.breakfastLocation && (
            <Text style={styles.text}>
              Breakfast in {day.breakfastLocation}
            </Text>
          )}
          {day.nightStayLocation && (
            <Text style={styles.text}>Night Stay: {day.nightStayLocation}</Text>
          )}
          {day.hotelName && <Text style={styles.text}>{day.hotelName}</Text>}
          {day.description && (
            <Text style={styles.descriptionText}>{day.description}</Text>
          )}
          {day.destinations.length > 0 && (
            <>
              <Text style={styles.boldText}>Sightseeing</Text>
              {day.destinations.map((dest, idx) => (
                <View key={idx}>
                  <Text style={styles.text}>+ {dest.destinationName}</Text>
                  {dest.attractions.map((attr, i) => (
                    <Text key={i} style={styles.listItem}>
                      + {attr}
                    </Text>
                  ))}
                  {dest.destinationImages && (
                    <Image
                      src={dest.destinationImages}
                      style={styles.dayImage}
                    />
                  )}
                </View>
              ))}
            </>
          )}
          {index === itinerary.itineraryDetails.length - 1 && (
            <Text style={styles.descriptionText}>
              Today marks the end of our wonderful journey together. Please
              ensure you check out of your rooms on time and have all your
              belongings packed. Our tour guide will be available to assist you
              with any last-minute needs. We sincerely thank you for choosing to
              travel with us and hope you have enjoyed this trip as much as we
              have enjoyed having you with us. Safe travels, and we look forward
              to welcoming you on another adventure in the future. Until we meet
              again!
            </Text>
          )}
        </View>
        <Text style={styles.footer}>
          Kashmir Escapades | Powered by Tripdocks
        </Text>
      </Page>
    ))}

    {/* Accommodations */}
    <Page size="A4" style={styles.page}>
      <Text style={styles.sectionTitle}>Accommodations</Text>
      {itinerary.accomodations.map((acc, index) => (
        <View key={index} style={styles.infoContainer}>
          <Text style={styles.boldText}>
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
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/* Page 15: Package Details */}
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
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/* Page 16: Inclusions & Exclusions */}
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
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/* Pages 17–18: Terms & Conditions */}
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
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>

    {/* Page 19: Closing Page */}
    <Page size="A4" style={styles.page}>
      <Image
        src={itinerary.companyImages.companyLastPageImage}
        style={styles.image}
      />
      <Text style={styles.centeredText}>Kashmir Escapades</Text>
      <Text style={styles.centeredText}>More Happiness With Us</Text>
      <Text style={styles.footer}>
        Kashmir Escapades | Powered by Tripdocks
      </Text>
    </Page>
  </Document>
);

export default ItineraryPDF;
