export function moreTags(className) {
    const moreWrap = className.querySelector(".portfolio-tags__wrap");
    const moreBtn = className.querySelector('.portfolio-tag__btn');

    moreBtn.addEventListener('click', moreHandler);

    function moreHandler() {
        if (moreWrap.classList.contains('active') === false) {
            moreWrap.classList.add('active');
            moreBtn.innerText = `Свернуть`
        } else {
            moreWrap.classList.remove('active');
            moreBtn.innerText = `Развернуть`
        }
    }
}