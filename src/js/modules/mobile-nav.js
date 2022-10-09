export function mobileNav(className) {
    const container = document.querySelector(`.${className}`);
    const navBtn = container.querySelector(`.${className}-top__btn`);
    const iconBtn = container.querySelector(`.${className}-top__icon`);
    const menuMobile = container.querySelector(`.${className}-nav`);
    const menuMobileActive = container.querySelector(`.${className}-nav--active`);
    const logoBlack = container.querySelector('.logo__black')
    const logoWhite = container.querySelector('.logo__white')

    const openMenu = () => {
        menuMobile.classList.add('header-nav--active');
        iconBtn.classList.add('header-top__icon--active');
        // if (logoBlack) {
        //     logoBlack.style.display = "none"
        //     logoWhite.style.display = "block"
        // }
    }

    const closeMenu = () => {
        menuMobile.classList.remove('header-nav--active');
        iconBtn.classList.remove('header-top__icon--active');
        // if (logoBlack) {
        //     logoBlack.style.display = 'block';
        //     logoWhite.style.display = 'none';
        // }
    }

    const clickMenuHandler = () => {
        menuMobile.classList.toggle ('header-nav--active');
        iconBtn.classList.toggle    ('header-top__icon--active');
        if (logoBlack) {
            logoBlack.classList.toggle('logo__black--hidden');
            logoWhite.classList.toggle('logo__white--hidden');
            navBtn.classList.toggle(`${className}-top__btn--black`);
        }
    };

    navBtn.addEventListener('click', clickMenuHandler);
}