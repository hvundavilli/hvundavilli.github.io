/* =====================================================================
   content.js — THE ONLY FILE YOU EVER EDIT (your ".tex" file)
   =====================================================================
   Everything on the website is written here. The .html files, style.css,
   and render.js are the "document class" — never touch them.

   Rules of thumb:
   - Text goes inside quotes: "like this".
   - Items in lists are separated by commas. Copy a whole { ... } block
     to add a new paper / student / news item.
   - You can use simple HTML inside text: <em>italics</em>,
     <strong>bold</strong>, <a href="URL">links</a>, &ndash; for –.
   - After editing: Commit changes on GitHub. Site updates in ~1 minute.
   ===================================================================== */

window.SITE = {

  /* ------------------------------------------------------------------
     SITE IDENTITY  (header on every page, footer, browser tab)
     ------------------------------------------------------------------ */
  meta: {
    siteName: "The CoastalTIDES Lab",
    siteSub: "Hemanth Vundavilli · Coastal Oceanography · Coastal Carolina University",
    footerName: "Hemanth Vundavilli · CoastalTIDES Lab",
    email: "vvundavil@coastal.edu",
    scholar: "https://scholar.google.com/citations?user=FMsnJtsAAAAJ&hl=en"
  },

  /* ------------------------------------------------------------------
     HOME PAGE SLIDESHOW CAPTIONS
     Photos go at images/slide1.jpg ... slide5.jpg (appear automatically).
     ------------------------------------------------------------------ */
  slides: [
    "Wax Lake Delta, Louisiana",
    "Port Royal Sound, South Carolina",
    "Mangrove estuary, Aotearoa New Zealand",
    "Instrument deployment",
    "Winyah Bay, South Carolina"
  ],

  /* ------------------------------------------------------------------
     HOME PAGE
     ------------------------------------------------------------------ */
  home: {
    lede: "At the coast, rivers meet the tide — and together they move the sediment that builds deltas, floodplains, marshes, and shorelines. We study how that happens: how water and sediment travel through coastal systems, how storms and vegetation reshape them, and what that means for the people and ecosystems that depend on them.",
    intro: "The CoastalTIDES Lab is led by Hemanth Vundavilli, assistant professor of Coastal Oceanography and Systems Science in the Department of Marine Science at Coastal Carolina University. We pair Delft3D numerical modeling with field observations — ADCPs, tide gauges, and plenty of time on the water.",
    contactLine: "207H Smith Science · Conway, South Carolina",
    aboutTitle: "A short version of the long story",
    about: [
      "Before Coastal Carolina, Hemanth was a postdoctoral researcher at Louisiana State University, jointly appointed in Civil & Environmental Engineering and Oceanography & Coastal Sciences, working on nature-based solutions for coastal resilience with the U.S. Army Engineer Research and Development Center. His Ph.D. is in Earth Sciences from the University of Waikato, New Zealand, on how buoyant river plumes interact with mangrove forests. Before that: a dual B.Tech/M.Tech in Naval Architecture and Ocean Engineering from IIT Madras, with research stops in Estonia along the way.",
      "We're always looking for curious students — see <a href='mentorship.html'>Mentorship</a> if you'd like to join."
    ],
    latest: [
      { date: "2025 · Award", title: "Pritchard Award, Coastal & Estuarine Research Federation" },
      { date: "Aug 2025 · New chapter", title: "The CoastalTIDES Lab opens at Coastal Carolina University" }
    ]
  },

  /* ------------------------------------------------------------------
     RESEARCH PAGE
     ------------------------------------------------------------------ */
  research: {
    intro: "Our work sits where physical oceanography, hydrology, and geomorphology meet. The common thread is transport: how water and sediment move through coastal systems, and how that movement builds, maintains, or erodes the landscapes people depend on. We use process-based numerical models (mainly Delft3D), moored instruments (ADCPs, tide gauges, CTDs), and careful signal analysis of field records.",
    current: [
      {
        tag: "Modeling", sub: "River deltas",
        title: "Floodplain activation and delta building",
        text: "What happens to a growing delta when its river is reconnected to — or cut off from — its floodplain? Using morphodynamic simulations inspired by the Wax Lake Delta, we track sediment delivery from distinct sources (floodplain, riverbed, new river supply, coastal bed) under river and tidal forcing to understand how connectivity changes what actually builds the delta."
      },
      {
        tag: "Observations", sub: "Port Royal Sound, SC",
        title: "How estuaries respond to storms",
        text: "Using moored ADCP and water-level records from Port Royal Sound, we examine how local winds and remote shelf forcing set the water-level and circulation response of a South Carolina estuary during tropical cyclones — including why storms with different track geometries can produce strikingly different responses."
      },
      {
        tag: "Modeling", sub: "Backwater zone",
        title: "River–floodplain connectivity in the backwater reach",
        text: "Idealized numerical experiments on how floodplain vegetation configuration influences flow exchange and channel dynamics in the backwater zone of lowland rivers."
      },
      {
        tag: "Modeling", sub: "Restoration",
        title: "Thin-layer sediment placement on salt marshes",
        text: "Can adding a thin layer of sediment help existing marshes keep pace with sea-level rise and improve endangered species habitat? We test this with idealized morphodynamic modeling."
      },
      {
        tag: "Estuaries", sub: "Winyah Bay, SC",
        title: "The freshwater-to-saltwater transition in Winyah Bay",
        text: "An interdisciplinary exploratory project (co-PI, 2025) on the structure of the fresh–salt transition in Winyah Bay, South Carolina."
      }
    ],
    past: [
      {
        tag: "2023–2025", sub: "LSU / ERDC",
        title: "Engineering practices for ecosystem design (DEEDS)",
        text: "Developed a Collaborative Ecosystem Design tool to inform the U.S. Army on enhancing coastal resiliency through nature and nature-based solutions. Funded by the U.S. Army Engineer Research and Development Center."
      },
      {
        tag: "Ph.D.", sub: "Waikato, NZ",
        title: "Buoyant river plumes and mangrove vegetation",
        text: "Three-dimensional Delft3D modeling of how buoyant river plumes interact with mangrove forests — and what that means for sediment transport, deposition, and erosion in tidal environments, including the coalescence of neighboring plumes."
      },
      {
        tag: "Contract", sub: "New Zealand",
        title: "Mixing in a shallow temperate lake",
        text: "Circulation modeling of mixing and transport processes that alter water quality, with the Bay of Plenty Regional Council."
      }
    ]
  },

  /* ------------------------------------------------------------------
     PUBLICATIONS
     To add a paper: copy one { ... } block, paste it at the TOP of the
     list, edit the text. doiURL can be "" if there isn't one yet.
     ------------------------------------------------------------------ */
  publications: {
    published: [
      {
        authors: "Vundavilli, H., Mullarney, J.C., MacDonald, I.T. (2024)",
        title: "The coalescence of two mangrove-lined river plumes and consequences for sediment transport and deposition in a coastal environment",
        venue: "<em>Continental Shelf Research</em>, 105280.",
        doiURL: "https://doi.org/10.1016/j.csr.2024.105280",
        doiText: "doi:10.1016/j.csr.2024.105280"
      },
      {
        authors: "Vundavilli, H., Mullarney, J.C., MacDonald, I.T. (2024)",
        title: "The influence of river plume discharge and winds on sediment transport into a coastal mangrove environment",
        venue: "<em>Estuaries and Coasts</em> 47, 1236–1254.",
        doiURL: "https://doi.org/10.1007/s12237-024-01367-2",
        doiText: "doi:10.1007/s12237-024-01367-2"
      },
      {
        authors: "Vundavilli, H., Mullarney, J.C., MacDonald, I.T., Bryan, K.R. (2021)",
        title: "The interaction of buoyant coastal river plumes with mangrove vegetation and consequences for sediment deposition and erosion in a tidal environment",
        venue: "<em>Continental Shelf Research</em> 222, 104417.",
        doiURL: "https://doi.org/10.1016/j.csr.2021.104417",
        doiText: "doi:10.1016/j.csr.2021.104417"
      }
    ],
    inprepNote: "† mentored undergraduate co-author",
    inprep: [
      {
        authors: "Vundavilli, H., Zanders, T.†, Hiatt, M., Willson, C.",
        title: "River–floodplain connectivity in the coastal backwater zone influenced by floodplain vegetation configurations"
      },
      {
        authors: "Vundavilli, H., Hiatt, M., Willson, C., Zanders, T.†",
        title: "The effects of floodplain vegetation on delta morphodynamics"
      },
      {
        authors: "Vundavilli, H., Hiatt, M., Willson, C.",
        title: "Thin-layer sediment addition to an existing salt marsh to combat sea-level rise and improve endangered species habitat: an idealised modeling study"
      },
      {
        authors: "Vundavilli, H., Bussott, F.†, Hiatt, M., Willson, C.",
        title: "The effects of sediment grain-size on saltwater intrusion and consequences for sediment transport and deposition in a coastal environment"
      }
    ]
  },

  /* ------------------------------------------------------------------
     TEACHING
     ------------------------------------------------------------------ */
  teaching: {
    groups: [
      {
        eyebrow: "Coastal Carolina University",
        heading: "Courses",
        blocks: [
          { sub: "Spring 2026", rows: [
            { code: "MSCI 445/545", text: "Coastal Processes", note: "" },
            { code: "ENGR 470", text: "Water Resources Engineering", note: "" }
          ]},
          { sub: "Fall 2025", rows: [
            { code: "MSCI 416/516", text: "Hydrogeology", note: "evaluation 4.78/5" },
            { code: "MSCI 416L", text: "Hydrogeology Laboratory", note: "evaluation 4.78/5" },
            { code: "MSCI 304L", text: "Marine Geology Laboratory", note: "evaluation 4.67/5" }
          ]}
        ]
      },
      {
        eyebrow: "Previously",
        heading: "Earlier teaching",
        blocks: [
          { sub: "Louisiana State University", rows: [
            { code: "OCS 2011", text: "Introduction to Coding for Coastal Sciences", note: "co-taught, Fall 2024" },
            { code: "OCS 4148", text: "Wetland Hydrology and Hydrodynamics", note: "guest lecturer, Spring 2024" }
          ]},
          { sub: "University of Waikato (teaching assistant)", rows: [
            { code: "ERTH 341", text: "Coastal Oceanography", note: "" },
            { code: "ERTH 241", text: "Coastal Processes and Hydrology", note: "" },
            { code: "ERTH 104", text: "Introduction to Earth Sciences", note: "" }
          ]}
        ]
      }
    ],
    footnote: "Syllabi and materials live on Moodle, or <a href='mailto:vvundavil@coastal.edu'>email me</a> for a copy. Interested in research? Head to <a href='mentorship.html'>Mentorship</a>."
  },

  /* ------------------------------------------------------------------
     MENTORSHIP / PEOPLE
     To show a student's photo: upload it to images/people/ on GitHub,
     then change photo: null  -->  photo: "images/people/filename.jpg"
     ------------------------------------------------------------------ */
  mentorship: {
    philosophy: "The lab works best as a collaborative, curious place. My job is to help each student become an independent scientist — able to frame a question, build the model or the mooring, analyze the data, and write it up. I tailor projects and professional development to where each person wants to go, whether that's academia, agencies, or industry.",
    prospective: [
      {
        metaTop: "Graduate", metaSub: "M.S. / Ph.D.",
        text: "I recruit students interested in coastal physical oceanography, delta and estuary dynamics, sediment transport, and numerical modeling. Backgrounds in oceanography, geology, environmental science, engineering, physics, or math are all welcome. Email me a CV, a short statement of research interests, and unofficial transcripts."
      },
      {
        metaTop: "Undergrad", metaSub: "Research",
        text: "Undergraduates in the lab learn Delft3D modeling, MATLAB/Python data analysis, and coastal fieldwork, with chances to present at conferences. <a href='contact.html'>Reach out</a> to talk projects."
      }
    ],
    people: [
      {
        photo: null,
        name: "Hemanth Vundavilli",
        role: "Principal Investigator",
        about: "Coastal oceanography, delta morphodynamics, Delft3D."
      },
      {
        photo: "images/people/abigail-belcher.jpg",
        name: "Abigail Belcher",
        role: "Ph.D. student · incoming Fall 2026",
        about: ""
      },
      {
        photo: null,
        name: "Jonathon A. Riley",
        role: "Undergraduate · Spring 2026",
        about: "Numerical modeling with Delft3D."
      },
      {
        photo: null,
        name: "Luke Dykema",
        role: "Undergraduate · Spring 2026",
        about: "Coding and environmental data analysis."
      },
      {
        photo: null,
        name: "Cameron A. Marshall",
        role: "Undergraduate · Spring 2026",
        about: "Delft3D modeling and MATLAB post-processing."
      },
      {
        photo: null,
        name: "Isabella Hicks",
        role: "Undergraduate · Fall 2025",
        about: "Coastal delta dynamics and numerical modeling."
      }
    ],
    committees: [
      { k: "M.S.", text: "Hayden Smith", note: "co-chair, with Till Hanebuth" },
      { k: "M.S.", text: "Elizabeth Li", note: "co-advised with Zhixiong Shen" },
      { k: "M.S.", text: "Mariia Gorlo", note: "co-advised with Till Hanebuth" }
    ],
    pastMentees: [
      { k: "2024", text: "Frank Bussott", note: "SURF — sediment grain-size and saltwater intrusion" },
      { k: "2023", text: "Tyria M. Zanders", note: "USGS CAST — river–floodplain connectivity" }
    ]
  },

  /* ------------------------------------------------------------------
     NEWS  (newest first — add new items at the TOP)
     ------------------------------------------------------------------ */
  news: [
    {
      date: "2025 · Award",
      title: "Pritchard Award, Coastal & Estuarine Research Federation",
      text: "Honored to receive the Pritchard Award from CERF."
    },
    {
      date: "2025 · Grant",
      title: "Exploratory grant: Winyah Bay freshwater–saltwater transition",
      text: "Co-PI on an interdisciplinary project studying the fresh-to-salt transition in Winyah Bay, South Carolina."
    },
    {
      date: "Aug 2025 · New chapter",
      title: "The CoastalTIDES Lab opens at Coastal Carolina University",
      text: "Started as Assistant Professor of Coastal Oceanography and Systems Science in the Department of Marine Science, Gupta College of Science."
    },
    {
      date: "2025 · Outreach",
      title: "Gupta College of Science STEM Day",
      text: "Demonstrated coastal erosion with a stream table for school students from across Georgetown–Horry County, SC."
    },
    {
      date: "Dec 2024 · Conference",
      title: "AGU Fall Meeting, Washington D.C.",
      text: "Presented on the effects of floodplain vegetation on the hydro-morphodynamics of a river delta system."
    },
    {
      date: "2024 · Publications",
      title: "Two papers out",
      text: "On river plume coalescence (<em>Continental Shelf Research</em>) and plume discharge and winds (<em>Estuaries and Coasts</em>) — see <a href='publications.html'>Publications</a>."
    }
  ],

  /* ------------------------------------------------------------------
     CONTACT
     ------------------------------------------------------------------ */
  contact: {
    rows: [
      { k: "Email", v: "<a href='mailto:vvundavil@coastal.edu'>vvundavil@coastal.edu</a>" },
      { k: "Office", v: "207H Smith Science" },
      { k: "Phone", v: "+1 (843) 349-2860" },
      { k: "Address", v: "Department of Marine Science, Gupta College of Science,<br>Coastal Carolina University, Conway, South Carolina" },
      { k: "Scholar", v: "<a href='https://scholar.google.com/citations?user=FMsnJtsAAAAJ&hl=en'>Google Scholar profile</a>" },
      { k: "Map", v: "<a href='https://www.coastal.edu/map/'>CCU campus map</a>" }
    ],
    note: "Prospective students: include a CV and a short note on your research interests — and have a look at <a href='mentorship.html'>Mentorship</a> first."
  }
};
