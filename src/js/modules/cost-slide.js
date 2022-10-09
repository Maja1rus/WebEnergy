export function sliderStep(className) {
    // Получаем переменные
    const container = document.querySelector(`.${className}`);
    const btnPrev = container.querySelector(`.${className}-btn__prev`);
    const btnNext = container.querySelector(`.${className}-btn__next`);
    const btnEnd = container.querySelector(`.${className}-btn__end`)
    const hiddenElement = container.querySelectorAll(`.${className}__wrap`);
    /* Индекс слайда по умолчанию */
    let slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);
    }

    // Скролл в начало слайда
    function ButtonClickHandle() {
        hiddenElement.forEach(item => {
            item.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    }

    function btnHidden (btn) {
        btn.classList.add('cost-btn__hidden');
        btn.classList.remove('cost-btn__active');
    }
    function btnActive(btn) {
        btn.classList.add('cost-btn__active');
        btn.classList.remove('cost-btn__hidden');
    }
    /* Основная функция сладера */
    function showSlides(n) {
        const slides = container.querySelectorAll(`.${className}__item`);

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;

        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slideIndex <= 1) {
            btnHidden(btnPrev);
        } else {
            btnActive(btnPrev);
        }

        if (slideIndex >= 3) {
            btnActive(btnEnd);
            btnHidden(btnNext);
        } else {
            btnActive(btnNext);
            btnHidden(btnEnd);
        }

        slides[slideIndex - 1].style.display = "block";

    }

    btnNext.addEventListener('click', (e) => {
        e.preventDefault();
        plusSlide();
        ButtonClickHandle();
    })
    btnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        minusSlide();
        ButtonClickHandle();
    })
}