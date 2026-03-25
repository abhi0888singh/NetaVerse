// 🌐 Projects Data
const projects = [
  { name: "Patna Metro", state: "Bihar", capital: "₹13,300 Cr", status: "Under Construction", timeline: "2021-2027" },
  { name: "AIIMS Darbhanga", state: "Bihar", capital: "₹1,500 Cr", status: "Planned", timeline: "2024-2028" },
  { name: "Buxar Ganga Bridge", state: "Bihar", capital: "₹368 Cr", status: "Approved", timeline: "2025-2027" },

  { name: "Ganga Expressway", state: "UP", capital: "₹36,230 Cr", status: "Under Construction", timeline: "2021-2026" },
  { name: "Noida International Airport", state: "UP", capital: "₹29,000 Cr", status: "Near Completion", timeline: "2021-2025" },

  { name: "Indore Metro", state: "MP", capital: "₹7,500 Cr", status: "Under Construction", timeline: "2022-2028" },
  { name: "Ken Betwa Link Project", state: "MP", capital: "₹44,000 Cr", status: "Ongoing", timeline: "2021-2030" },

  { name: "Mopa Airport Goa", state: "Goa", capital: "₹2,870 Cr", status: "Operational", timeline: "2017-2023" },
  { name: "Zuari Bridge Goa", state: "Goa", capital: "₹2,500 Cr", status: "Completed", timeline: "2016-2023" }
];

const container = document.getElementById("projectsContainer");

// 🔥 OPEN PROJECT (SMART SEARCH)
function openProject(name) {
  const viewer = document.getElementById("projectViewer");
  const frame = document.getElementById("viewerFrame");
  const loader = document.getElementById("loader");

  viewer.style.display = "flex";
  loader.style.display = "block";
  frame.style.display = "none";

  // Smart Wikipedia search URL (BEST METHOD)
  const wikiSearch = `https://en.wikipedia.org/wiki/Special:Search?search=${name}`;

  frame.src = wikiSearch;

  frame.onload = () => {
    loader.style.display = "none";
    frame.style.display = "block";
  };
}

// 🔙 CLOSE
function closeViewer() {
  document.getElementById("projectViewer").style.display = "none";
  document.getElementById("viewerFrame").src = "";
}

// 🎯 DISPLAY
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

      <span class="verified">📘 Wikipedia Source</span><br><br>

      <button onclick="openProject('${p.name}')">
        View Details
      </button>
    `;

    container.appendChild(card);
  });
}

displayProjects();
