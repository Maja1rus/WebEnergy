export function landingHover(className) {
    const textOne = className.querySelector('.landing-digital__item--one');
    const textTwo = className.querySelector('.landing-digital__item--two');
    const textThree = className.querySelector('.landing-digital__item--three');
    const imgOne = className.querySelector('.landing-digital__img--one');
    const imgTwo = className.querySelector('.landing-digital__img--two');
    const imgThree = className.querySelector('.landing-digital__img--three');

    textOne.addEventListener("mouseover", () => {
        imgOne.classList.add('active')
        imgTwo.classList.remove('active')
        imgThree.classList.remove('active')
    })
    textTwo.addEventListener("mouseover", () => {
        imgOne.classList.remove('active')
        imgTwo.classList.add('active')
        imgThree.classList.remove('active')
    })
    textThree.addEventListener("mouseover", () => {
        imgOne.classList.remove('active')
        imgTwo.classList.remove('active')
        imgThree.classList.add('active')
    })

}