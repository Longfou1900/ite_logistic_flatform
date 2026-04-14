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
  const pagesPath = isSubPage ? "" : "pages/";

  const navbarHTML = `
<nav class="fixed top-0 w-full bg-white dark:bg-neutral-900 shadow-lg z-50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">

            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
                <a href="${rootPath}index.html" class="text-xl font-bold text-gray-800 dark:text-gray-200">
                    <span class="font-bold text-xl text-neutral-900 dark:text-white">DolNav</span>
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

            <!-- Dark Mode Toggle -->
            <button id="darkModeToggle" class="p-2 rounded-lg bg-gray-100 dark:bg-neutral-800">
                <svg id="sunIcon" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M10.5 1.5H9.5V.5h1v1zm0 16H9.5v1h1v-1zm5.657-2.343l.707.707-.707-.707zm-11.314 0l-.707.707.707-.707zM17.5 9.5v1h1v-1h-1zM1.5 9.5v1h1v-1h-1zm10-6a4 4 0 100 8 4 4 0 000-8zm0 7a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <svg id="moonIcon" class="w-5 h-5 text-gray-400 hidden" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            </button>
        </div>
    </div>
</nav>
`;
  return navbarHTML;
}

// Initialize Dark Mode AFTER navbar is inserted
function initDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const sun = document.getElementById('sunIcon');
    const moon = document.getElementById('moonIcon');

    if (!toggle) return; // Guard clause

  const updateUI = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      sun?.classList.add('hidden');
      moon?.classList.remove('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      sun?.classList.remove('hidden');
      moon?.classList.add('hidden');
    }
  };
   // Initial Check
  const isDark = localStorage.getItem('darkMode') === 'true';
  updateUI(isDark);

  // Click Event
  toggle.onclick = () => {
    const willBeDark = !document.documentElement.classList.contains('dark');
    updateUI(willBeDark);
    localStorage.setItem('darkMode', willBeDark);
  };
}

// Insert navbar and initialize dark mode
function insertNavbar() {
  // Prevent double insertion
  if (document.querySelector("nav")) return;

  document.body.insertAdjacentHTML("afterbegin", createNavbar());
  initDarkMode(); // Call AFTER navbar is inserted
}

// Load page is ready Execute
document.addEventListener("DOMContentLoaded", insertNavbar);