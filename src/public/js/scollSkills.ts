import { animatedStacksAdd, animatedStacksRemove } from './animatedStacks'

const containerSkills = document.querySelector(
    '.container-skills'
) as HTMLDivElement

export const scrollSkills = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4

    if (windowTop > containerSkills.offsetTop) {
        animatedStacksAdd()
    } else {
        animatedStacksRemove()
    }
}
