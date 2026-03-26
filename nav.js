const nav = document.querySelector(".nav");

nav.innerHTML = `
<header class="fixed w-full top-0 left-0 z-50 shadow-sm bg-white/80 backdrop-blur-lg">
  
  <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    
    <!-- Logo -->
    <div class="flex items-center">
      <img src="/images/starlogo.jpg" class="h-12 w-auto" />
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex gap-8 text-gray-600 font-medium">
      <a href="/index.html" class="hover:text-[#0F766E] transition">Home</a>
      <a href="/index.html#about" class="hover:text-[#0F766E] transition">About</a>
      <a href="/index.html#services" class="hover:text-[#0F766E] transition">Services</a>
            <a href="/index.html" class="hover:text-[#0F766E] transition">Doctors</a>
      <a href="/index.html#contact" class="hover:text-[#0F766E] transition">Contact</a>
    </nav>

    <!-- Mobile Button -->
    <button id="menu-btn" class="md:hidden text-3xl text-[#0F766E] focus:outline-none">
      <span id="menu-open">☰</span>
      <span id="menu-close" class="hidden">✕</span>
    </button>
  </div>

  <!-- Overlay -->
  <div id="overlay" class="hidden fixed inset-0 bg-black/50 z-40"></div>

  <!-- Mobile Full Screen Menu -->
  <div id="menu" 
  class="fixed top-0 right-0 w-full h-screen bg-white z-50 p-6 flex flex-col space-y-6 text-gray-600 font-medium transform translate-x-full transition-transform duration-300">

    <!-- Top Row -->
    <div class="flex justify-between items-center border-b pb-4">
      <h2 class="text-lg font-semibold text-[#0F766E]">Menu</h2>
      <button id="close-btn" class="text-3xl text-[#0F766E]">✕</button>
    </div>

    <a href="/index.html" class="mobile-nav-link hover:text-[#0F766E] transition text-lg">Home</a>
    <a href="/index.html#about" class="mobile-nav-link hover:text-[#0F766E] transition text-lg">About</a>
    <a href="/index.html#services" class="mobile-nav-link hover:text-[#0F766E] transition text-lg">Services</a>
    <a href="/index.html" class="mobile-nav-link hover:text-[#0F766E] transition text-lg">Doctors</a>
    <a href="/index.html#contact" class="mobile-nav-link hover:text-[#0F766E] transition text-lg">Contact</a>

  </div>

</header>
`;

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-btn");

const openIcon = document.getElementById("menu-open");
const closeIcon = document.getElementById("menu-close");

// Function to close menu
function closeMenu() {
  menu.classList.add("translate-x-full");
  overlay.classList.add("hidden");

  openIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");

  document.body.style.overflow = "auto";
}

// Open Menu
btn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");

  openIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");

  document.body.style.overflow = "hidden"; // stop scroll
});

// Close on button
closeBtn.addEventListener("click", closeMenu);

// Close on overlay click
overlay.addEventListener("click", closeMenu);

// Close menu when clicking on mobile nav links and handle hash navigation
document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default to handle manually
    
    const href = link.getAttribute("href");
    
    // Close the menu first
    closeMenu();
    
    // Small delay to allow menu close animation to start
    setTimeout(() => {
      if (href.includes("#")) {
        // Handle hash navigation
        const [basePath, hash] = href.split("#");
        
        // Check if we're on the correct page
        const currentPath = window.location.pathname;
        const isOnIndexPage = currentPath === "/" || currentPath === "/index.html" || currentPath.endsWith("index.html");
        
        if (!isOnIndexPage && (basePath === "/index.html" || basePath === "/")) {
          // We need to navigate to index page first
          window.location.href = href;
        } else {
          // We're already on index page, just scroll to element
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      } else {
        // Regular navigation
        window.location.href = href;
      }
    }, 100);
  });
});

// Also handle desktop navigation links for hash scrolling
document.querySelectorAll("nav a:not(.mobile-nav-link)").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    
    if (href && href.includes("#")) {
      e.preventDefault();
      const [basePath, hash] = href.split("#");
      
      const currentPath = window.location.pathname;
      const isOnIndexPage = currentPath === "/" || currentPath === "/index.html" || currentPath.endsWith("index.html");
      
      if (!isOnIndexPage && (basePath === "/index.html" || basePath === "/")) {
        window.location.href = href;
      } else if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    }
  });
});

// Handle page load with hash in URL
if (window.location.hash) {
  setTimeout(() => {
    const hash = window.location.hash.substring(1);
    const targetElement = document.getElementById(hash);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, 500);
}