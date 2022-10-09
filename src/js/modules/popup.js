export function popup(popup) {
    const popupClose = popup.querySelector('.popup__close');
    const body = document.querySelector('body')

    // scroll
    const documentWidth = parseInt(document.documentElement.clientWidth);
    const windowWidth = parseInt(window.innerWidth);
    const scrollbarWidth = windowWidth - documentWidth;

    function popupOpenHandler() {
        popup.classList.add('active');
        body.style.marginRight = `${scrollbarWidth}px`;
        body.classList.add('modal-open');

        popup.addEventListener('click', popupOverlayHandler)
        popupClose.addEventListener('click', popupCloseHandler);
        window.addEventListener('keydown', escapeHandler);
    }

    function popupCloseHandler() {
        popup.classList.remove('active');
        body.classList.remove('modal-open');
        body.style.removeProperty('margin-right');

        popup.removeEventListener('click', popupCloseHandler);
        popupClose.removeEventListener('click', popupCloseHandler);
        window.removeEventListener('keydown', escapeHandler);
    }

    function popupOverlayHandler(e) {
        if (e.target.classList.contains('popup') === true) {
            popupCloseHandler()
        }
    }

    function escapeHandler(e) {
        if (e.key === 'Escape') {
            popupCloseHandler()
        }
    }

    popupOpenHandler()

    // закрытие модаки со статусом через 10 сек
    if (popup.classList.contains('popup-status') === true) {
        setTimeout(popupCloseHandler, 10000);
    }

}

export function popupClose() {
    const popupFeedback = document.querySelector('.popup-feedback')

    const body = document.querySelector('body')
    popupFeedback.classList.remove('active');
    body.classList.remove('modal-open');
    body.style.removeProperty('margin-right');
}