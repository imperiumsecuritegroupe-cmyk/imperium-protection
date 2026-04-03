'use client'

import { useEffect } from 'react'

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function animateCounter(el: HTMLElement, target: number, duration: number) {
  const start = performance.now()
  const suffix = el.dataset.suffix || ''
  function update(now: number) {
    const t = Math.min((now - start) / duration, 1)
    const val = Math.floor(target * easeOut(t))
    el.textContent = val + suffix
    if (t < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

export default function ScrollAnimations() {
  useEffect(() => {
    // Fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document
      .querySelectorAll(
        '.service-card, .why-card, .team-card, .testi-card, .cov-item, .about-content, .about-img-wrap'
      )
      .forEach((el) => {
        el.classList.add('anim-fade')
        observer.observe(el)
      })

    // Counter animation
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const num = e.target as HTMLElement
            const rawText = num.textContent || ''
            const val = parseInt(rawText, 10)
            num.dataset.suffix = rawText.replace(/\d/g, '')
            animateCounter(num, val, 1800)
            counterObserver.unobserve(num)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('.badge-num').forEach((el) => counterObserver.observe(el))

    // Section active highlight
    const sections = document.querySelectorAll('section[id]')
    const navAs = document.querySelectorAll('.nav-links a')

    const secObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navAs.forEach((a) => a.classList.remove('active'))
            const active = document.querySelector(`.nav-links a[data-scroll="${e.target.id}"]`)
            if (active) active.classList.add('active')
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((s) => secObserver.observe(s))

    // Smooth scroll for all [data-scroll] elements (hero buttons, nav links, etc.)
    function handleScrollClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('[data-scroll]')
      if (!target) return
      const id = (target as HTMLElement).dataset.scroll
      if (!id) return
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handleScrollClick)

    return () => {
      observer.disconnect()
      counterObserver.disconnect()
      secObserver.disconnect()
      document.removeEventListener('click', handleScrollClick)
    }
  }, [])

  return null
}
