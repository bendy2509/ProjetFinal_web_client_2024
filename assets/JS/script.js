function toggleMenu() {
    var navLinks = document.getElementById('nav-links');
    var menuButtonIcon = document.querySelector('.menu-button i');

    if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuButtonIcon.classList.remove('fa-times');
        menuButtonIcon.classList.add('fa-bars');
    } else {
        navLinks.classList.add('show');
        menuButtonIcon.classList.remove('fa-bars');
        menuButtonIcon.classList.add('fa-times');
    }
}
