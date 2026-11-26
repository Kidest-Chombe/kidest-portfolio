console.log('loaded');

document.addEventListener('keydown', (e) => {
    console.log('Key pressed:', e.key);
});

const hamburgerBtn = document.querySelector('#hamburger-btn');
const navDrawer = document.querySelector('#main-nav');
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

if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
}

navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer && navDrawer.classList.contains('open')) {
        closeDrawer();
    }
});
