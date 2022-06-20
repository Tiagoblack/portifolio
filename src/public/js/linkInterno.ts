import { smoothScroll } from './smoothScroll'
const links = document.querySelectorAll(
    'header li'
) as NodeListOf<HTMLLIElement>
const linksSpace = document.querySelectorAll(
    'header li .space-header'
) as NodeListOf<HTMLDivElement>

export const handleClickLink = (e: Event) => {
    let target = e.currentTarget as HTMLLinkElement
    linksSpace.forEach(item => item.classList.remove('active'))
    target.querySelector('.space-header')?.classList.add('active')
}
links.forEach(item => {
    item.addEventListener('click', (e: Event) => {
        e.preventDefault()
        handleClickLink(e)
        smoothScroll(e)
    })
})
