var header_nav = document.querySelector('.header__nav');
var header__top_bar = document.querySelector('.header__top-bar');

function onScroll(e) {
    window.scrollY > 50 ? header_nav.classList.add('collapse')
        : header_nav.classList.remove('collapse');

    window.scrollY > 50 ? header__top_bar.classList.add('header__top-bar-remove')
        : header__top_bar.classList.remove('header__top-bar-remove');

}
document.addEventListener('scroll', onScroll);


const navBar_item = document.querySelectorAll('.container__search-navbar-item');

// Click nav-item
navBar_item.forEach(e => {
    e.addEventListener('click', function () {
        navBar_item.forEach(e1 => e1.classList.remove('active'));
        this.classList.add('active');
    })
})

