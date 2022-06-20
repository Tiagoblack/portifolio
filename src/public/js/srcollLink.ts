export const indexScroll = document.querySelectorAll(
    '[data-index]'
) as NodeListOf<HTMLElement>

export const links = document.querySelectorAll(
    'header li'
) as NodeListOf<HTMLLIElement>
export const linksSpace = document.querySelectorAll(
    'header li .space-header'
) as NodeListOf<HTMLDivElement>

const srcollLink = (index: number) => {
    linksSpace.forEach(item => item.classList.remove('active'))
    linksSpace[index].classList.add('active')
}

export const scrollIndexLink = () => {
    const pageScroll = window.scrollY + 100
    indexScroll.forEach(item => {
        if (pageScroll >= item.offsetTop) {
            const index = item.getAttribute('data-index') as string
            const indexIn: number = parseInt(index)
            srcollLink(indexIn)
        }
    })
}
