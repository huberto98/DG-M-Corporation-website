const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const footerYear = document.querySelector('.footer__year')
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav__link')


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    body.classList.toggle('mobile-overflow');

    navLinks.forEach(item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove("nav-mobile--active");
            navBtn.classList.remove("is-active");
            body.classList.remove("mobile-overflow");
        })
    })
}

navBtn.addEventListener('click', handleNav)


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear()

