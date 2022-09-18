const topnav = document.querySelector('nav');

// Detects whether page has been scrolled down
window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 || window.pageYOffset !== 0) {
        // Change background to white when scrolled down
        topnav.classList.add('bg-white');
        topnav.classList.add('shadow-md');
    }
    else {
        // Make background transparent ("default") if user is at page top
        topnav.classList.remove('bg-white');
        topnav.classList.remove('shadow-md');
    }
})