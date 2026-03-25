// 🌐 Projects Data (Trusted News Sources)
const projects = [

  // 🔴 BIHAR
  {
    name: "Patna Metro Rail Project",
    state: "Bihar",
    capital: "₹13,300 Cr",
    status: "Under Construction",
    timeline: "2021 - 2027",
    link: "https://timesofindia.indiatimes.com/city/patna/patna-metro-project"
  },
  {
    name: "AIIMS Darbhanga",
    state: "Bihar",
    capital: "₹1,500 Cr",
    status: "Planned",
    timeline: "2024 - 2028",
    link: "https://timesofindia.indiatimes.com/city/patna/aiims-darbhanga"
  },
  {
    name: "Buxar–Bharauli Ganga Bridge",
    state: "Bihar",
    capital: "₹368 Cr",
    status: "Approved",
    timeline: "2025 - 2027",
    link: "https://timesofindia.indiatimes.com/city/patna/buxar-ganga-bridge"
  },

  // 🟠 UP
  {
    name: "Ganga Expressway",
    state: "UP",
    capital: "₹36,230 Cr",
    status: "Under Construction",
    timeline: "2021 - 2026",
    link: "https://economictimes.indiatimes.com/topic/ganga-expressway"
  },
  {
    name: "Noida International Airport (Jewar)",
    state: "UP",
    capital: "₹29,000 Cr",
    status: "Near Completion",
    timeline: "2021 - 2025",
    link: "https://timesofindia.indiatimes.com/city/noida/jewar-airport"
  },

  // 🔵 MP
  {
    name: "Indore Metro Rail",
    state: "MP",
    capital: "₹7,500 Cr",
    status: "Under Construction",
    timeline: "2022 - 2028",
    link: "https://timesofindia.indiatimes.com/city/indore/indore-metro"
  },
  {
    name: "Ken–Betwa River Linking Project",
    state: "MP",
    capital: "₹44,000 Cr",
    status: "Ongoing",
    timeline: "2021 - 2030",
    link: "https://economictimes.indiatimes.com/topic/ken-betwa-link"
  },

  // 🟡 GOA
  {
    name: "Mopa International Airport",
    state: "Goa",
    capital: "₹2,870 Cr",
    status: "Operational",
    timeline: "2017 - 2023",
    link: "https://timesofindia.indiatimes.com/city/goa/mopa-airport"
  },
  {
    name: "Zuari Bridge",
    state: "Goa",
    capital: "₹2,500 Cr",
    status: "Completed",
    timeline: "2016 - 2023",
    link: "https://timesofindia.indiatimes.com/city/goa/zuari-bridge"
  }

];

// 🌐 Elements
const container = document.getElementById("projectsContainer");
const viewer = document.getElementById("projectViewer");
const frame = document.getElementById("viewerFrame");
const loader = document.getElementById("loader");

// 🔥 OPEN PROJECT (IMPROVED)
function openProject(link) {
  viewer.style.display = "flex";
  loader.style.display = "block";
  frame.style.display = "none";

  frame.src = link;

  // When loaded
  frame.onload = () => {
    loader.style.display = "none";
    frame.style.display = "block";
  };

  // Fallback if blocked
  setTimeout(() => {
    try {
      if (!frame.contentWindow || frame.contentWindow.length === 0) {
        window.open(link, "_blank");
      }
    } catch {
      window.open(link, "_blank");
    }
  }, 2000);
}

// 🔙 CLOSE VIEWER
function closeViewer() {
  viewer.style.display = "none";
  frame.src = "";
}

// 🎯 DISPLAY PROJECTS
function displayProjects() {
  container.innerHTML = "";

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p><b>State:</b> ${p.state}</p>
      <p><b>Capital:</b> ${p.capital}</p>
      <p><b>Status:</b> ${p.status}</p>
      <p><b>Timeline:</b> ${p.timeline}</p>

      <span class="verified">✔ Verified Source</span><br><br>

      <button onclick="openProject('${p.link}')">
        View Details
      </button>
    `;

    container.appendChild(card);
  });
}

// 🚀 INITIAL LOAD
displayProjects();
