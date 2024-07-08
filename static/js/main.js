document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Downward scroll
            navbar.classList.add('translate-y-0', 'opacity-100');
            navbar.classList.remove('-translate-y-full', 'opacity-0');
        } else {
            // Upward scroll
            if (scrollTop === 0) {
                navbar.classList.remove('translate-y-0');
                navbar.classList.add('opacity-0', '-translate-y-full');
            }
        }
        lastScrollTop = scrollTop;
    });
});
