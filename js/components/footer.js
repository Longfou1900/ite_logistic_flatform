// components/footer.js 
function createFooter(){
    // 1. Check current location
    const isSubPage = window.location.pathname.includes("/pages/");
    const rootPath = isSubPage ? "../" : "./";
    const pagesPath =  "pages/";

    const footerHTML = `
        <footer class="bg-black dark:bg-neutral-800 text-white py-12">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div class="flex items-center space-x-2 mb-4">
                                <!-- Logo -->
                                <div class="flex items-center space-x-2 cursor-pointer">
                                    <a href="${rootPath}index.html" class="flex items-center space-x-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                        <img id="sunLogo" src="${rootPath}images/logos/sun-logo.png" alt="DolNav Logo" class="w-18 h-18">
                                        <img id="nightLogo" src="${rootPath}images/logos/night-logo.png" alt="DolNav Logo" class="w-18 h-18 hidden">
                                        <span class="font-bold text-xl text-green-300 dark:text-white">DolNav</span>
                                    </a>
                                </div>
                            </div>
                            <p class="text-gray-400 text-sm">Smart logistics solutions for Southeast Asia</p>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Quick Links</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li><a href="#" class="hover:text-white transition">Home</a></li>
                                <li><a href="tracking.html" class="hover:text-white transition">Tracking</a></li>
                                <li><a href="dashboard.html" class="hover:text-white transition">Dashboard</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Company</h4>
                            <ul class="space-y-2 text-sm text-gray-400">
                                <li><a href="about.html" class="hover:text-white transition">About Us</a></li>
                                <li><a href="about.html" class="hover:text-white transition">Contact</a></li>
                                <li><a href="#" class="hover:text-white transition">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-4">Contact</h4>
                            <p class="text-sm text-gray-400">📍 Phnom Penh, Cambodia</p>
                            <p class="text-sm text-gray-400">📧 info@DolNow2026.com</p>
                            <p class="text-sm text-gray-400">📞 +855 23 123 456</p>
                        </div>
                    </div>
                    <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2026 DolNow. All rights reserved.</p>
                    </div>
                </div>
        </footer>
    `;
return footerHTML;
}

function insertFooter() {
  document.body.insertAdjacentHTML('beforeend', createFooter());
}

// Load when page is ready
document.addEventListener('DOMContentLoaded', insertFooter);