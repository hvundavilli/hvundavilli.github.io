/* =====================================================================
   content.js — THE ONLY FILE YOU EVER EDIT (your ".tex" file)
   =====================================================================
   Everything on the website is written here. The .html shells,
   render.js, worldmap.js and style.css are the "document class".

   - Text goes inside quotes. List items separated by commas.
   - Simple HTML allowed: <em>..</em>, <strong>..</strong>,
     <a href="URL">..</a>, &ndash; for –.
   - Comments: // like this (the LaTeX % equivalent).
   - Any field left as "" or null is simply not shown.
   - After editing: save and refresh (or Commit, once on GitHub).

   PHOTOS live in subfolders:
     images/home/      homepage art (optional word-cloud image)
     images/team/      PI portrait + student headshots
     images/research/  one photo per project
     images/join/      photos for the Lab Life gallery
   ===================================================================== */

window.SITE = {

  /* ---------------- SITE IDENTITY (header, footer, tab) ------------- */
  meta: {
    siteName: "The CoastalTIDES Lab",          // used for browser tabs and the footer
    // the big line inside the header band on the HOME page:
    headerTitle: "Welcome to the CoastalTIDES Lab at Coastal Carolina University",
    // ...and on every other page (no "Welcome to" repeated everywhere):
    innerHeaderTitle: "The CoastalTIDES Lab",
    // height of that header band, in pixels — raise or lower this number
    headerHeight: 320,
    siteSub: "Coastal Oceanography || Coastal Carolina University",
    footerName: "The CoastalTIDES Lab · Department of Marine Science, Coastal Carolina University",
    email: "vvundavil@coastal.edu",
    scholar: "http://scholar.google.com/citations?user=FMsnJtsAAAAJ&hl=en&oi=ao",

    // THE MENU. Order here = order on the site. The menu is built from
    // this list, so adding a tab later = one line here + a copy of any
    // .html file with data-page changed to match.
    nav: [
      { page: "home",          label: "Home",          href: "index.html" },
      { page: "research",      label: "Research",      href: "research.html" },
      { page: "collaborators", label: "Collaborators", href: "collaborators.html" },
      { page: "team",          label: "Team",          href: "team.html" },
      { page: "publications",  label: "Publications",  href: "publications.html" },
      { page: "outreach",      label: "Outreach",      href: "outreach.html" },
      { page: "life",          label: "Lab Life",      href: "life.html" },
      { page: "join",          label: "Join Us",       href: "join.html" }
    ]
  },

  /* ---------------- HOME PAGE ---------------------------------------
     Just the welcome and the word cloud.
     The acronym below is rendered as: Transport, Inundation, and
     Dynamics in Emerging Shorelines — with the T, I, D, E, S underlined.
     ------------------------------------------------------------------ */
  home: {
    welcomeSmall: "Welcome to",
    welcomeBig: "CoastalTIDES",

    // each entry underlines its first letter; "plain" parts are joined as-is
    acronym: [
      { word: "Transport" },
      { plain: ", " },
      { word: "Inundation" },
      { plain: ", and " },
      { word: "Dynamics" },
      { plain: " in " },
      { word: "Emerging" },
      { plain: " " },
      { word: "Shorelines" }
    ],

    intro: "The CoastalTIDES Lab — <strong>Transport, Inundation, and Dynamics in Emerging Shorelines</strong> — studies how water and sediment move through the coastal zone, and how deltas, marshes, and estuaries are built, held together, or worn away. We work across numerical modeling, field observations, and remote sensing.",
    cloudLead: "Our research, in a word cloud:",

    wordcloud: {
      // Prefer your own image? Upload it to images/home/ and set:
      //   image: "images/home/wordcloud.png"
      image: null,
      caption: "",
      // weight 1–5 sets the size. Add or remove terms freely.
      terms: [
        // --- core themes (biggest) ---
        { t: "sediment transport", w: 5 },
        { t: "river deltas", w: 5 },
        { t: "morphodynamics", w: 5 },
        { t: "river plumes", w: 5 },
        // --- major topics ---
        { t: "Delft3D", w: 4 },
        { t: "estuaries", w: 4 },
        { t: "floodplain connectivity", w: 4 },
        { t: "numerical modeling", w: 4 },
        { t: "mangroves", w: 4 },
        { t: "remote sensing", w: 4 },
        { t: "water quality", w: 4 },
        { t: "salt marshes", w: 4 },
        { t: "buoyant plumes", w: 4 },
        // --- processes ---
        { t: "estuarine circulation", w: 3 },
        { t: "backwater dynamics", w: 3 },
        { t: "saltwater intrusion", w: 3 },
        { t: "salt wedge", w: 3 },
        { t: "stratification", w: 3 },
        { t: "buoyancy-driven flow", w: 3 },
        { t: "plume fronts", w: 3 },
        { t: "tidal asymmetry", w: 3 },
        { t: "wave–current interaction", w: 3 },
        { t: "storm surge", w: 3 },
        { t: "coastal flooding", w: 3 },
        { t: "coastal erosion", w: 3 },
        { t: "sea-level rise", w: 3 },
        { t: "channel avulsion", w: 3 },
        { t: "delta lobes", w: 3 },
        { t: "marsh accretion", w: 3 },
        { t: "vegetation drag", w: 3 },
        { t: "suspended sediment", w: 3 },
        { t: "cohesive sediment", w: 3 },
        { t: "tides", w: 3 },
        { t: "hydrodynamics", w: 3 },
        { t: "field observations", w: 3 },
        // --- tools and data ---
        { t: "ADCP", w: 2 },
        { t: "CTD profiling", w: 2 },
        { t: "tide gauges", w: 2 },
        { t: "moorings", w: 2 },
        { t: "ROMS", w: 2 },
        { t: "Sentinel-2", w: 2 },
        { t: "Landsat", w: 2 },
        { t: "SAR imagery", w: 2 },
        { t: "satellite imagery", w: 2 },
        { t: "bathymetry", w: 2 },
        { t: "MATLAB", w: 2 },
        { t: "Python", w: 2 },
        { t: "high-performance computing", w: 2 },
        { t: "model calibration", w: 2 },
        // --- settings and applications ---
        { t: "tidal flats", w: 2 },
        { t: "tidal inlets", w: 2 },
        { t: "mangrove forests", w: 2 },
        { t: "flocculation", w: 2 },
        { t: "bed shear stress", w: 2 },
        { t: "sediment flux", w: 2 },
        { t: "sediment budgets", w: 2 },
        { t: "grain size", w: 2 },
        { t: "deposition", w: 2 },
        { t: "shoreline change", w: 2 },
        { t: "turbidity", w: 2 },
        { t: "mixing", w: 2 },
        { t: "turbulence", w: 2 },
        { t: "hydrology", w: 2 },
        { t: "nature-based solutions", w: 2 },
        { t: "coastal resilience", w: 3 },
        { t: "restoration", w: 2 },
        { t: "wetlands", w: 2 },
        { t: "tropical cyclones", w: 2 },
        { t: "Wax Lake Delta", w: 2 },
        { t: "Winyah Bay", w: 2 },
        { t: "Port Royal Sound", w: 2 }
      ]
    }
  },

  /* ---------------- RESEARCH ----------------------------------------
     Each project shows as: photo, then TITLE, then the funding line,
     then the text. Photo: upload to images/research/ and set
     image: "images/research/filename.jpg". Leave null for a placeholder.
     ------------------------------------------------------------------ */
  research: {
    intro: "At the CoastalTIDES Lab, our work sits where physical oceanography, hydrology, and geomorphology meet. We study how water and sediment move through coastal systems and how those movements build, sustain, or erode the landscapes that protect communities and support ecosystems. Our research combines process-based numerical modeling, field observations, and remote sensing to uncover the processes driving coastal change.",

    currentTitle: "Current projects",
    current: [
            
      {
        image: "images/research/waties.png",
        funding: "Funding agency: Horry County Higher Education Commission",
        title: "WATER: WAties Technology, Education, and Research",
        text: "Building an integrated coastal observing system at Waties Island using LiDAR, acoustic mapping, environmental sensors, and numerical modeling to understand circulation, flooding, sediment transport, and ecosystem change while creating a living laboratory for students and community engagement."
      },
            
      //{
       // image: null,   // images/research/backwater.jpg
       // funding: "U.S. Army Corps of Engineers",
       // title: "River–floodplain connectivity in the backwater reach",
       // text: "Idealized numerical experiments on how floodplain vegetation configuration influences flow exchange and channel dynamics where the river first feels the sea."
      //},
     // {
       // image: null,   // images/research/thin-layer.jpg
       // funding: "",   // <-- add the funder here
       // title: "Thin-layer sediment placement on salt marshes",
        //text: "Can adding a thin layer of sediment help an existing salt marsh keep pace with sea-level rise and improve endangered species habitat? We test this with idealized morphodynamic modeling."
      //},
      {
        image: "images/research/winyah_bay.jpg",
        funding: "Funding agency: Burroughs and Chapin Center for Marine and Wetland Studies (BCCMWS)",   // <-- add the funder here
        title: "The freshwater-to-saltwater transition in Winyah Bay",
        text: "An interdisciplinary exploratory project (co-PI, 2025) on the structure of the fresh–salt transition in Winyah Bay, South Carolina."
      },
      
       {
        image: "images/research/Parris_island.png",
        funding: "Funding agency: South Carolina Department of Natural Resources",
        title: "Optimizing living shoreline designs",
        text: "Using high-resolution bathymetric and topographic surveys coupled with Delft3D, we investigate how different structure configurations modify waves, currents, and sediment transport across the nearshore, with the aim of identifying designs that enhance sediment retention while minimizing unintended impacts on adjacent shorelines."
        }, 
      
      {
        image: "images/research/test_delta.png",
        funding: "Funding agency: U.S. Army Corps of Engineers (ERDC)",
        title: "Floodplain activation and delta building",
        text: "What happens to a growing delta when its river is reconnected or cut off from its floodplain? Using morphodynamic simulations inspired by the Wax Lake Delta, we track sediment delivery from distinct sources (such as floodplain, riverbed,  etc) under river and tidal forcing."
      }
   
          
      //{
        //image: null,   // images/research/salt-intrusion.jpg
        //funding: "",   // <-- add the funder here
        //title: "Grain size and saltwater intrusion",
        //text: "How the size of the sediment on the bed changes where salt penetrates a river-dominated delta, and what that means for deposition patterns."
      //}
    ],

    pastTitle: "Completed Projects",
    past: [
      //{
        //image: null,   // images/research/winyah-bay.jpg
        //funding: "U.S. Army ERDC · LSU, 2023–2025",
        //title: "Engineering practices for ecosystem design (DEEDS)",
        //text: "Developed a Collaborative Ecosystem Design tool to inform the U.S. Army on enhancing coastal resiliency through nature and nature-based solutions."
      //},
      {
        image: "images/research/Buoyant_river_plumes.png",
        scale: 0.98,
        funding: "Funding agency: American Chemical Society & University of Waikato",
        title: "Buoyant river plumes and mangrove vegetation",
        text: "Three-dimensional Delft3D modeling to investigate the interaction of buoyant river plumes interact with mangrove forests and consequences for sediment transport, deposition, and erosion in tidal environments"
      },
      {
        image: "images/research/Lake_tarawera.png",
        funding: "Funding agency: Bay of Plenty Regional Council, New Zealand",
        title: "Mixing in a shallow temperate lake",
        text: "Idealized three-dimensional numerical simulations of Lake Tarawera, New Zealand, were used to investigate basin-scale circulation, mixing, and transport processes, with a focus on the influence of Coriolis forcing on water quality."
      }
    ]
  },

  /* ---------------- COLLABORATORS -----------------------------------
     The map is drawn automatically. Each site below becomes a marker —
     lat/lon are decimal degrees (negative = south / west). "side" puts
     the label to the left ("l") or right ("r") of the dot.
     ------------------------------------------------------------------ */
  collaborators: {
    title: "Collaborations (Past and Present)",
    intro: "The CoastalTIDES Lab has been shaped by a research journey across four continents — from the wave basin in Chennai, to the mangrove estuaries of Aotearoa New Zealand, with collaborations across Europe and the Baltic region along the way, before reaching the deltas of the U.S. Gulf and South Atlantic coasts.",
    sites: [
      { name: "Conway, South Carolina", lat: 33.84, lon: -79.05, side: "r" },
      { name: "Baton Rouge, Louisiana", lat: 30.45, lon: -91.19, side: "l" },
      //{ name: "Hannover, Germany", lat: 51.16, lon: 10.45, side: "l" },
      { name: "Tallinn, Estonia", lat: 59.44, lon: 24.75, side: "r" },
      { name: "Delhi, India", lat: 28.61, lon: 77.21, side: "l" },
      { name: "Hyderabad, India", lat: 17.38, lon: 78.49, side: "l" },
      { name: "Chennai, India", lat: 13.08, lon: 80.27, side: "r" },
      { name: "Hamilton, New Zealand", lat: -37.79, lon: 175.28, side: "l" }
    ],
    groups: [
      {
        place: "United States",
        items: [
          "Burroughs and Chaplin Center for Marine and Wetland Studies",
          "Louisiana State University: Civil & Environmental Engineering and  Department of Oceanography & Coastal Sciences",
          "U.S. Army Engineer Research and Development Center (ERDC)",
          "South Carolina Department of Natural Resources"
        ]
      },
      {
        place: "New Zealand",
        items: [
          "University of Waikato — coastal and estuarine physical processes",
          "National Institute of Water and Atmospheric Research (NIWA)",
          "Bay of Plenty Regional Council"
        ]
      },
      {
        place: "India",
        items: [
          "Indian Institute of Technology Madras, Chennai",
          "Ministry of Earth Sciences, India"
        ]
      },
      {
        place: "The Baltic",
        items: [
          "Tallinn University of Technology, Estonia"
        ]
      }
    ]
  },

  /* ---------------- TEAM ---------------------------------------------
     Everyone uses the same row: details left, photo right, same size.
     Photos live in images/team/ — set the photo: field to the exact
     filename, including .jpg vs .jpeg and lowercase.
     ------------------------------------------------------------------ */
  team: {
    labels: {
      education: "Education",
      topic: "Research Topic",
      after: "Position post-CoastalTIDES Lab"
    },

    piTitle: "Principal Investigator",
    pi: {
      photo: "images/team/Hemanth.jpg",
      name: "Hemanth Vundavilli, Ph.D.",
      role: "Assistant Professor of Coastal Oceanography and Systems Science",
      dept: "Department of Marine Science, Coastal Carolina University",
      education: "Ph.D. Earth Sciences, University of Waikato, New Zealand (2023) · B.Tech + M.Tech Naval Architecture and Ocean Engineering, IIT Madras (2016)",
      topic: "Coastal morphodynamics, river deltas, sediment transport, Delft3D modeling",
      links: [
        { label: "Google Scholar", href: "http://scholar.google.com/citations?user=FMsnJtsAAAAJ&hl=en&oi=ao" },
        { label: "vvundavil@coastal.edu", href: "mailto:vvundavil@coastal.edu" }
      ]
    },

    currentTitle: "Current Students",
    current: [
      {
        photo: "images/team/Abigail_belcher.png",
        name: "Abigail Belcher",
        role: "Ph.D. student · incoming Fall 2026",
        education: "B.S. Elmira College, New York (2026)",
        // TODO: reword once her project is settled
        topic: "Delta morphodynamics and river–floodplain connectivity"
      },
      {
        photo: "images/team/Jonathon-riley.jpeg",
        name: "Jonathon A. Riley",
        role: "Undergraduate researcher · Spring 2026",
        education: "",
        topic: "Numerical modeling with Delft3D"
      },
      {
        // TODO: this is still Isabella's photo — swap in Luke's
        photo: "images/team/Isabella-Hicks.jpeg",
        name: "Luke Dykema",
        role: "Undergraduate researcher · Spring 2026",
        education: "",
        topic: "Coding and environmental data analysis"
      },
      {
        // TODO: this is still Isabella's photo — swap in Cameron's
        photo: "images/team/Isabella-Hicks.jpeg",
        name: "Cameron A. Marshall",
        role: "Undergraduate researcher · Spring 2026",
        education: "",
        topic: "Delft3D modeling and MATLAB post-processing"
      }
    ],

    pastTitle: "Past Students",
    past: [
      {
        photo: "images/team/Isabella-Hicks.jpeg",
        name: "Isabella Hicks",
        role: "Undergraduate researcher · Fall 2025",
        education: "",
        topic: "Coastal delta dynamics and numerical modeling",
        after: ""
      },
      {
        photo: "images/team/Frank-Bussott.jpeg",
        name: "Frank Bussott",
        role: "Undergraduate researcher · Summer 2024, LSU",
        education: "",
        topic: 'SURF program (Co-supervised in <a href="https://matthewhiatt.wixsite.com/coastalhydrolsu">Hiatt Lab</a>)',
        after: "Associate Professional at Team Royal"
      },
      {
        photo: "images/team/Tyria-zanders.jpeg",
        name: "Tyria M. Zanders",
        role: "Undergraduate researcher · Summer 2023, LSU",
        education: "",
        topic: 'USGS CAST program (Co-supervised in <a href="https://matthewhiatt.wixsite.com/coastalhydrolsu">Hiatt Lab</a>)',
        after: "Ph.D., North Carolina State University (NCSU)"
      }
    ]
  },

  /* ---------------- PUBLICATIONS ------------------------------------
     New paper: copy a { } block, paste at the TOP, edit.
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
    ]

    // ---- Manuscripts in preparation: hidden for now. To show them
    // again, remove the // from the lines below and add a comma after
    // the closing ] of published above.
    // ,inprepNote: "† mentored undergraduate co-author",
    // inprep: [
    //   { authors: "Vundavilli, H., Zanders, T.†, Hiatt, M., Willson, C.",
    //     title: "River–floodplain connectivity in the coastal backwater zone influenced by floodplain vegetation configurations" },
    //   { authors: "Vundavilli, H., Hiatt, M., Willson, C., Zanders, T.†",
    //     title: "The effects of floodplain vegetation on delta morphodynamics" },
    //   { authors: "Vundavilli, H., Hiatt, M., Willson, C.",
    //     title: "Thin-layer sediment addition to an existing salt marsh to combat sea-level rise and improve endangered species habitat: an idealised modeling study" },
    //   { authors: "Vundavilli, H., Bussott, F.†, Hiatt, M., Willson, C.",
    //     title: "The effects of sediment grain-size on saltwater intrusion and consequences for sediment transport and deposition in a coastal environment" }
    // ]
  },

  // ================= TEACHING TAB: HIDDEN =========================
  // The Teaching page is switched off (not in the menu; teaching.html
  // redirects to the homepage). To bring it back, ask and it takes a
  // moment to re-enable.

  /* ---------------- OUTREACH & UPDATES -------------------------------
     Newest first. Each item shows as:  Date | Title
     Add a new item by copying one { } block.
     ------------------------------------------------------------------ */
  outreach: [
    {
      // TODO: add the two project titles here
      date: "July 2026",
      title: "Horry County Higher Education Commission grants",
      text: "Awarded two HCHEC grants supporting coastal research at CCU — one as Principal Investigator and one as co-Principal Investigator."
    },
    {
      date: "March 2026",
      title: "Teal and Tech",
      text: "CoastalTIDES Lab participated in Coastal Carolina University's Teal and Tech recruiting day, engaging 400–500 eighth-grade students in hands-on stream-table experiments exploring sediment transport, river processes, and coastal change."
    },
    {
      date: "December 2025",
      title: "Exploratory grant: Winyah Bay freshwater–saltwater transition",
      text: "Awarded as a Co-PI on the interdisciplinary project studying the fresh-to-salt transition in Winyah Bay, South Carolina."
    },
    {
      date: "August 2025",
      title: "Gupta College of Science STEM Day",
      text: "Demonstrated coastal erosion with a stream table for school students from across Georgetown–Horry County, South Carolina."
    },
    {
      date: "July 2025",
      title: "Pritchard Award, Coastal & Estuarine Research Federation (CERF)",
      text: 'Hemanth Vundavilli received the CERF <a href="https://www.cerf.science/2025-achievement-award-recipients" target="_blank" rel="noopener noreferrer">Pritchard Award</a>, recognizing the best physical oceanography paper published in <em>Estuaries and Coasts</em> between CERF conferences.'
    }
  ],

  /* ---------------- JOIN US ------------------------------------------ */
  join: {
    intro: "The CoastalTIDES Lab provides opportunities for students to investigate coastal processes through numerical modeling, field observations, and analysis of environmental datasets. We welcome students interested in developing research skills while contributing to ongoing coastal science projects.",
    prospective: [
      {
        metaTop: "Graduate",
        metaSub: "M.S. / Ph.D.",
        text: "I recruit students interested in coastal physical oceanography, delta and estuary dynamics, sediment transport, and numerical modeling. Backgrounds in oceanography, environmental science, engineering, physics, or math are preferred. Email me a CV, a short statement of research interests, and unofficial transcripts."
      },
      {
        metaTop: "Undergrad",
        metaSub: "Research",
        text: "Undergraduates in the lab learn Delft3D modeling, MATLAB/Python data analysis, and coastal fieldwork, with chances to present at conferences. Email me to talk about projects and availability."
      }
    ],
    contactHeading: "Contact",
    rows: [
      { k: "Email", v: "<a href='mailto:vvundavil@coastal.edu'>vvundavil@coastal.edu</a>" },
      { k: "Office", v: "207H Smith Science" },
      { k: "Phone", v: "+1 (843) 349-2860" },
      { k: "Address", v: "Department of Marine Science,<br>Coastal Carolina University,<br>Conway, <br>South Carolina" }
    ]
  },

  /* ---------------- LAB LIFE (photo gallery) -------------------------
     The "Lab Life" tab. Photos sit in a tidy grid — order here = order
     on the page. Comment a line out with // to hide that photo.
     ------------------------------------------------------------------ */
  life: {
    title: "Life in the CoastalTIDES Lab",
    intro: "Fieldwork, instruments, students, and the occasional new friend — what the work actually looks like.",
    photos: [
      { src: "images/join/bird_pic.PNG", caption: "Sharing the shoreline<br>(Gulf of Mexico)" },
      { src: "images/join/ADCP_deployment.PNG", caption: "ADCP deployment in the Gulf<br>(Gulf of Mexico)" },
      { src: "images/join/Friends.jpg", caption: "Making friends during fieldwork<br>(Winyah Bay, SC)<br>(Pic credit: Dr. April Abbott)" },
      { src: "images/join/Stream_table_test.PNG", caption: "Stream table demonstration<br>(GCOS Stem Day, SC)" },
      { src: "images/join/Mangroves.JPG", caption: "Vundavilli in the middle of a Nature-based solution (NbS)<br>(Firth of Thames, New Zealand)" },
      { src: "images/join/Water_level_sensor.png", caption: "Installation of water level sensor as part of Colby College collaborative<br>(Allen Island, Maine)" },
      { src: "images/join/Groundwater_well.PNG", caption: "Groundwater well deployment<br>(Waties Island, SC)" },
      { src: "images/join/coastal_supervisors.PNG", caption: "Our fieldwork comes with an audience<br>(Gulf of Mexico, USA)" },
      { src: "images/join/Student_vibracoring.PNG", caption: "MSCI 304L students admiring 1 m long sediment vibracore<br>(Garden City, Myrtle Beach)" },
    ]
  }
};
