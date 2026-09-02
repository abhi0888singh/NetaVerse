// 🌐 Projects Data
const projects = [
  // 🇮🇳 EXISTING PROJECTS

  {
    name: "Patna Metro",
    state: "Bihar",
    capital: "₹13,300 Cr",
    status: "Under Construction",
    timeline: "2021-2027"
  },

  {
    name: "AIIMS Darbhanga",
    state: "Bihar",
    capital: "₹1,500 Cr",
    status: "Planned",
    timeline: "2024-2028"
  },

  {
    name: "Buxar Ganga Bridge",
    state: "Bihar",
    capital: "₹368 Cr",
    status: "Approved",
    timeline: "2025-2027"
  },

  {
    name: "Ganga Expressway",
    state: "UP",
    capital: "₹36,230 Cr",
    status: "Under Construction",
    timeline: "2021-2026"
  },

  {
    name: "Noida International Airport",
    state: "UP",
    capital: "₹29,000 Cr",
    status: "Near Completion",
    timeline: "2021-2025"
  },

  {
    name: "Indore Metro",
    state: "MP",
    capital: "₹7,500 Cr",
    status: "Under Construction",
    timeline: "2022-2028"
  },

  {
    name: "Ken Betwa Link Project",
    state: "MP",
    capital: "₹44,000 Cr",
    status: "Ongoing",
    timeline: "2021-2030"
  },

  {
    name: "Mopa Airport Goa",
    state: "Goa",
    capital: "₹2,870 Cr",
    status: "Operational",
    timeline: "2017-2023"
  },

  {
    name: "Zuari Bridge Goa",
    state: "Goa",
    capital: "₹2,500 Cr",
    status: "Completed",
    timeline: "2016-2023"
  },


  // 🇮🇳 NATIONAL / CENTRAL GOVERNMENT

  {
    name: "PMAY-G Additional Housing",
    state: "Pan India",
    capital: "₹3+ Lakh Cr*",
    status: "Ongoing",
    timeline: "2024-2029"
  },

  {
    name: "PMAY-U 2.0",
    state: "Pan India",
    capital: "₹10 Lakh Cr+*",
    status: "Ongoing",
    timeline: "2024-2029"
  },

  {
    name: "India Semiconductor Mission",
    state: "Pan India",
    capital: "₹76,000 Cr",
    status: "Ongoing",
    timeline: "2024-2028"
  },

  {
    name: "Mumbai-Ahmedabad High Speed Rail",
    state: "Maharashtra/Gujarat",
    capital: "₹1.08 Lakh Cr",
    status: "Under Construction",
    timeline: "2024-2028"
  },

  {
    name: "PM Gati Shakti National Master Plan",
    state: "Pan India",
    capital: "Multi-sector",
    status: "Ongoing",
    timeline: "2024-2028"
  },


  // 🇮🇳 BIHAR MAJOR PROJECTS

  {
    name: "Nabinagar Super Thermal Power Project Stage-II",
    state: "Bihar",
    capital: "₹29,930 Cr",
    status: "Under Construction",
    timeline: "2025-2030"
  },

  {
    name: "Patna-Ara-Sasaram NH-119A",
    state: "Bihar",
    capital: "₹3,700 Cr+",
    status: "Under Construction",
    timeline: "2025-2028"
  },

  {
    name: "Buxar-Bharauli Ganga Bridge",
    state: "Bihar",
    capital: "₹1,500 Cr+",
    status: "Under Construction",
    timeline: "2025-2028"
  },

  {
    name: "Bihta Airport Civil Enclave",
    state: "Bihar",
    capital: "₹1,400 Cr+",
    status: "Under Construction",
    timeline: "2025-2028"
  },

  {
    name: "Danapur-Bihta Elevated Corridor",
    state: "Bihar",
    capital: "₹3,737 Cr",
    status: "Under Construction",
    timeline: "2025-2028"
  },

  {
    name: "Sonepur Greenfield International Airport",
    state: "Bihar",
    category: "Airport",
    capital: "₹1,302 Cr*",
    status: "Approved",
    timeline: "2026-2030",
    location: "Sonepur, Saran, Bihar",
    authority: "Government of Bihar",
    description: "Proposed greenfield international airport near Sonepur intended to become a major aviation hub for North Bihar.",
    land: "Approx. 4,200 acres"
  },

  {
    name: "Anisabad–Deedarganj Six-Lane Corridor",
    state: "Bihar",
    category: "Road / Elevated Corridor",
    capital: "₹4,310 Cr",
    status: "Approved",
    timeline: "2026-2030",
    location: "Patna, Bihar",
    authority: "MoRTH / NHAI",
    description: "Six-lane elevated and at-grade road corridor with service roads to improve east-west connectivity across Patna."
  }
];

const container = document.getElementById("projectsContainer");


// 🔥 OPEN PROJECT (SMART WIKIPEDIA SEARCH)
function openProject(name) {
  const viewer = document.getElementById("projectViewer");
  const frame = document.getElementById("viewerFrame");
  const loader = document.getElementById("loader");

  viewer.style.display = "flex";
  loader.style.display = "block";
  frame.style.display = "none";

  // 📘 Wikipedia Search
  const wikiSearch =
    `https://en.wikipedia.org/wiki/Special:Search?search=${name}`;

  frame.src = wikiSearch;

  frame.onload = () => {
    loader.style.display = "none";
    frame.style.display = "block";
  };
}


// 🔙 CLOSE VIEWER
function closeViewer() {
  document.getElementById("projectViewer").style.display = "none";
  document.getElementById("viewerFrame").src = "";
}


// 🎯 DISPLAY PROJECTS
function displayProjects() {
  container.innerHTML = "";

  projects.forEach(p => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>

      <p>
        <b>State:</b> ${p.state}
      </p>

      <p>
        <b>Capital:</b> ${p.capital}
      </p>

      <p>
        <b>Status:</b> ${p.status}
      </p>

      <p>
        <b>Timeline:</b> ${p.timeline}
      </p>

      <span class="verified">
        📘 Wikipedia Source
      </span>

      <br><br>

      <button onclick="openProject('${p.name}')">
        View Details
      </button>
    `;

    container.appendChild(card);
  });
}


// 🚀 LOAD ALL PROJECTS
displayProjects();
