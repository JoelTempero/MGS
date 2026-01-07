// ===== Demo Data =====
const demoData = {
    alerts: [
        {
            id: 1,
            type: 'emergency',
            title: 'School Closure Tomorrow',
            message: 'Due to extreme weather warnings, school will be closed tomorrow (8 January). Please check emails for updates.',
            time: '2 hours ago',
            timestamp: new Date()
        },
        {
            id: 2,
            type: 'sport',
            title: 'Swimming Sports Rescheduled',
            message: 'The Year 7-8 swimming sports have been moved to Friday 10th January due to pool maintenance.',
            time: '5 hours ago',
            timestamp: new Date()
        },
        {
            id: 3,
            type: 'performing-arts',
            title: 'School Production Auditions',
            message: 'Auditions for the 2026 school production "The Sound of Music" will be held next week. Sign up at the Performing Arts office.',
            time: '1 day ago',
            timestamp: new Date()
        },
        {
            id: 4,
            type: 'general',
            title: 'Uniform Shop Hours',
            message: 'The uniform shop will have extended hours (8am-5pm) from 27-31 January for back to school.',
            time: '2 days ago',
            timestamp: new Date()
        }
    ],
    events: [
        { id: 1, title: 'Term 1 Begins', date: new Date(2026, 0, 28), type: 'school' },
        { id: 2, title: 'Waitangi Day', date: new Date(2026, 1, 6), type: 'holiday' },
        { id: 3, title: 'Senior College Meet the Teachers', date: new Date(2026, 1, 12), type: 'meeting' },
        { id: 4, title: 'Swimming Sports', date: new Date(2026, 1, 20), type: 'sport' },
        { id: 5, title: 'Primary School Picnic', date: new Date(2026, 1, 27), type: 'event' }
    ],
    newsletters: [
        { id: 1, title: 'Term 4 Week 10 Newsletter', date: '13 Dec 2025', category: 'all', url: '#' },
        { id: 2, title: 'Primary School Update', date: '10 Dec 2025', category: 'primary', url: '#' },
        { id: 3, title: 'Senior College Careers Newsletter', date: '8 Dec 2025', category: 'senior', url: '#' },
        { id: 4, title: 'Middle School Newsletter', date: '5 Dec 2025', category: 'middle', url: '#' },
        { id: 5, title: 'Term 4 Week 9 Newsletter', date: '6 Dec 2025', category: 'all', url: '#' }
    ],
    notices: [
        { id: 1, title: 'Welcome Back!', content: 'Welcome back to all students and families for 2026. We hope you had a restful break.', category: 'all', author: 'Principal' },
        { id: 2, title: 'New Student Orientation', content: 'All new Year 7 students please meet in the auditorium at 8:30am on Monday.', category: 'middle', author: 'Year 7 Dean' },
        { id: 3, title: 'Senior College Assembly', content: 'Senior College assembly will be held in the Grange Theatre at 9:00am on Tuesday.', category: 'senior', author: 'Head of Senior College' },
        { id: 4, title: 'Library Books Due', content: 'All library books from last year must be returned by Friday 31st January.', category: 'all', author: 'Librarian' }
    ],
    contacts: [
        { id: 1, name: 'Main Office', role: 'General Enquiries', phone: '+64 3 348 9826', email: 'office@middleton.school.nz' },
        { id: 2, name: 'Absences', role: 'Report Student Absences', phone: '+64 3 348 9826', email: 'absences@middleton.school.nz' },
        { id: 3, name: 'Mike Vannoort', role: 'Principal', phone: '+64 3 348 9826', email: 'principal@middleton.school.nz' },
        { id: 4, name: 'Christine Buckley', role: 'Head of Primary School', phone: '+64 3 348 9826', email: 'primary@middleton.school.nz' },
        { id: 5, name: 'Tony Kendrew', role: 'Head of Middle School', phone: '+64 3 348 9826', email: 'middle@middleton.school.nz' },
        { id: 6, name: 'Shane McConnell', role: 'Head of Senior College', phone: '+64 3 348 9826', email: 'senior@middleton.school.nz' },
        { id: 7, name: 'International College', role: 'International Students', phone: '+64 3 341 4054', email: 'inted@middleton.school.nz' },
        { id: 8, name: 'Uniform Shop', role: 'School Uniforms', phone: '+64 3 348 9826', email: 'uniform@middleton.school.nz' }
    ],
    links: [
        { id: 1, title: 'Parent Portal', icon: 'fa-user-circle', url: 'https://middleton.school.kiwi/' },
        { id: 2, title: 'Student Portal', icon: 'fa-graduation-cap', url: 'https://middletonschoolnz.sharepoint.com/teams/home' },
        { id: 3, title: 'KINDO', icon: 'fa-shopping-cart', url: 'https://shop.tgcl.co.nz/shop/q2.shtml?session=false&shop=Middleton%20Grange%20School' },
        { id: 4, title: 'School Website', icon: 'fa-globe', url: 'https://www.middleton.school.nz/' },
        { id: 5, title: 'Facebook', icon: 'fa-facebook', url: 'https://www.facebook.com/Middletongrangeschool/' },
        { id: 6, title: 'The Fridge Radio', icon: 'fa-podcast', url: 'https://www.middleton.school.nz/thefridge/' },
        { id: 7, title: 'Library', icon: 'fa-book', url: 'https://aiscloud.nz/MDD00/#!landingPage' },
        { id: 8, title: 'Grange Theatre', icon: 'fa-theater-masks', url: 'https://thegrangetheatre.nz/' }
    ],
    termDates: [
        {
            term: 1,
            title: 'Term 1',
            start: 'Tuesday 28 January',
            end: 'Friday 17 April',
            weeks: 12,
            holidays: ['Waitangi Day - 6 February', 'Good Friday - 3 April', 'Easter Monday - 6 April']
        },
        {
            term: 2,
            title: 'Term 2',
            start: 'Monday 4 May',
            end: 'Friday 10 July',
            weeks: 10,
            holidays: ["Queen's Birthday - 1 June"]
        },
        {
            term: 3,
            title: 'Term 3',
            start: 'Monday 27 July',
            end: 'Friday 25 September',
            weeks: 9,
            holidays: []
        },
        {
            term: 4,
            title: 'Term 4',
            start: 'Monday 12 October',
            end: 'Friday 11 December',
            weeks: 9,
            holidays: ['Labour Day - 26 October']
        }
    ],
    subscriptions: [
        { id: 'primary', name: 'Primary School', description: 'Years 1-6 updates and events', enabled: true },
        { id: 'middle', name: 'Middle School', description: 'Years 7-10 updates and events', enabled: false },
        { id: 'senior', name: 'Senior College', description: 'Years 11-13 updates and events', enabled: false },
        { id: 'sport', name: 'Sport', description: 'Sports fixtures, results, and updates', enabled: true },
        { id: 'performing-arts', name: 'Performing Arts', description: 'Music, drama, and dance events', enabled: false },
        { id: 'careers', name: 'Careers', description: 'Career events and opportunities', enabled: false },
        { id: 'pasifika', name: 'Pasifika', description: 'Pasifika group updates and events', enabled: false },
        { id: 'production', name: 'School Production', description: 'Annual production updates', enabled: true },
        { id: 'emergency', name: 'Emergency', description: 'Critical school announcements', enabled: true }
    ],
    notifications: [
        { id: 1, title: 'School Closure Tomorrow', message: 'Due to extreme weather, school closed tomorrow.', time: '2 hours ago', unread: true },
        { id: 2, title: 'Swimming Sports Update', message: 'Rescheduled to Friday 10th January.', time: '5 hours ago', unread: true },
        { id: 3, title: 'Production Auditions', message: 'Sign up now for The Sound of Music!', time: '1 day ago', unread: true }
    ]
};

// ===== App State =====
const state = {
    currentPage: 'home',
    currentMonth: new Date(),
    isAdmin: false,
    sideNavOpen: false,
    notificationPanelOpen: false
};

// ===== DOM Elements =====
const elements = {
    splashScreen: document.getElementById('splash-screen'),
    app: document.getElementById('app'),
    menuBtn: document.getElementById('menuBtn'),
    sideNav: document.getElementById('sideNav'),
    sideNavClose: document.getElementById('sideNavClose'),
    overlay: document.getElementById('overlay'),
    mainContent: document.getElementById('mainContent'),
    notificationBtn: document.getElementById('notificationBtn'),
    notificationBadge: document.getElementById('notificationBadge'),
    notificationPanel: document.getElementById('notificationPanel'),
    loginModal: document.getElementById('loginModal'),
    loginForm: document.getElementById('loginForm'),
    loginError: document.getElementById('loginError'),
    loginModalClose: document.getElementById('loginModalClose'),
    adminLoginLink: document.getElementById('adminLoginLink'),
    toastContainer: document.getElementById('toastContainer')
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Show splash screen then reveal app
    setTimeout(() => {
        elements.splashScreen.classList.add('hidden');
        elements.app.classList.add('visible');
    }, 2000);

    // Set greeting based on time
    setGreeting();

    // Initialize all components
    initNavigation();
    initNotifications();
    initLogin();
    initPages();
    
    // Render initial content
    renderAlerts();
    renderEvents();
    renderNewsletters();
    renderNotices();
    renderContacts();
    renderLinks();
    renderTermDates();
    renderSubscriptions();
    renderNotificationPanel();
    renderCalendar();
}

// ===== Greeting =====
function setGreeting() {
    const hour = new Date().getHours();
    const greetingEl = document.getElementById('greetingText');
    
    if (hour < 12) {
        greetingEl.textContent = 'Good Morning';
    } else if (hour < 17) {
        greetingEl.textContent = 'Good Afternoon';
    } else {
        greetingEl.textContent = 'Good Evening';
    }
}

// ===== Navigation =====
function initNavigation() {
    // Menu button
    elements.menuBtn.addEventListener('click', toggleSideNav);
    elements.sideNavClose.addEventListener('click', closeSideNav);
    elements.overlay.addEventListener('click', closeSideNav);

    // Navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
        });
    });

    // Tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parent = btn.parentElement;
            parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const tabValue = btn.dataset.tab;
            filterContent(parent, tabValue);
        });
    });
}

function toggleSideNav() {
    state.sideNavOpen = !state.sideNavOpen;
    elements.sideNav.classList.toggle('open', state.sideNavOpen);
    elements.overlay.classList.toggle('visible', state.sideNavOpen);
    elements.menuBtn.classList.toggle('active', state.sideNavOpen);
}

function closeSideNav() {
    state.sideNavOpen = false;
    elements.sideNav.classList.remove('open');
    elements.overlay.classList.remove('visible');
    elements.menuBtn.classList.remove('active');
}

function navigateTo(page) {
    closeSideNav();
    closeNotificationPanel();
    
    // Update active page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update nav active state
    document.querySelectorAll('.side-nav-menu a').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    state.currentPage = page;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function filterContent(parent, filter) {
    const pageId = parent.closest('.page').id;
    
    if (pageId === 'page-newsletters') {
        renderNewsletters(filter);
    } else if (pageId === 'page-notices') {
        renderNotices(filter);
    }
}

// ===== Notifications =====
function initNotifications() {
    elements.notificationBtn.addEventListener('click', toggleNotificationPanel);
    document.getElementById('markAllRead').addEventListener('click', markAllAsRead);
}

function toggleNotificationPanel() {
    state.notificationPanelOpen = !state.notificationPanelOpen;
    elements.notificationPanel.classList.toggle('open', state.notificationPanelOpen);
    elements.overlay.classList.toggle('visible', state.notificationPanelOpen);
}

function closeNotificationPanel() {
    state.notificationPanelOpen = false;
    elements.notificationPanel.classList.remove('open');
    if (!state.sideNavOpen) {
        elements.overlay.classList.remove('visible');
    }
}

function markAllAsRead() {
    demoData.notifications.forEach(n => n.unread = false);
    renderNotificationPanel();
    updateNotificationBadge();
    showToast('All notifications marked as read', 'success');
}

function updateNotificationBadge() {
    const unreadCount = demoData.notifications.filter(n => n.unread).length;
    elements.notificationBadge.textContent = unreadCount;
    elements.notificationBadge.classList.toggle('hidden', unreadCount === 0);
}

function renderNotificationPanel() {
    const container = document.getElementById('notificationPanelContent');
    
    container.innerHTML = demoData.notifications.map(n => `
        <div class="notification-item ${n.unread ? 'unread' : ''}" data-id="${n.id}">
            <div class="notification-dot"></div>
            <div class="notification-text">
                <h4>${n.title}</h4>
                <p>${n.message}</p>
                <span class="time">${n.time}</span>
            </div>
        </div>
    `).join('');

    updateNotificationBadge();
}

// ===== Login =====
function initLogin() {
    elements.adminLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        closeSideNav();
        openLoginModal();
    });

    elements.loginModalClose.addEventListener('click', closeLoginModal);
    elements.loginModal.addEventListener('click', (e) => {
        if (e.target === elements.loginModal) {
            closeLoginModal();
        }
    });

    elements.loginForm.addEventListener('submit', handleLogin);
}

function openLoginModal() {
    elements.loginModal.classList.add('open');
}

function closeLoginModal() {
    elements.loginModal.classList.remove('open');
    elements.loginForm.reset();
    elements.loginError.textContent = '';
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Demo credentials
    if (username === 'Utting' && password === 'demo123') {
        state.isAdmin = true;
        closeLoginModal();
        showToast('Welcome to Admin Portal!', 'success');
        
        // Redirect to admin page
        window.location.href = 'admin/index.html';
    } else {
        elements.loginError.textContent = 'Invalid username or password';
        showToast('Login failed', 'error');
    }
}

// ===== Pages Initialization =====
function initPages() {
    // Calendar navigation
    document.getElementById('prevMonth').addEventListener('click', () => {
        state.currentMonth.setMonth(state.currentMonth.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        state.currentMonth.setMonth(state.currentMonth.getMonth() + 1);
        renderCalendar();
    });

    // Contacts search
    document.getElementById('contactsSearch').addEventListener('input', (e) => {
        renderContacts(e.target.value);
    });

    // Alerts filter
    document.getElementById('alertsFilter').addEventListener('change', (e) => {
        renderAlerts(e.target.value);
    });

    // Save subscriptions
    document.getElementById('saveSubscriptions').addEventListener('click', saveSubscriptions);
}

// ===== Render Functions =====
function renderAlerts(filter = 'all') {
    // Preview on home page
    const previewContainer = document.getElementById('alertsPreview');
    const previewAlerts = demoData.alerts.slice(0, 2);
    
    previewContainer.innerHTML = previewAlerts.map(alert => createAlertCard(alert)).join('');

    // Update badge
    document.getElementById('alertsBadge').textContent = demoData.alerts.length;

    // Full list on alerts page
    const listContainer = document.getElementById('alertsList');
    const filteredAlerts = filter === 'all' 
        ? demoData.alerts 
        : demoData.alerts.filter(a => a.type === filter);
    
    listContainer.innerHTML = filteredAlerts.map(alert => createAlertCard(alert, true)).join('');
}

function createAlertCard(alert, full = false) {
    const icons = {
        emergency: 'fa-exclamation-triangle',
        general: 'fa-info-circle',
        sport: 'fa-running',
        'performing-arts': 'fa-music'
    };

    return `
        <div class="alert-card ${alert.type}">
            <div class="alert-icon">
                <i class="fas ${icons[alert.type]}"></i>
            </div>
            <div class="alert-content">
                <h4>${alert.title}</h4>
                <p>${full ? alert.message : alert.message.substring(0, 60) + '...'}</p>
            </div>
            <span class="alert-time">${alert.time}</span>
        </div>
    `;
}

function renderEvents() {
    const container = document.getElementById('eventsPreview');
    const upcomingEvents = demoData.events.slice(0, 3);
    
    container.innerHTML = upcomingEvents.map(event => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `
            <div class="event-card">
                <div class="event-date">
                    <span class="day">${event.date.getDate()}</span>
                    <span class="month">${months[event.date.getMonth()]}</span>
                </div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>${event.date.toLocaleDateString('en-NZ', { weekday: 'long' })}</p>
                </div>
            </div>
        `;
    }).join('');
}

function renderNewsletters(filter = 'all') {
    const container = document.getElementById('newsletterList');
    const filtered = filter === 'all' 
        ? demoData.newsletters 
        : demoData.newsletters.filter(n => n.category === filter || n.category === 'all');
    
    container.innerHTML = filtered.map(newsletter => `
        <a href="${newsletter.url}" class="newsletter-item" target="_blank">
            <div class="newsletter-icon">
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="newsletter-info">
                <h4>${newsletter.title}</h4>
                <p>${newsletter.date}</p>
            </div>
            <div class="newsletter-action">
                <i class="fas fa-chevron-right"></i>
            </div>
        </a>
    `).join('');
}

function renderNotices(filter = 'all') {
    const container = document.getElementById('noticesList');
    const filtered = filter === 'all' 
        ? demoData.notices 
        : demoData.notices.filter(n => n.category === filter || n.category === 'all');
    
    container.innerHTML = filtered.map(notice => `
        <div class="notice-item">
            <h4>${notice.title}</h4>
            <p>${notice.content}</p>
            <div class="notice-meta">
                <span><i class="fas fa-user"></i> ${notice.author}</span>
            </div>
        </div>
    `).join('');
}

function renderContacts(search = '') {
    const container = document.getElementById('contactsList');
    const filtered = search 
        ? demoData.contacts.filter(c => 
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.role.toLowerCase().includes(search.toLowerCase())
          )
        : demoData.contacts;
    
    container.innerHTML = filtered.map(contact => {
        const initials = contact.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        return `
            <div class="contact-card">
                <div class="contact-avatar">${initials}</div>
                <div class="contact-info">
                    <h4>${contact.name}</h4>
                    <p>${contact.role}</p>
                </div>
                <div class="contact-actions">
                    <a href="tel:${contact.phone}" class="contact-action-btn">
                        <i class="fas fa-phone"></i>
                    </a>
                    <a href="mailto:${contact.email}" class="contact-action-btn">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function renderLinks() {
    const container = document.getElementById('linksGrid');
    
    container.innerHTML = demoData.links.map(link => `
        <a href="${link.url}" class="link-card" target="_blank">
            <div class="link-icon">
                <i class="fas ${link.icon}"></i>
            </div>
            <h4>${link.title}</h4>
        </a>
    `).join('');
}

function renderTermDates() {
    const container = document.getElementById('termList');
    const currentTerm = 1; // Would be calculated based on current date
    
    container.innerHTML = demoData.termDates.map(term => `
        <div class="term-card ${term.term === currentTerm ? 'current' : ''}">
            <div class="term-header">
                <h3>${term.title}</h3>
                <p>${term.weeks} weeks</p>
            </div>
            <div class="term-details">
                <div class="term-row">
                    <span>Start Date</span>
                    <span>${term.start}</span>
                </div>
                <div class="term-row">
                    <span>End Date</span>
                    <span>${term.end}</span>
                </div>
                ${term.holidays.length > 0 ? `
                    <div class="term-row">
                        <span>Holidays</span>
                        <span>${term.holidays.join(', ')}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function renderSubscriptions() {
    const container = document.getElementById('subscriptionsList');
    
    container.innerHTML = demoData.subscriptions.map(sub => `
        <div class="subscription-item">
            <div class="subscription-info">
                <h4>${sub.name}</h4>
                <p>${sub.description}</p>
            </div>
            <label class="toggle-switch">
                <input type="checkbox" data-id="${sub.id}" ${sub.enabled ? 'checked' : ''}>
                <span class="toggle-slider"></span>
            </label>
        </div>
    `).join('');
}

function saveSubscriptions() {
    const toggles = document.querySelectorAll('#subscriptionsList input[type="checkbox"]');
    toggles.forEach(toggle => {
        const sub = demoData.subscriptions.find(s => s.id === toggle.dataset.id);
        if (sub) {
            sub.enabled = toggle.checked;
        }
    });
    showToast('Subscription preferences saved!', 'success');
}

// ===== Calendar =====
function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const monthEl = document.getElementById('currentMonth');
    
    const year = state.currentMonth.getFullYear();
    const month = state.currentMonth.getMonth();
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    monthEl.textContent = `${months[month]} ${year}`;
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    
    let html = '';
    
    // Day headers
    days.forEach(day => {
        html += `<div class="calendar-header">${day}</div>`;
    });
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        html += `<div class="calendar-day other-month">${daysInPrevMonth - i}</div>`;
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = isCurrentMonth && today.getDate() === day;
        const hasEvent = demoData.events.some(e => 
            e.date.getFullYear() === year && 
            e.date.getMonth() === month && 
            e.date.getDate() === day
        );
        
        const classes = ['calendar-day'];
        if (isToday) classes.push('today');
        if (hasEvent) classes.push('has-event');
        
        html += `<div class="${classes.join(' ')}">${day}</div>`;
    }
    
    // Next month days
    const totalCells = 42;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let day = 1; day <= remainingCells; day++) {
        html += `<div class="calendar-day other-month">${day}</div>`;
    }
    
    grid.innerHTML = html;
    
    // Render events for this month
    const eventList = document.getElementById('eventList');
    const monthEvents = demoData.events.filter(e => 
        e.date.getFullYear() === year && e.date.getMonth() === month
    );
    
    eventList.innerHTML = monthEvents.map(event => `
        <div class="event-card">
            <div class="event-date">
                <span class="day">${event.date.getDate()}</span>
                <span class="month">${months[event.date.getMonth()].substring(0, 3)}</span>
            </div>
            <div class="event-details">
                <h4>${event.title}</h4>
                <p>${event.date.toLocaleDateString('en-NZ', { weekday: 'long' })}</p>
            </div>
        </div>
    `).join('') || '<p style="color: var(--mid-gray); text-align: center;">No events this month</p>';
}

// ===== Toast Notifications =====
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
