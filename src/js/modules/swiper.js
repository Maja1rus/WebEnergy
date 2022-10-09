import Swiper, {
    Autoplay, Navigation, Pagination
} from "swiper";
Swiper.use([Pagination, Navigation])
export function swiperFn() {
    var swiper = new Swiper(".mySwiper", {
        modules: [Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        speed: 1000,
    });
}

export function SwiperInit() {
    function enableSwiper() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            if (document.querySelector('.planets-container')) {
                document.querySelector('.planets-container').classList.add('swiper-container')
                document.querySelector('.planets__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.planets__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.points__swiper')) {
                document.querySelector('.points__swiper').classList.add('swiper')
                document.querySelector('.points__swiper').classList.add('swiper-container')
                document.querySelector('.points__wrapper').classList.add('swiper-wrapper')
                document.querySelectorAll('.points__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
        }
        if (window.matchMedia('(max-width: 1024px)').matches) {
            if (document.querySelector('.team__swiper')) {
                document.querySelector('.team__swiper').classList.add('swiper-container')
                document.querySelector('.team__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.team__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.profit__swiper')) {
                document.querySelector('.profit__swiper').classList.add('swiper-container')
                document.querySelector('.profit__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.profit__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.clients__swiper')) {
                document.querySelector('.clients__swiper').classList.add('swiper-container')
                document.querySelector('.clients__swiper').classList.add('swiper')
                document.querySelector('.clients__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.clients__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
        }
        if (window.matchMedia('(max-width: 1100px)').matches) {
            if (document.querySelector('.rate__swiper')) {
                document.querySelector('.rate__swiper').classList.add('swiper-container')
                document.querySelector('.rate__swiper').classList.add('swiper')
                document.querySelector('.rate__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.rate__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
        }
    }
    enableSwiper()
    const clientsSwiper = new Swiper('.clients__swiper', {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".swiper__pagination"
        }
    })
    const rateSwiper = new Swiper('.rate__swiper', {
        modules: [Pagination],
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".rate__swiper .swiper-pagination"
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            650: {
                slidesPerView: 2
            }
        }
    })
    const profitSwiper = new Swiper('.profit__swiper', {
        modules: [Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".swiper-pagination"
        }
    })
    const teamSwiper = new Swiper('.team__swiper', {
        modules: [Pagination],
        loop: false,
        pagination: {
            el: ".swiper-pagination"
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            500: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            900: {
                slidesPerView: 4
            }
        }
    })
    const pointsSwiper = new Swiper('.points__swiper', {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".points__swiper .swiper-pagination"
        }
    })
    const planetsSwiper = new Swiper(".planets-container", {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
          el: ".swiper-pagination"
      }
    })    
}
