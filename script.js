
console.log('loaded');


const themeBtn = document.querySelector('#theme');
const mainTitle = document.querySelector('#main-title');
const nameInput = document.querySelector('#user-name');
const livePreview = document.querySelector('#live-name-preview');
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');


// 4. Change text safely (never innerHTML with user input)
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        mainTitle.textContent = 'Welcome! I am Kidest';
    });
}

// 5. Read what is typed - show it live on the page
if (nameInput && livePreview) {
    nameInput.addEventListener('input', () => {
        livePreview.textContent = nameInput.value.trim() || 'friend';
    });
}


document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
});


if (contactForm && formFeedback && nameInput && livePreview) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredName = nameInput.value.trim();
        // Using textContent for safe output (never innerHTML with user input)
        formFeedback.textContent = `Thanks, ${enteredName}! Your message has been received.`;
        contactForm.reset();
        livePreview.textContent = 'friend';
    });
}


const hamburgerBtn = document.querySelector('#hamburger-btn');
const navDrawer = document.querySelector('#main-nav');
const drawerClose = document.querySelector('#drawer-close');
const drawerOverlay = document.querySelector('#drawer-overlay');
const navLinks = document.querySelectorAll('.nav-drawer .nav-link');

function openDrawer() {
    if (navDrawer && drawerOverlay) {
        navDrawer.classList.add('open');
        drawerOverlay.classList.add('active');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }
}

function closeDrawer() {
    if (navDrawer && drawerOverlay) {
        navDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
        if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', openDrawer);
}

if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
}

if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
}

// Close drawer automatically when any nav link is tapped
navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('open')) {
        closeDrawer();
    }
});
