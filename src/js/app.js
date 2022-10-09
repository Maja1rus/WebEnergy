
import { mobileNav } from "./modules/mobile-nav.js";
import { sliderStep } from "./modules/cost-slide.js";
import { formValid } from "./modules/form-valid.js";
import { phoneMask } from "./modules/phone-mask.js";
import { YandexMaps } from "./modules/map.js";
import { checkTag } from "./modules/check-tags.js";
import { moreTags } from "./modules/more-tags.js";
import { caseLink } from "./modules/case-link.js";
import { swiperFn, SwiperInit } from "./modules/swiper.js";
import { landingHover } from "./modules/landing-hover.js";
import { blockFixed } from "./modules/fixed.js";
import { typing } from "./modules/typing.js";
import { animationFn } from "./modules/animation.js";
import { headerColor } from "./modules/header-color.js";
import { popup } from "./modules/popup.js";
import { popupDateset } from "./modules/popup-dataset.js";
import { DOMik } from "./modules/upakovka.js"

SwiperInit()
/////////==== функция открывает мобильное меню ====/////////
try {
    const header = document.querySelector('.header')
    if (header) {
        mobileNav('header');
        
        const headerTop = header.querySelector('.header-top__contaner')
        const headerNav = header.querySelector('.header-nav')
        if (headerTop) {
            blockFixed(headerTop, 600);
            blockFixed(headerNav, 600);
        }
    }
} catch (error) {
    console.log(error);
}

// ==== Перелистывание страниц калькулятора ==== //
try {
    const cost = document.querySelector('.cost')
    if (cost) {
        sliderStep('cost')
    }
} catch (error) {
    console.log(error)
}

const forms = document.querySelectorAll('.contact-form');

// ==== маска телефона ==== //
// ==== VALIDATION FORM ==== //
try {
    if (forms.length > 0) {
        forms.forEach(form => {
            phoneMask(form, 'contact-form');
            formValid(form, 'contact-form');
        })
    }
} catch (error) {
    console.log(error);
}

// ==== MAP ==== //
try {
    const mapContainer = document.querySelector('.map');
    if (mapContainer) {
        const obj = {
            containerId: 'map', // контейнер, куда загружается карта
            coords: '', // список адресов, которые выводим на карты
            // url: URL, // адрес апи
            center: [59.96803404862368, 30.337040841634103], // центр карты
            zoom: 16, // величина зума
            find: false, // возможность открытия бабла по клику вне карты
            coordsMarker: [59.96814433210071, 30.33799309471272]
        };
        const mapInit = new YandexMaps(obj);
    }
} catch (error) {
    console.log(error);
}

// ==== CHECK TAGS ALL ==== //
try {
    const portfolioTags = document.querySelector(".portfolio-tags");
    if (portfolioTags) {
        checkTag(portfolioTags)
        moreTags(portfolioTags)
    }
} catch (error) {
    console.log(error);
}

// ==== CASE LINK ==== //
try {
    const caseItem = document.querySelectorAll('.portfolio-content__item');
    if (caseItem.length > 0) {
        caseLink(caseItem)
    }
} catch (error) {
    console.log(error);
}

// ==== LANDING SWIPER ==== //

try {
    const landingSwiper = document.querySelector('.landing-digital');
    if (landingSwiper) {
        swiperFn()
    }
} catch (error) {
    console.log(error);
}

// ==== LANDING HOVER ==== //

try {
    const landingWrap = document.querySelector('.landing-digital--wrap');
    if (landingWrap) {
        landingHover(landingWrap);
    }
} catch (error) {
    console.log(error);
}

// ==== TYPING ==== //
try {
    const typingBlock = document.querySelector('.typing')
    if (typingBlock) {
        typing(typingBlock)
    }
} catch (error) {
    console.log(error);
}

// ==== ANIMATION ==== //
try {
    const animItems = document.querySelectorAll('._anim-items');
    if (animItems.length > 0) {
        window.addEventListener('scroll', () => {
            animationFn(animItems);
        });
        setTimeout(() => {
            animationFn(animItems);
        }, 300);
    }
} catch (error) {
    console.log(error);
}



// ==== HEDER COLOR ==== //
try {
    const header = document.querySelector('.header')
    if (header) {
        headerColor(header)
    }
} catch (error) {
    console.log(error);
}

// ==== feedback-popup ==== //
try {
    const btnsFeedback = document.querySelectorAll('.open-popup-feedback');
    if (btnsFeedback.length > 0) {
        const feedbackPopup = document.querySelector('.popup-feedback');
        btnsFeedback.forEach(btnFeedback => {
            btnFeedback.addEventListener('click', () => {
                popup(feedbackPopup);
                popupDateset(btnFeedback.innerText, feedbackPopup);
            })
        })
    }
} catch (error) {
    console.log(error);
}
// солнце в упаковке //
try {
    const upakovka = document.querySelector('.upakovka__sun')
    if (upakovka) {
        DOMik()
    }

} catch (error) {
    console.log(error)
}