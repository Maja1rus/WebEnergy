export function checkTag(className) {
    const checkTags = className.querySelectorAll('.checkbox-tag-js');
    const checkTagAll = className.querySelector('.checkbox-tag-all-js');

    checkTagAll.addEventListener('change', checkAllHandler);
        checkTags.forEach(checkTag => {
        checkTag.addEventListener("change", () => {
            checkHandler(checkTag);
        })
    })

    function checkAllHandler() {
        if (checkTagAll.checked === true) {
            checkTags.forEach(checkTag => {
                checkTag.checked = false;
            })
        } 
        checkTagAll.checked = true;
    }

    function checkHandler() {
        checkTagAll.checked = false;
    }
}