document.addEventListener('DOMContentLoaded', () => {
    // --- Dark Mode Logic ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');

    // Por defecto es claro (ignora preferencia del sistema si no hay elección guardada)
    if (savedTheme === 'dark') {
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
            });

            li.appendChild(button);
            tabsContainer.appendChild(li);
        });
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
            
            // Header: ID + Title
            const headerDiv = document.createElement('div');
            headerDiv.className = 'flex items-start mb-4';
            
            // Alphanumeric Identifier (Minimalist Typography)
            const idBadge = document.createElement('span');
            idBadge.className = 'flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 text-unam-blue dark:text-blue-300 text-base font-light mr-3';
            idBadge.textContent = `${currentCategory.identifierPrefix}${item.id.replace(currentCategory.identifierPrefix, '')}`;
            
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
    function openDrawer(item, buttonElement) {
        lastFocusedElement = buttonElement;
        
        // Update DOM elements
        buttonElement.setAttribute('aria-expanded', 'true');
        
        drawerTitle.textContent = item.title;
        
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

    function closeDrawer() {
        if (lastFocusedElement) {
            lastFocusedElement.setAttribute('aria-expanded', 'false');
        }

        // Restore body scroll
        document.body.classList.remove('overflow-hidden');

        drawerBackdrop.classList.remove('opacity-100');
        drawerBackdrop.classList.add('opacity-0');
        drawerPanel.classList.remove('translate-x-0');
        drawerPanel.classList.add('translate-x-full');

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

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !detailsDrawer.classList.contains('hidden')) {
            closeDrawer();
        }
    });

    // Initialize
    if (typeof servicesData !== 'undefined') {
        renderTabs();
        renderServices();
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
});