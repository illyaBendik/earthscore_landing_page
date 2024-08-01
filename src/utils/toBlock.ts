export const toBlock = (id: string, margin: number) => {
  const element = document.getElementById(id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const offset = window.scrollY + rect.top - margin

    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    })
  }
}

export const toBlockWithPromise = async (id: string, block: ScrollLogicalPosition | undefined) => {
  const node = document.getElementById(id) as HTMLElement
  node.scrollIntoView({
    block,
    behavior: 'smooth'
  })

  return new Promise((resolve) => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setTimeout(() => {
          resolve(true)
          intersectionObserver.unobserve(node)
        }, 100)
      }
    })
    intersectionObserver.observe(node)
  })
}
