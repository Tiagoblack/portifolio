export const floatButton = document.querySelector(
    '.float_botton '
) as HTMLDivElement

floatButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
