import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  const initScrollReveal = () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReducedMotion) {
      // If user prefers reduced motion, show all elements immediately
      const elements = document.querySelectorAll('.reveal-element')
      elements.forEach(el => {
        el.classList.add('revealed')
      })
      return
    }

    // Create intersection observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            // Optional: stop observing after reveal
            // observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observe all elements with reveal-element class
    const elements = document.querySelectorAll('.reveal-element')
    elements.forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollReveal, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollReveal
  }
}
