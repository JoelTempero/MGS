// ===== Data Storage Keys =====
const STORAGE_KEYS = {
    DEMO_DATA: 'mgs_demo_data',
    USER_PREFS: 'mgs_user_prefs',
    DEMO_BANNER_CLOSED: 'mgs_demo_banner_closed'
};

// ===== Default Demo Data (fallback) =====
const defaultDemoData = {
    alerts: [
        { id: 1, type: 'emergency', title: 'School Closure Tomorrow', message: 'Due to extreme weather warnings, school will be closed tomorrow (8 January). Please check emails for updates.', time: '2 hours ago', timestamp: new Date().toISOString() },
        { id: 2, type: 'sport', title: 'Swimming Sports Rescheduled', message: 'The Year 7-8 swimming sports have been moved to Friday 10th January due to pool maintenance.', time: '5 hours ago', timestamp: new Date().toISOString() },
        { id: 3, type: 'performing-arts', title: 'School Production Auditions', message: 'Auditions for the 2026 school production "The Sound of Music" will be held next week. Sign up at the Performing Arts office.', time: '1 day ago', timestamp: new Date().toISOString() },
        { id: 4, type: 'general', title: 'Uniform Shop Hours', message: 'The uniform shop will have extended hours (8am-5pm) from 27-31 January for back to school.', time: '2 days ago', timestamp: new Date().toISOString() }
    ],
    events: [
        { id: 1, title: 'Term 1 Begins', date: '2026-01-28', type: 'school' },
        { id: 2, title: 'Waitangi Day', date: '2026-02-06', type: 'holiday' },
        { id: 3, title: 'Senior College Meet the Teachers', date: '2026-02-12', type: 'meeting' },
        { id: 4, title: 'Swimming Sports', date: '2026-02-20', type: 'sport' },
        { id: 5, title: 'Primary School Picnic', date: '2026-02-27', type: 'event' }
    ],
    newsletters: [
        { id: 1, title: 'Term 4 Week 10 Newsletter', date: '13 Dec 2025', category: 'all', url: 'data/newsletters/placeholder.html' },
        { id: 2, title: 'Primary School Update', date: '10 Dec 2025', category: 'primary', url: 'data/newsletters/placeholder.html' },
        { id: 3, title: 'Senior College Careers Newsletter', date: '8 Dec 2025', category: 'senior', url: 'data/newsletters/placeholder.html' },
        { id: 4, title: 'Middle School Newsletter', date: '5 Dec 2025', category: 'middle', url: 'data/newsletters/placeholder.html' },
        { id: 5, title: 'Term 4 Week 9 Newsletter', date: '6 Dec 2025', category: 'all', url: 'data/newsletters/placeholder.html' }
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
        { term: 1, title: 'Term 1', start: 'Tuesday 28 January', end: 'Friday 17 April', weeks: 12, holidays: ['Waitangi Day - 6 February', 'Good Friday - 3 April', 'Easter Monday - 6 April'] },
        { term: 2, title: 'Term 2', start: 'Monday 4 May', end: 'Friday 10 July', weeks: 10, holidays: ["Queen's Birthday - 1 June"] },
        { term: 3, title: 'Term 3', start: 'Monday 27 July', end: 'Friday 25 September', weeks: 9, holidays: [] },
        { term: 4, title: 'Term 4', start: 'Monday 12 October', end: 'Friday 11 December', weeks: 9, holidays: ['Labour Day - 26 October'] }
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
    ],
    absenceReports: []
};

// ===== Demo Data (loaded from localStorage or defaults) =====
let demoData = loadDemoData();

// ===== Data Persistence Functions =====
function loadDemoData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEYS.DEMO_DATA);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Convert date strings back to Date objects for events
            if (parsed.events) {
                parsed.events = parsed.events.map(e => ({
                    ...e,
                    date: new Date(e.date)
                }));
            }
            return parsed;
        }
    } catch (e) {
        console.warn('Failed to load demo data from localStorage:', e);
    }

    // Return default data with proper Date objects
    const data = JSON.parse(JSON.stringify(defaultDemoData));
    data.events = data.events.map(e => ({
        ...e,
        date: new Date(e.date)
    }));
    return data;
}

function saveDemoData() {
    try {
        // Convert Date objects to strings for storage
        const dataToStore = JSON.parse(JSON.stringify(demoData));
        localStorage.setItem(STORAGE_KEYS.DEMO_DATA, JSON.stringify(dataToStore));
    } catch (e) {
        console.warn('Failed to save demo data to localStorage:', e);
    }
}

function resetDemoData() {
    localStorage.removeItem(STORAGE_KEYS.DEMO_DATA);
    demoData = loadDemoData();
    // Re-render all content
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
    showToast('Demo data has been reset', 'success');
}

// Expose data functions globally for admin use
window.MGSData = {
    get: () => demoData,
    save: saveDemoData,
    reset: resetDemoData,
    update: (key, value) => {
        if (demoData.hasOwnProperty(key)) {
            demoData[key] = value;
            saveDemoData();
            return true;
        }
        return false;
    },
    addItem: (key, item) => {
        if (demoData[key] && Array.isArray(demoData[key])) {
            const maxId = Math.max(0, ...demoData[key].map(i => i.id || 0));
            item.id = maxId + 1;
            demoData[key].push(item);
            saveDemoData();
            return item;
        }
        return null;
    },
    updateItem: (key, id, updates) => {
        if (demoData[key] && Array.isArray(demoData[key])) {
            const index = demoData[key].findIndex(i => i.id === id);
            if (index !== -1) {
                demoData[key][index] = { ...demoData[key][index], ...updates };
                saveDemoData();
                return demoData[key][index];
            }
        }
        return null;
    },
    deleteItem: (key, id) => {
        if (demoData[key] && Array.isArray(demoData[key])) {
            const index = demoData[key].findIndex(i => i.id === id);
            if (index !== -1) {
                demoData[key].splice(index, 1);
                saveDemoData();
                return true;
            }
        }
        return false;
    }
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
    registerServiceWorker();
});

// ===== Service Worker Registration =====
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('[App] Service Worker registered:', registration.scope);

                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New version available
                            showToast('App update available! Refresh to update.', 'info');
                        }
                    });
                });
            })
            .catch(error => {
                console.warn('[App] Service Worker registration failed:', error);
            });
    }

    // Offline detection
    initOfflineDetection();
}

// ===== Offline Detection =====
function initOfflineDetection() {
    // Create offline indicator
    const indicator = document.createElement('div');
    indicator.className = 'offline-indicator';
    indicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i> You are offline';
    document.body.appendChild(indicator);

    function updateOnlineStatus() {
        if (navigator.onLine) {
            indicator.classList.remove('visible');
        } else {
            indicator.classList.add('visible');
        }
    }

    window.addEventListener('online', () => {
        updateOnlineStatus();
        showToast('Back online!', 'success');
    });

    window.addEventListener('offline', () => {
        updateOnlineStatus();
    });

    // Initial check
    updateOnlineStatus();
}

function initApp() {
    // Initialize demo banner
    initDemoBanner();

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

    // Listen for ICS calendar data to load
    window.addEventListener('icsCalendarLoaded', (e) => {
        console.log('📅 ICS Calendar data received:', e.detail);

        // Re-render events and calendar with live data
        renderEvents();
        renderCalendar();

        // Show notification about data source
        if (e.detail.source === 'live' && e.detail.events.length > 0) {
            showToast(`Loaded ${e.detail.events.length} events from school calendar`, 'success');
        }
    });
}

// ===== Demo Banner =====
function initDemoBanner() {
    const banner = document.getElementById('demoBanner');
    const closeBtn = document.getElementById('closeDemoBanner');

    if (!banner) return;

    // Check if banner was previously closed
    const bannerClosed = localStorage.getItem(STORAGE_KEYS.DEMO_BANNER_CLOSED);

    if (bannerClosed) {
        banner.classList.add('hidden');
    } else {
        document.body.classList.add('demo-mode');
    }

    // Handle close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            banner.classList.add('hidden');
            document.body.classList.remove('demo-mode');
            localStorage.setItem(STORAGE_KEYS.DEMO_BANNER_CLOSED, 'true');
        });
    }
}

// Function to show demo banner again (useful for testing)
function showDemoBanner() {
    const banner = document.getElementById('demoBanner');
    if (banner) {
        banner.classList.remove('hidden');
        document.body.classList.add('demo-mode');
        localStorage.removeItem(STORAGE_KEYS.DEMO_BANNER_CLOSED);
    }
}

// ===== Greeting =====
function setGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingEl = document.getElementById('greetingText');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];

    let timeGreeting;
    if (hour < 12) {
        timeGreeting = 'Good Morning';
    } else if (hour < 17) {
        timeGreeting = 'Good Afternoon';
    } else {
        timeGreeting = 'Good Evening';
    }

    greetingEl.textContent = `${timeGreeting}`;

    // Also update the hero title to include day
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.textContent = `Happy ${dayName}!`;
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

    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(`page-${page}`);

    if (!targetPage || currentPage === targetPage) return;

    // Smooth page transition
    if (currentPage) {
        currentPage.classList.add('exiting');

        setTimeout(() => {
            currentPage.classList.remove('active', 'exiting');
            targetPage.classList.add('active');
        }, 200);
    } else {
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

    if (demoData.notifications.length === 0) {
        showEmptyState(container, 'notifications');
        updateNotificationBadge();
        return;
    }

    container.innerHTML = demoData.notifications.map(n => {
        // Use timestamp if available, otherwise use the time string
        const timeDisplay = n.timestamp
            ? formatTimestamp(n.timestamp)
            : `<span class="timestamp-relative">${n.time}</span>`;

        return `
            <div class="notification-item ${n.unread ? 'unread' : ''}" data-id="${n.id}">
                <div class="notification-dot"></div>
                <div class="notification-text">
                    <h4>${n.title}</h4>
                    <p>${n.message}</p>
                    <span class="time"><i class="far fa-clock"></i> ${timeDisplay}</span>
                </div>
            </div>
        `;
    }).join('');

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
    const saveSubsBtn = document.getElementById('saveSubscriptions');
    if (saveSubsBtn) {
        saveSubsBtn.addEventListener('click', saveSubscriptions);
    }

    // Initialize absence report form
    initAbsenceReportForm();
}

// ===== Absence/Late Report Form =====
function initAbsenceReportForm() {
    const form = document.getElementById('absenceReportForm');
    const dateInput = document.getElementById('absenceDate');
    const reportTypeRadios = document.querySelectorAll('input[name="reportType"]');
    const expectedTimeGroup = document.getElementById('expectedTimeGroup');

    if (!form) return;

    // Set default date to today
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
        dateInput.min = today; // Can't report past absences
    }

    // Toggle expected time field based on report type
    reportTypeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'late' && radio.checked) {
                expectedTimeGroup.style.display = 'block';
            } else if (radio.value === 'absent' && radio.checked) {
                expectedTimeGroup.style.display = 'none';
            }
        });
    });

    // Form submission
    form.addEventListener('submit', handleAbsenceReportSubmit);

    // Render existing reports
    renderMyAbsenceReports();
}

function handleAbsenceReportSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Validate required fields
    const reportType = formData.get('reportType');
    const studentName = formData.get('studentName')?.trim();
    const yearLevel = formData.get('yearLevel');
    const absenceDate = formData.get('absenceDate');
    const reason = formData.get('absenceReason');
    const contactPhone = formData.get('contactPhone')?.trim();

    if (!reportType || !studentName || !yearLevel || !absenceDate || !reason || !contactPhone) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    // Create the report object
    const report = {
        id: Date.now(),
        type: reportType, // 'absent' or 'late'
        studentName: studentName,
        yearLevel: yearLevel,
        absenceDate: absenceDate,
        expectedTime: reportType === 'late' ? formData.get('expectedTime') : null,
        reason: reason,
        details: formData.get('absenceDetails')?.trim() || '',
        contactPhone: contactPhone,
        status: 'pending', // pending | acknowledged | archived
        submittedAt: new Date().toISOString(),
        acknowledgedAt: null,
        acknowledgedBy: null,
        adminNotes: null
    };

    // Initialize absenceReports array if it doesn't exist
    if (!demoData.absenceReports) {
        demoData.absenceReports = [];
    }

    // Add to the beginning of the array (newest first)
    demoData.absenceReports.unshift(report);

    // Save to localStorage
    saveDemoData();

    // Show success message
    const typeLabel = reportType === 'late' ? 'late arrival' : 'absence';
    showToast(`${studentName}'s ${typeLabel} has been reported successfully!`, 'success');

    // Reset form
    form.reset();
    // Reset date to today
    const dateInput = document.getElementById('absenceDate');
    if (dateInput) {
        dateInput.value = new Date().toISOString().split('T')[0];
    }
    // Hide expected time group
    document.getElementById('expectedTimeGroup').style.display = 'none';

    // Re-render reports
    renderMyAbsenceReports();
}

function renderMyAbsenceReports() {
    const section = document.getElementById('myReportsSection');
    const container = document.getElementById('myReportsList');

    if (!section || !container) return;

    // Get user's reports (in demo, we show all reports as if they're the user's)
    const reports = demoData.absenceReports || [];

    if (reports.length === 0) {
        section.style.display = 'none';
        return;
    }

    section.style.display = 'block';

    // Show last 5 reports
    const recentReports = reports.slice(0, 5);

    container.innerHTML = recentReports.map(report => {
        const statusClass = report.status === 'acknowledged' ? 'acknowledged' :
                           report.status === 'archived' ? 'archived' : 'pending';
        const statusLabel = report.status === 'acknowledged' ? 'Acknowledged' :
                           report.status === 'archived' ? 'Archived' : 'Pending';
        const typeIcon = report.type === 'late' ? 'fa-clock' : 'fa-user-times';
        const typeLabel = report.type === 'late' ? 'Late' : 'Absent';
        const dateFormatted = new Date(report.absenceDate).toLocaleDateString('en-NZ', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });

        return `
            <div class="report-card ${statusClass}">
                <div class="report-type-icon ${report.type}">
                    <i class="fas ${typeIcon}"></i>
                </div>
                <div class="report-info">
                    <h5>${report.studentName}</h5>
                    <p>${typeLabel} - ${dateFormatted}</p>
                    <span class="report-reason">${report.reason}</span>
                </div>
                <div class="report-status">
                    <span class="status-badge ${statusClass}">${statusLabel}</span>
                </div>
            </div>
        `;
    }).join('');
}

// ===== Render Functions =====
function renderAlerts(filter = 'all') {
    // Preview on home page
    const previewContainer = document.getElementById('alertsPreview');
    const previewAlerts = demoData.alerts.slice(0, 2);

    if (previewAlerts.length === 0) {
        showEmptyState(previewContainer, 'alerts');
    } else {
        previewContainer.innerHTML = previewAlerts.map(alert => createAlertCard(alert)).join('');
    }

    // Update badge
    const badge = document.getElementById('alertsBadge');
    if (badge) {
        badge.textContent = demoData.alerts.length;
        badge.style.display = demoData.alerts.length > 0 ? 'flex' : 'none';
    }

    // Full list on alerts page
    const listContainer = document.getElementById('alertsList');
    const filteredAlerts = filter === 'all'
        ? demoData.alerts
        : demoData.alerts.filter(a => a.type === filter);

    if (filteredAlerts.length === 0) {
        showEmptyState(listContainer, 'alerts');
    } else {
        listContainer.innerHTML = filteredAlerts.map(alert => createAlertCard(alert, true)).join('');
    }
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
    const sourceEl = document.getElementById('calendarSource');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Try to get live ICS events first, fall back to demo data
    let upcomingEvents;
    let isLive = false;
    
    if (window.ICSCalendar) {
        const cache = window.ICSCalendar.getCache();
        if (cache.events.length > 0 || cache.days.length > 0) {
            upcomingEvents = window.ICSCalendar.getUpcomingEvents(30).slice(0, 4);
            isLive = true;
        }
    }
    
    // Fallback to demo data if no ICS events
    if (!upcomingEvents || upcomingEvents.length === 0) {
        upcomingEvents = demoData.events.slice(0, 4);
        isLive = false;
    }
    
    if (upcomingEvents.length === 0) {
        showEmptyState(container, 'events');
        return;
    }

    container.innerHTML = upcomingEvents.map(event => {
        const eventDate = new Date(event.date);
        const eventType = event.type || 'school';
        const style = window.ICSCalendar ?
            window.ICSCalendar.getEventStyle(eventType) :
            getEventStyle(eventType);

        return `
            <div class="event-card" data-type="${eventType}">
                <div class="event-date">
                    <span class="day">${eventDate.getDate()}</span>
                    <span class="month">${months[eventDate.getMonth()]}</span>
                </div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>${eventDate.toLocaleDateString('en-NZ', { weekday: 'long' })}${event.location ? ' • ' + event.location : ''}</p>
                    <span class="event-type-badge ${eventType}">${formatEventType(eventType)}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Get event style for demo data
function getEventStyle(type) {
    const styles = {
        school: { icon: 'fa-school', color: '#005a5a' },
        holiday: { icon: 'fa-umbrella-beach', color: '#c8102e' },
        sport: { icon: 'fa-running', color: '#28a745' },
        meeting: { icon: 'fa-users', color: '#17a2b8' },
        event: { icon: 'fa-star', color: '#9c27b0' },
        production: { icon: 'fa-theater-masks', color: '#ff9800' }
    };
    return styles[type] || styles.school;
}

// Format event type for display
function formatEventType(type) {
    const labels = {
        school: 'School',
        holiday: 'Holiday',
        sport: 'Sport',
        meeting: 'Meeting',
        event: 'Event',
        production: 'Production'
    };
    return labels[type] || type;
    
    // Show data source indicator
    if (sourceEl) {
        if (isLive) {
            sourceEl.innerHTML = `<span class="live-dot"></span> Live`;
            sourceEl.style.color = '#2e7d32';
        } else {
            sourceEl.innerHTML = `<i class="fas fa-clock" style="font-size: 10px;"></i> Demo`;
            sourceEl.style.color = '#888';
        }
    }
}

function renderNewsletters(filter = 'all') {
    const container = document.getElementById('newsletterList');
    const filtered = filter === 'all'
        ? demoData.newsletters
        : demoData.newsletters.filter(n => n.category === filter || n.category === 'all');

    if (filtered.length === 0) {
        showEmptyState(container, 'newsletters');
        return;
    }

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

    if (filtered.length === 0) {
        showEmptyState(container, 'notices');
        return;
    }

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

    if (filtered.length === 0) {
        showEmptyState(container, search ? 'search' : 'contacts');
        return;
    }

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
    const permissionStatus = document.getElementById('notificationPermission');
    
    // Check if push notifications are supported
    const isSupported = window.MGSPush && window.MGSPush.isSupported();
    const permission = window.MGSPush ? window.MGSPush.getPermission() : 'unsupported';
    
    // Show permission status
    if (permissionStatus) {
        if (!isSupported) {
            permissionStatus.innerHTML = `
                <div class="permission-banner unsupported">
                    <i class="fas fa-exclamation-circle"></i>
                    <div>
                        <strong>Push notifications not supported</strong>
                        <p>Your browser doesn't support push notifications. Try using Chrome or Edge.</p>
                    </div>
                </div>
            `;
        } else if (permission === 'default') {
            permissionStatus.innerHTML = `
                <div class="permission-banner prompt">
                    <i class="fas fa-bell"></i>
                    <div>
                        <strong>Enable Push Notifications</strong>
                        <p>Get instant alerts for school updates, sports results, and emergencies.</p>
                    </div>
                    <button class="enable-notifications-btn" onclick="enablePushNotifications()">
                        Enable
                    </button>
                </div>
            `;
        } else if (permission === 'granted') {
            permissionStatus.innerHTML = `
                <div class="permission-banner enabled">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <strong>Notifications Enabled</strong>
                        <p>You'll receive push notifications for your subscribed topics.</p>
                    </div>
                    <button class="test-notification-btn" onclick="testNotification()">
                        Test
                    </button>
                </div>
            `;
        } else if (permission === 'denied') {
            permissionStatus.innerHTML = `
                <div class="permission-banner denied">
                    <i class="fas fa-times-circle"></i>
                    <div>
                        <strong>Notifications Blocked</strong>
                        <p>Please enable notifications in your browser settings to receive alerts.</p>
                    </div>
                </div>
            `;
        }
    }
    
    // Render subscription toggles using push notification topics
    const topics = window.MGSPush ? window.MGSPush.topics : {};
    
    // Use real topics if available, otherwise fall back to demo data
    if (Object.keys(topics).length > 0) {
        container.innerHTML = Object.entries(topics).map(([id, topic]) => {
            const isSubscribed = window.MGSPush ? window.MGSPush.isSubscribed(id) : false;
            const isRequired = topic.required;
            const isDisabled = permission !== 'granted' || isRequired;
            
            return `
                <div class="subscription-item ${isRequired ? 'required' : ''}">
                    <div class="subscription-icon" style="background: ${topic.color}20; color: ${topic.color};">
                        <i class="fas ${topic.icon}"></i>
                    </div>
                    <div class="subscription-info">
                        <h4>${topic.name} ${isRequired ? '<span class="required-badge">Required</span>' : ''}</h4>
                        <p>${topic.description}</p>
                    </div>
                    <label class="toggle-switch ${isDisabled && !isRequired ? 'disabled' : ''}">
                        <input type="checkbox" 
                               data-topic="${id}" 
                               ${isSubscribed || isRequired ? 'checked' : ''} 
                               ${isRequired ? 'disabled' : ''}
                               onchange="handleSubscriptionChange('${id}', this.checked)">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            `;
        }).join('');
    } else {
        // Fallback to demo data
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
}

async function enablePushNotifications() {
    if (!window.MGSPush) {
        showToast('Push notifications not available', 'error');
        return;
    }
    
    showToast('Requesting permission...', 'info');
    
    try {
        // Initialize push module
        await window.MGSPush.init();
        
        // Request permission
        const token = await window.MGSPush.requestPermission();
        
        if (token) {
            showToast('Push notifications enabled! 🎉', 'success');
            
            // Setup foreground message handler
            window.MGSPush.setupForegroundHandler();
            
            // Re-render to show updated state
            renderSubscriptions();
        } else {
            showToast('Permission was denied', 'error');
            renderSubscriptions();
        }
    } catch (error) {
        console.error('Failed to enable notifications:', error);
        showToast('Failed to enable notifications', 'error');
    }
}

async function handleSubscriptionChange(topic, enabled) {
    if (!window.MGSPush) return;
    
    try {
        if (enabled) {
            await window.MGSPush.subscribe(topic);
            showToast(`Subscribed to ${window.MGSPush.topics[topic]?.name || topic}`, 'success');
        } else {
            await window.MGSPush.unsubscribe(topic);
            showToast(`Unsubscribed from ${window.MGSPush.topics[topic]?.name || topic}`, 'info');
        }
    } catch (error) {
        console.error('Subscription change failed:', error);
        showToast('Failed to update subscription', 'error');
        // Revert the toggle
        renderSubscriptions();
    }
}

function testNotification() {
    if (window.MGSPush) {
        window.MGSPush.test();
        showToast('Test notification sent!', 'success');
    }
}

function saveSubscriptions() {
    // Gather subscription states from checkboxes
    const checkboxes = document.querySelectorAll('#subscriptionsList input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const topicId = checkbox.dataset.topic || checkbox.dataset.id;
        if (topicId) {
            const sub = demoData.subscriptions.find(s => s.id === topicId);
            if (sub) {
                sub.enabled = checkbox.checked;
            }
        }
    });

    // Save to localStorage
    saveDemoData();

    // Also save to user preferences
    const prefs = {
        subscriptions: demoData.subscriptions.reduce((acc, sub) => {
            acc[sub.id] = sub.enabled;
            return acc;
        }, {})
    };
    localStorage.setItem(STORAGE_KEYS.USER_PREFS, JSON.stringify(prefs));

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
    
    // Get events for this month (ICS or demo)
    let monthEvents;
    if (window.ICSCalendar) {
        monthEvents = window.ICSCalendar.getEventsForMonth(year, month);
    } else {
        monthEvents = demoData.events.filter(e => 
            e.date.getFullYear() === year && e.date.getMonth() === month
        );
    }
    
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

        // Check for events on this day and get their types
        let dayEvents = [];
        if (window.ICSCalendar) {
            const hasEvent = window.ICSCalendar.dateHasEvents(year, month, day);
            if (hasEvent) {
                dayEvents = window.ICSCalendar.getEventsForDate(new Date(year, month, day)) || [];
            }
        } else {
            dayEvents = demoData.events.filter(e =>
                e.date.getFullYear() === year &&
                e.date.getMonth() === month &&
                e.date.getDate() === day
            );
        }

        const hasEvent = dayEvents.length > 0;
        const hasMultiple = dayEvents.length > 1;
        const eventType = dayEvents[0]?.type || 'school';

        const classes = ['calendar-day'];
        if (isToday) classes.push('today');
        if (hasEvent) classes.push('has-event');
        if (hasMultiple) classes.push('has-multiple-events');

        const dataAttrs = `data-date="${year}-${month+1}-${day}"${hasEvent ? ` data-event-type="${eventType}"` : ''}`;
        html += `<div class="${classes.join(' ')}" ${dataAttrs}>${day}</div>`;
    }
    
    // Next month days
    const totalCells = 42;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let day = 1; day <= remainingCells; day++) {
        html += `<div class="calendar-day other-month">${day}</div>`;
    }
    
    grid.innerHTML = html;
    
    // Add click handlers to days
    grid.querySelectorAll('.calendar-day:not(.other-month)').forEach(dayEl => {
        dayEl.addEventListener('click', () => {
            // Remove selected from all days
            grid.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));

            // Add selected to clicked day
            dayEl.classList.add('selected');

            const dateStr = dayEl.dataset.date;
            if (dateStr) {
                showDayEvents(dateStr);
            }
        });
    });
    
    // Render events list for this month
    renderMonthEventsList(monthEvents, months, month);
}

function renderMonthEventsList(monthEvents, months, currentMonth) {
    const eventList = document.getElementById('eventList');
    
    // Sort by date
    monthEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    if (monthEvents.length === 0) {
        eventList.innerHTML = '<p style="color: var(--mid-gray); text-align: center; padding: 20px;">No events this month</p>';
        return;
    }
    
    eventList.innerHTML = monthEvents.map(event => {
        const eventDate = new Date(event.date);
        const eventType = event.type || 'school';
        const style = window.ICSCalendar ?
            window.ICSCalendar.getEventStyle(eventType) :
            getEventStyle(eventType);

        return `
            <div class="event-card" data-type="${eventType}">
                <div class="event-date">
                    <span class="day">${eventDate.getDate()}</span>
                    <span class="month">${months[eventDate.getMonth()].substring(0, 3)}</span>
                </div>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>
                        <i class="fas ${style.icon}" style="color: ${style.color}; margin-right: 6px;"></i>
                        ${eventDate.toLocaleDateString('en-NZ', { weekday: 'long' })}
                        ${event.location ? ' • ' + event.location : ''}
                    </p>
                    <span class="event-type-badge ${eventType}">${formatEventType(eventType)}</span>
                </div>
            </div>
        `;
    }).join('');
}

function showDayEvents(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    let dayEvents;
    if (window.ICSCalendar) {
        dayEvents = window.ICSCalendar.getEventsForDate(date);
    } else {
        dayEvents = demoData.events.filter(e => {
            const d = new Date(e.date);
            return d.getFullYear() === year && 
                   d.getMonth() === month - 1 && 
                   d.getDate() === day;
        });
    }
    
    if (dayEvents.length === 0) {
        showToast(`No events on ${date.toLocaleDateString('en-NZ', { weekday: 'long', month: 'long', day: 'numeric' })}`, 'info');
        return;
    }
    
    // Create modal for day events
    const modal = document.createElement('div');
    modal.className = 'day-events-modal';
    modal.innerHTML = `
        <div class="day-events-content">
            <div class="day-events-header">
                <h3>${date.toLocaleDateString('en-NZ', { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
                <button class="close-day-events">&times;</button>
            </div>
            <div class="day-events-list">
                ${dayEvents.map(event => {
                    const style = window.ICSCalendar ? 
                        window.ICSCalendar.getEventStyle(event.type) : 
                        { icon: 'fa-calendar', color: '#005a5a' };
                    return `
                        <div class="day-event-item" style="border-left: 3px solid ${style.color};">
                            <i class="fas ${style.icon}" style="color: ${style.color};"></i>
                            <div>
                                <strong>${event.title}</strong>
                                ${event.location ? `<p>📍 ${event.location}</p>` : ''}
                                ${event.description ? `<p>${event.description}</p>` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close handlers
    modal.querySelector('.close-day-events').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ===== Loading States =====
function showLoadingSkeleton(container, type = 'card', count = 3) {
    let skeletonHTML = '';

    for (let i = 0; i < count; i++) {
        switch(type) {
            case 'alert':
                skeletonHTML += `
                    <div class="skeleton-card" style="display: flex; gap: var(--space-md); margin-bottom: var(--space-sm);">
                        <div class="skeleton skeleton-avatar" style="width: 40px; height: 40px; border-radius: var(--radius-sm);"></div>
                        <div style="flex: 1;">
                            <div class="skeleton skeleton-title"></div>
                            <div class="skeleton skeleton-text"></div>
                        </div>
                    </div>
                `;
                break;
            case 'event':
                skeletonHTML += `
                    <div class="skeleton-card" style="display: flex; gap: var(--space-md); margin-bottom: var(--space-sm);">
                        <div class="skeleton" style="width: 50px; height: 50px; border-radius: var(--radius-sm);"></div>
                        <div style="flex: 1;">
                            <div class="skeleton skeleton-title"></div>
                            <div class="skeleton skeleton-text short"></div>
                        </div>
                    </div>
                `;
                break;
            case 'newsletter':
                skeletonHTML += `
                    <div class="skeleton-card" style="display: flex; gap: var(--space-md); margin-bottom: var(--space-md);">
                        <div class="skeleton" style="width: 48px; height: 48px; border-radius: var(--radius-sm);"></div>
                        <div style="flex: 1;">
                            <div class="skeleton skeleton-title"></div>
                            <div class="skeleton skeleton-text short"></div>
                        </div>
                    </div>
                `;
                break;
            case 'contact':
                skeletonHTML += `
                    <div class="skeleton-card" style="display: flex; gap: var(--space-md); margin-bottom: var(--space-md);">
                        <div class="skeleton skeleton-avatar"></div>
                        <div style="flex: 1;">
                            <div class="skeleton skeleton-title"></div>
                            <div class="skeleton skeleton-text short"></div>
                        </div>
                    </div>
                `;
                break;
            default:
                skeletonHTML += `
                    <div class="skeleton-card" style="margin-bottom: var(--space-sm);">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-text"></div>
                        <div class="skeleton skeleton-text short"></div>
                    </div>
                `;
        }
    }

    container.innerHTML = skeletonHTML;
}

function showLoadingSpinner(container) {
    container.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
        </div>
    `;
}

// ===== Empty States =====
function showEmptyState(container, type) {
    const emptyStates = {
        alerts: {
            icon: 'fa-bell-slash',
            title: 'No Alerts',
            message: 'There are no school alerts at the moment. Check back later for updates.'
        },
        events: {
            icon: 'fa-calendar-times',
            title: 'No Events',
            message: 'No upcoming events scheduled. New events will appear here.'
        },
        newsletters: {
            icon: 'fa-newspaper',
            title: 'No Newsletters',
            message: 'No newsletters available for this category.'
        },
        notices: {
            icon: 'fa-bullhorn',
            title: 'No Notices',
            message: 'No daily notices for today. Check back tomorrow.'
        },
        contacts: {
            icon: 'fa-address-book',
            title: 'No Contacts Found',
            message: 'No contacts match your search. Try a different search term.'
        },
        notifications: {
            icon: 'fa-inbox',
            title: 'No Notifications',
            message: 'You\'re all caught up! New notifications will appear here.'
        },
        search: {
            icon: 'fa-search',
            title: 'No Results',
            message: 'No items match your search criteria.'
        }
    };

    const state = emptyStates[type] || emptyStates.search;

    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">
                <i class="fas ${state.icon}"></i>
            </div>
            <h3>${state.title}</h3>
            <p>${state.message}</p>
        </div>
    `;
}

// ===== Error Handling =====
function showError(container, message = 'Something went wrong', canRetry = true) {
    container.innerHTML = `
        <div class="error-state">
            <div class="error-state-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h4>Oops!</h4>
            <p>${message}</p>
            ${canRetry ? '<button class="btn" onclick="location.reload()"><i class="fas fa-redo"></i> Try Again</button>' : ''}
        </div>
    `;
}

function showInlineError(container, message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    container.prepend(errorEl);

    // Auto-remove after 5 seconds
    setTimeout(() => errorEl.remove(), 5000);
}

// Global error handler
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Don't show error UI for minor script errors
});

// ===== Timestamp Formatting =====
function formatRelativeTime(date) {
    const now = new Date();
    const then = date instanceof Date ? date : new Date(date);
    const diffMs = now - then;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);

    if (diffSecs < 60) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffWeeks < 4) return `${diffWeeks}w ago`;

    return then.toLocaleDateString('en-NZ', {
        day: 'numeric',
        month: 'short'
    });
}

function formatAbsoluteTime(date) {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('en-NZ', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: '2-digit'
    });
}

function formatTimestamp(timestamp) {
    const relative = formatRelativeTime(timestamp);
    const absolute = formatAbsoluteTime(timestamp);
    return `<span class="timestamp-relative">${relative}</span><span class="timestamp-absolute"> · ${absolute}</span>`;
}

// ===== Page Transitions =====
function navigateToPage(pageName) {
    const currentPage = document.querySelector('.page.active');
    const newPage = document.getElementById(pageName);

    if (!newPage || currentPage === newPage) return;

    // Exit animation for current page
    if (currentPage) {
        currentPage.classList.add('exiting');
        currentPage.classList.remove('active');

        setTimeout(() => {
            currentPage.classList.remove('exiting');
        }, 200);
    }

    // Enter animation for new page
    setTimeout(() => {
        newPage.classList.add('active');

        // Update state
        state.currentPage = pageName;

        // Close side nav if open
        closeSideNav();

        // Update active nav link
        document.querySelectorAll('.side-nav-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });
    }, currentPage ? 150 : 0);
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
