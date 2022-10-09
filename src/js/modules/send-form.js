import { sendData } from "./send-data.js";

const NOTIFY_URL = '/udata/data/send_mail.json';
export const sendForm = (form) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.click = form.dataset.click  
    const formList = JSON.stringify(data);

    sendData(NOTIFY_URL, formList)
        .then(() => {
            form.reset();
        })
        .catch(err => {
            console.log(err);
        });
};
