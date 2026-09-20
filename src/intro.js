const INTRO_FLAG = 'forma-intro-seen'
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const PARTICLE_COUNT = 80
const COLORS = ['#818cf8', '#a855f7', '#f0abfc']

function createParticle(index) {
  const particle = document.createElement('span')
  const type = index % 3
  const size = 4 + Math.random() * 12
  const angle = Math.round(Math.random() * 360)
  const color = COLORS[index % COLORS.length]

  // Allow particles to begin slightly beyond every viewport edge for a deeper sweep.
  particle.className = `intro-particle intro-particle-${type}`
  particle.style.setProperty('--x', `${(-16 + Math.random() * 132).toFixed(2)}vw`)
  particle.style.setProperty('--y', `${(-16 + Math.random() * 132).toFixed(2)}vh`)
  particle.style.setProperty('--size', `${size.toFixed(1)}px`)
  particle.style.setProperty('--angle', `${angle}deg`)
  particle.style.setProperty('--color', color)
  particle.style.setProperty('--delay', `${(Math.random() * 150).toFixed(0)}ms`)
  particle.style.setProperty('--duration', `${(1850 + Math.random() * 350).toFixed(0)}ms`)
  return particle
}

function playConvergenceSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext
  if (!AudioContext) return

  const context = new AudioContext()
  const now = context.currentTime
  const gain = context.createGain()
  const oscillator = context.createOscillator()
  const shimmer = context.createOscillator()
  const shimmerGain = context.createGain()

  oscillator.type = 'sine'
  oscillator.frequency.setValueAtTime(180, now)
  oscillator.frequency.exponentialRampToValueAtTime(620, now + 0.32)
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.16)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.48)

  shimmer.type = 'sine'
  shimmer.frequency.setValueAtTime(880, now + 0.22)
  shimmer.frequency.exponentialRampToValueAtTime(1320, now + 0.42)
  shimmerGain.gain.setValueAtTime(0.0001, now)
  shimmerGain.gain.exponentialRampToValueAtTime(0.018, now + 0.25)
  shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52)

  oscillator.connect(gain).connect(context.destination)
  shimmer.connect(shimmerGain).connect(context.destination)
  oscillator.start(now)
  shimmer.start(now)
  oscillator.stop(now + 0.52)
  shimmer.stop(now + 0.56)
  window.setTimeout(() => context.close(), 700)
}

function finishIntro(overlay) {
  overlay.classList.add('intro-complete')
  document.body.classList.remove('intro-active')
  window.setTimeout(() => overlay.remove(), 420)
}

function startIntro() {
  if (prefersReducedMotion || sessionStorage.getItem(INTRO_FLAG)) return

  sessionStorage.setItem(INTRO_FLAG, 'true')
  document.body.classList.add('intro-active')

  const overlay = document.createElement('div')
  overlay.className = 'intro-overlay'
  overlay.setAttribute('aria-hidden', 'true')
  overlay.innerHTML = `
    <div class="intro-starfield"></div>
    <div class="intro-glow"></div>
    <div class="intro-particles"></div>
    <div class="intro-brand">FOR<span>MA.</span></div>
    <div class="intro-flash"></div>
    <button class="intro-sound-toggle" type="button" aria-label="Включить звук intro" aria-pressed="false">◌</button>
  `

  const particles = overlay.querySelector('.intro-particles')
  for (let index = 0; index < PARTICLE_COUNT; index += 1) particles.appendChild(createParticle(index))

  const soundToggle = overlay.querySelector('.intro-sound-toggle')
  let soundEnabled = false
  soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled
    soundToggle.setAttribute('aria-pressed', String(soundEnabled))
    soundToggle.setAttribute('aria-label', soundEnabled ? 'Выключить звук intro' : 'Включить звук intro')
    soundToggle.textContent = soundEnabled ? '◉' : '◌'
  })

  document.body.prepend(overlay)
  window.setTimeout(() => overlay.classList.add('intro-converging'), 30)
  window.setTimeout(() => {
    overlay.classList.add('intro-reveal')
    if (soundEnabled) playConvergenceSound()
  }, 1880)
  window.setTimeout(() => finishIntro(overlay), 2460)
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startIntro, { once: true })
} else {
  startIntro()
}
