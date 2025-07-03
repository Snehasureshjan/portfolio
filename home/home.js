// Navigation items with working folder-based links
const navItems = [
  { name: "Home", href: "../home/index.html", active: true },
  { name: "Portfolio", href: "../portfolio/index.html", active: false },
  { name: "About", href: "../about/index.html", active: false },
  { name: "Contact Us", href: "../contact/index.html", active: false },
];

const quoteCards = [
  '"Designing my Future, one pixel at a time"',
  '"Fresh mind.Fearless imagination.Future designer."',
  '"From Curiosity to creativity - my journey begins here."',
];

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

// Quote cards
function renderQuotes() {
  const container = document.getElementById("quote-cards");
  quoteCards.forEach((quote) => {
    const div = document.createElement("div");
    div.className = "card";
    div.textContent = quote;
    container.appendChild(div);
  });
}

// Services section
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

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderNav("nav-menu");
  //renderNav("footer-menu");
  renderQuotes();
  renderServices();
  // Toggle mobile navbar
const ham=document.getElementById("hamburger");
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
  ham.classList.toggle("active");
  });
});
