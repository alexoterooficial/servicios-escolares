document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Logic ---
    const themeToggleBtn = document.getElementById('themeToggle');


    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Sticky Nav & Header Shadow Logic ---
    const mainHeader = document.getElementById('main-header');
    const pillsNav = document.getElementById('pills-nav');
    const pillsSentinel = document.getElementById('pills-sentinel');

    if (mainHeader && pillsNav && pillsSentinel) {
        const observer = new IntersectionObserver((entries) => {
            if (!entries[0].isIntersecting) {
                // El nav llegó al tope (se pegó debajo del header de 64px)
                mainHeader.classList.remove('shadow-md', 'dark:shadow-slate-900/50');
                pillsNav.classList.remove('bg-gray-50/95', 'dark:bg-slate-900/95', 'shadow-transparent');
                pillsNav.classList.add('bg-white', 'dark:bg-slate-800', 'shadow-md', 'dark:shadow-slate-900/50');
            } else {
                // El nav NO está pegado (scroll 0 o cerca del inicio)
                // NO AÑADIMOS SOMBRA AL HEADER AQUÍ (solo se añade en el footer)
                mainHeader.classList.remove('shadow-md', 'dark:shadow-slate-900/50');
                pillsNav.classList.remove('bg-white', 'dark:bg-slate-800', 'shadow-md', 'dark:shadow-slate-900/50');
                pillsNav.classList.add('bg-gray-50/95', 'dark:bg-slate-900/95', 'shadow-transparent');
            }
        }, {
            rootMargin: '-64px 0px 0px 0px',
            threshold: 1.0
        });

        observer.observe(pillsSentinel);
    }

    // --- Services Data Rendering Logic ---
    const tabsContainer = document.getElementById('categories-tabs');
    const servicesContainer = document.getElementById('services-container');
    
    // Drawer Elements
    const detailsDrawer = document.getElementById('detailsDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerPanel = document.getElementById('drawerPanel');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    const drawerTitle = document.getElementById('drawerTitle');
    const drawerContent = document.getElementById('drawerContent');
    const drawerActionContainer = document.getElementById('drawerActionContainer');

    // Contenedores Principales para Accesibilidad (Focus Trap)
    const mainContent = document.querySelector('main');
    const mainFooter = document.querySelector('footer');

    let currentCategoryId = 'todos';
    let lastFocusedElement = null; // For a11y focus trap returning

    function renderTabs() {
        if (!tabsContainer) return;
        tabsContainer.innerHTML = '';
        
        // Customizamos el orden de las pestañas: forzamos que 'identidad' aparezca antes que 
        // 'academico' en la navegación, pero conservamos servicesData original para que la 
        // vista de 'Todos' muestre primero tarjetas de otra categoría.
        const tabCategories = [...servicesData];
        const academicoIdx = tabCategories.findIndex(c => c.id === 'academico');
        const identidadIdx = tabCategories.findIndex(c => c.id === 'identidad');
        
        if (academicoIdx !== -1 && identidadIdx !== -1) {
            // Intercambiamos si Académico está antes que Identidad
            if (academicoIdx < identidadIdx) {
                [tabCategories[academicoIdx], tabCategories[identidadIdx]] = [tabCategories[identidadIdx], tabCategories[academicoIdx]];
            }
        }
        
        const allCategories = [{ id: 'todos', title: 'Todos' }, ...tabCategories];        
        allCategories.forEach(category => {
            const isSelected = category.id === currentCategoryId;
            
            const li = document.createElement('li');
            li.setAttribute('role', 'presentation');
            li.classList.add('flex-shrink-0');

            const button = document.createElement('button');
            button.className = `px-5 py-2.5 rounded-full text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-unam-gold whitespace-nowrap ${
                isSelected 
                ? 'bg-unam-blue text-white shadow-lg dark:bg-blue-600' 
                : 'bg-white text-slate-600 hover:bg-gray-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 shadow-md'
            }`;
            button.textContent = category.title.charAt(0).toUpperCase() + category.title.slice(1).toLowerCase();
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-selected', isSelected.toString());
            button.setAttribute('aria-controls', `panel-${category.id}`);
            button.id = `tab-${category.id}`;
            
            button.addEventListener('click', () => {
                currentCategoryId = category.id;
                renderTabs();
                renderServices();
                
                // Reposicionar el scroll si las pestañas estaban ya en modo sticky
                const sentinel = document.getElementById('pills-sentinel');
                if (sentinel) {
                    const rect = sentinel.getBoundingClientRect();
                    // Si el centinela subió más alá del header (64px top), entonces la barra pills está pegada
                    if (rect.top < 64) {
                        window.scrollTo({
                            top: window.scrollY + rect.top - 64, // Compensa el Navbar
                            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
                        });
                    }
                }
            });

            li.appendChild(button);
            tabsContainer.appendChild(li);
        });
    }

    // --- Iconos Únicos por Trámite ---
    const serviceIcons = {
        "A1": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
        "A2": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        "A3": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`,
        "A4": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>`,
        "A5": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>`,
        "A6": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>`,
        "A7": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>`,
        "I1": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0015.5 3H15m3 15h-3m-3-15h.01M10 12h4m-4 4h4M9 8h4" /></svg>`,
        "I2": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><path d="M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H11a2 2 0 0 0-2 2Z"></path><circle cx="12" cy="11" r="2"></circle><path d="M16 17c0-1.657-1.79-3-4-3s-4 1.343-4 3"></path></svg>`,
        "I3": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>`,
        "I4": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>`,
        "I5": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>`,
        "I6": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        "I7": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>`,
        "I8": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>`,
        "I9": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        "D1": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
        "D2": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>`,
        "D3": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>`,
        "D4": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>`,
        "D5": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>`,
        "B1": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        "B2": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>`,
        "B3": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>`,
        "B4": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>`,
        "G1": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>`,
        "G2": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>`,
        "G3": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        "G4": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>`,
        "G5": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
        "G6": `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>`
    };

    function getIconForId(id) {
        return serviceIcons[id] || `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`;
    }

    function renderServices() {
        if (!servicesContainer) return;
        servicesContainer.innerHTML = '';

        let itemsToRender = [];
        let sectionId = '';

        if (currentCategoryId === 'todos') {
            sectionId = 'todos';
            servicesData.forEach(cat => {
                cat.items.forEach(item => {
                    itemsToRender.push({ item, category: cat });
                });
            });
        } else {
            const currentCategory = servicesData.find(c => c.id === currentCategoryId);
            if (!currentCategory) return;
            sectionId = currentCategory.id;
            currentCategory.items.forEach(item => {
                itemsToRender.push({ item, category: currentCategory });
            });
        }

        // Container for accessibility
        servicesContainer.setAttribute('aria-labelledby', `tab-${sectionId}`);
        servicesContainer.id = `panel-${sectionId}`;

        const ul = document.createElement('ul');
        ul.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-20';

        itemsToRender.forEach(({ item, category: currentCategory }) => {
            const li = document.createElement('li');
            // Reduced padding, smaller cards, more visible shadow
            li.className = 'bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 dark:shadow-slate-900/50 border border-gray-100 dark:border-slate-700 p-5 md:p-6 flex flex-col justify-between h-full';
            
            // Header: Icon + Title
            const headerDiv = document.createElement('div');
            headerDiv.className = 'flex items-start mb-4';
            
            // Icon Badge (SVG injection)
            const idBadge = document.createElement('span');
            idBadge.className = 'flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-unam-blue dark:text-blue-300 mr-3 transition-transform duration-300 group-hover:scale-110';
            idBadge.innerHTML = getIconForId(item.id);
            
            const titleElement = document.createElement('h3');
            titleElement.className = 'text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight';
            titleElement.textContent = item.title;

            headerDiv.appendChild(idBadge);
            headerDiv.appendChild(titleElement);

            // Summary
            const summaryElement = document.createElement('p');
            summaryElement.className = 'text-slate-600 dark:text-slate-400 text-sm md:text-base mb-4 flex-grow';
            summaryElement.textContent = item.summary;

            li.appendChild(headerDiv);
            li.appendChild(summaryElement);

            // "Ver detalles" button logic for ALL cards
            const btnContainer = document.createElement('div');
            btnContainer.className = 'flex justify-end mt-auto pt-4 border-t border-gray-50 dark:border-slate-700/50';
            
            const detailsBtn = document.createElement('button');
            detailsBtn.className = 'inline-flex items-center justify-center space-x-1 text-unam-gold dark:text-yellow-500 font-semibold hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-unam-gold rounded px-3 py-2 -mr-3 text-sm md:text-base';
            detailsBtn.innerHTML = `
                <span>Ver detalles</span>
                <svg class="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            `;
            detailsBtn.setAttribute('aria-expanded', 'false');
            detailsBtn.setAttribute('aria-controls', 'detailsDrawer');

            detailsBtn.addEventListener('click', () => {
                openDrawer(item, detailsBtn);
            });

            btnContainer.appendChild(detailsBtn);
            li.appendChild(btnContainer);

            ul.appendChild(li);
        });

        servicesContainer.appendChild(ul);
    }

    // --- Drawer Logic & A11y ---
    function openDrawer(item, buttonElement, updateUrl = true) {
        lastFocusedElement = buttonElement || null;
        
        // Update DOM elements
        if (lastFocusedElement) {
            lastFocusedElement.setAttribute('aria-expanded', 'true');
        }
        
        drawerTitle.textContent = item.title;
        document.title = item.title + " - ENP Plantel 8";

        if (updateUrl) {
            const url = new URL(window.location);
            url.searchParams.set('item', item.id);
            history.pushState({ item: item.id }, '', url);
        }
        
        // --- Focus Trap (A11y) ---
        // Desactiva el rastro del main y footer para navegar en la API del cajón emergente
        if (mainContent) mainContent.inert = true;
        if (mainFooter) mainFooter.inert = true;
        
        let contentHtml = '';
        
        const detailedInfo = item.detailedInfo || {
            actionType: 'none',
            actionText: 'Acude a la ventanilla de Servicios Escolares para mayor información.'
        };
        
        if (detailedInfo.requirements && detailedInfo.requirements.length > 0) {
            contentHtml += `
                <div>
                    <h4 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Requisitos</h4>
                    <ul class="space-y-2">
                        ${detailedInfo.requirements.map(req => `
                            <li class="flex items-start text-slate-700 dark:text-slate-300">
                                <svg class="h-5 w-5 text-unam-gold mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>${req}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        if (detailedInfo.steps && detailedInfo.steps.length > 0) {
            contentHtml += `
                <div>
                    <h4 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 mt-6">Pasos a seguir</h4>
                    <ol class="space-y-4">
                        ${detailedInfo.steps.map((step, idx) => `
                            <li class="flex text-slate-700 dark:text-slate-300">
                                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-unam-blue dark:text-blue-300 text-xs font-bold mr-3 mt-0.5">${idx + 1}</span>
                                <span>${step}</span>
                            </li>
                        `).join('')}
                    </ol>
                </div>
            `;
        }
        
        if (!detailedInfo.requirements && !detailedInfo.steps) {
            contentHtml = `
                <div class="flex flex-col items-center justify-center h-full text-center py-8">
                    <svg class="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-slate-500 dark:text-slate-400">Información detallada sobre los requisitos y procedimientos de este trámite estarán disponibles próximamente.</p>
                </div>
            `;
        }

        drawerContent.innerHTML = contentHtml;

        // Action Button
        drawerActionContainer.innerHTML = '';
        
        const actionsList = detailedInfo.actions || [];
        
        // Retrocompatibilidad con acciones simples
        if (actionsList.length === 0 && detailedInfo.actionType && detailedInfo.actionType !== 'none') {
            actionsList.push({
                type: detailedInfo.actionType,
                text: detailedInfo.actionText,
                url: detailedInfo.actionUrl
            });
        }

        if (actionsList.length > 0) {
            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'flex flex-col space-y-3';
            
            actionsList.forEach((act, idx) => {
                const actionBtn = document.createElement('a');
                actionBtn.href = act.url || '#';
                if (act.type === 'redirect' || act.type === 'download') {
                    actionBtn.target = '_blank';
                    actionBtn.rel = 'noopener noreferrer';
                }
                if (act.type === 'download') {
                    actionBtn.setAttribute('download', '');
                }
                
                // Botón primario y botón secundario
                if (idx === 0) {
                    actionBtn.className = 'w-full flex justify-center text-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-unam-blue hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-unam-gold transition-colors';
                } else {
                    actionBtn.className = 'w-full flex justify-center text-center items-center py-3 px-4 border border-blue-200 dark:border-slate-600 rounded-lg shadow-sm text-sm font-medium text-unam-blue dark:text-blue-300 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-unam-gold transition-colors';
                }
                
                actionBtn.textContent = act.text;
                actionsDiv.appendChild(actionBtn);
            });
            drawerActionContainer.appendChild(actionsDiv);
            
        } else if (detailedInfo.actionType === 'none') {
            const infoP = document.createElement('p');
            infoP.className = 'text-center text-sm font-medium text-slate-600 dark:text-slate-300 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700';
            infoP.textContent = detailedInfo.actionText;
            drawerActionContainer.appendChild(infoP);
        }

        // Show Drawer
        detailsDrawer.classList.remove('hidden');
        detailsDrawer.setAttribute('aria-hidden', 'false');
        // Prevent body scroll
        document.body.classList.add('overflow-hidden');
        // Force reflow
        void detailsDrawer.offsetWidth;
        
        drawerBackdrop.classList.remove('opacity-0');
        drawerBackdrop.classList.add('opacity-100');
        drawerPanel.classList.remove('translate-x-full');
        drawerPanel.classList.add('translate-x-0');

        // Manage Focus Focus
        setTimeout(() => {
            closeDrawerBtn.focus();
        }, 300); // Wait for transition
    }

    function closeDrawer(eventOrUpdateUrl) {
        const updateUrl = typeof eventOrUpdateUrl === 'boolean' ? eventOrUpdateUrl : true;

        if (lastFocusedElement) {
            lastFocusedElement.setAttribute('aria-expanded', 'false');
        }

        document.title = "Servicios Escolares - ENP Plantel 8";

        if (updateUrl) {
            const url = new URL(window.location);
            url.searchParams.delete('item');
            history.replaceState(null, '', url.pathname + url.search);
        }

        // Restore body scroll
        document.body.classList.remove('overflow-hidden');

        drawerBackdrop.classList.remove('opacity-100');
        drawerBackdrop.classList.add('opacity-0');
        drawerPanel.classList.remove('translate-x-0');
        drawerPanel.classList.add('translate-x-full');
        
        // --- End Focus Trap (A11y) ---
        if (mainContent) mainContent.inert = false;
        if (mainFooter) mainFooter.inert = false;

        setTimeout(() => {
            detailsDrawer.classList.add('hidden');
            detailsDrawer.setAttribute('aria-hidden', 'true');
            if (lastFocusedElement) {
                lastFocusedElement.focus();
                lastFocusedElement = null;
            }
        }, 300);
    }

    closeDrawerBtn.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);

    // --- Menú Hamburguesa (Mobile Navigation) ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
    const mobileDrawerPanel = document.getElementById('mobileDrawerPanel');
    let lastMenuFocusedElement = null;

    function openMobileMenu() {
        lastMenuFocusedElement = document.activeElement;
        
        // Evitar el scroll de la página detrás del menú
        document.body.classList.add('overflow-hidden');
        
        // Show Backdrop
        mobileDrawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
        mobileDrawerBackdrop.classList.add('opacity-100', 'pointer-events-auto');
        
        // Hacer visible el panel antes de animar
        mobileDrawerPanel.classList.remove('invisible');
        
        // --- Focus Trap (A11y) ---
        if (mainContent) mainContent.inert = true;
        if (mainFooter) mainFooter.inert = true;
        
        // Slide in panel
        mobileDrawerPanel.classList.remove('translate-x-full');
        mobileDrawerPanel.classList.add('translate-x-0');
        
        // Transform button icon
        if (iconMenu && iconClose) {
            iconMenu.classList.replace('opacity-100', 'opacity-0');
            iconMenu.classList.replace('scale-100', 'scale-0');
            iconMenu.classList.replace('rotate-0', 'rotate-90');
            
            iconClose.classList.replace('opacity-0', 'opacity-100');
            iconClose.classList.replace('scale-0', 'scale-100');
            iconClose.classList.replace('-rotate-90', 'rotate-0');
        }
    }

    function closeMobileMenu() {
        // Restaurar body scroll SÓLO si el otro drawer (details) también está cerrado
        if (detailsDrawer && detailsDrawer.classList.contains('hidden')) {
            document.body.classList.remove('overflow-hidden');
        }
        
        // Hide Backdrop
        mobileDrawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
        mobileDrawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
        
        // Slide out panel
        mobileDrawerPanel.classList.remove('translate-x-0');
        mobileDrawerPanel.classList.add('translate-x-full');
        
        // --- End Focus Trap (A11y) ---
        if (mainContent) mainContent.inert = false;
        if (mainFooter) mainFooter.inert = false;
        
        // Transform button icon back
        if (iconMenu && iconClose) {
            iconMenu.classList.replace('opacity-0', 'opacity-100');
            iconMenu.classList.replace('scale-0', 'scale-100');
            iconMenu.classList.replace('rotate-90', 'rotate-0');
            
            iconClose.classList.replace('opacity-100', 'opacity-0');
            iconClose.classList.replace('scale-100', 'scale-0');
            iconClose.classList.replace('rotate-0', '-rotate-90');
        }
        
        setTimeout(() => {
            mobileDrawerPanel.classList.add('invisible');
            if (lastMenuFocusedElement) {
                lastMenuFocusedElement.focus();
                lastMenuFocusedElement = null;
            }
        }, 300);
    }

    if (mobileMenuToggle && mobileDrawerBackdrop) {
        mobileMenuToggle.addEventListener('click', () => {
            if (mobileDrawerPanel.classList.contains('translate-x-full')) {
                openMobileMenu();
            } else {
                closeMobileMenu();
            }
        });
        mobileDrawerBackdrop.addEventListener('click', closeMobileMenu);
        
        // Cerrar menú al presionar un enlace interior
        const mobileLinks = mobileDrawerPanel.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Auto-cerrar menú al regresar a tamaño Desktop (xl)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1280) {
            if (mobileDrawerPanel && !mobileDrawerPanel.classList.contains('translate-x-full')) {
                closeMobileMenu();
            }
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (detailsDrawer && !detailsDrawer.classList.contains('hidden')) {
                closeDrawer();
            }
            if (mobileDrawerBackdrop && !mobileDrawerBackdrop.classList.contains('opacity-0')) {
                closeMobileMenu();
            }
        }
    });

    // --- Manejo de Navegación (Popstate) ---
    window.addEventListener('popstate', (e) => {
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('item');
        if (itemId) {
            let foundItem = null;
            for (const cat of servicesData) {
                const item = cat.items.find(i => i.id === itemId);
                if (item) {
                    foundItem = item;
                    break;
                }
            }
            if (foundItem) {
                openDrawer(foundItem, null, false); // false para no volver a hacer pushState
            }
        } else {
            if (!detailsDrawer.classList.contains('hidden')) {
                closeDrawer(false); // false para no volver a hacer replaceState
            }
        }
    });

    // Initialize
    if (typeof servicesData !== 'undefined') {
        renderTabs();
        renderServices();
        
        // --- Sincronización de Entrada (Deep Linking) ---
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('item');
        if (itemId) {
            let foundItem = null;
            for (const cat of servicesData) {
                const item = cat.items.find(i => i.id === itemId);
                if (item) {
                    foundItem = item;
                    break;
                }
            }
            // Retraso ligero para permitir pintar la UI del HTML base
            if (foundItem) {
                setTimeout(() => openDrawer(foundItem, null, false), 50);
            }
        }
    }

    // --- Footer intersection to hide pills-nav ---
    const footerElement = document.querySelector('footer');
    if (footerElement && pillsNav && mainHeader) {
        pillsNav.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease';
        const footerObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                // Se suben por completo fuera de la vista
                pillsNav.style.transform = 'translateY(-200%)';
                pillsNav.style.opacity = '0';
                pillsNav.style.pointerEvents = 'none';
                
                // DEVOLVER SOMBRA AL HEADER ÚNICAMENTE CUANDO DESAPARECEN LAS PILLS (En el footer)
                mainHeader.classList.add('shadow-md', 'dark:shadow-slate-900/50');
            } else {
                pillsNav.style.transform = 'translateY(0)';
                pillsNav.style.opacity = '1';
                pillsNav.style.pointerEvents = 'auto';
                
                // Al volver a subir, el header pierde su sombra y el control vuelve a las pills
                mainHeader.classList.remove('shadow-md', 'dark:shadow-slate-900/50');
            }
        }, { 
            rootMargin: '0px 0px 150px 0px', 
            threshold: 0 
        });
        footerObserver.observe(footerElement);
    }

    // --- Scroll-to-Top Button Logic ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                // Mostrar botón subiendo y ganando opacidad
                scrollToTopBtn.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
                scrollToTopBtn.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
            } else {
                // Esconder deslizando hacia abajo y volviéndose transparente
                scrollToTopBtn.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
                scrollToTopBtn.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
            }
        });

        // Regresar hacia arriba al clickear
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
            });
        });
    }
});