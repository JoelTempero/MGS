// ===== Shared Data Storage (synced with main app) =====
const STORAGE_KEY = 'mgs_demo_data';

// Default admin data (used if no shared data exists)
const defaultAdminData = {
    alerts: [
        { id: 1, type: 'emergency', title: 'School Closure Tomorrow', message: 'Due to extreme weather warnings, school will be closed tomorrow.', time: '2 hours ago', status: 'active', date: '7 Jan 2026' },
        { id: 2, type: 'sport', title: 'Swimming Sports Rescheduled', message: 'Year 7-8 swimming sports moved to Friday 10th January.', time: '5 hours ago', status: 'active', date: '7 Jan 2026' },
        { id: 3, type: 'performing-arts', title: 'School Production Auditions', message: 'Auditions for The Sound of Music next week.', time: '1 day ago', status: 'active', date: '6 Jan 2026' },
        { id: 4, type: 'general', title: 'Uniform Shop Hours', message: 'Extended hours 8am-5pm from 27-31 January.', time: '2 days ago', status: 'active', date: '5 Jan 2026' }
    ],
    newsletters: [
        { id: 1, title: 'Term 4 Week 10 Newsletter', category: 'all', date: '13 Dec 2025', downloads: 432, url: 'data/newsletters/placeholder.html' },
        { id: 2, title: 'Primary School Update', category: 'primary', date: '10 Dec 2025', downloads: 189, url: 'data/newsletters/placeholder.html' },
        { id: 3, title: 'Senior College Careers Newsletter', category: 'senior', date: '8 Dec 2025', downloads: 156, url: 'data/newsletters/placeholder.html' },
        { id: 4, title: 'Middle School Newsletter', category: 'middle', date: '5 Dec 2025', downloads: 201, url: 'data/newsletters/placeholder.html' },
        { id: 5, title: 'Term 4 Week 9 Newsletter', category: 'all', date: '6 Dec 2025', downloads: 398, url: 'data/newsletters/placeholder.html' }
    ],
    notices: [
        { id: 1, title: 'Welcome Back!', content: 'Welcome back to all students and families for 2026. We hope you had a restful break.', category: 'all', author: 'Principal', status: 'active' },
        { id: 2, title: 'New Student Orientation', content: 'All new Year 7 students please meet in the auditorium at 8:30am on Monday.', category: 'middle', author: 'Year 7 Dean', status: 'active' },
        { id: 3, title: 'Senior College Assembly', content: 'Senior College assembly will be held in the Grange Theatre at 9:00am on Tuesday.', category: 'senior', author: 'Head of Senior College', status: 'active' },
        { id: 4, title: 'Library Books Due', content: 'All library books from last year must be returned by Friday 31st January.', category: 'all', author: 'Librarian', status: 'active' }
    ],
    contacts: [
        { id: 1, name: 'Main Office', role: 'General Enquiries', phone: '+64 3 348 9826', email: 'office@middleton.school.nz' },
        { id: 2, name: 'Absences', role: 'Report Absences', phone: '+64 3 348 9826', email: 'absences@middleton.school.nz' },
        { id: 3, name: 'Mike Vannoort', role: 'Principal', phone: '+64 3 348 9826', email: 'principal@middleton.school.nz' },
        { id: 4, name: 'Christine Buckley', role: 'Head of Primary', phone: '+64 3 348 9826', email: 'primary@middleton.school.nz' },
        { id: 5, name: 'Tony Kendrew', role: 'Head of Middle School', phone: '+64 3 348 9826', email: 'middle@middleton.school.nz' },
        { id: 6, name: 'Shane McConnell', role: 'Head of Senior College', phone: '+64 3 348 9826', email: 'senior@middleton.school.nz' }
    ],
    links: [
        { id: 1, title: 'Parent Portal', icon: 'fa-user-circle', url: 'https://middleton.school.kiwi/' },
        { id: 2, title: 'Student Portal', icon: 'fa-graduation-cap', url: 'https://middletonschoolnz.sharepoint.com/teams/home' },
        { id: 3, title: 'KINDO', icon: 'fa-shopping-cart', url: 'https://shop.tgcl.co.nz/' },
        { id: 4, title: 'School Website', icon: 'fa-globe', url: 'https://www.middleton.school.nz/' },
        { id: 5, title: 'Facebook', icon: 'fa-facebook', url: 'https://www.facebook.com/Middletongrangeschool/' },
        { id: 6, title: 'The Fridge Radio', icon: 'fa-podcast', url: 'https://www.middleton.school.nz/thefridge/' },
        { id: 7, title: 'Library', icon: 'fa-book', url: 'https://aiscloud.nz/MDD00/' },
        { id: 8, title: 'Grange Theatre', icon: 'fa-theater-masks', url: 'https://thegrangetheatre.nz/' }
    ],
    termDates: [
        { term: 1, title: 'Term 1', start: 'Tuesday 28 January', end: 'Friday 17 April', weeks: 12, holidays: ['Waitangi Day - 6 February', 'Good Friday - 3 April', 'Easter Monday - 6 April'] },
        { term: 2, title: 'Term 2', start: 'Monday 4 May', end: 'Friday 10 July', weeks: 10, holidays: ["Queen's Birthday - 1 June"] },
        { term: 3, title: 'Term 3', start: 'Monday 27 July', end: 'Friday 25 September', weeks: 9, holidays: [] },
        { term: 4, title: 'Term 4', start: 'Monday 12 October', end: 'Friday 11 December', weeks: 9, holidays: ['Labour Day - 26 October'] }
    ],
    notifications: [],
    subscriptions: [],
    events: [],
    absenceReports: [
        {
            id: 1,
            type: 'absent',
            studentName: 'Emma Thompson',
            yearLevel: 'Year 8',
            absenceDate: new Date().toISOString().split('T')[0],
            expectedTime: null,
            reason: 'Illness',
            details: 'High temperature and sore throat',
            contactPhone: '021 555 1234',
            status: 'pending',
            submittedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
            acknowledgedAt: null,
            acknowledgedBy: null,
            adminNotes: null
        },
        {
            id: 2,
            type: 'late',
            studentName: 'James Wilson',
            yearLevel: 'Year 10',
            absenceDate: new Date().toISOString().split('T')[0],
            expectedTime: '10:30',
            reason: 'Medical Appointment',
            details: 'Dentist appointment, will arrive after morning tea',
            contactPhone: '027 888 9999',
            status: 'pending',
            submittedAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
            acknowledgedAt: null,
            acknowledgedBy: null,
            adminNotes: null
        },
        {
            id: 3,
            type: 'absent',
            studentName: 'Sophie Chen',
            yearLevel: 'Year 5',
            absenceDate: new Date().toISOString().split('T')[0],
            expectedTime: null,
            reason: 'Family Emergency',
            details: '',
            contactPhone: '022 333 4444',
            status: 'acknowledged',
            submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
            acknowledgedAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
            acknowledgedBy: 'Admin User',
            adminNotes: null
        },
        {
            id: 4,
            type: 'absent',
            studentName: 'Oliver Brown',
            yearLevel: 'Year 12',
            absenceDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString().split('T')[0],
            expectedTime: null,
            reason: 'Illness',
            details: 'Cold symptoms',
            contactPhone: '021 777 6666',
            status: 'archived',
            submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
            acknowledgedAt: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(),
            acknowledgedBy: 'Admin User',
            adminNotes: 'Parent called to follow up'
        },
        {
            id: 5,
            type: 'late',
            studentName: 'Mia Anderson',
            yearLevel: 'Year 3',
            absenceDate: new Date().toISOString().split('T')[0],
            expectedTime: '09:15',
            reason: 'Other',
            details: 'Car trouble on the way to school',
            contactPhone: '027 111 2222',
            status: 'pending',
            submittedAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
            acknowledgedAt: null,
            acknowledgedBy: null,
            adminNotes: null
        }
    ]
};

// Load data from localStorage (shared with main app)
function loadAdminData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Merge with defaults to ensure all keys exist
            return { ...defaultAdminData, ...parsed };
        }
    } catch (e) {
        console.warn('Failed to load shared data:', e);
    }
    return JSON.parse(JSON.stringify(defaultAdminData));
}

// Save data to localStorage (shared with main app)
function saveAdminData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(adminData));
        console.log('Data saved to localStorage');
    } catch (e) {
        console.warn('Failed to save data:', e);
    }
}

// Initialize admin data from shared storage
let adminData = loadAdminData();

// ===== DOM Elements =====
const elements = {
    sidebar: document.getElementById('sidebar'),
    menuToggle: document.getElementById('menuToggle'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    modalClose: document.getElementById('modalClose'),
    modalCancel: document.getElementById('modalCancel'),
    modalSave: document.getElementById('modalSave'),
    toastContainer: document.getElementById('toastContainer')
};

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModals();
    renderDashboard();
    renderAllTables();
});

// ===== Navigation =====
function initNavigation() {
    // Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateToSection(section);
        });
    });

    // View all links
    document.querySelectorAll('.view-all').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateToSection(section);
        });
    });

    // Mobile menu toggle
    elements.menuToggle.addEventListener('click', () => {
        elements.sidebar.classList.toggle('open');
    });

    // Quick action buttons
    document.querySelectorAll('.quick-action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            handleQuickAction(action);
        });
    });
}

function navigateToSection(section) {
    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-section="${section}"]`)?.classList.add('active');

    // Update section
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(`section-${section}`)?.classList.add('active');

    // Close mobile menu
    elements.sidebar.classList.remove('open');
}

function handleQuickAction(action) {
    switch(action) {
        case 'new-alert':
            openModal('New Alert', getAlertForm());
            break;
        case 'new-newsletter':
            openModal('Upload Newsletter', getNewsletterForm());
            break;
        case 'new-notice':
            openModal('New Notice', getNoticeForm());
            break;
        case 'send-notification':
            openModal('Send Push Notification', getNotificationForm());
            break;
    }
}

// ===== Modal Functions =====
function initModals() {
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalCancel.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
    });

    // New buttons
    document.getElementById('newAlertBtn')?.addEventListener('click', () => {
        openModal('New Alert', getAlertForm());
    });
    document.getElementById('newNewsletterBtn')?.addEventListener('click', () => {
        openModal('Upload Newsletter', getNewsletterForm());
    });
    document.getElementById('newNoticeBtn')?.addEventListener('click', () => {
        openModal('New Notice', getNoticeForm());
    });
    document.getElementById('newContactBtn')?.addEventListener('click', () => {
        openModal('Add Contact', getContactForm());
    });
    document.getElementById('newLinkBtn')?.addEventListener('click', () => {
        openModal('Add Link', getLinkForm());
    });
}

// Current edit context
let currentEditContext = { type: null, id: null };

function openModal(title, content, editType = null, editId = null) {
    elements.modalTitle.textContent = title;
    elements.modalBody.innerHTML = content;
    elements.modal.classList.add('open');
    currentEditContext = { type: editType, id: editId };

    // Reset modal buttons to default state
    elements.modalSave.style.display = 'inline-flex';
    elements.modalCancel.textContent = 'Cancel';

    // Setup save handler
    elements.modalSave.onclick = () => handleModalSave();
}

function handleModalSave() {
    const form = elements.modalBody.querySelector('form');
    if (!form) {
        closeModal();
        return;
    }

    const formData = new FormData(form);
    const data = {};

    // Get all form inputs
    form.querySelectorAll('input, select, textarea').forEach(input => {
        if (input.type === 'checkbox') {
            data[input.name || input.id || 'checkbox'] = input.checked;
        } else if (input.type === 'file') {
            // Handle file input - in demo just use placeholder
            data.url = '../data/newsletters/placeholder.html';
        } else {
            const key = input.name || input.placeholder?.toLowerCase().replace(/\s+/g, '_') || input.id;
            if (key) data[key] = input.value;
        }
    });

    // Determine what type of item we're saving
    const title = elements.modalTitle.textContent;

    if (title.includes('Alert')) {
        saveAlert(data, currentEditContext.id);
    } else if (title.includes('Newsletter')) {
        saveNewsletter(data, currentEditContext.id);
    } else if (title.includes('Notice')) {
        saveNotice(data, currentEditContext.id);
    } else if (title.includes('Contact')) {
        saveContact(data, currentEditContext.id);
    } else if (title.includes('Link')) {
        saveLink(data, currentEditContext.id);
    } else if (title.includes('Notification')) {
        // Push notification - handle separately
        showToast('Notification sent!', 'success');
    }

    closeModal();
}

// ===== CRUD Functions =====
function saveAlert(data, editId = null) {
    const alert = {
        id: editId || getNextId(adminData.alerts),
        type: data.alert_type || data.type || 'general',
        title: data.alert_title || data.title || 'New Alert',
        message: data.message || '',
        time: 'Just now',
        timestamp: new Date().toISOString(),
        status: 'active',
        date: new Date().toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    if (editId) {
        const index = adminData.alerts.findIndex(a => a.id === editId);
        if (index !== -1) adminData.alerts[index] = { ...adminData.alerts[index], ...alert };
    } else {
        adminData.alerts.unshift(alert);
    }

    saveAdminData();
    renderDashboard();
    renderAlertsTable();
    updateNavBadge('alerts', adminData.alerts.length);
    showToast(editId ? 'Alert updated!' : 'Alert created!', 'success');
}

function saveNewsletter(data, editId = null) {
    const newsletter = {
        id: editId || getNextId(adminData.newsletters),
        title: data.newsletter_title || data.title || 'New Newsletter',
        category: data.category || 'all',
        date: new Date().toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' }),
        downloads: editId ? (adminData.newsletters.find(n => n.id === editId)?.downloads || 0) : 0,
        url: data.url || '../data/newsletters/placeholder.html'
    };

    if (editId) {
        const index = adminData.newsletters.findIndex(n => n.id === editId);
        if (index !== -1) adminData.newsletters[index] = { ...adminData.newsletters[index], ...newsletter };
    } else {
        adminData.newsletters.unshift(newsletter);
    }

    saveAdminData();
    renderNewslettersTable();
    showToast(editId ? 'Newsletter updated!' : 'Newsletter uploaded!', 'success');
}

function saveNotice(data, editId = null) {
    const notice = {
        id: editId || getNextId(adminData.notices),
        title: data.notice_title || data.title || 'New Notice',
        content: data.content || '',
        category: data.category || 'all',
        author: data.author || 'Admin',
        status: 'active'
    };

    if (editId) {
        const index = adminData.notices.findIndex(n => n.id === editId);
        if (index !== -1) adminData.notices[index] = { ...adminData.notices[index], ...notice };
    } else {
        adminData.notices.unshift(notice);
    }

    saveAdminData();
    renderNoticesTable();
    showToast(editId ? 'Notice updated!' : 'Notice created!', 'success');
}

function saveContact(data, editId = null) {
    const contact = {
        id: editId || getNextId(adminData.contacts),
        name: data.name || data.contact_name || 'New Contact',
        role: data.role || '',
        phone: data.phone || '+64 3 348 9826',
        email: data.email || ''
    };

    if (editId) {
        const index = adminData.contacts.findIndex(c => c.id === editId);
        if (index !== -1) adminData.contacts[index] = { ...adminData.contacts[index], ...contact };
    } else {
        adminData.contacts.push(contact);
    }

    saveAdminData();
    renderContactsTable();
    showToast(editId ? 'Contact updated!' : 'Contact added!', 'success');
}

function saveLink(data, editId = null) {
    const link = {
        id: editId || getNextId(adminData.links),
        title: data.link_title || data.title || 'New Link',
        url: data.url || 'https://',
        icon: data.icon || data['icon_(font_awesome_class)'] || 'fa-link'
    };

    if (editId) {
        const index = adminData.links.findIndex(l => l.id === editId);
        if (index !== -1) adminData.links[index] = { ...adminData.links[index], ...link };
    } else {
        adminData.links.push(link);
    }

    saveAdminData();
    renderLinksGrid();
    showToast(editId ? 'Link updated!' : 'Link added!', 'success');
}

function getNextId(array) {
    if (!array || array.length === 0) return 1;
    return Math.max(...array.map(item => item.id || 0)) + 1;
}

function updateNavBadge(section, count) {
    const badge = document.querySelector(`[data-section="${section}"] .nav-badge`);
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
}

function closeModal() {
    elements.modal.classList.remove('open');
}

// ===== Form Templates =====
function getAlertForm(existingData = null) {
    const data = existingData || {};
    return `
        <form>
            <div class="form-group">
                <label>Alert Title</label>
                <input type="text" name="title" placeholder="Enter alert title" value="${data.title || ''}">
            </div>
            <div class="form-group">
                <label>Alert Type</label>
                <select name="type">
                    <option value="emergency" ${data.type === 'emergency' ? 'selected' : ''}>Emergency</option>
                    <option value="general" ${data.type === 'general' ? 'selected' : ''}>General</option>
                    <option value="sport" ${data.type === 'sport' ? 'selected' : ''}>Sport</option>
                    <option value="performing-arts" ${data.type === 'performing-arts' ? 'selected' : ''}>Performing Arts</option>
                </select>
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Enter alert message">${data.message || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Send Push Notification</label>
                <label class="toggle">
                    <input type="checkbox" name="sendPush" ${!existingData ? 'checked' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </form>
    `;
}

function getNewsletterForm(existingData = null) {
    const data = existingData || {};
    return `
        <form>
            <div class="form-group">
                <label>Newsletter Title</label>
                <input type="text" name="title" placeholder="e.g., Term 1 Week 2 Newsletter" value="${data.title || ''}">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select name="category">
                    <option value="all" ${data.category === 'all' ? 'selected' : ''}>All School</option>
                    <option value="primary" ${data.category === 'primary' ? 'selected' : ''}>Primary School</option>
                    <option value="middle" ${data.category === 'middle' ? 'selected' : ''}>Middle School</option>
                    <option value="senior" ${data.category === 'senior' ? 'selected' : ''}>Senior College</option>
                </select>
            </div>
            <div class="form-group">
                <label>Upload PDF ${existingData ? '(leave empty to keep existing)' : ''}</label>
                <input type="file" name="file" accept=".pdf">
            </div>
        </form>
    `;
}

function getNoticeForm(existingData = null) {
    const data = existingData || {};
    return `
        <form>
            <div class="form-group">
                <label>Notice Title</label>
                <input type="text" name="title" placeholder="Enter notice title" value="${data.title || ''}">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select name="category">
                    <option value="all" ${data.category === 'all' ? 'selected' : ''}>All School</option>
                    <option value="primary" ${data.category === 'primary' ? 'selected' : ''}>Primary School</option>
                    <option value="middle" ${data.category === 'middle' ? 'selected' : ''}>Middle School</option>
                    <option value="senior" ${data.category === 'senior' ? 'selected' : ''}>Senior College</option>
                </select>
            </div>
            <div class="form-group">
                <label>Content</label>
                <textarea name="content" placeholder="Enter notice content">${data.content || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Author</label>
                <input type="text" name="author" placeholder="e.g., Principal" value="${data.author || ''}">
            </div>
        </form>
    `;
}

function getContactForm(existingData = null) {
    const data = existingData || {};
    return `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Contact name" value="${data.name || ''}">
            </div>
            <div class="form-group">
                <label>Role</label>
                <input type="text" name="role" placeholder="e.g., Head of Department" value="${data.role || ''}">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+64 3 348 9826" value="${data.phone || ''}">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="email@middleton.school.nz" value="${data.email || ''}">
            </div>
        </form>
    `;
}

function getLinkForm(existingData = null) {
    const data = existingData || {};
    return `
        <form>
            <div class="form-group">
                <label>Link Title</label>
                <input type="text" name="title" placeholder="e.g., Parent Portal" value="${data.title || ''}">
            </div>
            <div class="form-group">
                <label>URL</label>
                <input type="url" name="url" placeholder="https://..." value="${data.url || ''}">
            </div>
            <div class="form-group">
                <label>Icon (Font Awesome class)</label>
                <input type="text" name="icon" placeholder="e.g., fa-globe" value="${data.icon || ''}">
            </div>
        </form>
    `;
}

function getNotificationForm() {
    return `
        <form>
            <div class="form-group">
                <label>Notification Title</label>
                <input type="text" placeholder="Enter title">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea placeholder="Enter notification message"></textarea>
            </div>
            <div class="form-group">
                <label>Send To</label>
                <select>
                    <option value="all">All Subscribers</option>
                    <option value="primary">Primary School</option>
                    <option value="middle">Middle School</option>
                    <option value="senior">Senior College</option>
                    <option value="sport">Sport Subscribers</option>
                    <option value="arts">Performing Arts Subscribers</option>
                </select>
            </div>
        </form>
    `;
}

// ===== Render Functions =====
function renderDashboard() {
    const alertsContainer = document.getElementById('dashboardAlerts');
    const icons = {
        emergency: 'fa-exclamation-triangle',
        general: 'fa-info-circle',
        sport: 'fa-running',
        'performing-arts': 'fa-music'
    };

    alertsContainer.innerHTML = adminData.alerts.slice(0, 4).map(alert => `
        <div class="alert-item">
            <div class="alert-type-icon ${alert.type}">
                <i class="fas ${icons[alert.type]}"></i>
            </div>
            <div class="alert-info">
                <h4>${alert.title}</h4>
                <p>${alert.message}</p>
            </div>
            <span class="alert-time">${alert.time}</span>
        </div>
    `).join('');
}

function renderAllTables() {
    renderAlertsTable();
    renderNewslettersTable();
    renderNoticesTable();
    renderContactsTable();
    renderLinksGrid();
    renderTermDatesAdmin();
    renderAbsenceReportsTable();
}

function renderAlertsTable() {
    const tbody = document.getElementById('alertsTable');

    if (adminData.alerts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-row">No alerts yet. Click "Add Alert" to create one.</td></tr>';
        return;
    }

    tbody.innerHTML = adminData.alerts.map(alert => `
        <tr>
            <td><strong>${alert.title}</strong></td>
            <td><span class="type-badge ${alert.type}">${alert.type}</span></td>
            <td>${alert.date || 'N/A'}</td>
            <td><span class="status-badge ${alert.status || 'active'}">${alert.status || 'active'}</span></td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editAlert(${alert.id})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('alert', ${alert.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderNewslettersTable() {
    const tbody = document.getElementById('newslettersTable');

    if (adminData.newsletters.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-row">No newsletters yet. Click "Add Newsletter" to create one.</td></tr>';
        return;
    }

    tbody.innerHTML = adminData.newsletters.map(newsletter => `
        <tr>
            <td><strong>${newsletter.title}</strong></td>
            <td><span class="type-badge ${newsletter.category}">${newsletter.category}</span></td>
            <td>${newsletter.date}</td>
            <td>${newsletter.downloads || 0}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editNewsletter(${newsletter.id})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('newsletter', ${newsletter.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderNoticesTable() {
    const tbody = document.getElementById('noticesTable');

    if (adminData.notices.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-row">No notices yet. Click "Add Notice" to create one.</td></tr>';
        return;
    }

    tbody.innerHTML = adminData.notices.map(notice => `
        <tr>
            <td><strong>${notice.title}</strong></td>
            <td><span class="type-badge ${notice.category}">${notice.category}</span></td>
            <td>${notice.author}</td>
            <td><span class="status-badge ${notice.status || 'active'}">${notice.status || 'active'}</span></td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editNotice(${notice.id})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('notice', ${notice.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderContactsTable() {
    const tbody = document.getElementById('contactsTable');

    if (adminData.contacts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="empty-row">No contacts yet. Click "Add Contact" to create one.</td></tr>';
        return;
    }

    tbody.innerHTML = adminData.contacts.map(contact => `
        <tr>
            <td><strong>${contact.name}</strong></td>
            <td>${contact.role}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editContact(${contact.id})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('contact', ${contact.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderLinksGrid() {
    const container = document.getElementById('linksAdminGrid');

    if (adminData.links.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No links yet. Click "Add Link" to create one.</p></div>';
        return;
    }

    container.innerHTML = adminData.links.map(link => `
        <div class="link-admin-card">
            <div class="link-admin-icon">
                <i class="fas ${link.icon}"></i>
            </div>
            <h4>${link.title}</h4>
            <p>${link.url}</p>
            <div class="link-admin-actions">
                <button class="btn btn-sm btn-outline" onclick="editLink(${link.id})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem('link', ${link.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function renderTermDatesAdmin() {
    const container = document.getElementById('termDatesAdmin');

    container.innerHTML = adminData.termDates.map(term => `
        <div class="term-admin-card">
            <div class="term-admin-header">
                <h3>${term.title}</h3>
                <button class="btn btn-sm btn-outline" style="color: white; border-color: white;">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
            <div class="term-admin-body">
                <div class="term-admin-row">
                    <span>Start Date</span>
                    <span>${term.start}</span>
                </div>
                <div class="term-admin-row">
                    <span>End Date</span>
                    <span>${term.end}</span>
                </div>
                <div class="term-admin-row">
                    <span>Duration</span>
                    <span>${term.weeks} weeks</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Action Functions =====
function editAlert(id) {
    const alert = adminData.alerts.find(a => a.id === id);
    if (alert) {
        openModal('Edit Alert', getAlertForm(alert), 'alert', id);
    }
}

function editNewsletter(id) {
    const newsletter = adminData.newsletters.find(n => n.id === id);
    if (newsletter) {
        openModal('Edit Newsletter', getNewsletterForm(newsletter), 'newsletter', id);
    }
}

function editNotice(id) {
    const notice = adminData.notices.find(n => n.id === id);
    if (notice) {
        openModal('Edit Notice', getNoticeForm(notice), 'notice', id);
    }
}

function editContact(id) {
    const contact = adminData.contacts.find(c => c.id === id);
    if (contact) {
        openModal('Edit Contact', getContactForm(contact), 'contact', id);
    }
}

function editLink(id) {
    const link = adminData.links.find(l => l.id === id);
    if (link) {
        openModal('Edit Link', getLinkForm(link), 'link', id);
    }
}

function deleteItem(type, id) {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
        let dataKey;
        let renderFn;

        switch(type) {
            case 'alert':
                dataKey = 'alerts';
                renderFn = () => { renderDashboard(); renderAlertsTable(); };
                break;
            case 'newsletter':
                dataKey = 'newsletters';
                renderFn = renderNewslettersTable;
                break;
            case 'notice':
                dataKey = 'notices';
                renderFn = renderNoticesTable;
                break;
            case 'contact':
                dataKey = 'contacts';
                renderFn = renderContactsTable;
                break;
            case 'link':
                dataKey = 'links';
                renderFn = renderLinksGrid;
                break;
            default:
                return;
        }

        // Find and remove the item
        const index = adminData[dataKey].findIndex(item => item.id === id);
        if (index !== -1) {
            adminData[dataKey].splice(index, 1);
            saveAdminData();
            renderFn();
            updateNavBadge(dataKey, adminData[dataKey].length);
            showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`, 'success');
        }
    }
}

// ===== Toast =====
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

// ===== Push Notifications =====
const FIREBASE_PROJECT_ID = 'middleton-grange-a699d';
const ADMIN_KEY = 'mgs-admin-2026'; // Simple key for demo - use proper auth in production

// Notification Templates
const notificationTemplates = {
    'closure': {
        title: 'School Closure - [DATE]',
        body: 'Due to [REASON], school will be closed on [DATE]. Please check your email for further updates.',
        type: 'emergency',
        topic: 'emergency'
    },
    'event-reminder': {
        title: '[EVENT NAME] - Tomorrow',
        body: 'Reminder: [EVENT NAME] is happening tomorrow at [TIME]. [LOCATION]. We look forward to seeing you there!',
        type: 'general',
        topic: 'general'
    },
    'sport-update': {
        title: 'Sport Update: [SPORT]',
        body: '[TEAM] vs [OPPONENT] - [RESULT/TIME]. [VENUE]. Come support our teams!',
        type: 'sport',
        topic: 'sport'
    },
    'newsletter': {
        title: 'New Newsletter Available',
        body: 'The latest school newsletter is now available in the MGS Connect app. Tap to read the latest updates from our school community.',
        type: 'general',
        topic: 'general'
    },
    'weather': {
        title: 'Weather Advisory',
        body: 'Due to [WEATHER CONDITION], please ensure students [ACTION]. Check the app for any schedule changes.',
        type: 'emergency',
        topic: 'emergency'
    },
    'custom': {
        title: '',
        body: '',
        type: 'general',
        topic: 'general'
    }
};

function initPushNotifications() {
    const form = document.getElementById('pushNotificationForm');
    const titleInput = document.getElementById('pushTitle');
    const bodyInput = document.getElementById('pushBody');

    if (!form) return;

    // Live preview
    titleInput?.addEventListener('input', (e) => {
        document.getElementById('previewTitle').textContent = e.target.value || 'Notification Title';
        document.getElementById('titleCount').textContent = e.target.value.length;
    });

    bodyInput?.addEventListener('input', (e) => {
        document.getElementById('previewBody').textContent = e.target.value || 'Your message will appear here...';
        document.getElementById('bodyCount').textContent = e.target.value.length;
    });

    // Type selector updates preview style
    document.querySelectorAll('input[name="notificationType"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const preview = document.querySelector('.notification-preview');
            preview.className = 'notification-preview ' + e.target.value;
        });
    });

    // Template selection
    document.querySelectorAll('.template-card').forEach(card => {
        card.addEventListener('click', () => {
            const templateId = card.dataset.template;
            applyTemplate(templateId);

            // Update active state
            document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Schedule toggle
    const scheduleToggle = document.getElementById('scheduleToggle');
    const scheduleFields = document.getElementById('scheduleFields');
    const scheduleDate = document.getElementById('scheduleDate');

    if (scheduleToggle && scheduleFields) {
        // Set min date to today
        if (scheduleDate) {
            scheduleDate.min = new Date().toISOString().split('T')[0];
            scheduleDate.value = new Date().toISOString().split('T')[0];
        }

        scheduleToggle.addEventListener('change', () => {
            scheduleFields.style.display = scheduleToggle.checked ? 'flex' : 'none';
        });
    }

    // Form submission
    form.addEventListener('submit', handlePushSubmit);
}

function applyTemplate(templateId) {
    const template = notificationTemplates[templateId];
    if (!template) return;

    const titleInput = document.getElementById('pushTitle');
    const bodyInput = document.getElementById('pushBody');
    const topicSelect = document.getElementById('pushTopic');

    if (titleInput) {
        titleInput.value = template.title;
        titleInput.dispatchEvent(new Event('input'));
    }

    if (bodyInput) {
        bodyInput.value = template.body;
        bodyInput.dispatchEvent(new Event('input'));
    }

    if (topicSelect && template.topic) {
        topicSelect.value = template.topic;
    }

    // Set notification type
    const typeRadio = document.querySelector(`input[name="notificationType"][value="${template.type}"]`);
    if (typeRadio) {
        typeRadio.checked = true;
        typeRadio.dispatchEvent(new Event('change'));
    }

    // Focus on title for editing
    if (titleInput && template.title) {
        titleInput.focus();
        // Select placeholder text if present
        if (template.title.includes('[')) {
            const start = template.title.indexOf('[');
            const end = template.title.indexOf(']') + 1;
            titleInput.setSelectionRange(start, end);
        }
    }
}

function testNotification() {
    const title = document.getElementById('pushTitle')?.value || 'Test Notification';
    const body = document.getElementById('pushBody')?.value || 'This is a test notification from MGS Connect Admin.';
    const type = document.querySelector('input[name="notificationType"]:checked')?.value || 'general';

    // Check if browser supports notifications
    if (!('Notification' in window)) {
        showToast('Notifications are not supported in this browser', 'error');
        return;
    }

    // Request permission if needed
    if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showTestNotification(title, body, type);
            } else {
                showToast('Notification permission denied', 'error');
            }
        });
    } else if (Notification.permission === 'granted') {
        showTestNotification(title, body, type);
    } else {
        showToast('Notifications are blocked. Please enable them in browser settings.', 'error');
    }
}

function showTestNotification(title, body, type) {
    const notification = new Notification(title, {
        body: body,
        icon: '../icons/icon-192.png',
        badge: '../icons/icon-72.png',
        tag: 'mgs-test-' + Date.now(),
        requireInteraction: type === 'emergency'
    });

    notification.onclick = () => {
        window.focus();
        notification.close();
    };

    showToast('Test notification sent to this device!', 'success');
}

async function handlePushSubmit(e) {
    e.preventDefault();
    
    const topic = document.getElementById('pushTopic').value;
    const title = document.getElementById('pushTitle').value;
    const body = document.getElementById('pushBody').value;
    const type = document.querySelector('input[name="notificationType"]:checked')?.value || 'general';
    
    if (!topic || !title || !body) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        const response = await fetch(`https://us-central1-${FIREBASE_PROJECT_ID}.cloudfunctions.net/sendNotification`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                topic,
                title,
                body,
                type,
                adminKey: ADMIN_KEY
            })
        });
        
        if (response.ok) {
            const result = await response.json();
            showToast(`Notification sent successfully! 🎉`, 'success');
            clearPushForm();
            addToHistory(topic, title, body, type);
        } else {
            const error = await response.json();
            throw new Error(error.error || 'Failed to send notification');
        }
        
    } catch (error) {
        console.error('Push notification error:', error);
        
        // For demo/testing - show success anyway since Cloud Functions might not be deployed
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            showToast('Demo mode: Notification would be sent in production', 'info');
            clearPushForm();
            addToHistory(topic, title, body, type);
        } else {
            showToast(`Error: ${error.message}`, 'error');
        }
    }
    
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
}

function clearPushForm() {
    document.getElementById('pushNotificationForm')?.reset();
    document.getElementById('previewTitle').textContent = 'Notification Title';
    document.getElementById('previewBody').textContent = 'Your message will appear here...';
    document.getElementById('titleCount').textContent = '0';
    document.getElementById('bodyCount').textContent = '0';
}

function addToHistory(topic, title, body, type) {
    const historyContainer = document.getElementById('pushHistory');
    if (!historyContainer) return;
    
    const icons = {
        general: 'fa-bell',
        emergency: 'fa-exclamation-triangle',
        sport: 'fa-running',
        'performing-arts': 'fa-music'
    };
    
    const topicNames = {
        general: 'General',
        emergency: 'Emergency',
        primary: 'Primary School',
        middle: 'Middle School',
        senior: 'Senior College',
        sport: 'Sport',
        'performing-arts': 'Performing Arts',
        production: 'Production'
    };
    
    const newItem = document.createElement('div');
    newItem.className = 'history-item';
    newItem.innerHTML = `
        <div class="history-icon ${type}"><i class="fas ${icons[type] || 'fa-bell'}"></i></div>
        <div class="history-content">
            <strong>${title}</strong>
            <p>${body.substring(0, 100)}${body.length > 100 ? '...' : ''}</p>
            <span class="history-meta">${topicNames[topic] || topic} • Just now</span>
        </div>
    `;
    
    historyContainer.insertBefore(newItem, historyContainer.firstChild);
}

// Initialize push notifications when section is shown
document.addEventListener('DOMContentLoaded', () => {
    // Add push-notifications to the section navigation
    initPushNotifications();
    initDataManagement();
});

// ===== Data Management =====
function initDataManagement() {
    // Add reset button handler if it exists
    const resetBtn = document.getElementById('resetDataBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAllData);
    }

    // Add export button handler
    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportData);
    }

    // Add import button handler
    const importBtn = document.getElementById('importDataBtn');
    if (importBtn) {
        importBtn.addEventListener('click', () => {
            document.getElementById('importDataFile')?.click();
        });
    }

    const importFile = document.getElementById('importDataFile');
    if (importFile) {
        importFile.addEventListener('change', importData);
    }

    // Update dashboard stats
    updateDashboardStats();
}

function resetAllData() {
    if (confirm('Are you sure you want to reset all data to defaults? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEY);
        adminData = loadAdminData();
        renderDashboard();
        renderAllTables();
        updateDashboardStats();
        showToast('All data has been reset to defaults', 'success');
    }
}

function exportData() {
    const dataStr = JSON.stringify(adminData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mgs-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Data exported successfully', 'success');
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            // Validate structure
            if (imported.alerts && imported.newsletters) {
                adminData = { ...defaultAdminData, ...imported };
                saveAdminData();
                renderDashboard();
                renderAllTables();
                updateDashboardStats();
                showToast('Data imported successfully', 'success');
            } else {
                showToast('Invalid data format', 'error');
            }
        } catch (err) {
            showToast('Failed to parse import file', 'error');
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
}

function updateDashboardStats() {
    // Update stat cards if they exist
    const alertsStat = document.querySelector('[data-stat="alerts"]');
    const newslettersStat = document.querySelector('[data-stat="newsletters"]');
    const noticesStat = document.querySelector('[data-stat="notices"]');
    const contactsStat = document.querySelector('[data-stat="contacts"]');

    if (alertsStat) alertsStat.textContent = adminData.alerts.length;
    if (newslettersStat) newslettersStat.textContent = adminData.newsletters.length;
    if (noticesStat) noticesStat.textContent = adminData.notices.length;
    if (contactsStat) contactsStat.textContent = adminData.contacts.length;

    // Update nav badges
    updateNavBadge('alerts', adminData.alerts.length);
}

// ===== Absence Reports Management =====
function initAbsenceReports() {
    // Status filter
    const statusFilter = document.getElementById('absenceStatusFilter');
    const typeFilter = document.getElementById('absenceTypeFilter');

    if (statusFilter) {
        statusFilter.addEventListener('change', () => renderAbsenceReportsTable());
    }
    if (typeFilter) {
        typeFilter.addEventListener('change', () => renderAbsenceReportsTable());
    }
}

function renderAbsenceReportsTable() {
    const tbody = document.getElementById('absenceReportsTable');
    const emptyState = document.getElementById('noAbsenceReports');
    const statusFilter = document.getElementById('absenceStatusFilter')?.value || 'all';
    const typeFilter = document.getElementById('absenceTypeFilter')?.value || 'all';

    if (!tbody) return;

    // Ensure absenceReports exists
    if (!adminData.absenceReports) {
        adminData.absenceReports = [];
    }

    // Filter reports
    let reports = adminData.absenceReports;

    if (statusFilter !== 'all') {
        reports = reports.filter(r => r.status === statusFilter);
    }

    if (typeFilter !== 'all') {
        reports = reports.filter(r => r.type === typeFilter);
    }

    // Sort by date (newest first)
    reports.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

    // Update stats
    updateAbsenceStats();

    // Update nav badge
    const pendingCount = adminData.absenceReports.filter(r => r.status === 'pending').length;
    const badge = document.querySelector('.absence-badge');
    if (badge) {
        badge.textContent = pendingCount;
        badge.style.display = pendingCount > 0 ? 'inline-flex' : 'none';
    }

    if (reports.length === 0) {
        tbody.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';

    tbody.innerHTML = reports.map(report => {
        const typeIcon = report.type === 'late' ? 'fa-clock' : 'fa-user-times';
        const typeLabel = report.type === 'late' ? 'Late' : 'Absent';
        const dateFormatted = new Date(report.absenceDate).toLocaleDateString('en-NZ', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });
        const timeInfo = report.type === 'late' && report.expectedTime ? ` (ETA: ${report.expectedTime})` : '';
        const submittedTime = formatTimeAgo(report.submittedAt);

        return `
            <tr data-id="${report.id}">
                <td>
                    <span class="type-badge ${report.type}">
                        <i class="fas ${typeIcon}"></i> ${typeLabel}
                    </span>
                </td>
                <td>
                    <div class="student-info">
                        <span class="student-name">${report.studentName}</span>
                        <span class="student-year">${report.yearLevel}</span>
                    </div>
                </td>
                <td>${dateFormatted}${timeInfo}</td>
                <td class="reason-cell">
                    <span class="reason-text">${report.reason}</span>
                    ${report.details ? `<div class="reason-details" title="${report.details}">${report.details}</div>` : ''}
                </td>
                <td class="contact-cell">${report.contactPhone}</td>
                <td>
                    <span class="status-badge ${report.status}">${capitalizeFirst(report.status)}</span>
                    <div style="font-size: 0.75rem; color: var(--mid-gray);">${submittedTime}</div>
                </td>
                <td>
                    <div class="action-btns">
                        ${report.status === 'pending' ? `
                            <button class="action-btn acknowledge" onclick="acknowledgeReport(${report.id})" title="Acknowledge">
                                <i class="fas fa-check"></i>
                            </button>
                        ` : ''}
                        ${report.status === 'acknowledged' ? `
                            <button class="action-btn archive" onclick="archiveReport(${report.id})" title="Archive">
                                <i class="fas fa-archive"></i>
                            </button>
                        ` : ''}
                        <button class="action-btn view" onclick="viewReportDetails(${report.id})" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function updateAbsenceStats() {
    const reports = adminData.absenceReports || [];
    const today = new Date().toISOString().split('T')[0];

    const pendingCount = reports.filter(r => r.status === 'pending').length;
    const absentToday = reports.filter(r => r.type === 'absent' && r.absenceDate === today && r.status !== 'archived').length;
    const lateToday = reports.filter(r => r.type === 'late' && r.absenceDate === today && r.status !== 'archived').length;
    const acknowledgedCount = reports.filter(r => r.status === 'acknowledged').length;

    document.getElementById('pendingCount')?.textContent && (document.getElementById('pendingCount').textContent = pendingCount);
    document.getElementById('absentTodayCount')?.textContent && (document.getElementById('absentTodayCount').textContent = absentToday);
    document.getElementById('lateTodayCount')?.textContent && (document.getElementById('lateTodayCount').textContent = lateToday);
    document.getElementById('acknowledgedCount')?.textContent && (document.getElementById('acknowledgedCount').textContent = acknowledgedCount);
}

function acknowledgeReport(id) {
    const report = adminData.absenceReports.find(r => r.id === id);
    if (report) {
        report.status = 'acknowledged';
        report.acknowledgedAt = new Date().toISOString();
        report.acknowledgedBy = 'Admin User';
        saveAdminData();
        renderAbsenceReportsTable();
        showToast(`${report.studentName}'s report acknowledged`, 'success');
    }
}

function archiveReport(id) {
    const report = adminData.absenceReports.find(r => r.id === id);
    if (report) {
        report.status = 'archived';
        saveAdminData();
        renderAbsenceReportsTable();
        showToast(`Report archived`, 'success');
    }
}

function viewReportDetails(id) {
    const report = adminData.absenceReports.find(r => r.id === id);
    if (!report) return;

    const typeLabel = report.type === 'late' ? 'Late Arrival' : 'Absence';
    const dateFormatted = new Date(report.absenceDate).toLocaleDateString('en-NZ', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const submittedFormatted = new Date(report.submittedAt).toLocaleString('en-NZ');

    const content = `
        <div class="report-details">
            <div class="detail-row">
                <span class="detail-label">Report Type</span>
                <span class="detail-value"><span class="type-badge ${report.type}">${typeLabel}</span></span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Student Name</span>
                <span class="detail-value"><strong>${report.studentName}</strong></span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Year Level</span>
                <span class="detail-value">${report.yearLevel}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Date</span>
                <span class="detail-value">${dateFormatted}</span>
            </div>
            ${report.type === 'late' && report.expectedTime ? `
            <div class="detail-row">
                <span class="detail-label">Expected Arrival</span>
                <span class="detail-value">${report.expectedTime}</span>
            </div>
            ` : ''}
            <div class="detail-row">
                <span class="detail-label">Reason</span>
                <span class="detail-value">${report.reason}</span>
            </div>
            ${report.details ? `
            <div class="detail-row">
                <span class="detail-label">Additional Details</span>
                <span class="detail-value">${report.details}</span>
            </div>
            ` : ''}
            <div class="detail-row">
                <span class="detail-label">Contact Phone</span>
                <span class="detail-value"><a href="tel:${report.contactPhone}">${report.contactPhone}</a></span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Submitted</span>
                <span class="detail-value">${submittedFormatted}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status</span>
                <span class="detail-value"><span class="status-badge ${report.status}">${capitalizeFirst(report.status)}</span></span>
            </div>
            ${report.acknowledgedAt ? `
            <div class="detail-row">
                <span class="detail-label">Acknowledged</span>
                <span class="detail-value">${new Date(report.acknowledgedAt).toLocaleString('en-NZ')} by ${report.acknowledgedBy}</span>
            </div>
            ` : ''}
            ${report.adminNotes ? `
            <div class="detail-row">
                <span class="detail-label">Admin Notes</span>
                <span class="detail-value">${report.adminNotes}</span>
            </div>
            ` : ''}
        </div>
        <style>
            .report-details { padding: 0.5rem 0; }
            .detail-row { display: flex; padding: 0.75rem 0; border-bottom: 1px solid var(--light-gray); }
            .detail-row:last-child { border-bottom: none; }
            .detail-label { width: 140px; font-weight: 500; color: var(--dark-gray); flex-shrink: 0; }
            .detail-value { flex: 1; color: var(--near-black); }
            .detail-value a { color: var(--primary); }
        </style>
    `;

    openModal(`${typeLabel} Report - ${report.studentName}`, content);

    // Hide save button for view-only modal
    elements.modalSave.style.display = 'none';
    elements.modalCancel.textContent = 'Close';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatTimeAgo(timestamp) {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now - then;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    return `${diffDays}d ago`;
}

// Initialize absence reports on load
document.addEventListener('DOMContentLoaded', () => {
    initAbsenceReports();
});

// Expose functions globally for use in HTML
window.editAlert = editAlert;
window.editNewsletter = editNewsletter;
window.editNotice = editNotice;
window.editContact = editContact;
window.editLink = editLink;
window.deleteItem = deleteItem;
window.resetAllData = resetAllData;
window.exportData = exportData;
window.testNotification = testNotification;
window.clearPushForm = clearPushForm;
window.acknowledgeReport = acknowledgeReport;
window.archiveReport = archiveReport;
window.viewReportDetails = viewReportDetails;
