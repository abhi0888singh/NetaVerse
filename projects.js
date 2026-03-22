// 🌐 NetaVerse Projects JS (FINAL)

// ---------------- DATA ----------------
const projects = [

  // 🟠 BIHAR
  {
    name: "Patna Metro Rail Project",
    state: "Bihar",
    capital: "₹13,300 Cr",
    start: 2021,
    end: 2027,
    status: "Under Construction",
    ministry: "Housing & Urban Affairs",
    link: "https://en.wikipedia.org/wiki/Patna_Metro"
  },
  {
    name: "AIIMS Darbhanga",
    state: "Bihar",
    capital: "₹1,500 Cr",
    start: 2024,
    end: 2028,
    status: "Planned",
    ministry: "Health Ministry",
    link: "https://en.wikipedia.org/wiki/AIIMS_Darbhanga"
  },
  {
    name: "Buxar–Bharauli Ganga Bridge",
    state: "Bihar",
    capital: "₹368 Cr",
    start: 2025,
    end: 2027,
    status: "Approved",
    ministry: "MoRTH",
    link: "https://www.google.com/search?q=Buxar+Bharauli+bridge"
  },
  {
    name: "Amritsar–Kolkata Industrial Corridor",
    state: "Bihar",
    capital: "Multi-Billion",
    start: 2020,
    end: 2030,
    status: "Ongoing",
    ministry: "Commerce Ministry",
    link: "https://en.wikipedia.org/wiki/Amritsar%E2%80%93Kolkata_Industrial_Corridor"
  },

  // 🟠 UTTAR PRADESH
  {
    name: "Ganga Expressway",
    state: "Uttar Pradesh",
    capital: "₹36,230 Cr",
    start: 2021,
    end: 2026,
    status: "Under Construction",
    ministry: "MoRTH",
    link: "https://en.wikipedia.org/wiki/Ganga_Expressway"
  },
  {
    name: "Noida International Airport (Jewar)",
    state: "Uttar Pradesh",
    capital: "₹29,000 Cr",
    start: 2021,
    end: 2026,
    status: "Near Completion",
    ministry: "Civil Aviation",
    link: "https://en.wikipedia.org/wiki/Noida_International_Airport"
  },
  {
    name: "Kashi Vishwanath Corridor",
    state: "Uttar Pradesh",
    capital: "₹900 Cr",
    start: 2019,
    end: 2021,
    status: "Completed",
    ministry: "Tourism",
    link: "https://en.wikipedia.org/wiki/Kashi_Vishwanath_Corridor"
  },

  // 🔵 MADHYA PRADESH
  {
    name: "Indore Metro",
    state: "Madhya Pradesh",
    capital: "₹7,500 Cr",
    start: 2022,
    end: 2028,
    status: "Under Construction",
    ministry: "Urban Affairs",
    link: "https://en.wikipedia.org/wiki/Indore_Metro"
  },
  {
    name: "Bhopal Metro",
    state: "Madhya Pradesh",
    capital: "₹6,900 Cr",
    start: 2020,
    end: 2027,
    status: "Ongoing",
    ministry: "Urban Affairs",
    link: "https://en.wikipedia.org/wiki/Bhopal_Metro"
  },
  {
    name: "Ken–Betwa River Linking Project",
    state: "Madhya Pradesh",
    capital: "₹44,000 Cr",
    start: 2021,
    end: 2030,
    status: "Under Implementation",
    ministry: "Jal Shakti",
    link: "https://en.wikipedia.org/wiki/Ken%E2%80%93Betwa_River_Linking_Project"
  },

  // 🟡 GOA
  {
    name: "Mopa Airport (Manohar International Airport)",
    state: "Goa",
    capital: "₹2,870 Cr",
    start: 2017,
    end: 2023,
    status: "Operational",
    ministry: "Civil Aviation",
    link: "https://en.wikipedia.org/wiki/Manohar_International_Airport"
  },
  {
    name: "Zuari Bridge",
    state: "Goa",
    capital: "₹2,500 Cr",
    start: 2016,
    end: 2023,
    status: "Completed",
    ministry: "MoRTH",
    link: "https://en.wikipedia.org/wiki/Zuari_Bridge"
  },
  {
    name: "Goa Coastal Highway (NH-66 Upgrade)",
    state: "Goa",
    capital: "₹5,000 Cr",
    start: 2021,
    end: 2026,
    status: "Ongoing",
    ministry: "MoRTH",
    link: "https://en.wikipedia.org/wiki/NH_66_(India)"
  }
];

// ---------------- ELEMENTS ----------------
const container = document.getElementById("projectContainer");
const stateFilter = document.getElementById("projectState");

// ---------------- LOAD STATES ----------------
const states = [...new Set(projects.map(p => p.state))];

states.forEach(state => {
  const opt = document.createElement("option");
  opt.value = state;
  opt.textContent = state;
  stateFilter.appendChild(opt);
});

// ---------------- DISPLAY PROJECTS ----------------
function displayProjects(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p style='text-align:center'>No projects found</p>";
    return;
  }

  list.forEach(p => {

    const currentYear = new Date().getFullYear();
    let progress = ((currentYear - p.start) / (p.end - p.start)) * 100;
    progress = Math.min(Math.max(progress, 5), 100);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p><b>State:</b> ${p.state}</p>
      <p><b>Budget:</b> ${p.capital}</p>
      <p><b>Status:</b> ${p.status}</p>
      <p><b>Timeline:</b> ${p.start} - ${p.end}</p>

      <div class="progress-bar">
        <div style="width:${progress}%"></div>
      </div>

      <div class="btn-group">
        <a href="${p.link}" target="_blank">Read Full Details</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// ---------------- FILTER ----------------
function filterProjects() {
  const state = stateFilter.value;

  let filtered = projects;

  if (state) {
    filtered = projects.filter(p => p.state === state);
  }

  displayProjects(filtered);
}

// ---------------- EVENTS ----------------
stateFilter.addEventListener("change", filterProjects);

// ---------------- INIT ----------------
projects.sort((a, b) => b.start - a.start); // latest first
displayProjects(projects);
