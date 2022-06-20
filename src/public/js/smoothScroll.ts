// export const links = document.querySelectorAll(
//     'header li a'
// ) as NodeListOf<HTMLLinkElement>

const getClickElementHref = (el: HTMLAnchorElement) => {
    const id = el.getAttribute('href') as string
    const elSelecteDom = document.querySelector(id) as HTMLElement
    return elSelecteDom.offsetTop
}

export const smoothScroll = (e: Event) => {
    const target = e.currentTarget as HTMLLIElement
    let element = target.querySelector('a') as HTMLAnchorElement
    let to = getClickElementHref(element)
    window.scroll({
        top: to - 90,
        behavior: 'smooth',
    })
}
