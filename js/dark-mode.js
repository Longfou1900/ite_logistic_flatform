// /js/dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
            const darkModeToggle = document.getElementById('darkModeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

        if (localStorage.getItem('darkMode') === 'true') {
            document.documentElement.classList.add('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }

        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            sunIcon.classList.toggle('hidden');
            moonIcon.classList.toggle('hidden');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const increment = target / speed;

            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count).toLocaleString();
                    setTimeout(updateCount, 10);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCount();
        });
})
