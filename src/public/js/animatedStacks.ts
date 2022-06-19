const contentSkills = document.querySelectorAll(
    '.content-skills'
) as NodeListOf<HTMLDivElement>

export const animatedStacksAdd = () => {
    contentSkills.forEach((item, i) => {
        setTimeout(() => {
            item.classList.add('active')
        }, i * 300)
    })
}

export const animatedStacksRemove = () => {
    contentSkills.forEach(item => {
        item.classList.remove('active')
    })
}
