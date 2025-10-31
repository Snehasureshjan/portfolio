// Navigation items with working folder-based links
const navItems = [
 // { name: "Home", href: "../home/index.html", active: false },
  { name: "About", href: "../about/index.html", active: false },
  { name: "Portfolio", href: "../portfolio/index.html", active: true },
  { name: "Contact", href: "../contact/index.html", active: false },
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
    title: "Sticker Website",
    image: "../assets/images/card1~2.png",
    tags: ["Figma", "Web Design"],
    description: "A creative e-commerce platform for fun and trendy stickers with smooth animations.",
    category: "Web Design",
    link: "www.figma.com/proto/UOFQ7fW0U3m7RIDbMLlheQ/Sticker-website?page-id=0%3A1&node-id=14-367&viewport=31%2C250%2C0.14&t=IxxjJKcSMeAQZLnQ-1&scaling=scale-down&content-scaling=fixed"
  },
  {
    title: "Movie App",
    image: "../assets/images/card2.png",
    tags: ["Figma", "Mobile App"],
    description: "A seamless booking app to explore movies, check showtimes, and book tickets quickly and securely.",
    category: "Mobile App",
    link:"www.figma.com/proto/BXyXj2MGj5eJGtCTZLTQ6i/FILM-APP?page-id=0%3A1&node-id=60-165&viewport=154%2C178%2C0.16&t=v3IwdGr2PQZCz0gQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=60%3A159"
  },
  {
    title: "Jewellery Website",
    image: "../assets/images/card3.png",
    tags: ["Figma", "Web Design"],
    description: "An elegant jewellery shopping site highlighting premium collections, easy filtering, and personalized suggestions.",
    category: "Web Design",
    link:"www.figma.com/proto/FrwZcTYZmfGEHlD3fTbjAa/jewelery?page-id=0%3A1&node-id=81-2361&viewport=86%2C-153%2C0.06&t=kT9WR5aiHUR6noYY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=81%3A2361"
  }
];

const caseStudies = [
  {
    title: "Focus Flow",
    image: "../assets/images/cardd4.png",
    tags: ["Figma", "Mobile App"],
    description: "A secure and user-friendly payment application with focus on simplicity and transaction transparency.",
    category: "Mobile App",
    linkview:"https:/\/www.figma.com/proto/A11Y8CL21mfrZ0sIqKHEEm/project1-focus-flow?page-id=8%3A34&node-id=8-63&viewport=1050%2C330%2C0.06&t=1hlWZH3U9okgGXUP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A63" ,
    linkmore:"https:/\/www.behance.net/gallery/236354209/Foucs-Flow",
  },
  {
    title: "Redesign LinkedIn",
    image: "../assets/images/card4~2.png",
    tags: ["Figma", "Mobile App"],
    description: "A resesigned professional networking app with simplified navigation, content, and inclusive features.",
    category: "Mobile App",
    linkview:"https:/\/www.figma.com/proto/WP0QuscvIDzy0y6wQkbuuO/redesign-linkedin?page-id=0%3A1&node-id=8-4&p=f&viewport=1370%2C-808%2C0.24&t=ScY1x38kGWN7a4ci-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A4",
    linkmore:"https:/\/www.behance.net/gallery/236255695/Redesign-Linkedin"
  },
  {
    title: "Redesign Swiggy App",
    image: "../assets/images/card5.png",
    tags: ["Figma", "Mobile App"],
    description: "A seamless food ordering journey with smart navigation, simplified menus, and faster checkout for everyday cravings.",
    category: "Mobile App",
    linkview:"https:/\/www.figma.com/proto/V37cTm3LnFV443TjOj05d1/redesign-swiggy?page-id=0%3A1&node-id=1-48&viewport=-68%2C238%2C0.32&t=DQpMddSU6lLu6ThS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4",
    linkmore:"https:/\/www.behance.net/gallery/235977469/Redesign-work"
  },
]; 

function renderProjectCards(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style="position:relative";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-body">
        <!--<div class="tags">${item.tags.join(", ")}</div>-->
        <div class"tagsdiv">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
  </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <br>
        <div style="position:absolute;bottom:1em;right:1em;text-align:right;">    
             ${item.link ? `<button><a href="${item.link}">View Demo</a></button>` : ''}   
        </div>     
      
    `;
    container.appendChild(card);
  });
}

function renderCaseCards(data, containerId) {
  
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
            
        <div class="btnsdiv">
        ${item.linkview ? `<button><a href="${item.linkview}">View</a></button>` : ''}
        ${item.linkmore ? `<button><a href="${item.linkmore}">More About</a></button>` : ''}
        
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
  renderProjectCards(filtered, "project-cards");
  
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjectCards(projects, "project-cards");
  renderCaseCards(caseStudies, "case-study-cards");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filterProjects(btn.dataset.category);
    });
  });
});
