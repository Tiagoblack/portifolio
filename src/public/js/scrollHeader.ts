const header = document.querySelector('header') as HTMLHeadingElement

export const scrollListener = () => {
    if (window.scrollY >= 10) {
        header.style.backgroundColor = '#121212 '
    } else {
        header.style.backgroundColor = 'transparent '
    }
}
