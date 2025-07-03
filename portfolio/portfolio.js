// Navigation items with working folder-based links
const navItems = [
  { name: "Home", href: "../home/index.html", active: false },
  { name: "Portfolio", href: "../portfolio/index.html", active: true },
  { name: "About", href: "../about/index.html", active: false },
  { name: "Contact Us", href: "../contact/index.html", active: false },
];
// Render top and footer nav
function renderNav(menuId) {
  const menu = document.getElementById(menuId);
  navItems.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.name;
    a.className = item.active ? "active" : "";
    menu.appendChild(a);
  });
}
/*
// Project data
const projects = [
  {
    title: "The UI of food Recipes",
    tagline: "Taste the magic",
    description: "A colorful food recipe interface featuring vibrant mockups and layered images.",
  },
  {
    title: "The UI of food Recipes",
    tagline: "Style your space with comfort and elegance",
    description: "Furniture that blends style, comfort, and quality—perfectly crafted for your home.",
  },
  {
    title: "Payment app",
    tagline: "Secure, smart, and stylish transactions",
    description: "An all-in-one payment platform with minimal UI and powerful features.",
  },
  {
    title: "Stunning Music app",
    tagline: "Feel the beat. Anywhere, anytime.",
    description: "A visually rich audio experience with playlists, light and dark themes.",
  },
];

// Render navigation menus
function renderNav(menuId) {
  const menu = document.getElementById(menuId);
  navItems.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.name;
    a.className = item.active ? "active" : "";
    menu.appendChild(a);
  });
}

// Render projects
function renderProjects() {
  const container = document.getElementById("projects-grid");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const tag = document.createElement("p");
    tag.innerHTML = `<em>${project.tagline}</em>`;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    card.appendChild(title);
    card.appendChild(tag);
    card.appendChild(desc);
    container.appendChild(card);
  });
}
*/

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderNav("nav-menu");
  //renderNav("footer-menu");
  // Toggle mobile navbar
  const ham=document.getElementById("hamburger");
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
  ham.classList.toggle("active");
  });
  
});



const filterList = ["Mobile App","UI Design","UX Research","Web Design"];

function renderFilterButtons(){
    const container = document.getElementById("filterNav");
  

  filterList.forEach((item) => {
    const button = document.createElement("button");
        button.className = "filter-btn"; // Add the class
        button.setAttribute("data-category", item); // Set the data attribute
        button.innerText = item; // Set the button text
        // Append the button directly to the container
        container.appendChild(button);
  });
}
renderFilterButtons();

const projects = [
  {
    title: "Restaurant Website",
    image: "../assets/images/project01.png",
    tags: ["Figma", "Web Design"],
    description: "An elegant restaurant website with appetizing visuals and smooth reservation functionality.",
    category: "Web Design"
  },
  {
    title: "Furniture App",
    image: "../assets/images/project02.png",
    tags: ["Figma", "Mobile App"],
    description: "A clean, user-first furniture app with better navigation and curated collections for every home.",
    category: "Mobile App"
  },
  {
    title: "Music Website",
    image: "../assets/images/project03.png",
    tags: ["Figma", "Web Design"],
    description: "A visually appealing music streaming platform with focus on discovery and personalized recommendations.",
    category: "Web Design"
  }
];

const caseStudies = [
  {
    title: "Redesign Swiggy App",
    image: "../assets/images/case01.png",
    tags: ["Figma", "Mobile App"],
    description: "A seamless food ordering journey with smart navigation, simplified menus, and faster checkout for everyday cravings.",
    category: "Mobile App",
    link:"./casestudy/swiggy.html"
  },
  {
    title: "Payment App",
    image: "../assets/images/case02.png",
    tags: ["Figma", "Mobile App"],
    description: "A secure and user-friendly payment application with focus on simplicity and transaction transparency.",
    category: "Mobile App",
    link: "./casestudy/zappay.html"
  },
  {
    title: "Recipes App",
    image: "../assets/images/case03.png",
    tags: ["Figma", "Mobile App"],
    description: "A modern food delivery app interface designed with a focus on easy navigation and beautiful food presentation.",
    category: "Mobile App"
  }
];

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-body">
        <!--<div class="tags">${item.tags.join(", ")}</div>-->
        <div class"tagsdiv">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
  </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
            
      
        ${item.link ? `<button><a href="${item.link}">More About</a></button>` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

function filterProjects(category) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`[data-category="${category}"]`).classList.add("active");

  const filtered = category === "all" ? projects : projects.filter(p => p.category === category);
  renderCards(filtered, "project-cards");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(projects, "project-cards");
  renderCards(caseStudies, "case-study-cards");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterProjects(btn.dataset.category);
    });
  });
});
