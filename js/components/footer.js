// components/footer.js 
function createFooter(){
const footerHTML = `
<footer class="bg-neutral-900 dark:bg-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
                        <span class="font-bold text-lg">LogisHub</span>
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
                    <p class="text-sm text-gray-400">📧 info@logishub.com</p>
                    <p class="text-sm text-gray-400">📞 +855 23 123 456</p>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2026 LogisHub. All rights reserved.</p>
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