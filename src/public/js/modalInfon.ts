import api from './stackApi'

//const modalContent = document.querySelector('.content_modal') as HTMLDivElement
const titleModal = document.querySelector('.title-modal') as HTMLHRElement

const imgModal = document.querySelector(
    '.container_img-modal img'
) as HTMLImageElement

const modalDesc = document.querySelector('.desc-modal') as HTMLParagraphElement

const modalStacks = document.querySelector(
    '.contaiener_stacks-modal'
) as HTMLDivElement

export function mountModalContent(index: number) {
    const targetModal = api[index]
    titleModal.innerText = targetModal.name
    imgModal.src = targetModal.img
    modalStacks.innerHTML = ''
    targetModal.stacks.forEach(item => {
        modalStacks.innerHTML += `<i class="fab fa-${item}"></i>`
    })

    modalDesc.innerText = targetModal.desc
}
