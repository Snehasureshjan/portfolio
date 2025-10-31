const navItems = [
//{ name: "Home", href: "../home/index.html", active: false },
  { name: "About", href: "../about/index.html", active: false },
  { name: "Portfolio", href: "../portfolio/index.html", active: false },
  { name: "Contact", href: "../contact/index.html", active: true },
];

// Render top & footer nav
function renderNav(menuId) {
  const menu = document.getElementById(menuId);
  navItems.forEach(item => {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.name;
    a.className = item.active ? "active" : "";
    menu.appendChild(a);
  });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
      
      this.reset;
    });

document.addEventListener("DOMContentLoaded", () => {
  renderNav("nav-menu");
 // renderNav("footer-menu");
  
// Toggle mobile navbar
const ham=document.getElementById("hamburger");
document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
  ham.classList.toggle("active");
  });
});
