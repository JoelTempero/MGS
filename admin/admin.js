// ===== Admin Demo Data =====
const adminData = {
    alerts: [
        { id: 1, type: 'emergency', title: 'School Closure Tomorrow', message: 'Due to extreme weather warnings, school will be closed tomorrow.', time: '2 hours ago', status: 'active', date: '7 Jan 2026' },
        { id: 2, type: 'sport', title: 'Swimming Sports Rescheduled', message: 'Year 7-8 swimming sports moved to Friday 10th January.', time: '5 hours ago', status: 'active', date: '7 Jan 2026' },
        { id: 3, type: 'performing-arts', title: 'School Production Auditions', message: 'Auditions for The Sound of Music next week.', time: '1 day ago', status: 'active', date: '6 Jan 2026' },
        { id: 4, type: 'general', title: 'Uniform Shop Hours', message: 'Extended hours 8am-5pm from 27-31 January.', time: '2 days ago', status: 'active', date: '5 Jan 2026' }
    ],
    newsletters: [
        { id: 1, title: 'Term 4 Week 10 Newsletter', category: 'all', date: '13 Dec 2025', downloads: 432 },
        { id: 2, title: 'Primary School Update', category: 'primary', date: '10 Dec 2025', downloads: 189 },
        { id: 3, title: 'Senior College Careers Newsletter', category: 'senior', date: '8 Dec 2025', downloads: 156 },
        { id: 4, title: 'Middle School Newsletter', category: 'middle', date: '5 Dec 2025', downloads: 201 },
        { id: 5, title: 'Term 4 Week 9 Newsletter', category: 'all', date: '6 Dec 2025', downloads: 398 }
    ],
    notices: [
        { id: 1, title: 'Welcome Back!', category: 'all', author: 'Principal', status: 'active' },
        { id: 2, title: 'New Student Orientation', category: 'middle', author: 'Year 7 Dean', status: 'active' },
        { id: 3, title: 'Senior College Assembly', category: 'senior', author: 'Head of Senior College', status: 'active' },
        { id: 4, title: 'Library Books Due', category: 'all', author: 'Librarian', status: 'active' }
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
        { term: 1, title: 'Term 1', start: 'Tuesday 28 January', end: 'Friday 17 April', weeks: 12 },
        { term: 2, title: 'Term 2', start: 'Monday 4 May', end: 'Friday 10 July', weeks: 10 },
        { term: 3, title: 'Term 3', start: 'Monday 27 July', end: 'Friday 25 September', weeks: 9 },
        { term: 4, title: 'Term 4', start: 'Monday 12 October', end: 'Friday 11 December', weeks: 9 }
    ]
};

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

function openModal(title, content) {
    elements.modalTitle.textContent = title;
    elements.modalBody.innerHTML = content;
    elements.modal.classList.add('open');
    
    // Setup save handler
    elements.modalSave.onclick = () => {
        showToast('Changes saved successfully!', 'success');
        closeModal();
    };
}

function closeModal() {
    elements.modal.classList.remove('open');
}

// ===== Form Templates =====
function getAlertForm() {
    return `
        <form>
            <div class="form-group">
                <label>Alert Title</label>
                <input type="text" placeholder="Enter alert title">
            </div>
            <div class="form-group">
                <label>Alert Type</label>
                <select>
                    <option value="emergency">Emergency</option>
                    <option value="general">General</option>
                    <option value="sport">Sport</option>
                    <option value="performing-arts">Performing Arts</option>
                </select>
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea placeholder="Enter alert message"></textarea>
            </div>
            <div class="form-group">
                <label>Send Push Notification</label>
                <label class="toggle">
                    <input type="checkbox" checked>
                    <span class="toggle-slider"></span>
                </label>
            </div>
        </form>
    `;
}

function getNewsletterForm() {
    return `
        <form>
            <div class="form-group">
                <label>Newsletter Title</label>
                <input type="text" placeholder="e.g., Term 1 Week 2 Newsletter">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select>
                    <option value="all">All School</option>
                    <option value="primary">Primary School</option>
                    <option value="middle">Middle School</option>
                    <option value="senior">Senior College</option>
                </select>
            </div>
            <div class="form-group">
                <label>Upload PDF</label>
                <input type="file" accept=".pdf">
            </div>
        </form>
    `;
}

function getNoticeForm() {
    return `
        <form>
            <div class="form-group">
                <label>Notice Title</label>
                <input type="text" placeholder="Enter notice title">
            </div>
            <div class="form-group">
                <label>Category</label>
                <select>
                    <option value="all">All School</option>
                    <option value="primary">Primary School</option>
                    <option value="middle">Middle School</option>
                    <option value="senior">Senior College</option>
                </select>
            </div>
            <div class="form-group">
                <label>Content</label>
                <textarea placeholder="Enter notice content"></textarea>
            </div>
            <div class="form-group">
                <label>Author</label>
                <input type="text" placeholder="e.g., Principal">
            </div>
        </form>
    `;
}

function getContactForm() {
    return `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" placeholder="Contact name">
            </div>
            <div class="form-group">
                <label>Role</label>
                <input type="text" placeholder="e.g., Head of Department">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+64 3 348 9826">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" placeholder="email@middleton.school.nz">
            </div>
        </form>
    `;
}

function getLinkForm() {
    return `
        <form>
            <div class="form-group">
                <label>Link Title</label>
                <input type="text" placeholder="e.g., Parent Portal">
            </div>
            <div class="form-group">
                <label>URL</label>
                <input type="url" placeholder="https://...">
            </div>
            <div class="form-group">
                <label>Icon (Font Awesome class)</label>
                <input type="text" placeholder="e.g., fa-globe">
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
}

function renderAlertsTable() {
    const tbody = document.getElementById('alertsTable');
    const icons = {
        emergency: 'fa-exclamation-triangle',
        general: 'fa-info-circle',
        sport: 'fa-running',
        'performing-arts': 'fa-music'
    };

    tbody.innerHTML = adminData.alerts.map(alert => `
        <tr>
            <td><strong>${alert.title}</strong></td>
            <td><span class="type-badge ${alert.type}">${alert.type}</span></td>
            <td>${alert.date}</td>
            <td><span class="status-badge ${alert.status}">${alert.status}</span></td>
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

    tbody.innerHTML = adminData.newsletters.map(newsletter => `
        <tr>
            <td><strong>${newsletter.title}</strong></td>
            <td><span class="type-badge ${newsletter.category}">${newsletter.category}</span></td>
            <td>${newsletter.date}</td>
            <td>${newsletter.downloads}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('newsletter', ${newsletter.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderNoticesTable() {
    const tbody = document.getElementById('noticesTable');

    tbody.innerHTML = adminData.notices.map(notice => `
        <tr>
            <td><strong>${notice.title}</strong></td>
            <td><span class="type-badge ${notice.category}">${notice.category}</span></td>
            <td>${notice.author}</td>
            <td><span class="status-badge ${notice.status}">${notice.status}</span></td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('notice', ${notice.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderContactsTable() {
    const tbody = document.getElementById('contactsTable');

    tbody.innerHTML = adminData.contacts.map(contact => `
        <tr>
            <td><strong>${contact.name}</strong></td>
            <td>${contact.role}</td>
            <td>${contact.phone}</td>
            <td>${contact.email}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit"><i class="fas fa-edit"></i></button>
                    <button class="action-btn delete" onclick="deleteItem('contact', ${contact.id})"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderLinksGrid() {
    const container = document.getElementById('linksAdminGrid');

    container.innerHTML = adminData.links.map(link => `
        <div class="link-admin-card">
            <div class="link-admin-icon">
                <i class="fas ${link.icon}"></i>
            </div>
            <h4>${link.title}</h4>
            <p>${link.url}</p>
            <div class="link-admin-actions">
                <button class="btn btn-sm btn-outline"><i class="fas fa-edit"></i></button>
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
        openModal('Edit Alert', getAlertForm());
    }
}

function deleteItem(type, id) {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
        showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`, 'success');
        // In production, this would delete from Firebase
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
    
    // Form submission
    form.addEventListener('submit', handlePushSubmit);
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
});
