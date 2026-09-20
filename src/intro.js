const INTRO_FLAG = 'forma-intro-seen'
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function createParticle(index) {
  const particle = document.createElement('span')
  const type = index % 3
  const size = 4 + Math.random() * 12
  const angle = Math.round(Math.random() * 360)
  const color = ['#818cf8', '#a855f7', '#f0abfc'][index % 3]

  particle.className = `intro-particle intro-particle-${type}`
  particle.style.setProperty('--x', `${(Math.random() * 100).toFixed(2)}vw`)
  particle.style.setProperty('--y', `${(Math.random() * 100).toFixed(2)}vh`)
  particle.style.setProperty('--size', `${size.toFixed(1)}px`)
  particle.style.setProperty('--angle', `${angle}deg`)
  particle.style.setProperty('--color', color)
  particle.style.setProperty('--delay', `${(Math.random() * 90).toFixed(0)}ms`)
  particle.style.setProperty('--duration', `${(1200 + Math.random() * 220).toFixed(0)}ms`)
  return particle
}

function finishIntro(overlay) {
  overlay.classList.add('intro-complete')
  document.body.classList.remove('intro-active')
  window.setTimeout(() => overlay.remove(), 360)
}

function startIntro() {
  if (prefersReducedMotion || sessionStorage.getItem(INTRO_FLAG)) return

  sessionStorage.setItem(INTRO_FLAG, 'true')
  document.body.classList.add('intro-active')

  const overlay = document.createElement('div')
  overlay.className = 'intro-overlay'
  overlay.setAttribute('aria-hidden', 'true')
  overlay.innerHTML = '<div class="intro-glow"></div><div class="intro-particles"></div><div class="intro-brand">FOR<span>MA.</span></div><div class="intro-flash"></div>'

  const particles = overlay.querySelector('.intro-particles')
  for (let index = 0; index < 52; index += 1) particles.appendChild(createParticle(index))
  document.body.prepend(overlay)

  window.setTimeout(() => overlay.classList.add('intro-converging'), 30)
  window.setTimeout(() => overlay.classList.add('intro-reveal'), 1320)
  window.setTimeout(() => finishIntro(overlay), 1920)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startIntro, { once: true })
} else {
  startIntro()
}
