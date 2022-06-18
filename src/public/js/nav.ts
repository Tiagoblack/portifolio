const menu = document.querySelector('.menu') as HTMLDivElement
const navMenu = document.querySelector('nav ul') as HTMLUListElement

export const handleClickOpenMenu = (e: Event) => {
    const target = e.currentTarget as HTMLDivElement
    const icone = target.querySelector('i') as HTMLElement
    if (navMenu.style.display == 'flex') {
        navMenu.style.display = 'none'
        classToggle(icone)
    } else {
        classToggle(icone)
        navMenu.style.display = 'flex'
    }
}

const classToggle = (target: HTMLElement) => {
    if (target.classList.contains('fa-bars') == true) {
        target.classList.remove('fa-bars')
        target.classList.add('fa-times')
    } else {
        target.classList.remove('fa-times')
        target.classList.add('fa-bars')
    }
}
menu.addEventListener('click', handleClickOpenMenu)
