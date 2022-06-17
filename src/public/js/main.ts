export {}

const header = document.querySelector('header') as HTMLHeadingElement

const scrollListener = () => {
    if (window.scrollY >= 10) {
        console.log(window.screenY)
        header.style.backgroundColor = '#121212 '
    } else {
        header.style.backgroundColor = 'transparent '
    }
}

window.addEventListener('scroll', scrollListener)
