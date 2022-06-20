const homeTitle = document.querySelector('.porti_title') as HTMLHtmlElement
const textAnimated: string = 'Olá. Eu sou Tiago'

export const titleAnimated = () => {
    const arrTitle = textAnimated.split('')
    arrTitle.forEach((item, i) => {
        setTimeout(() => {
            homeTitle.innerHTML += item
        }, i * 100)
    })
}

setTimeout(titleAnimated, 2000)
