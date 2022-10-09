const one = document.querySelector('.upakovka__content-item-1')
const two = document.querySelector('.upakovka__content-item-2')
const three = document.querySelector('.upakovka__content-item-3')
const four = document.querySelector('.upakovka__content-item-4')
const five = document.querySelector('.upakovka__content-item-5')
const six = document.querySelector('.upakovka__content-item-6')
const seven = document.querySelector('.upakovka__content-item-7')
const eight = document.querySelector('.upakovka__content-item-8')
const nine = document.querySelector('.upakovka__content-item-9')
const zero = document.querySelector('.upakovka__content-item-0')
const items = document.querySelectorAll('.upakovka__content-item')
const title = document.querySelector('.upakovka__content-text')
const subtitle = document.querySelector('.upakovka__content-blur')

const textOne = "Проведем аудит и анализ бизнеса, разработаем стратегию развития вашего бизнеса."
const textTwo = "После полного аудита компании и ваших конкурентов сформируем план, в котором полностью расчитаем стоимость услуг"
const textThree = "После соглосования аудита, создаём визуальный шаблон и индивидуальный прототип будущего проекта."
const textFour = "На основе индивидуального прототипа создадим контент, дизайн, стиль и визуальное оформление вашнго сайта и других площадок."
const textFive = "После дизайна составляем продающие тексты и полностью упаковываем ваш сайт и другие площадки."
const textSix = "Запускаем рекламу формируем поток клиентов с площадок и вашего сайта."
const textSeven = "После прихода к вам клиентов , проводим  анализ, для улучшения показателей.  В конце работы предоставляем отчёт."
const textEight = "После анализа мы определяем ежемесячный план работ и занимаемся дальнейшим продвижением и обслуживанием вашего проекта."
const textNine = "После первого анализа, продалжаем анализировать и создавать ежемесячные планы работ по продвижению и ослуживанию вашего бизнеса."
const textZero = "Углубимся в тематику, проработаем все смыслы. Создадим крутой визуал, который будет приносить прибыль."

export function DOMik() {
  function unit(item) {
    items.forEach((item) => {
      item.classList.remove('upakovka__content-item_active')
    })
    subtitle.setAttribute("style", "display: block")
    item.classList.add('upakovka__content-item_active')
  }
  one.addEventListener('mouseover', () => {
    unit(one)
    title.textContent = "Анализ бизнеса"
    subtitle.textContent = textOne;
  })
  two.addEventListener('mouseover', () => {
    unit(two)
    title.textContent = "План Работы"
    subtitle.textContent = textTwo
  })
  three.addEventListener('mouseover', () => {
    unit(three)
    title.textContent = "Прототипирование"
    subtitle.textContent = textThree
  })
  four.addEventListener('mouseover', () => {
    unit(four)
    title.textContent = "Дизайн"
    subtitle.textContent = textFour
  })
  five.addEventListener('mouseover', () => {
    unit(five)
    title.textContent = "Упаковка смыслов"
    subtitle.textContent = textFive
  })
  six.addEventListener('mouseover', () => {
    unit(six)
    title.textContent = "Продвижение"
    subtitle.textContent = textSix
  })
  seven.addEventListener('mouseover', () => {
    unit(seven)
    title.textContent = "Аналитика"
    subtitle.textContent = textSeven
  })
  eight.addEventListener('mouseover', () => {
    unit(eight)
    title.textContent = "Ежемесячный план работ"
    subtitle.textContent = textEight
  })
  nine.addEventListener('mouseover', () => {
    unit(nine)
    title.textContent = "Сопровождение"
    subtitle.textContent = textNine
  })
  zero.addEventListener('mouseover', () => {
    unit(zero)
    title.textContent = "Упаковка бизнеса"
    subtitle.textContent = textZero
  })
}
