document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navLeft = document.querySelector('.nav-left');
    
    menuToggle.addEventListener('click', function() {
        navLeft.classList.toggle('active');
    });
});
