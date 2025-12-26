var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#FF1E00",
    state_hover_color: "#000000",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
  },
  state_specific: {
    IDAC: {
      name: "Aceh",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Located at the western tip of Sumatra, known for its Islamic history.",
      url: "https://en.wikipedia.org/wiki/Aceh",
    },
    IDBA: {
      name: "Bali",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Global tourism hub famous for its culture, arts, and beaches.",
      url: "https://en.wikipedia.org/wiki/Bali",
    },
    IDBB: {
      name: "Bangka-Belitung",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "An archipelago known for tin production and white pepper.",
      url: "https://en.wikipedia.org/wiki/Bangka_Belitung_Islands",
    },
    IDBE: {
      name: "Bengkulu",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "An industrial hub and the main gateway between Java and Sumatra.",
      url: "https://en.wikipedia.org/wiki/Banten",
    },
    IDBT: {
      name: "Banten",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Famous as the habitat of the Rafflesia arnoldii (giant lily).",
      url: "https://en.wikipedia.org/wiki/Bengkulu",
    },
    IDGO: {
      name: "Gorontalo",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Located on Sulawesi, known for its deep religious culture.",
      url: "https://en.wikipedia.org/wiki/Gorontalo",
    },
    IDJA: {
      name: "Jambi",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "The nation's capital and the center of business and politics.",
      url: "https://en.wikipedia.org/wiki/Jakarta",
    },
    IDJB: {
      name: "Jawa Barat",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Rich in Malay heritage and home to ancient temple complexes.",
      url: "https://en.wikipedia.org/wiki/Jambi",
    },
    IDJI: {
      name: "Jawa Timur",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The most populous province and a center for industry.",
      url: "https://en.wikipedia.org/wiki/West_Java",
    },
    IDJK: {
      name: "Jakarta Raya",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The heart of Javanese culture, home to Borobudur Temple.",
      url: "https://en.wikipedia.org/wiki/Central_Java",
    },
    IDJT: {
      name: "Jawa Tengah",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "An industrial hub featuring the iconic Mount Bromo.",
      url: "https://en.wikipedia.org/wiki/East_Java",
    },
    IDKB: {
      name: "Kalimantan Barat",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Known for being traversed by the Equator line.",
      url: "https://en.wikipedia.org/wiki/West_Kalimantan",
    },
    IDKI: {
      name: "Kalimantan Timur",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Famous for its floating markets and coal mining.",
      url: "https://en.wikipedia.org/wiki/South_Kalimantan",
    },
    IDKR: {
      name: "Kepulauan Riau",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Home to vast rainforests and orangutan conservation areas.",
      url: "https://en.wikipedia.org/wiki/Central_Kalimantan",
    },
    IDKS: {
      name: "Kalimantan Selatan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Location of the new national capital, Nusantara (IKN).",
      url: "https://en.wikipedia.org/wiki/East_Kalimantan",
    },
    IDKT: {
      name: "Kalimantan Tengah",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Strategically located near major international shipping lanes.",
      url: "https://en.wikipedia.org/wiki/Riau_Islands",
    },
    IDKU: {
      name: "North Kalimantan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The primary entry point to Sumatra from Java.",
      url: "https://en.wikipedia.org/wiki/Lampung",
    },
    IDLA: {
      name: "Lampung",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Historically known as the world's original Spice Islands.",
      url: "https://en.wikipedia.org/wiki/Maluku_(province)",
    },
    IDMA: {
      name: "Maluku",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Center of the historic Ternate and Tidore spice sultanates.",
      url: "https://en.wikipedia.org/wiki/North_Maluku",
    },
    IDMU: {
      name: "Maluku Utara",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Indonesia's youngest province with high energy potential.",
      url: "https://en.wikipedia.org/wiki/North_Kalimantan",
    },
    IDNB: {
      name: "Nusa Tenggara Barat",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Home to the Mandalika Circuit and Mount Rinjani.",
      url: "https://en.wikipedia.org/wiki/West_Nusa_Tenggara",
    },
    IDNT: {
      name: "Nusa Tenggara Timur",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Home to the Komodo dragon and tri-colored lakes.",
      url: "https://en.wikipedia.org/wiki/East_Nusa_Tenggara",
    },
    IDPA: {
      name: "Papua",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "Known for its immense natural beauty and mineral resources.",
      url: "https://en.wikipedia.org/wiki/Papua_(province)",
    },
    IDPB: {
      name: "Papua Barat",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Renowned for the Raja Ampat marine biodiversity.",
      url: "https://en.wikipedia.org/wiki/West_Papua_(province)",
    },
    IDRI: {
      name: "Riau",
      color: "#FF1E00",
      hover_color: "#000000",
      description:
        "A center for palm oil plantations and the petroleum industry.",
      url: "https://en.wikipedia.org/wiki/Riau",
    },
    IDSA: {
      name: "Sulawesi Utara",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Known for its rich natural resources and Mandar culture.",
      url: "https://en.wikipedia.org/wiki/West_Sulawesi",
    },
    IDSB: {
      name: "Sumatera Barat",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The main economic and transport hub for Eastern Indonesia.",
      url: "https://en.wikipedia.org/wiki/South_Sulawesi",
    },
    IDSG: {
      name: "Sulawesi Tenggara",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Known for unique ecosystems and ancient megalithic sites.",
      url: "https://en.wikipedia.org/wiki/Central_Sulawesi",
    },
    IDSN: {
      name: "Sulawesi Selatan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Home to the world-renowned Wakatobi Marine National Park.",
      url: "https://en.wikipedia.org/wiki/Southeast_Sulawesi",
    },
    IDSR: {
      name: "Sulawesi Barat",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Famous for Bunaken National Park's underwater beauty.",
      url: "https://en.wikipedia.org/wiki/North_Sulawesi",
    },
    IDSS: {
      name: "Sumatera Selatan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Famous for Minangkabau culture and Padang cuisine.",
      url: "https://en.wikipedia.org/wiki/West_Sumatra",
    },
    IDST: {
      name: "Sulawesi Tengah",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Heartland of the ancient Srivijaya Empire.",
      url: "https://en.wikipedia.org/wiki/South_Sumatra",
    },
    IDSU: {
      name: "Sumatera Utara",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Home to Lake Toba, the largest volcanic lake in the world.",
      url: "https://en.wikipedia.org/wiki/North_Sumatra",
    },
    IDYO: {
      name: "Yogyakarta",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "A special region known for education and Javanese royalty.",
      url: "https://en.wikipedia.org/wiki/Special_Region_of_Yogyakarta",
    },
  },
  locations: {},
  labels: {
    IDAC: {
      name: "Aceh",
      parent_id: "IDAC",
    },
    IDBA: {
      name: "Bali",
      parent_id: "IDBA",
    },
    IDBB: {
      name: "Bangka-Belitung",
      parent_id: "IDBB",
    },
    IDBE: {
      name: "Bengkulu",
      parent_id: "IDBE",
    },
    IDBT: {
      name: "Banten",
      parent_id: "IDBT",
    },
    IDGO: {
      name: "Gorontalo",
      parent_id: "IDGO",
    },
    IDJA: {
      name: "Jambi",
      parent_id: "IDJA",
    },
    IDJB: {
      name: "Jawa Barat",
      parent_id: "IDJB",
    },
    IDJI: {
      name: "Jawa Timur",
      parent_id: "IDJI",
    },
    IDJK: {
      name: "Jakarta Raya",
      parent_id: "IDJK",
    },
    IDJT: {
      name: "Jawa Tengah",
      parent_id: "IDJT",
    },
    IDKB: {
      name: "Kalimantan Barat",
      parent_id: "IDKB",
    },
    IDKI: {
      name: "Kalimantan Timur",
      parent_id: "IDKI",
    },
    IDKR: {
      name: "Kepulauan Riau",
      parent_id: "IDKR",
    },
    IDKS: {
      name: "Kalimantan Selatan",
      parent_id: "IDKS",
    },
    IDKT: {
      name: "Kalimantan Tengah",
      parent_id: "IDKT",
    },
    IDKU: {
      name: "North Kalimantan",
      parent_id: "IDKU",
    },
    IDLA: {
      name: "Lampung",
      parent_id: "IDLA",
    },
    IDMA: {
      name: "Maluku",
      parent_id: "IDMA",
    },
    IDMU: {
      name: "Maluku Utara",
      parent_id: "IDMU",
    },
    IDNB: {
      name: "Nusa Tenggara Barat",
      parent_id: "IDNB",
    },
    IDNT: {
      name: "Nusa Tenggara Timur",
      parent_id: "IDNT",
    },
    IDPA: {
      name: "Papua",
      parent_id: "IDPA",
    },
    IDPB: {
      name: "Papua Barat",
      parent_id: "IDPB",
    },
    IDRI: {
      name: "Riau",
      parent_id: "IDRI",
    },
    IDSA: {
      name: "Sulawesi Utara",
      parent_id: "IDSA",
    },
    IDSB: {
      name: "Sumatera Barat",
      parent_id: "IDSB",
    },
    IDSG: {
      name: "Sulawesi Tenggara",
      parent_id: "IDSG",
    },
    IDSN: {
      name: "Sulawesi Selatan",
      parent_id: "IDSN",
    },
    IDSR: {
      name: "Sulawesi Barat",
      parent_id: "IDSR",
    },
    IDSS: {
      name: "Sumatera Selatan",
      parent_id: "IDSS",
    },
    IDST: {
      name: "Sulawesi Tengah",
      parent_id: "IDST",
    },
    IDSU: {
      name: "Sumatera Utara",
      parent_id: "IDSU",
    },
    IDYO: {
      name: "Yogyakarta",
      parent_id: "IDYO",
    },
  },
  legend: {
    entries: [],
  },
  regions: {},
};
