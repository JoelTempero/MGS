/**
 * MGS Connect - ICS Calendar Integration
 * 
 * Fetches and parses iCalendar feeds from KAMAR portal
 * 
 * Feed URLs:
 * - School Events: https://middleton.school.kiwi/ics/school.ics
 * - Calendar Days: https://middleton.school.kiwi/ics/days.ics
 */

const ICS_CONFIG = {
    feeds: {
        events: 'https://middleton.school.kiwi/ics/school.ics',
        days: 'https://middleton.school.kiwi/ics/days.ics'
    },
    // CORS proxy for client-side fetching (use Firebase in production)
    corsProxy: 'https://api.allorigins.win/raw?url=',
    cacheTime: 15 * 60 * 1000, // 15 minutes
    useLiveData: true // Set to false to use demo data only
};

// Calendar data cache
let calendarCache = {
    events: [],
    days: [],
    lastFetch: null,
    isLoading: false,
    error: null
};

/**
 * Parse an ICS date string into a JavaScript Date
 */
function parseICSDate(icsDate) {
    if (!icsDate) return null;
    
    const dateStr = icsDate.replace(/Z$/, '');
    
    // DATE format: YYYYMMDD
    if (dateStr.length === 8) {
        return new Date(
            parseInt(dateStr.substring(0, 4)),
            parseInt(dateStr.substring(4, 6)) - 1,
            parseInt(dateStr.substring(6, 8))
        );
    }
    
    // DATE-TIME format: YYYYMMDDTHHMMSS
    if (dateStr.length >= 15) {
        return new Date(
            parseInt(dateStr.substring(0, 4)),
            parseInt(dateStr.substring(4, 6)) - 1,
            parseInt(dateStr.substring(6, 8)),
            parseInt(dateStr.substring(9, 11)),
            parseInt(dateStr.substring(11, 13)),
            parseInt(dateStr.substring(13, 15))
        );
    }
    
    return null;
}

/**
 * Parse ICS content into event objects
 */
function parseICSContent(icsContent) {
    const events = [];
    const lines = icsContent.split(/\r?\n/);
    
    let currentEvent = null;
    let currentKey = null;
    let currentValue = '';
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        // Handle line continuations
        if (line.startsWith(' ') || line.startsWith('\t')) {
            currentValue += line.substring(1);
            continue;
        }
        
        // Process previous key-value
        if (currentKey && currentEvent) {
            processICSProperty(currentEvent, currentKey, currentValue);
        }
        
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;
        
        const key = line.substring(0, colonIndex);
        const value = line.substring(colonIndex + 1);
        
        if (key === 'BEGIN' && value === 'VEVENT') {
            currentEvent = {
                uid: '',
                title: '',
                description: '',
                location: '',
                start: null,
                end: null,
                allDay: false,
                categories: [],
                type: 'general'
            };
            currentKey = null;
            currentValue = '';
            continue;
        }
        
        if (key === 'END' && value === 'VEVENT') {
            if (currentEvent && currentEvent.start) {
                currentEvent.allDay = !currentEvent.start.getHours() && 
                                      !currentEvent.start.getMinutes();
                currentEvent.type = categorizeEvent(currentEvent);
                events.push(currentEvent);
            }
            currentEvent = null;
            currentKey = null;
            currentValue = '';
            continue;
        }
        
        currentKey = key;
        currentValue = value;
    }
    
    return events;
}

/**
 * Process a single ICS property
 */
function processICSProperty(event, key, value) {
    const baseKey = key.split(';')[0];
    const unescapedValue = value
        .replace(/\\n/g, '\n')
        .replace(/\\,/g, ',')
        .replace(/\\;/g, ';')
        .replace(/\\\\/g, '\\');
    
    switch (baseKey) {
        case 'UID': event.uid = unescapedValue; break;
        case 'SUMMARY': event.title = unescapedValue; break;
        case 'DESCRIPTION': event.description = unescapedValue; break;
        case 'LOCATION': event.location = unescapedValue; break;
        case 'DTSTART': event.start = parseICSDate(unescapedValue); break;
        case 'DTEND': event.end = parseICSDate(unescapedValue); break;
        case 'CATEGORIES': 
            event.categories = unescapedValue.split(',').map(c => c.trim()); 
            break;
    }
}

/**
 * Categorize event by type
 */
function categorizeEvent(event) {
    const title = (event.title || '').toLowerCase();
    const categories = event.categories.map(c => c.toLowerCase());
    const desc = (event.description || '').toLowerCase();
    
    if (title.includes('sport') || title.includes('swimming') || 
        title.includes('athletics') || title.includes('rugby') ||
        title.includes('netball') || title.includes('cricket') ||
        title.includes('basketball') || categories.includes('sport')) {
        return 'sport';
    }
    if (title.includes('music') || title.includes('concert') || 
        title.includes('performance') || title.includes('drama') ||
        title.includes('production') || title.includes('choir') ||
        categories.includes('performing arts')) {
        return 'performing-arts';
    }
    if (title.includes('exam') || title.includes('assessment') || 
        title.includes('ncea') || title.includes('test')) {
        return 'academic';
    }
    if (title.includes('meeting') || title.includes('parent') || 
        title.includes('pta') || title.includes('board') ||
        title.includes('information evening')) {
        return 'meeting';
    }
    if (title.includes('holiday') || title.includes('break') || 
        title.includes('teacher only') || title.includes('closed') ||
        title.includes('waitangi') || title.includes('anzac') ||
        title.includes('easter') || title.includes('labour day')) {
        return 'holiday';
    }
    if (title.includes('chapel') || title.includes('worship') || 
        title.includes('service') || title.includes('prayer')) {
        return 'chapel';
    }
    if (title.includes('term') && (title.includes('begin') || title.includes('start') || title.includes('end'))) {
        return 'school';
    }
    
    return 'event';
}

/**
 * Get event icon and color based on type
 */
function getEventStyle(type) {
    const styles = {
        'sport': { icon: 'fa-running', color: '#c8102e' },
        'performing-arts': { icon: 'fa-music', color: '#7b1fa2' },
        'academic': { icon: 'fa-book', color: '#1565c0' },
        'meeting': { icon: 'fa-users', color: '#f39c12' },
        'holiday': { icon: 'fa-umbrella-beach', color: '#2e7d32' },
        'chapel': { icon: 'fa-church', color: '#005a5a' },
        'school': { icon: 'fa-school', color: '#003d3d' },
        'event': { icon: 'fa-calendar-day', color: '#005a5a' },
        'general': { icon: 'fa-calendar', color: '#666' }
    };
    return styles[type] || styles.general;
}

/**
 * Fetch ICS feed via CORS proxy
 */
async function fetchICSFeed(url) {
    try {
        const proxyUrl = ICS_CONFIG.corsProxy + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const content = await response.text();
        
        // Check if it looks like valid ICS
        if (!content.includes('BEGIN:VCALENDAR')) {
            throw new Error('Invalid ICS format');
        }
        
        return parseICSContent(content);
    } catch (error) {
        console.warn(`Failed to fetch ICS from ${url}:`, error.message);
        return null;
    }
}

/**
 * Fetch all calendar data from ICS feeds
 */
async function fetchCalendarData(forceRefresh = false) {
    // Check cache
    const cacheAge = calendarCache.lastFetch ? 
        Date.now() - calendarCache.lastFetch : Infinity;
    
    if (!forceRefresh && cacheAge < ICS_CONFIG.cacheTime && 
        calendarCache.events.length > 0) {
        return calendarCache;
    }
    
    // Don't fetch if already loading
    if (calendarCache.isLoading) {
        return calendarCache;
    }
    
    calendarCache.isLoading = true;
    calendarCache.error = null;
    
    console.log('🗓️ Fetching calendar data from ICS feeds...');
    
    try {
        const [eventsData, daysData] = await Promise.all([
            fetchICSFeed(ICS_CONFIG.feeds.events),
            fetchICSFeed(ICS_CONFIG.feeds.days)
        ]);
        
        if (eventsData || daysData) {
            calendarCache.events = eventsData || [];
            calendarCache.days = daysData || [];
            calendarCache.lastFetch = Date.now();
            
            console.log(`✅ Loaded ${calendarCache.events.length} events and ${calendarCache.days.length} calendar days from ICS`);
            
            // Dispatch event for app to know data is ready
            window.dispatchEvent(new CustomEvent('icsCalendarLoaded', {
                detail: {
                    events: calendarCache.events,
                    days: calendarCache.days,
                    source: 'live'
                }
            }));
        } else {
            throw new Error('No data received from feeds');
        }
        
    } catch (error) {
        console.warn('⚠️ Could not load live calendar data:', error.message);
        calendarCache.error = error.message;
        
        // Dispatch event with fallback notice
        window.dispatchEvent(new CustomEvent('icsCalendarLoaded', {
            detail: {
                events: [],
                days: [],
                source: 'demo',
                error: error.message
            }
        }));
    }
    
    calendarCache.isLoading = false;
    return calendarCache;
}

/**
 * Get all events (ICS + demo data merged)
 */
function getAllEvents() {
    // Merge ICS events with demo data
    const icsEvents = [...calendarCache.events, ...calendarCache.days];
    
    // Convert ICS events to app format
    const formattedICS = icsEvents.map(e => ({
        id: e.uid || `ics-${Math.random()}`,
        title: e.title,
        date: e.start,
        endDate: e.end,
        type: e.type,
        location: e.location,
        description: e.description,
        allDay: e.allDay,
        source: 'ics'
    }));
    
    // Get demo events (as fallback)
    const demoEvents = (typeof demoData !== 'undefined' && demoData.events) ? 
        demoData.events.map(e => ({ ...e, source: 'demo' })) : [];
    
    // If we have ICS data, use it; otherwise fall back to demo
    if (formattedICS.length > 0) {
        return formattedICS;
    }
    
    return demoEvents;
}

/**
 * Get events for a specific date
 */
function getEventsForDate(date) {
    const allEvents = getAllEvents();
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    const targetTime = targetDate.getTime();
    
    return allEvents.filter(event => {
        if (!event.date) return false;
        
        const eventStart = new Date(event.date);
        eventStart.setHours(0, 0, 0, 0);
        
        const eventEnd = event.endDate ? new Date(event.endDate) : eventStart;
        eventEnd.setHours(0, 0, 0, 0);
        
        return targetTime >= eventStart.getTime() && 
               targetTime <= eventEnd.getTime();
    });
}

/**
 * Get events for a month
 */
function getEventsForMonth(year, month) {
    const allEvents = getAllEvents();
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    
    return allEvents.filter(event => {
        if (!event.date) return false;
        
        const eventStart = new Date(event.date);
        const eventEnd = event.endDate ? new Date(event.endDate) : eventStart;
        
        return eventStart <= endDate && eventEnd >= startDate;
    });
}

/**
 * Get upcoming events
 */
function getUpcomingEvents(days = 14) {
    const allEvents = getAllEvents();
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const endDate = new Date(now);
    endDate.setDate(endDate.getDate() + days);
    
    return allEvents
        .filter(event => {
            if (!event.date) return false;
            const eventDate = new Date(event.date);
            return eventDate >= now && eventDate <= endDate;
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date));
}

/**
 * Check if a date has events (for calendar dots)
 */
function dateHasEvents(year, month, day) {
    const allEvents = getAllEvents();
    
    return allEvents.some(event => {
        if (!event.date) return false;
        const d = new Date(event.date);
        return d.getFullYear() === year && 
               d.getMonth() === month && 
               d.getDate() === day;
    });
}

// Export functions for use in app.js
window.ICSCalendar = {
    fetch: fetchCalendarData,
    getAllEvents,
    getEventsForDate,
    getEventsForMonth,
    getUpcomingEvents,
    dateHasEvents,
    getEventStyle,
    getCache: () => calendarCache,
    config: ICS_CONFIG
};

// Auto-fetch when module loads
if (ICS_CONFIG.useLiveData) {
    // Small delay to let app initialize first
    setTimeout(() => {
        fetchCalendarData();
    }, 500);
}
