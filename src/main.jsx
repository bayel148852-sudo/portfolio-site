import React, { useEffect, useState } from 'react'
import { ArrowRight, Check, Gauge, Globe2, Layers3, Menu, MessageCircle, Sparkles, Star, X } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import './index.css'

const services = [
  {
    title: 'Сайты для бизнеса',
    text: 'Лендинги, корпоративные сайты и презентационные страницы, которые понятно показывают ценность продукта.',
    icon: Layers3,
  },
  {
    title: 'Интернет-магазины',
    text: 'Каталоги, корзина, оформление заказов и продажи без лишних этапов — удобно и быстро для клиента.',
    icon: Globe2,
  },
  {
    title: 'Скорость и UX',
    text: 'Оптимизируем структуру, контент и навигацию так, чтобы посетитель быстро понимал, что ему нужно.',
    icon: Gauge,
  },
]

const stats = [
  { value: '2–3', label: 'недели на запуск' },
  { value: '100%', label: 'адаптивный дизайн' },
  { value: '24/7', label: 'поддержка после запуска' },
]

const workflow = [
  ['01', 'Диагностика', 'Определяем задачу, аудиторию и ключевые цели проекта.'],
  ['02', 'Дизайн', 'Собираем структуру и визуальный стиль под ваш бизнес.'],
  ['03', 'Разработка', 'Создаём рабочую страницу и настраиваем все важные элементы.'],
  ['04', 'Запуск', 'Публикуем сайт и проверяем поведение на всех устройствах.'],
]

const pricing = [
  {
    name: 'Старт',
    price: 'от 15 000 сом',
    note: 'Для малого бизнеса и презентации услуг',
    features: ['До 5 блоков', 'Адаптивный дизайн', 'Форма заявки', 'Запуск на домене'],
  },
  {
    name: 'Бизнес',
    price: 'от 30 000 сом',
    note: 'Для компаний, которым нужен сильный продающий сайт',
    features: ['Уникальный дизайн', 'Подбор кон��ента', 'Автоматизация заявок', 'Поддержка после запуска'],
    featured: true,
  },
  {
    name: 'Магазин',
    price: 'от 45 000 сом',
    note: 'Под каталог, продажи и больше сценариев',
    features: ['Каталог товаров', 'Корзина и заявки', 'Интеграции с CRM', 'SEO-структура'],
  },
]

const testimonials = [
  'Сайт вышел быстро, аккуратно и по делу. Понравилось, что всё было честно и без лишнего перегруза.',
  'Нужна была страница под бизнес, а не “супер-модный” шаблон. В итоге получили современную и понятную посадочную площадку.',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="wrap nav-wrap">
          <a href="#top" className="brand" aria-label="FORMA home">
            <span className="brand-mark">F</span>
            FORMA
          </a>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#services" onClick={closeMenu}>Услуги</a>
            <a href="#process" onClick={closeMenu}>Процесс</a>
            <a href="#pricing" onClick={closeMenu}>Стоимость</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Обсудить проект <ArrowRight size={16} />
            </a>
          </nav>

          <button
            type="button"
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Веб-студия • дизайн и разработка</span>
              <h1>
                Сайты, которые
                <span> продают</span>
                <br />
                и удерживают внимание
              </h1>
              <p>
                Создаём современный сайт под ваш бизнес — понятный, визуально сильный и
                готовый работать на результат.
              </p>

              <div className="hero-actions">
                <a href="#pricing" className="button primary">
                  Узнать стоимость <ArrowRight size={18} />
                </a>
                <a href="https://wa.me/996555000000" className="button secondary">
                  Написать в WhatsApp
                </a>
              </div>

              <div className="mini-trust">
                <span>
                  <Star size={14} /> Высокий уровень дизайна
                </span>
                <span>
                  <Sparkles size={14} /> Сделано под задачу
                </span>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="visual-panel main-panel">
                <div className="panel-head">
                  <span>FORMA / STUDIO</span>
                  <span className="live-dot">live</span>
                </div>

                <div className="panel-screen">
                  <div className="screen-topline">
                    <span>01</span>
                    <span>Brand System</span>
                  </div>
                  <div className="screen-title">
                    <strong>Сделать</strong>
                    <strong>сайт</strong>
                    <strong>ведущим</strong>
                  </div>
                  <div className="screen-row">
                    <div className="bar bar-one" />
                    <div className="bar bar-two" />
                    <div className="bar bar-three" />
                  </div>
                </div>
              </div>

              <div className="visual-panel side-panel">
                <span className="panel-badge">UI / UX</span>
                <h3>Modern business web</h3>
                <p>Лаконично — понятно — эффективно</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section reveal">
          <div className="wrap stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="content-section reveal">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">Услуги</span>
              <h2>Решения под реальный бизнес</h2>
            </div>

            <div className="services-grid">
              {services.map(({ title, text, icon: Icon }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="service-arrow">→</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section reveal soft-panel">
          <div className="wrap showcase-grid">
            <div className="showcase-copy">
              <span className="eyebrow">Почему это работает</span>
              <h2>Сайт — это не просто красивая картинка, а инструмент продаж</h2>
              <p>
                Мы делаем сайты так, чтобы посетитель сразу понимал, чем вы занимаетесь,
                почему вам можно доверять и что нужно сделать дальше.
              </p>
            </div>

            <div className="showcase-points">
              <div>
                <strong>Четкая структура</strong>
                <span>Никакого хаоса и перегруза информацией</span>
              </div>
              <div>
                <strong>Дизайн под бренд</strong>
                <span>Соответствие вашему стилю и бизнес-целям</span>
              </div>
              <div>
                <strong>Поддержка после запуска</strong>
                <span>Помогаем поддерживать и развивать сайт дальше</span>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="content-section reveal">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">Процесс</span>
              <h2>От идеи до результата</h2>
            </div>

            <div className="workflow-grid">
              {workflow.map(([step, title, text]) => (
                <div className="step-card" key={step}>
                  <span>{step}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section reveal">
          <div className="wrap testimonials-wrap">
            <div className="section-heading">
              <span className="eyebrow">Отзывы</span>
              <h2>Что важно для клиента</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((quote) => (
                <blockquote key={quote} className="quote-card">
                  “{quote}”
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="content-section reveal">
          <div className="wrap">
            <div className="section-heading">
              <span className="eyebrow">Стоимость</span>
              <h2>Выберите формат проекта</h2>
            </div>

            <div className="pricing-grid">
              {pricing.map(({ name, price, note, features, featured }) => (
                <article key={name} className={`price-card ${featured ? 'featured' : ''}`}>
                  {featured && <span className="popular-tag">Популярно</span>}
                  <h3>{name}</h3>
                  <div className="price">{price}</div>
                  <p>{note}</p>
                  <ul>
                    {features.map((feature) => (
                      <li key={feature}>
                        <Check size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="button secondary full-width">
                    Обсудить проект
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="content-section reveal cta-section">
          <div className="wrap cta-box">
            <div>
              <span className="eyebrow">Начать</span>
              <h2>Готовы сделать сайт, который работает на бизнес?</h2>
            </div>
            <a href="https://wa.me/996555000000" className="button primary">
              Написать в WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-row">
          <div className="brand-wrap">
            <a href="#top" className="brand">
              <span className="brand-mark">F</span>
              FORMA
            </a>
          </div>
          <p>Сайты для бизнеса с понятной стратегией и сильным дизайном.</p>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
