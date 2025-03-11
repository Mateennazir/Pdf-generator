const sampleItinerary = {
  companyImages: {
    companyBackgroundImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/Title%20Page%20-%20Fit_a0c8a92a-8c5b-4e72-8366-b0026dbd352f.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=13b547ac5be10192b4e4689ee13ee71c739c6ae275455f440267e88526903567",
    companyLastPageImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/last%20page%20-%201%20_ae9fda35-49ae-49ca-8d72-465446f6add7_118cc5e4-9b6d-4623-b282-e020a1c16a08.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=eb55f5cd905015730a147cb2ff359b1f38d277aee9decbd305a14a4e5366396c",
    stateBackgroundImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/Cover%20page%20-%20fit_636ba9d8-a1c7-4dea-9af4-8e605ea766fa.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=cb37ef49492315d57a653caafd3ed0e9b3cb9d06fa6fc646207bf3d4b356dc48",
    defaultImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/default%20photo_fb3e42f8-3cd3-4b8d-bf96-56423fe4c68d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6dc518fbae5eabc4a74297443b48070939866e9b8fd8c862f7a2c72b136ccb4f",
    companyLogo:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/logo_f40ac362-0dc1-426c-a3f0-eaa66a18f184.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=f507e690dd11e18e5fe2e33ecb06792a3cb95060d382b45c0092d2be7b7a739e",
  },
  customization: null,
  consultantInfo: {
    consultantName: "Imran",
    contact: "9792212227",
    email: "test@gmail.com",
    address: "Soura, Srinagar",
  },
  companyInfo: {
    companyName: "Kashmir Travels",
    contact: "9792212227",
    email: "test@gmail.com",
    website: "www.tour.test.com",
  },
  travellerDetails: {
    guestName: "Guest",
    arrivalDate: "2025-05-10T00:00:00.000Z",
    contactNumber: "9797222227",
    arrivalLocation: "Jammu",
    departureLocation: "Jammu",
    adults: 6,
    children: 0,
    childAge: [0, 0, 0],
    mealPlan: "MAP",
    packageNights: 7,
    vehicle: [
      {
        name: "Toyota Innova",
        count: 1,
        type: "Non-AC",
      },
    ],
  },
  itineraryDetails: [
    {
      dayNumber: 1,
      nightStayLocation: "Katra",
      hotelName: "Hotel Nek Katra",
      destinations: [
        {
          destinationName: "Katra",
          destinationDescription: "Katra ",
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/katra%20image%20%281%29_7d3e200e-5d48-473e-a9cb-5b861901506e.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=5789f2928d68549f7b4efd1855462e767b271ce389bdf5363e5b6f92f7725c02",
          attractions: ["Katra"],
        },
      ],
    },
    {
      dayNumber: 2,
      nightStayLocation: "Katra",
      hotelName: "Hotel Nek Katra",
      destinations: [
        {
          destinationName: "Katra",
          destinationDescription: "Katra ",
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/katra%20image%20%281%29_7d3e200e-5d48-473e-a9cb-5b861901506e.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=5789f2928d68549f7b4efd1855462e767b271ce389bdf5363e5b6f92f7725c02",
          attractions: ["Vishno Devi "],
        },
      ],
    },
    {
      dayNumber: 3,
      nightStayLocation: "Pahalgam",
      hotelName: "Blue Whale Resort",
      destinations: [
        {
          destinationName: "Pahalgam",
          destinationDescription:
            "Pahalgam, nestled in Kashmir's serene valley at 7,200 feet, is a natural wonderland. The majestic snow-capped peaks embrace the meandering Lidder River and verdant meadows like Betaab and Aru Valley. Trekkers are drawn to the colorful wildflowers and panoramic views while Chandanwari offers diverse adventures. This charming town welcomes visitors with warm hospitality, tantalizing Kashmiri cuisine, and a perfect blend of tranquility and excitement, encompassing the beauty of Betab Valley, Aru Valley, and Chandanwari, ensuring an unforgettable experience for nature enthusiasts and explorers.",
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/pahalgam%20collage_bd17bd4d-72a1-4f33-9b4f-ed44dd7de6ed.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=235420235087380e7e16469dc4c937fdd70269bb8cad362ef3592f5b98f3f879",
          attractions: [
            "Baisaran(Mini Swizerland)",
            "Local Sight Seeing",
            "Pahalgam Main",
          ],
        },
      ],
    },
    {
      dayNumber: 4,
      nightStayLocation: "Srinagar",
      hotelName: "Azizia Inn",
      destinations: [
        {
          destinationName: "Pahalgam",
          destinationDescription:
            "Pahalgam, nestled in Kashmir's serene valley at 7,200 feet, is a natural wonderland. The majestic snow-capped peaks embrace the meandering Lidder River and verdant meadows like Betaab and Aru Valley. Trekkers are drawn to the colorful wildflowers and panoramic views while Chandanwari offers diverse adventures. This charming town welcomes visitors with warm hospitality, tantalizing Kashmiri cuisine, and a perfect blend of tranquility and excitement, encompassing the beauty of Betab Valley, Aru Valley, and Chandanwari, ensuring an unforgettable experience for nature enthusiasts and explorers.",
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/pahalgam%20collage_bd17bd4d-72a1-4f33-9b4f-ed44dd7de6ed.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=235420235087380e7e16469dc4c937fdd70269bb8cad362ef3592f5b98f3f879",
          attractions: [
            "Apple Orchards",
            "Aru Valley",
            "Betab Valley",
            "Chandanwari",
            "Cricket Bat Factory",
            "Local Sight Seeing",
            "Saffron Fields",
          ],
        },
      ],
    },
    {
      dayNumber: 5,
      nightStayLocation: "Srinagar",
      hotelName: "Azizia Inn",
      destinations: [
        {
          destinationName: "Sonmarg",
          destinationDescription:
            'Sonmarg, nestled in the heart of Kashmir, is a picturesque valley renowned for its pristine beauty and captivating landscapes. Surrounded by towering snow-capped mountains, lush greenery, and glistening streams, it offers a serene escape for nature enthusiasts and adventure seekers alike. The name "Sonmarg" translates to "Meadow of Gold, " evoking the golden hues that adorn its meadows during sunrise. Thajwas Glacier, a majestic icy wonderland, adds to its allure, offering breathtaking views and thrilling trekking experiences. With opportunities for skiing, camping, and exploring the glacier\'s',
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/Sonnmarg%20Summer%20collage_26c27229-9293-413f-9e85-4fe5f644b040.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=fae71a776a0458e31ba6c17cf27a4cb3037f5de2e55b4214e25b42ee3bfe6d83",
          attractions: ["Sonmarg Main", "Thajwas Glaciers", "Zero Point"],
        },
      ],
    },
    {
      dayNumber: 6,
      nightStayLocation: "Srinagar",
      hotelName: "Azizia Inn",
      destinations: [
        {
          destinationName: "Gulmarg",
          destinationDescription:
            "Gulmarg, a scenic gem nestled in Kashmir's embrace, enchants with its snow-laden landscapes and majestic peaks. Renowned for the world's second-highest cable car, the Gulmarg Gondola, it offers thrilling skiing adventures on pristine slopes. Winter transforms it into a wonderland, perfect for skiing novices and seasoned enthusiasts alike. With breathtaking vistas, including Khilanmarg's serene valley, this winter paradise captivates visitors with its natural beauty and diverse offerings, promising an unforgettable blend of tranquility and exhilaration.",
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/Gulmarg%20Summer%20Collage_97afe4f0-e074-4d40-ad7e-2dd030b39a91.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=bfc0b8648df117be3b21fb8f337147f1769099605add49192929cfb3bdf896de",
          attractions: [
            "Afarwat (Phase 2)",
            "Gandola (Cable Car)",
            "Gulmarg Main",
            "Khilanmarg (Phase 1)",
            "Tangmarg",
          ],
        },
      ],
    },
    {
      dayNumber: 7,
      nightStayLocation: "Srinagar",
      hotelName: "Deluxe Houseboat",
      destinations: [
        {
          destinationName: "Srinagar",
          destinationDescription:
            "Srinagar, the crown jewel of Jammu and Kashmir, a land where the beauty of nature dances with the rhythm of rich culture. Discover the allure of Srinagar. Cruise the iconic Dal Lake on houseboats, explore the blooming Mughal Gardens, and immerse in the city's vibrant local culture. Stroll through the old city's bustling markets, and shop for exquisite Kashmir Art & Crafts. Srinagar offers an unforgettable blend of natural beauty and rich heritage for every traveller.",
          destinationImages:
            "https://td-production-images.s3.ap-south-1.amazonaws.com/Destinations/Srinagar%20summer%20collage_c73ed0bb-274c-47c0-9aff-bc80cf073b32.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=fcb4e55fb53e9f6dc50e2fc5ac5d0519f544e2df931e1be39f12deb7003b06d1",
          attractions: [
            "Boulevard",
            "Chashma Shaahi",
            "Dal Lake",
            "Local Sightseeing",
            "Nishat Garden",
            "Pari Mahal",
            "Shankaracharaya",
            "Shikara Ride",
          ],
        },
      ],
    },
    {
      dayNumber: 8,
      nightStayLocation: null,
      hotelName: null,
      destinations: [],
    },
  ],
  accomodations: [
    {
      hotelLocation: "Katra",
      night: 1,
      hotelName: "Hotel Nek Katra",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/nek_fb2bbe3b-92d6-4024-9932-06af54aaad12.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6bbb4d711a7455b98261df6190722bc4bf7be2cf2085b49b907cd5ec64db409d",
      ],
    },
    {
      hotelLocation: "Katra",
      night: 2,
      hotelName: "Hotel Nek Katra",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/nek_fb2bbe3b-92d6-4024-9932-06af54aaad12.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6bbb4d711a7455b98261df6190722bc4bf7be2cf2085b49b907cd5ec64db409d",
      ],
    },
    {
      hotelLocation: "Pahalgam",
      night: 3,
      hotelName: "Blue Whale Resort",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/blue%20whale_5aad6c37-b8ff-47f8-98f2-f9729b9a596f.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=29f1700c5d009162ca8113f8b43b4d0b80932fd62aa670e1533a014f2255d989",
      ],
    },
    {
      hotelLocation: "Srinagar",
      night: 4,
      hotelName: "Azizia Inn",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/Azizia%20Inn_2_4b940bc7-72ec-44ec-a429-5c95521b692d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=b0652d7db2cba3291635544d56e241024ddbdf667602bd90634a4009a09a3bb8",
      ],
    },
    {
      hotelLocation: "Srinagar",
      night: 5,
      hotelName: "Azizia Inn",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/Azizia%20Inn_2_4b940bc7-72ec-44ec-a429-5c95521b692d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=b0652d7db2cba3291635544d56e241024ddbdf667602bd90634a4009a09a3bb8",
      ],
    },
    {
      hotelLocation: "Srinagar",
      night: 6,
      hotelName: "Azizia Inn",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/Azizia%20Inn_2_4b940bc7-72ec-44ec-a429-5c95521b692d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=b0652d7db2cba3291635544d56e241024ddbdf667602bd90634a4009a09a3bb8",
      ],
    },
    {
      hotelLocation: "Srinagar",
      night: 7,
      hotelName: "Deluxe Houseboat",
      hotelStar: 3,
      mealPlan: "MAP",
      roomType: "Deluxe Rooms",
      roomCount: 2,
      adults: 6,
      children: 0,
      aweb: 2,
      cweb: 0,
      cnb: 0,
      images: [
        "https://td-production-images.s3.ap-south-1.amazonaws.com/Hotels/deluxe%20houseboat_2353ded4-4911-4f1b-9688-d69160475166.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=36a10533e3cd9127b5fecac5a2552f1dc2f1ff54d814410106d3c466c4807f3f",
      ],
    },
  ],
  bankDetails: [
    {
      accountNumber: "50200085922906",
      bankName: "HDFC Bank",
      branchName: "Soura",
      ifscCode: "HDFC0002559",
      holderName: "Kashmir Escapades Tour & Travels",
      upiNumber: ["9797112227"],
      upiAddress: ["kashmirescapades@okhdfcbank"],
    },
  ],
  qrDetails: {
    qrImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/QR%20Code_3ed6b412-794b-4a85-87f6-0348c867809f.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=562e2f53fcbc0340e6e237602955fb0cb7bc00d85196eb7592790185f50db939",
  },
  pricingDetails: {
    totalCost: 105500,
    pricePerAdult: 0,
    pricePerChild: 0,
    pricePerCnb: 0,
    advanceAmount: 0,
  },
  inclusionExclusions: {
    inclusions: [
      "Airport Transfer",
      "Parking Charges",
      "24/7 Call Support",
      "Driver allowances",
      "Highway tolls and taxes",
      "Meals - Breakfast & Dinner",
      "Private Cab",
    ],
    exclusions: [
      "Meals - Lunch",
      "Shikara Ride",
      "Garden Entrance Fee (Rs 20 - 100 per person)",
      "Activities like Gandola Ride, Pony Ride, ATVs, Skiing etc",
      "Gulmarg, Sonmarg & Pahalgam Union Taxis",
      "Any amenity not mentioned in inclusions",
    ],
  },
  termsAndConditions: {
    termsAndConditions: [
      {
        heading: "Payment",
        tncList: [
          {
            terms:
              "For the services advance payment (as communicated) should be made to hold the booking on a confirmed basis. All remaining balance amount must be settled 3 days prior to your arrival.",
          },
          {
            terms:
              "We hold the right to decide upon the amount to be paid as an advance payment, based on the nature of services and the time left for the commencement of the services. Apart from the above in some cases like special inclusions, hotel or resort bookings during the peak season (X-Mas, New Year, etc) full payment is required to be sent in advance.",
          },
        ],
      },
      {
        heading: "Booking",
        tncList: [
          {
            terms:
              "Your contract is with Kashmir Escapades Tour & Travels. A contract exists between us after we have confirmed you on our tour of your choice and we have received advance deposits. We only accept advance/booking amount as this confirms that you and other people on the tour accept our booking terms and conditions.",
          },
          {
            terms:
              "An advance payment of 40% has to be done for 2 and 3 star packages and 80% for 4 and 5 star packages.",
          },
        ],
      },
      {
        heading: "Cancellation and Refund Policy",
        tncList: [
          {
            terms:
              "All cancellations must be made at least a month prior to the date of arrival. We levy the following cancellation charges.",
          },
          {
            terms:
              ">> No cancellation charges, if the booking is cancelled before 30 days to onset of tour. >> 50% of the total amount, if the booking is cancelled within 29 days to onset of tour.",
          },
          {
            terms:
              ">> 100% of the total amount, if the booking is cancelled within 15 days (or less) to onset of tour. (will be considered as no show).",
          },
          {
            terms:
              "All hotel reservation require reconfirmation by the customer at least a one week prior to the date of check in, failing which hotels reserve the right to levy at least one night retention which is payable by the customer making reservation through us. ",
          },
          {
            terms:
              "KASHMIR ESCAPADES TOUR & TRAVELS do not take any responsibility to make any refund on deposit to the guest until the same has been received by us from the hotel(s). If there is any complaint regarding services it should be communicated to the tour operator while the tour is still on.",
          },
        ],
      },
      {
        heading: "Early Check-in / Late Check-out",
        tncList: [
          {
            terms:
              "Please note that standard check-in / Checkout time in most hotels is 1200 Hrs. (IST). Therefore cost of early check-in or Late check-out is not included in the tour cost. We can always make a request for early check-in or late checkout if required but we do not guarantee that, that entirely depend upon the policy of the hotel, time of the year and availability of the room.",
          },
        ],
      },
      {
        heading: "Union Taxis",
        tncList: [
          {
            terms:
              "Sonamarg - Sight seeing to Zero Point, Pahalgam - Aru Valley, Betaab Valley & Chandanwari require local union Taxis. Due to the union, outside cabs/taxis cannot operate at those places. Customer will have to pay for these services separately on the spot except-(if included in the package).",
          },
        ],
      },
      {
        heading: "Liability",
        tncList: [
          {
            terms:
              "The company does not own or control hotels, coach or other facilities mentioned in the tour. As an operator of the package tour therefore, we cannot be held liable:",
          },
          {
            terms: "Where there has been no fault on the part of the company.",
          },
          {
            terms:
              "Where the failures in performance of the contract are caused by the customer. Where the failures are caused by a third party not connected with the provision of the holiday and is unforeseeable or unavoidable.",
          },
          {
            terms:
              "Where the failures are due to unusual and unforeseeable circumstances beyond your control. Where the failures are due to an event which you or your operator even with all due care could not foresee or foretell.",
          },
        ],
      },
      {
        heading: "Complaints",
        tncList: [
          {
            terms:
              "We do our best to give guests travelling on any of our holidays, an enjoyable and trouble free vacation but occasionally plans go wrong. Should you have any complaint, please inform your tour manager (at the same time), who will do everything possible to resolve the matter immediately.",
          },
        ],
      },
      {
        heading: "Extra Uses of Vehicle:",
        tncList: [
          {
            terms:
              "Please note that cost of the vehicle (car / coaches with the driver) does not include extra usage of vehicle like after transfer or after sightseeing, until or unless it is mentioned in the itinerary.",
          },
        ],
      },
      {
        heading: "Rights to amend the itinerary if required",
        tncList: [
          {
            terms:
              "Tour once commenced will strictly go as per the itinerary finalized. In case of events and circumstances beyond our control, we reserve the right to change all or parts of the contents of the itinerary for safety and well being of our esteemed guests.",
          },
        ],
      },
      {
        heading: "Our Liability",
        tncList: [
          {
            terms:
              "Kashmir Escapades Tour & Travels accepts the liability for those arrangements for your holiday, which are wholly within our control and therefore, accept liability to guests for the negligence of our employees. ",
          },
          {
            terms:
              "However, we would like to draw attention to the following circumstances, which fall outside our direct control or where for some reason we are not prepared to accept liability.",
          },
          {
            terms:
              "The Company shall, in no circumstances whatsoever be liable to the guest or any person travelling with him or her for: Any death, personal injury, sickness accidents, loss delay, discomfort, increased expenses, consequential loss and / or damage or theft howsoever caused.",
          },
        ],
      },
    ],
  },
};
export default sampleItinerary;
