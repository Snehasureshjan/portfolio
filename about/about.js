// Navigation links
const navItems = [
//1  { name: "Home", href: "../home/index.html", active: false },
  { name: "About", href: "../about/index.html", active: true },
  { name: "Portfolio", href: "../portfolio/index.html", active: false },
  { name: "Contact", href: "../contact/index.html", active: false },
];

// Skills
const skillsData = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "Python"],
  },
  {
    category: "Frontend", // kept original typo
    skills: ["Figma", "Adobe xd", "Bootsrap"], // kept original typo
  },
  {
    category: "Tools",
    skills: ["Framer", "canva"],
  },
];

// Certifications
const certifications = [
  "UI/UX Design Course – Completed on Udemy",
  "Cloud Computing – NPTEL course by IIT (2024)",
  "Python and SQLite Workshop – Certified by Organizing Committee",
  "Python Workshop – Conducted by Kleem Gotbay Media Infotech Pvt. Ltd.",
];

//MY.SERVICES...
const services = [
  {
    id: "01",
    title: "UI/UX Design",
    description:
      "I specialize in crafting intuitive and visually appealing user interfaces for mobile apps and websites...",
  },
  {
    id: "02",
    title: "Mobile App & Web Design",
    description:
      "From wireframes to interactive prototypes, I design stunning mobile app screens and responsive website layouts...",
  },
  {
    id: "03",
    title: "Poster & Visual Design",
    description:
      "I create eye-catching posters, social media banners, and promotional graphics...",
  },
];



//functions,rendering,etc..



// Render nav
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

// Render Services

function renderServices() {
  const container = document.getElementById("services-list");
  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";

    const title = document.createElement("strong");
    title.textContent = `${service.id}. ${service.title}`;
    const desc = document.createElement("p");
    desc.textContent = service.description;

    card.appendChild(title);
    card.appendChild(desc);
    container.appendChild(card);
  });
}

// Render skills
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  skillsData.forEach((group) => {
    const card = document.createElement("div");
    card.className = "skill-card";

    const title = document.createElement("h3");
    title.textContent = group.category;
    card.appendChild(title);

    const ul = document.createElement("ul");
    group.skills.forEach((skill) => {
      const li = document.createElement("li");
      const dot = document.createElement("div");
      dot.className = "dot";
      const span = document.createElement("span");
      span.textContent = skill;
      li.appendChild(dot);
      li.appendChild(span);
      ul.appendChild(li);
    });

    card.appendChild(ul);
    grid.appendChild(card);
  });
}

// Render certifications
function renderCerts() {
  const list = document.getElementById("cert-list");
  certifications.forEach((cert) => {
    const li = document.createElement("li");
    const dot = document.createElement("div");
    dot.className = "dot";
    const span = document.createElement("span");
    span.textContent = cert;
    li.appendChild(dot);
    li.appendChild(span);
    list.appendChild(li);
  });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderNav("nav-menu");
 // renderNav("footer-menu");
  //renderSkills();
  renderServices();
  renderCerts();
  // Toggle mobile navbar
const ham=document.getElementById("hamburger");
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
  ham.classList.toggle("active");
  });
});
