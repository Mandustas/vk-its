import { Link } from 'react-router-dom'
import { solutions } from '../data/solutions'
import { products } from '../data/products'
import './Solutions.scss'

const getProductById = (id: string) => products.find(p => p.id === id)

function Solutions() {
  return (
    <div className="solutions-page">
      <section className="page-hero">
        <div className="container">
          <h1>Отраслевые решения</h1>
          <p>
            Готовые сценарии для различных отраслей с подобранными продуктами 
            и доказанной эффективностью внедрения
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="solutions-intro">
            <div className="solutions-intro__content">
              <h2>Подберем решение под ваши задачи</h2>
              <p>
                Каждый проект уникален. Наши специалисты проанализируют ваши требования 
                и предложат оптимальную конфигурацию с учетом бюджета и сроков
              </p>
              <Link to="/contacts" className="btn btn--primary btn--lg">
                Получить консультацию
              </Link>
            </div>
            <div className="solutions-intro__image">
              <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="80" height="120" rx="4" fill="rgba(37, 99, 235, 0.2)" stroke="rgba(37, 99, 235, 0.4)" strokeWidth="2"/>
                <rect x="110" y="20" width="80" height="140" rx="4" fill="rgba(37, 99, 235, 0.3)" stroke="rgba(37, 99, 235, 0.5)" strokeWidth="2"/>
                <rect x="200" y="60" width="80" height="100" rx="4" fill="rgba(37, 99, 235, 0.25)" stroke="rgba(37, 99, 235, 0.45)" strokeWidth="2"/>
                <circle cx="60" cy="80" r="20" fill="rgba(6, 182, 212, 0.3)"/>
                <path d="M50 80L58 88L70 72" stroke="rgba(6, 182, 212, 0.8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-title">
            <h2>Наши решения</h2>
            <p>
              Выберите отрасль или сценарий использования, чтобы узнать больше 
              о подходящих продуктах и реализованных проектах
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-detail-card">
                <div className="solution-detail-card__icon">
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
                <div className="solution-detail-card__content">
                  <h3>{solution.name}</h3>
                  <p className="solution-detail-card__desc">{solution.description}</p>
                  
                  <div className="solution-detail-card__problems">
                    <h4>Решаемые проблемы:</h4>
                    <ul>
                      {solution.problems.slice(0, 4).map((problem, i) => (
                        <li key={i}>{problem}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-detail-card__features">
                    <h4>Возможности:</h4>
                    <ul>
                      {solution.features.slice(0, 3).map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-detail-card__products">
                    <span>Рекомендуемые продукты:</span>
                    <div className="solution-detail-card__products-list">
                      {solution.recommendedProducts.slice(0, 3).map((productId, i) => {
                        const product = getProductById(productId)
                        return product ? (
                          <Link key={i} to={`/products/${product.id}`} className="solution-detail-card__product-tag">
                            {product.name}
                          </Link>
                        ) : (
                          <span key={i} className="solution-detail-card__product-tag">{productId}</span>
                        )
                      })}
                    </div>
                  </div>

                  <Link to="/contacts" className="btn btn--secondary" style={{ marginTop: 'var(--spacing-md)' }}>
                    Подобрать решение
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2>Не нашли подходящее решение?</h2>
            <p>
              Свяжитесь с нами — разработаем индивидуальный проект с учетом 
              специфики вашего бизнеса и требований
            </p>
            <Link to="/contacts" className="btn btn--primary btn--lg">
              Обсудить проект
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
