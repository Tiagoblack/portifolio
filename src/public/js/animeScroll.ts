export const animes = document.querySelectorAll(
    '[data-anime]'
) as NodeListOf<HTMLElement>

export const scrollListener = () => {
    const scrollerY = window.pageYOffset + (window.innerHeight * 3) / 4
    animes.forEach(item => {
        if (scrollerY > item.offsetTop) {
            item.classList.add('numo')
        } else {
            item.classList.remove('numo')
        }
    })
}
