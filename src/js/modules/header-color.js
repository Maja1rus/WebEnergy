export function headerColor(header) {
    const sections = document.querySelectorAll('section');
    const topBtn = header.querySelector('.header-top__btn');
    const logo = header.querySelector('.logo img');

    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0) {
                if (entry.target.classList.contains('black') === true) {
                    headerColorBlack()
                } 
                if (entry.target.classList.contains('white') === true) { 
                    headerColorWhire()
                }
            }
        })
    }

    const sectionObserver = new IntersectionObserver(callback, {
        threshold: 1,
    })

    window.addEventListener('scroll', showObserver);

    function showObserver() {
        if (window.pageYOffset > 500) {
            sections.forEach(section => sectionObserver.observe(section))
        } else {
             headerColorWhire()
        }
    }

    function headerColorBlack() {
        topBtn.classList.add('header-top__btn--black');
        logo.src = 'img/icon/logo-black.svg'
    }
    
    function headerColorWhire() {
        topBtn.classList.remove('header-top__btn--black');
        logo.src = 'img/icon/logo.svg'
    }
}