// 🌐 NetaVerse - Full App JS

const data = [

  {name:"Narendra Modi",party:"BJP",state:"UP",constituency:"Varanasi"},
  {name:"Amit Shah",party:"BJP",state:"Gujarat",constituency:"Gandhinagar"},
  {name:"Rajnath Singh",party:"BJP",state:"UP",constituency:"Lucknow"},
  {name:"Nirmala Sitharaman",party:"BJP",state:"Karnataka",constituency:"Rajya Sabha"},
  {name:"Subrahmanyam Jaishankar",party:"BJP",state:"Gujarat",constituency:"Rajya Sabha"},
  {name:"Jyotiraditya Scindia",party:"BJP",state:"MP",constituency:"Rajya Sabha"},
  {name:"Giriraj Singh",party:"BJP",state:"Bihar",constituency:"Begusarai"},
  {name:"Piyush Goyal",party:"BJP",state:"MH",constituency:"Rajya Sabha"},
  {name:"Smriti Irani",party:"BJP",state:"UP",constituency:"Amethi"},
  {name:"Ravi Shankar Prasad",party:"BJP",state:"Bihar",constituency:"Patna Sahib"},

  {name:"Mallikarjun Kharge",party:"INC",state:"Karnataka",constituency:"Rajya Sabha"},
  {name:"Rahul Gandhi",party:"INC",state:"Kerala",constituency:"Wayanad"},
  {name:"Sonia Gandhi",party:"INC",state:"UP",constituency:"Raebareli"},
  {name:"Sharad Pawar",party:"NCP",state:"MH",constituency:"Baramati"},
  {name:"H D Deve Gowda",party:"JDS",state:"Karnataka",constituency:"Hassan"},

  {name:"Yogi Adityanath",party:"BJP",state:"UP",constituency:"Gorakhpur"},
  {name:"Nitish Kumar",party:"JDU",state:"Bihar",constituency:"Nalanda"},
  {name:"Mamata Banerjee",party:"TMC",state:"WB",constituency:"Bhabanipur"},
  {name:"Arvind Kejriwal",party:"AAP",state:"Delhi",constituency:"New Delhi"},
  {name:"Eknath Shinde",party:"Shiv Sena",state:"MH",constituency:"Kopri-Pachpakhadi"},
  {name:"M K Stalin",party:"DMK",state:"TN",constituency:"Kolathur"},
  {name:"Siddaramaiah",party:"INC",state:"Karnataka",constituency:"Varuna"},
  {name:"Pinarayi Vijayan",party:"CPM",state:"Kerala",constituency:"Dharmadam"},
  {name:"Bhagwant Mann",party:"AAP",state:"Punjab",constituency:"Dhuri"},
  {name:"Mohan Yadav",party:"BJP",state:"MP",constituency:"Ujjain South"},
  {name:"Pushkar Singh Dhami",party:"BJP",state:"Uttarakhand",constituency:"Khatima"},
  {name:"Pramod Sawant",party:"BJP",state:"Goa",constituency:"Sanquelim"},
  {name:"Conrad Sangma",party:"NPP",state:"Meghalaya",constituency:"South Tura"},
  {name:"Neiphiu Rio",party:"NDPP",state:"Nagaland",constituency:"Northern Angami"},
  {name:"Zoramthanga",party:"MNF",state:"Mizoram",constituency:"Aizawl East"},
  {name:"Naveen Patnaik",party:"BJD",state:"Odisha",constituency:"Hinjili"},
  {name:"Prem Singh Tamang",party:"SKM",state:"Sikkim",constituency:"Soreng-Chakung"},
  {name:"Manik Saha",party:"BJP",state:"Tripura",constituency:"Town Bardowali"},
  {name:"Pema Khandu",party:"BJP",state:"Arunachal Pradesh",constituency:"Mukto"},
  {name:"Vishnu Deo Sai",party:"BJP",state:"Chhattisgarh",constituency:"Kunkuri"},
  {name:"Bhupendra Patel",party:"BJP",state:"Gujarat",constituency:"Ghatlodia"},
  {name:"Nayab Singh Saini",party:"BJP",state:"Haryana",constituency:"Ladwa"},
  {name:"Sukhvinder Singh Sukhu",party:"INC",state:"Himachal Pradesh",constituency:"Nadaun"},

  {name:"Tejashwi Yadav",party:"RJD",state:"Bihar",constituency:"Raghopur"},
  {name:"Chirag Paswan",party:"LJP",state:"Bihar",constituency:"Hajipur"},
  {name:"Devendra Fadnavis",party:"BJP",state:"MH",constituency:"Nagpur South West"},
  {name:"Uddhav Thackeray",party:"Shiv Sena",state:"MH",constituency:"-"},
  {name:"D K Shivakumar",party:"INC",state:"Karnataka",constituency:"Kanakapura"},
  {name:"N Chandrababu Naidu",party:"TDP",state:"AP",constituency:"Kuppam"},
  {name:"YS Jagan Mohan Reddy",party:"YSRCP",state:"AP",constituency:"Pulivendula"},
  {name:"Himanta Biswa Sarma",party:"BJP",state:"Assam",constituency:"Jalukbari"},

  {name:"Atal Bihari Vajpayee",party:"BJP",state:"UP",constituency:"Lucknow"},
  {name:"Manmohan Singh",party:"INC",state:"Punjab",constituency:"Rajya Sabha"},
  {name:"L K Advani",party:"BJP",state:"Gujarat",constituency:"Gandhinagar"},
  {name:"Mulayam Singh Yadav",party:"SP",state:"UP",constituency:"Mainpuri"},
  {name:"Lalu Prasad Yadav",party:"RJD",state:"Bihar",constituency:"Saran"},
  {name:"Ram Vilas Paswan",party:"LJP",state:"Bihar",constituency:"Hajipur"},
  {name:"Sushma Swaraj",party:"BJP",state:"MP",constituency:"Vidisha"},
  {name:"Sushil Kumar Modi",party:"BJP",state:"Bihar",constituency:"Rajya Sabha"}
];

// Elements
const container = document.getElementById("candidates");
const searchInput = document.getElementById("search");
const stateFilter = document.getElementById("stateFilter");

// Load states
const states = [...new Set(data.map(d => d.state))];
states.forEach(s => {
  let opt = document.createElement("option");
  opt.value = s;
  opt.textContent = s;
  stateFilter.appendChild(opt);
});

// Fetch Wikipedia Image
async function getImage(name) {
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`);
    const json = await res.json();
    return json.thumbnail?.source || "https://via.placeholder.com/300x200";
  } catch {
    return "https://via.placeholder.com/300x200";
  }
}

// Modal
const modal = document.getElementById("wikiModal");
const frame = document.getElementById("wikiFrame");
document.getElementById("closeBtn").onclick = () => modal.style.display = "none";

// Open Wikipedia
function openWiki(name) {
  const url = "https://en.m.wikipedia.org/wiki/" + name.replace(/ /g,"_");
  frame.src = url;
  modal.style.display = "block";
}

// Open ADR
function openADR(name) {
  const query = name.replace(/ /g, "+");
  const url = "https://www.myneta.info/search.php?query=" + query;
  window.open(url, "_blank");
}

// Display
async function displayCandidates(list) {
  container.innerHTML = "Loading...";

  const cards = await Promise.all(list.map(async c => {
    const img = await getImage(c.name);

    return `
      <div class="card">
        <img src="${img}" class="profile"/>
        <h2>${c.name}</h2>
        <p><b>Constituency:</b> ${c.constituency}</p>
        <p><b>Party:</b> ${c.party}</p>

        <button onclick="openWiki('${c.name}')">Wikipedia</button>
        <button onclick="openADR('${c.name}')">ADR Profile</button>
      </div>
    `;
  }));

  container.innerHTML = cards.join("");
}

// Filters
function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const state = stateFilter.value;

  let filtered = data.filter(c =>
    c.name.toLowerCase().includes(search)
  );

  if(state) {
    filtered = filtered.filter(c => c.state === state);
  }

  displayCandidates(filtered);
}

searchInput.addEventListener("input", applyFilters);
stateFilter.addEventListener("change", applyFilters);

// Initial Load
displayCandidates(data);
