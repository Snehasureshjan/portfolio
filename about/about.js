// Navigation links
const navItems = [
  { name: "Home", href: "../home/index.html", active: false },
  { name: "Portfolio", href: "../portfolio/index.html", active: false },
  { name: "About", href: "../about/index.html", active: true },
  { name: "Contact Us", href: "../contact/index.html", active: false },
];

// Skills
const skillsData = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "Python"],
  },
  {
    category: "Fronend", // kept original typo
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
  renderSkills();
  renderCerts();
  // Toggle mobile navbar
const ham=document.getElementById("hamburger");
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
  ham.classList.toggle("active");
  });
});
