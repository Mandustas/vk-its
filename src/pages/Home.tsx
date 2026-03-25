import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { products } from '../data/products'
import { solutions } from '../data/solutions'
import { cases } from '../data/cases'
import './Home.scss'

const stats = [
  { value: '10+', label: 'лет на рынке' },
  { value: '500+', label: 'реализованных проектов' },
  { value: '10 000+', label: 'камер в системе' },
  { value: '98%', label: 'точность распознавания' }
]

const newsItems = [
  {
    id: 1,
    title: 'ВК ИТС представила новый комплекс Фактор AI на выставке Securika Moscow 2024',
    date: '15 марта 2024',
    excerpt: 'Новая AI-камера с аналитикой на борту получила положительные отзывы профессионалов отрасли'
  },
  {
    id: 2,
    title: 'Завершен проект внедрения системы видеоаналитики для крупного промышленного предприятия',
    date: '28 февраля 2024',
    excerpt: 'Система обеспечивает контроль соблюдения требований промышленной безопасности 24/7'
  },
  {
    id: 3,
    title: 'ВК ИТС получила сертификат соответствия ГОСТ Р для комплекса Фактор КФВФ',
    date: '10 февраля 2024',
    excerpt: 'Подтверждено соответствие всем требованиям национального стандарта'
  }
]

// Component for scroll reveal animation
function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function Home() {
  useRevealOnScroll()
  
  const featuredProducts = products.slice(0, 3)
  const featuredSolutions = solutions.slice(0, 4)
  const featuredCases = cases.slice(0, 3)

  return (
    <div className="home">
      {/* Hero Section with 3D effects */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__gradient"></div>
          <div className="hero__grid"></div>
          <div className="hero__particles">
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
            <div className="hero__particle"></div>
          </div>
          <div className="hero__orb hero__orb--1"></div>
          <div className="hero__orb hero__orb--2"></div>
          <div className="hero__orb hero__orb--3"></div>
        </div>
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              Интеллектуальные системы{' '}
              <span className="text-gradient">видеоаналитики</span>{' '}
              и распознавания
            </h1>
            <p className="hero__subtitle">
              Комплексные решения для транспорта, промышленности и умного города.
              Распознавание номеров, детекция событий, AI-аналитика на борту.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary btn--lg">
                Смотреть продукты
              </Link>
              <Link to="/contacts" className="btn btn--outline btn--lg">
                Запросить КП
              </Link>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__3d-object">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {/* Main camera body */}
                <rect x="100" y="80" width="200" height="140" rx="16" fill="url(#heroGrad1)" opacity="0.3" stroke="#2563eb" strokeWidth="2" filter="url(#glow)"/>
                {/* Lens */}
                <circle cx="200" cy="150" r="50" fill="url(#heroGrad2)" stroke="#06b6d4" strokeWidth="3" filter="url(#glow)"/>
                <circle cx="200" cy="150" r="30" fill="rgba(6, 182, 212, 0.3)" stroke="#06b6d4" strokeWidth="2"/>
                <circle cx="200" cy="150" r="15" fill="rgba(37, 99, 235, 0.5)"/>
                {/* Checkmark */}
                <path d="M185 145L195 155L215 135" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
                {/* Connection lines */}
                <circle cx="80" cy="80" r="6" fill="#06b6d4" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="320" cy="220" r="8" fill="#8b5cf6" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="350" cy="100" r="5" fill="#2563eb" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite"/>
                </circle>
                {/* Data lines */}
                <path d="M80 80L120 100" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="2" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite"/>
                </path>
                <path d="M320 220L280 200" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M350 100L300 110" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="2" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section reveal">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats__item reveal reveal-delay-1">
                <div className="stats__value">{stat.value}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section section reveal">
        <div className="container">
          <div className="section-title">
            <h2>Наши продукты</h2>
            <p>
              Полный спектр решений для видеоаналитики и распознавания — 
              от камер с AI на борту до серверных платформ
            </p>
          </div>
          <div className="grid grid--3">
            {featuredProducts.map((product, index) => (
              <Link to={`/products/${product.id}`} key={product.id} className={`card product-card glow-on-hover reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="product-card__image-wrapper">
                  {product.image && (
                    <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
                  )}
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__desc">{product.shortDescription}</p>
                  <span className="product-card__link">Подробнее →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/products" className="btn btn--secondary">
              Все продукты
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section section section--gray reveal">
        <div className="container">
          <div className="section-title">
            <h2>Отраслевые решения</h2>
            <p>
              Готовые сценарии для различных отраслей с подобранными
              продуктами и доказанной эффективностью
            </p>
          </div>
          <div className="grid grid--2">
            {featuredSolutions.map((solution, index) => (
              <Link to="/solutions" key={solution.id} className={`card solution-card reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="solution-card__icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {solution.icon === 'truck' && (
                      <>
                        <rect x="6" y="18" width="28" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="14" cy="38" r="4" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="30" cy="38" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M34 24H42L44 30V36H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </>
                    )}
                    {solution.icon === 'factory' && (
                      <>
                        <rect x="8" y="20" width="32" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14 20V14M22 20V10M30 20V16M38 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <rect x="16" y="26" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
                        <rect x="28" y="26" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
                      </>
                    )}
                    {solution.icon === 'city' && (
                      <>
                        <rect x="6" y="16" width="14" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <rect x="24" y="8" width="18" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M10 22H16M10 28H16M28 14H38M28 20H38M28 26H38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </>
                    )}
                    {solution.icon === 'shield' && (
                      <>
                        <path d="M24 4L8 10V20C8 30 15 38 24 42C33 38 40 30 40 20V10L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M18 24L22 28L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </>
                    )}
                  </svg>
                </div>
                <div className="solution-card__content">
                  <h3 className="solution-card__title">{solution.name}</h3>
                  <p className="solution-card__desc">{solution.shortDescription}</p>
                  <ul className="solution-card__features">
                    {solution.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/solutions" className="btn btn--secondary">
              Все решения
            </Link>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="cases-section section reveal">
        <div className="container">
          <div className="section-title">
            <h2>Реализованные проекты</h2>
            <p>
              Кейсы с измеримыми результатами и подтвержденной эффективностью
            </p>
          </div>
          <div className="grid grid--3">
            {featuredCases.map((caseItem, index) => (
              <div key={caseItem.id} className={`card case-card glow-on-hover reveal reveal-delay-${(index % 4) + 1}`}>
                <div className="case-card__image-wrapper">
                  {caseItem.image && (
                    <img src={caseItem.image} alt={caseItem.title} className="case-card__image" loading="lazy" />
                  )}
                </div>
                <div className="case-card__header">
                  <span className="case-card__industry">
                    {caseItem.industry === 'transport' && 'Транспорт'}
                    {caseItem.industry === 'industry' && 'Промышленность'}
                    {caseItem.industry === 'smart-city' && 'Умный город'}
                    {caseItem.industry === 'critical-infrastructure' && 'Инфраструктура'}
                  </span>
                </div>
                <h3 className="case-card__title">{caseItem.title}</h3>
                <p className="case-card__client">{caseItem.client}</p>
                <ul className="case-card__results">
                  {caseItem.results.slice(0, 2).map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
                <Link to="/cases" className="case-card__link">Подробнее →</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/cases" className="btn btn--secondary">
              Все кейсы
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section section section--gray">
        <div className="container">
          <div className="section-title">
            <h2>Новости компании</h2>
            <p>
              Последние события, пресс-релизы и обновления продуктов
            </p>
          </div>
          <div className="grid grid--3">
            {newsItems.map((news) => (
              <article key={news.id} className="card news-card">
                <div className="news-card__date">{news.date}</div>
                <h3 className="news-card__title">{news.title}</h3>
                <p className="news-card__excerpt">{news.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section reveal">
        <div className="container">
          <div className="cta-card">
            <div className="cta-card__content">
              <h2>Нужна помощь с выбором решения?</h2>
              <p>
                Наши специалисты помогут подобрать оптимальную конфигурацию
                под ваши задачи и бюджет
              </p>
              <div className="cta-card__actions">
                <Link to="/contacts" className="btn btn--primary btn--lg">
                  Связаться с нами
                </Link>
                <Link to="/products" className="btn btn--outline btn--lg">
                  Подобрать решение
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
