// components/navbar.js
function createNavbar() {
  // 1. Check current location
  const isSubPage = window.location.pathname.includes("/pages/");

  // 2. Define path logic
  // If we are in /pages/, we go UP (../) to find index.
  // If we are at root, we stay here (./) to find index.
  const rootPath = isSubPage ? "../" : "./";

  // If we are at root, we need to enter pages/ to find subpages.
  // If we are already in pages/, we don't need the prefix.
  const pagesPath =  "pages/";

  const navbarHTML = `
        <nav class="fixed top-0 w-full bg-white dark:bg-neutral-900 shadow-lg z-50 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">

                    <!-- Logo -->
                    <div class="flex items-center space-x-2 cursor-pointer">
                        <a href="${rootPath}index.html" class="flex items-center space-x-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                            <img id="sunLogo" src="${rootPath}images/logos/sun-logo.png" alt="DolNav Logo" class="w-14 h-14">
                            <img id="nightLogo" src="${rootPath}images/logos/night-logo.png" alt="DolNav Logo" class="w-14 h-14 hidden">
                            <span class="font-bold text-xl text-to-secondary dark:text-white">DolNav</span>
                        </a>
                    </div>

                    <!-- Navigation Menu -->
                    <div class="hidden md:flex space-x-8">
                        <a href="${rootPath}index.html"
                            class="text-gray-700 dark:text-gray-300 hover:text-primary transition">Home</a>
                        <a href="${rootPath}${pagesPath}tracking.html"
                            class="text-gray-700 dark:text-gray-300 hover:text-primary transition">Track</a>
                        <a href="${rootPath}${pagesPath}warehouses.html"
                            class="text-gray-700 dark:text-gray-300 hover:text-primary transition">Warehouses</a>
                        <a href="${rootPath}${pagesPath}dashboard.html"
                            class="text-gray-700 dark:text-gray-300 hover:text-primary transition">Dashboard</a>
                        <a href="${rootPath}${pagesPath}about.html"
                            class="text-gray-700 dark:text-gray-300 hover:text-primary transition">About</a>
                    </div>

                    <div class="flex items-center space-x-4 ">
                        <!-- Dark Mode Toggle -->
                        <button id="darkModeToggle" class="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800 cursor-pointer">
                            <svg id="sunIcon" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10.5 1.5H9.5V.5h1v1zm0 16H9.5v1h1v-1zm5.657-2.343l.707.707-.707-.707zm-11.314 0l-.707.707.707-.707zM17.5 9.5v1h1v-1h-1zM1.5 9.5v1h1v-1h-1zm10-6a4 4 0 100 8 4 4 0 000-8zm0 7a3 3 0 110-6 3 3 0 010 6z" />
                            </svg>
                            <svg id="moonIcon" class="w-5 h-5 text-gray-400 hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </button>

                        <button class="bg-green-200 cursor-pointer rounded-xl font-medium py-1 px-5 hover:bg-green-400 hover:text-white">
                            Login
                        </button>

                        <button id="mobileMenuBtn" class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none">
                            <svg id="hamburgerIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg id="closeMenuIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobileMenu" class="hidden md:hidden border-t border-gray-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 pt-2 pb-4 space-y-2 shadow-xl">
                <a href="${rootPath}index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition">Home</a>
                <a href="${rootPath}${pagesPath}tracking.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition">Track</a>
                <a href="${rootPath}${pagesPath}warehouses.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition">Warehouses</a>
                <a href="${rootPath}${pagesPath}dashboard.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition">Dashboard</a>
                <a href="${rootPath}${pagesPath}about.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition">About</a>
                <button class="w-full mt-4 bg-green-200 cursor-pointer rounded-xl font-medium py-2 px-5 hover:bg-green-400 hover:text-white transition text-center sm:hidden">
                    Login
                </button>
            </div>
        </nav>
    `;
  return navbarHTML;
}

// Initialize Dark Mode AFTER navbar is inserted
function initDarkMode() {
  const toggle = document.getElementById("darkModeToggle");
  const sun = document.getElementById("sunIcon");
  const moon = document.getElementById("moonIcon");
  const sunLogo = document.getElementById("sunLogo");
  const nightLogo = document.getElementById("nightLogo");

  if (!toggle) return; // Guard clause

  const updateUI = (dark) => {
    if (dark) {
      document.documentElement.classList.add("dark");
      sun?.classList.add("hidden");
      moon?.classList.remove("hidden");
      sunLogo?.classList.add("hidden");
      nightLogo?.classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      sun?.classList.remove("hidden");
      moon?.classList.add("hidden");
      sunLogo?.classList.remove("hidden");
      nightLogo?.classList.add("hidden");
    }
  };
  // Initial Check
  const isDark = localStorage.getItem("darkMode") === "true";
  updateUI(isDark);

  // Click Event
  toggle.onclick = () => {
    const willBeDark = !document.documentElement.classList.contains("dark");
    updateUI(willBeDark);
    localStorage.setItem("darkMode", willBeDark);
  };
}

// Initialize Mobile Menu Logic
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeMenuIcon = document.getElementById("closeMenuIcon");

  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.onclick = () => {
    // Toggle the dropdown menu visibility
    mobileMenu.classList.toggle("hidden");
    
    // Swap the hamburger icon to an "X" icon
    hamburgerIcon.classList.toggle("hidden");
    closeMenuIcon.classList.toggle("hidden");
  };
}

// Insert navbar and initialize dark mode
function insertNavbar() {
  // Prevent double insertion
  if (document.querySelector("nav")) return;

  document.body.insertAdjacentHTML("afterbegin", createNavbar());
  // 1. Initialize logic
  initDarkMode(); // Call AFTER navbar is inserted
  initMobileMenu();

  // 2. IMPORTANT: Tell Tailwind to scan the new HTML we just added
  if (window.tailwind) {
    window.tailwind.publish(); 
  }
}

// Load page is ready Execute
document.addEventListener("DOMContentLoaded", insertNavbar);
