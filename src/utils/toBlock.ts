export const toBlock = (id: string, block: ScrollLogicalPosition | undefined) => {
  document.getElementById(id)?.scrollIntoView({
    block,
    behavior: 'smooth'
  })
}
