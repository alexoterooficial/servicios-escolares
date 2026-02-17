document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const filterPills = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.procedure-card');
    const themeToggleBtn = document.getElementById('themeToggle');
    const noticesSection = document.getElementById('notices-section');
    const gridSection = document.getElementById('grid-section');

    // State
    let currentFilter = 'all';

    // --- Dark Mode Logic ---
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Search & Filter Logic ---

    // Restore previous search if available
    const savedSearch = sessionStorage.getItem('lastSearch');
    if (savedSearch) {
        searchInput.value = savedSearch;
        // Trigger filter immediately
        filterContent(savedSearch, currentFilter);
        if (savedSearch.length > 0) clearSearchBtn.classList.remove('hidden');
    }

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        sessionStorage.setItem('lastSearch', query);
        filterContent(query, currentFilter);

        if (query.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        sessionStorage.removeItem('lastSearch');
        filterContent('', currentFilter);
        clearSearchBtn.classList.add('hidden');
    });

    // Category Pills
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Update UI
            filterPills.forEach(p => {
                p.classList.remove('bg-unam-blue', 'text-white', 'border-transparent', 'font-bold', 'ring-2', 'ring-offset-2', 'ring-unam-blue');
                p.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-slate-800', 'dark:text-slate-300', 'dark:hover:bg-slate-700', 'font-medium');
                p.setAttribute('aria-pressed', 'false');
            });

            pill.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200', 'dark:bg-slate-800', 'dark:text-slate-300', 'dark:hover:bg-slate-700', 'font-medium');
            pill.classList.add('bg-unam-blue', 'text-white', 'border-transparent', 'font-bold', 'ring-2', 'ring-offset-2', 'ring-unam-blue');
            pill.setAttribute('aria-pressed', 'true');

            // Update State
            currentFilter = pill.dataset.category;
            filterContent(searchInput.value.toLowerCase(), currentFilter);
        });
    });

    function filterContent(query, category) {
        let hasVisibleCards = false;

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            const cardCategory = card.dataset.category;

            const matchesSearch = title.includes(query) || desc.includes(query);
            const matchesCategory = category === 'all' || cardCategory === category;

            if (matchesSearch && matchesCategory) {
                card.classList.remove('hidden');
                hasVisibleCards = true;
                // Animate entrance? (Optional, kept simple for performance)
            } else {
                card.classList.add('hidden');
            }
        });

        // Show/Hide "No Results" message if needed (implementation left simple for now)
    }
});
