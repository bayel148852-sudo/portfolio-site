import React, { useEffect, useState } from 'react'
import { ArrowUpRight, Check, ChevronRight, Menu, MessageCircle, Sparkles, X, Zap } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import './index.css'

const projects = [
  { name: 'Maximum Fitness', tag: 'Фитнес-клуб', description: 'Спортивный digital-опыт с расписанием и онлайн-записью', tone: 'from-indigo-950 via-slate-900 to-violet-950', art: 'MAXIMUM', meta: '01 / 03' },
  { name: 'DUET', tag: 'Ресторан', description: 'Элегантный сайт с меню, атмосферой и системой бронирования', tone: 'from-zinc-950 via-amber-950/40 to-stone-900', art: 'DUET', meta: '02 / 03' },
  { name: 'LUMé', tag: 'Салон красоты', description: 'Светлый премиальный стиль, который превращает визит в запись', tone: 'from-rose-950/60 via-stone-900 to-orange-950/40', art: 'LUMé', meta: '03 / 03' },
]

const services = [
  ['01', 'Сайты для ре��торанов / кафе', 'Атмосфера, меню и бронь столика в одном понятном digital-опыте', '✦'],
  ['02', 'Сайты для салонов красоты', 'Визуальная подача, прайс и удобная онлайн-запись без лишних звонков', '◈'],
  ['03', 'Каталоги и интернет-магазины', 'Структурируем ассортимент и сокращаем путь от интереса до покупки', '▦'],
  ['04', 'Автоматизация заявок', 'Свяжем сайт с WhatsApp, Telegram или CRM, чтобы лиды не терялись', '↗'],
]

const pricing = [
  ['Сайт-визитка', 'от 15 000 сом', ['До 5 блоков', 'Адаптивный дизайн', 'Форма заявки', 'Публикация на домене']],
  ['Сайт с автоматизацией', 'от 25 000 сом', ['Уникальный дизайн', 'WhatsApp / Telegram', 'Онлайн-запись', 'Подключение аналитики']],
  ['Каталог / магазин', 'от 40 000 сом', ['Каталог товаров', 'Корзина и заявки', 'Интеграции с CRM', 'Поддержка после запуска']],
]

function SocialIcon({ type }) {
  if (type === 'telegram') return <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true"><path d="m21.3 4.3-3.2 15.1c-.2 1.1-.8 1.4-1.7.9l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.8.4l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.5 13.4l-4.6-1.5c-1-.3-1-1 .2-1.4L20 3.9c.8-.3 1.5.2 1.3.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  if (type === 'instagram') return <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>
  return <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true"><path d="M20.1 3.9A10 10 0 0 0 4.4 16.1L3.5 20.5l4.5-.9A10 10 0 1 0 20.1 3.9Z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.3 7.7c.2-.2.5-.2.7 0l1.2 1.5c.2.2.2.5 0 .7l-.7.8c.7 1.5 1.6 2.3 3.1 3.1l.8-.7c.2-.2.5-.2.7 0l1.5 1.2c.2.2.2.5 0 .7l-.5.6c-.4.5-1.1.7-1.7.5-3.3-1.1-5.7-3.5-6.8-6.8-.2-.6 0-1.3.5-1.7l.6-.5Z" fill="currentColor"/></svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(element => observer.observe(element)); return () => observer.disconnect() }, [])
  const close = () => setMenuOpen(false)
  return <div className="site-shell">
    <nav className="site-nav"><div className="nav-inner"><a href="#top" className="brand">FORMA</a><div className="nav-links"><a href="#projects">Проекты</a><a href="#services">Услуги</a><a href="#process">Как работаем</a><a href="#contact" className="nav-cta">Обсудить проект <ArrowUpRight className="inline size-3" /></a></div><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <div className="mobile-menu"><a onClick={close} href="#projects">Проекты</a><a onClick={close} href="#services">Услуги</a><a onClick={close} href="#process">Как работаем</a><a onClick={close} href="#contact">Обсудить проект →</a></div>}</nav>

    <main id="top">
      <section className="hero-section"><div className="grid-bg hero-grid"/><div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-inner"><div className="hero-copy"><div className="availability"><i />Доступен для новых проектов</div><h1>Сайты,<br /><em>которые</em><br />продают</h1><p className="hero-subtitle">Создаю быстрые и стильные сайты для бизнеса — от первой идеи до публикации на вашем домене. С AI-инструментами и вниманием к деталям</p><div className="hero-actions"><a href="#projects" className="button button-primary">Смотреть проекты <ArrowUpRight className="inline size-4" /></a><a href="https://wa.me/996555000000" className="button button-ghost">Написать в WhatsApp</a></div><div className="hero-proof"><span><Zap className="size-3 text-violet-300" /> AI-assisted</span><span><i /> Worldwide clients</span></div></div><div className="hero-showcase"><div className="showcase-label">SELECTED WORKS <span>2024—25</span></div><div className="mockup mockup-lume"><div className="mockup-top"><span>LUMé / 03</span><span>↗</span></div><div className="lume-art"><strong>LUMé</strong><small>BEAUTY STUDIO</small></div><div className="mockup-bottom"><span>Beauty studio</span><span>01</span></div></div><div className="mockup mockup-max"><div className="max-art"><span>MAXIMUM</span><small>TRAIN YOUR LIMIT</small></div><div className="mockup-bottom"><span>Fitness club</span><span>02</span></div></div><div className="orbit-label">SCROLL TO EXPLORE <ChevronRight className="size-3" /></div></div></div></section>

      <section className="reveal intro-strip"><div className="section-wrap intro-grid"><div><p className="eyebrow">01 / О подходе</p><h2>Большой результат<br /><span>без лишнего шума</span></h2></div><div><p className="body-copy">Использую современные AI-инструменты, чтобы работать быстрее, но не жертвовать качеством. Вы получаете профессиональный сайт, который помогает бизнесу расти — без месяцев ожидания и агентских накруток</p><div className="stats"><div><b>2–3</b><span>недели<br />на запуск</span></div><div><b>15k<span>+</span></b><span>сом<br />старт</span></div><div><b>24/7</b><span>поддержка<br />после запуска</span></div></div></div></div></section>

      <section id="projects" className="reveal section-wrap projects-section"><div className="section-heading"><div><p className="eyebrow">02 / Избранные работы</p><h2>Проекты, которыми<br /><span>хочется делиться</span></h2></div><span className="section-index">01 — 03</span></div><div className="projects-bento">{projects.map((project, index) => <article className={`project-card project-${index + 1}`} key={project.name}><div className={`project-art bg-gradient-to-br ${project.tone}`}><div className="art-noise"/><div className="art-caption"><span>{project.meta}</span><span>CASE STUDY</span></div><strong>{project.art}</strong><div className="art-line"/></div><div className="project-info"><div><span className="tag">{project.tag}</span><h3>{project.name}</h3></div><p>{project.description}</p><a href="#contact">Смотреть демо <ArrowUpRight className="inline size-3" /></a></div></article>)}</div></section>

      <section id="services" className="reveal services-section"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">03 / Что я делаю</p><h2>Инструменты для<br /><span>вашего роста</span></h2></div><p className="heading-note">Сайт — это не просто красивая страница. Это ваш лучший менеджер по продажам</p></div><div className="services-bento">{services.map(([number, title, description, icon]) => <article className="service-card" key={title}><div className="service-top"><span>{number}</span><b>{icon}</b></div><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow size-5" /></article>)}</div></div></section>

      <section id="process" className="reveal section-wrap process-section"><p className="eyebrow">04 / Простой процесс</p><h2>От идеи <span>до запуска</span></h2><div className="process-grid">{[['01','Знакомимся','Обсуждаем задачу, цели и стиль бизнеса'],['02','Собираю демо','Показываю первую версию в вашем стиле'],['03','Шлифуем','Вносим правки и доводим детали до идеала'],['04','Запускаем','Публикую сайт на вашем домене']].map(([number, title, description], index) => <div className="process-step" key={number}><div className="step-number">{number}</div>{index < 3 && <div className="step-line" />}<h3>{title}</h3><p>{description}</p></div>)}</div></section>

      <section className="reveal pricing-section"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">05 / Инвестиция в бизнес</p><h2>Выберите свой<br /><span>следующий шаг</span></h2></div><p className="heading-note">Финальная стоимость зависит от задачи. Обсудим проект и подберём решение</p></div><div className="pricing-grid">{pricing.map(([title, price, features], index) => <article className={`price-card ${index === 1 ? 'popular' : ''}`} key={title}>{index === 1 && <span className="popular-label">POPULAR</span>}<h3>{title}</h3><b>{price}</b><ul>{features.map(feature => <li key={feature}><Check className="size-4" />{feature}</li>)}</ul><a href="#contact" className="price-button">Обсудить проект <ArrowUpRight className="inline size-3" /></a></article>)}</div></div></section>

      <section id="contact" className="reveal contact-section"><div className="contact-glow"/><Sparkles className="mx-auto mb-7 size-6 text-violet-300" /><p className="eyebrow">06 / Начнём</p><h2>Готовы обсудить<br /><span>ваш проект</span></h2><p>Расскажите, что хотите создать. Я отвечу в течение рабочего дня</p><div className="contact-actions"><a href="https://wa.me/996555000000" className="button button-primary"><MessageCircle className="inline size-4" /> Написать в WhatsApp</a><a href="https://t.me/your_username" className="button button-ghost">Telegram <ArrowUpRight className="inline size-4" /></a></div></section>
    </main>
    <footer><div className="footer-inner"><div><a href="#top" className="brand">FORMA</a><p>Сайты с характером<br />для клиентов по всему миру</p></div><div className="socials"><a href="#" aria-label="Instagram"><SocialIcon type="instagram" /></a><a href="#" aria-label="Telegram"><SocialIcon type="telegram" /></a><a href="#" aria-label="WhatsApp"><SocialIcon type="whatsapp" /></a><span>© 2025 FORMA</span></div></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
