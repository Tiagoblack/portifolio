const moreLink = document.querySelectorAll(
    '.more'
) as NodeListOf<HTMLAnchorElement>
const containerModal = document.querySelector(
    '.container_modal'
) as HTMLDivElement

const modal = document.querySelector('.modal') as HTMLDivElement
import { mountModalContent } from './modalInfon'
export const handleOpneModalLink = (index: number): ((e: Event) => void) => {
    return function (e: Event) {
        containerModal.style.display = 'flex'
        setTimeout(() => {
            modal.classList.add('open')
        }, 100)
        e.preventDefault()
        mountModalContent(index)
    }
}

moreLink.forEach((item, index) => {
    item.addEventListener('click', handleOpneModalLink(index))
})

containerModal.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement
    console.log(target.className)
    let tagerts: string[] = ['container_modal', 'close_modal', 'fas fa-close']
    if (tagerts.includes(target.className)) {
        containerModal.style.display = 'none'
        modal.classList.remove('open')
    }
})
