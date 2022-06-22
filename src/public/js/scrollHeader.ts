const header = document.querySelector('header') as HTMLHeadingElement
const floatButton = document.querySelector('.float_botton ') as HTMLDivElement
export const scrollListener = () => {
    if (window.scrollY >= 10) {
        header.style.backgroundColor = '#121212 '
        floatButton.style.display = 'flex'
    } else {
        floatButton.style.display = 'none'
        header.style.backgroundColor = 'transparent '
    }
}
