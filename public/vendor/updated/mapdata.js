var simplemaps_countrymap_mapdata={
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
    location_image_url: ""
  },
  state_specific: {
    IDAC: {
      name: "Aceh",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Located at the western tip of Sumatra, known for its Islamic history.",
      url: "https://en.wikipedia.org/wiki/Aceh",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Meuseujid_Raya_Baiturrahman%2C_Aceh.jpg/1200px-Meuseujid_Raya_Baiturrahman%2C_Aceh.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes"
    },
    IDBA: {
      name: "Bali",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Global tourism hub famous for its culture, arts, and beaches.",
      url: "https://en.wikipedia.org/wiki/Bali",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pura_Ulun_Danu_Bratan%2C_2022.jpg/500px-Pura_Ulun_Danu_Bratan%2C_2022.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes"
    },
    IDBB: {
      name: "Bangka Belitung Islands",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "An archipelago known for tin production and white pepper.",
      url: "https://en.wikipedia.org/wiki/Bangka_Belitung_Islands",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Berlayar_di_Semenanjung_Belitung.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes"
    },
    IDBE: {
      name: "Bengkulu",
      color: "#FFFF00",
      hover_color: "#000000",
      description: "Famous as the habitat of the Rafflesia arnoldii (giant lily).",
      url: "https://en.wikipedia.org/wiki/Bengkulu",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Umeak_Potong_Jang.jpg/500px-Umeak_Potong_Jang.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes"
    },
    IDBT: {
      name: "Banten",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "An industrial hub and the main gateway between Java and Sumatra.",
      url: "https://en.wikipedia.org/wiki/Banten",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kanekes_village%2C_Banten.jpg/500px-Kanekes_village%2C_Banten.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes"
    },
    IDGO: {
      name: "Gorontalo",
      color: "#FF1E00",
      description: "Located on Sulawesi, known for its deep religious culture.",
      url: "https://en.wikipedia.org/wiki/Gorontalo",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Menara_Keagungan_Limboto.jpg/330px-Menara_Keagungan_Limboto.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      hover_color: "#000000"
    },
    IDJA: {
      name: "Jambi",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Rich in Malay heritage and home to ancient temple complexes.",
      url: "https://en.wikipedia.org/wiki/Jambi",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://globalplanet.news/uploads/2024/07/jambi-seberang_copy_800x480.jpg"
    },
    IDJB: {
      name: "West Java",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The most populous province and a center for industry.",
      url: "https://en.wikipedia.org/wiki/West_Java",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://gowithguide.com/_next/image?url=https%3A%2F%2Fimages.gowithguide.com%2Ffit-in%2F1024x1024%2Fgowithguide%2Fcities%2F1852%2F95042.jpg&w=1080&q=75"
    },
    IDJI: {
      name: "East Java",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "An industrial hub featuring the iconic Mount Bromo.",
      url: "https://en.wikipedia.org/wiki/East_Java",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.wartakini.co/wp-content/uploads/2023/09/img_1516.jpg"
    },
    IDJK: {
      name: "Jakarta",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The nation's capital and the center of business and politics.",
      url: "https://en.wikipedia.org/wiki/Jakarta",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Jakarta_CBD.jpg/500px-Jakarta_CBD.jpg",
      hide: "no",
      inactive: "no",
      zoomable: "yes"
    },
    IDJT: {
      name: "Central Java",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "The heart of Javanese culture, home to Borobudur Temple.",
      url: "https://en.wikipedia.org/wiki/Central_Java",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynTTQZDdqRhr13jSRsQQFeUCTzqXjSPPCsg&s"
    },
    IDKB: {
      name: "West Kalimantan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Known for being traversed by the Equator line.",
      url: "https://en.wikipedia.org/wiki/West_Kalimantan",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://ik.imagekit.io/tvlk/blog/2024/09/shutterstock_2465625283.jpg?tr=q-70,c-at_max,w-1000,h-600"
    },
    IDKI: {
      name: "East Kalimantan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Location of the new national capital, Nusantara (IKN).",
      url: "https://en.wikipedia.org/wiki/East_Kalimantan",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.indonesia.travel/contentassets/476a8c1f9b0b4ab0b30c89a53479cbac/kalimantan-selatan-1.jpg"
    },
    IDKR: {
      name: "Riau Islands",
      description: "Strategically located near major international shipping lanes.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Riau_Islands",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.indonesia.travel/contentassets/3f429b55ddee48268f0ac45c5d8611a9/riauau.jpeg"
    },
    IDKS: {
      name: "South Kalimantan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Famous for its floating markets and coal mining.",
      url: "https://en.wikipedia.org/wiki/South_Kalimantan",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://mediaim.expedia.com/destination/2/a114c0222ca9d6b649c4edbec8fb3401.jpg"
    },
    IDKT: {
      name: "Central Kalimantan",
      color: "#FF1E00",
      hover_color: "#000000",
      description: "Home to vast rainforests and orangutan conservation areas.",
      url: "https://en.wikipedia.org/wiki/Central_Kalimantan",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.indonesia.travel/contentassets/c3eac650bb454c05bd82f0c56fdcb45c/central-kalimantan.jpg"
    },
    IDKU: {
      name: "North Kalimantan",
      description: "Indonesia's youngest province with high energy potential.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/North_Kalimantan",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/13/e9/19/die-lagune-von-nunukan.jpg?w=1200&h=1200&s=1"
    },
    IDLA: {
      name: "Lampung",
      description: "The primary entry point to Sumatra from Java.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Lampung",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.agoda.com/wp-content/uploads/2024/06/Lampungs-landmark-siger-tower-1244x700.jpg"
    },
    IDMA: {
      name: "Maluku",
      description: "Historically known as the world's original Spice Islands.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Maluku_(province)",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.indonesia.travel/contentassets/6e5f7384e93e43eca03d39917a55c69d/taman-maluku.jpg"
    },
    IDMU: {
      name: "North Maluku",
      description: "Center of the historic Ternate and Tidore spice sultanates.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/North_Maluku",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Surga_rempah_rempah.jpg"
    },
    IDNB: {
      name: "West Nusa Tenggara",
      description: "Home to the Mandalika Circuit and Mount Rinjani.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/West_Nusa_Tenggara",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlC5aprd_EJ7RX0pcG_vHSUEiXoV8FOo0sgA&s"
    },
    IDNT: {
      name: "East Nusa Tenggara",
      description: "Home to the Komodo dragon and tri-colored lakes.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/East_Nusa_Tenggara",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/19/1a/f3/come-and-join-with-us.jpg?w=500&h=500&s=1"
    },
    IDPA: {
      name: "Papua",
      description: "Known for its immense natural beauty and mineral resources.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Papua_(province)",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6mlifdoVyvphbZfepxRqDcVOufmYcdVrow&s"
    },
    IDPB: {
      name: "West Papua",
      description: "Renowned for the Raja Ampat marine biodiversity.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/West_Papua_(province)",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlig8euwpuWaSRqbh1q_UElkl5wT_4faBVYw&s"
    },
    IDRI: {
      name: "Riau",
      description: "A center for palm oil plantations and the petroleum industry.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Riau",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://mediacenter.riau.go.id/foto_berita/medium/inilah-7-rekomendasi-tempat-wisata.jpg"
    },
    IDSA: {
      name: "North Sulawesi",
      description: "Famous for Bunaken National Park's underwater beauty.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/North_Sulawesi",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLERyXhCMsWLz3i3F7H3-bkF1UekbW9PbQQ&s"
    },
    IDSB: {
      name: "West Sumatra",
      description: "Famous for Minangkabau culture and Padang cuisine.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/West_Sumatra",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMPs-SpYZx6MOFZw3qfqTx5UaCpA05Z-vhQ&s"
    },
    IDSG: {
      name: "Southeast Sulawesi",
      description: "Home to the world-renowned Wakatobi Marine National Park.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Southeast_Sulawesi",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.indonesia.travel/contentassets/6a31407af55a4760bf8f4ea81213cea2/south-east-sulawesi---wakatobi.jpg"
    },
    IDSN: {
      name: "South Sulawesi",
      description: "The main economic and transport hub for Eastern Indonesia.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/South_Sulawesi",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "data:image/jpeg;base64,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"
    },
    IDSR: {
      name: "West Sulawesi",
      description: "Known for its rich natural resources and Mandar culture.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/West_Sulawesi",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://i.redd.it/dfrxdf052xa91.jpg"
    },
    IDSS: {
      name: "South Sumatra",
      description: "Heartland of the ancient Srivijaya Empire.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/South_Sumatra",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://www.indonesia.travel/contentassets/109a81f5f4454f328446d01263285132/south-sumatra-province.jpg"
    },
    IDST: {
      name: "Central Sulawesi",
      description: "Known for unique ecosystems and ancient megalithic sites.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Central_Sulawesi",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "https://cdn.britannica.com/52/1652-050-CEEEF484/housing-funeral-village-relatives-guests-Toraja-Celebes.jpg"
    },
    IDSU: {
      name: "North Sumatra",
      description: "Home to Lake Toba, the largest volcanic lake in the world.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/North_Sumatra",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "data:image/jpeg;base64,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"
    },
    IDYO: {
      name: "Yogyakarta",
      description: "A special region known for education and Javanese royalty.",
      color: "#FF1E00",
      hover_color: "#000000",
      url: "https://en.wikipedia.org/wiki/Special_Region_of_Yogyakarta",
      hide: "no",
      inactive: "no",
      zoomable: "yes",
      image_url: "data:image/jpeg;base64,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"
    }
  },
  locations: {},
  labels: {
    IDAC: {
      name: "Aceh",
      parent_id: "IDAC"
    },
    IDBA: {
      name: "Bali",
      parent_id: "IDBA"
    },
    IDBB: {
      name: "Bangka-Belitung",
      parent_id: "IDBB"
    },
    IDBE: {
      name: "Bengkulu",
      parent_id: "IDBE"
    },
    IDBT: {
      name: "Banten",
      parent_id: "IDBT"
    },
    IDGO: {
      name: "Gorontalo",
      parent_id: "IDGO"
    },
    IDJA: {
      name: "Jambi",
      parent_id: "IDJA"
    },
    IDJB: {
      name: "Jawa Barat",
      parent_id: "IDJB"
    },
    IDJI: {
      name: "Jawa Timur",
      parent_id: "IDJI"
    },
    IDJK: {
      name: "Jakarta Raya",
      parent_id: "IDJK"
    },
    IDJT: {
      name: "Jawa Tengah",
      parent_id: "IDJT"
    },
    IDKB: {
      name: "Kalimantan Barat",
      parent_id: "IDKB"
    },
    IDKI: {
      name: "Kalimantan Timur",
      parent_id: "IDKI"
    },
    IDKR: {
      name: "Kepulauan Riau",
      parent_id: "IDKR"
    },
    IDKS: {
      name: "Kalimantan Selatan",
      parent_id: "IDKS"
    },
    IDKT: {
      name: "Kalimantan Tengah",
      parent_id: "IDKT"
    },
    IDKU: {
      name: "North Kalimantan",
      parent_id: "IDKU"
    },
    IDLA: {
      name: "Lampung",
      parent_id: "IDLA"
    },
    IDMA: {
      name: "Maluku",
      parent_id: "IDMA"
    },
    IDMU: {
      name: "Maluku Utara",
      parent_id: "IDMU"
    },
    IDNB: {
      name: "Nusa Tenggara Barat",
      parent_id: "IDNB"
    },
    IDNT: {
      name: "Nusa Tenggara Timur",
      parent_id: "IDNT"
    },
    IDPA: {
      name: "Papua",
      parent_id: "IDPA"
    },
    IDPB: {
      name: "Papua Barat",
      parent_id: "IDPB"
    },
    IDRI: {
      name: "Riau",
      parent_id: "IDRI"
    },
    IDSA: {
      name: "Sulawesi Utara",
      parent_id: "IDSA"
    },
    IDSB: {
      name: "Sumatera Barat",
      parent_id: "IDSB"
    },
    IDSG: {
      name: "Sulawesi Tenggara",
      parent_id: "IDSG"
    },
    IDSN: {
      name: "Sulawesi Selatan",
      parent_id: "IDSN"
    },
    IDSR: {
      name: "Sulawesi Barat",
      parent_id: "IDSR"
    },
    IDSS: {
      name: "Sumatera Selatan",
      parent_id: "IDSS"
    },
    IDST: {
      name: "Sulawesi Tengah",
      parent_id: "IDST"
    },
    IDSU: {
      name: "Sumatera Utara",
      parent_id: "IDSU"
    },
    IDYO: {
      name: "Yogyakarta",
      parent_id: "IDYO"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};