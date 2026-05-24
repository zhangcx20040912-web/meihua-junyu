import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })
}
