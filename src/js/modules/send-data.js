import { popup, popupClose } from "./popup.js";

export const sendData = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        body: data
    });

    const popupStatus = document.querySelector('.popup-status')
    const title = popupStatus.querySelector('.popup-status__title')
    const subtitle = popupStatus.querySelector('.popup-status__subtitle')
    const img = popupStatus.querySelector('.popup-status__img img')

    if (!response.ok) {
        title.innerText = `Завку отправить не удалось!`
        subtitle.innerText = `Пожалуйста, повторите попытку позже или используйте другой способ связи`
        img.src = 'img/icon/icon-error.svg'
        popupClose()
        popup(popupStatus)
        throw new Error(
            `Ошибка по адреcу ${url}, статус ошибки ${response.status}`
        );
    } else {
        popupClose()
        popup(popupStatus)
    }
    return await response.json();
};