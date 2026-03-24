import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import './ProductDetail.scss'

function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="container section">
        <h1>Продукт не найден</h1>
        <Link to="/products" className="btn btn--primary">Вернуться к каталогу</Link>
      </div>
    )
  }

  return (
    <div className="product-detail">
      <section className="product-hero">
        <div className="container">
          <div className="product-hero__content">
            <div className="product-hero__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {product.icon === 'camera' && (
                  <>
                    <rect x="8" y="14" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="24" cy="26" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 14V10H32V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </>
                )}
                {product.icon === 'building' && (
                  <>
                    <rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M18 18H22M18 26H22M18 34H22M26 18H30M26 26H30M26 34H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </>
                )}
                {product.icon === 'cpu' && (
                  <>
                    <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                    <rect x="18" y="18" width="12" height="12" rx="2" fill="currentColor" opacity="0.3"/>
                    <path d="M24 4V8M24 40V44M4 24H8M40 24H44M10 10L14 14M34 34L38 38M10 38L14 34M34 14L38 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </>
                )}
                {product.icon === 'server' && (
                  <>
                    <rect x="8" y="10" width="32" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <rect x="8" y="26" width="32" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="14" cy="16" r="2" fill="currentColor"/>
                    <circle cx="14" cy="32" r="2" fill="currentColor"/>
                  </>
                )}
                {product.icon === 'search' && (
                  <>
                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M28 28L36 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 14L20 18L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </>
                )}
                {product.icon === 'video' && (
                  <>
                    <rect x="6" y="12" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M32 16V28L38 24V20L32 16Z" fill="currentColor" opacity="0.3"/>
                    <path d="M32 16V28L38 24V20L32 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <circle cx="19" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
                  </>
                )}
              </svg>
            </div>
            <h1>{product.name}</h1>
            <p className="product-hero__subtitle">{product.shortDescription}</p>
            <div className="product-hero__actions">
              <Link to="/contacts" className="btn btn--primary btn--lg">Запросить КП</Link>
              <Link to="/contacts" className="btn btn--outline btn--lg">Запросить демо</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-detail__grid">
            <div className="product-detail__main">
              <div className="card">
                <h2>О продукте</h2>
                <p className="product-detail__description">{product.description}</p>
              </div>

              <div className="card mt-2">
                <h2>Ключевые возможности</h2>
                <ul className="features-list">
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <span className="features-list__icon">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card mt-2">
                <h2>Преимущества</h2>
                <ul className="benefits-list">
                  {product.benefits.map((benefit, i) => (
                    <li key={i}>
                      <span className="benefits-list__icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="product-detail__sidebar">
              <div className="card product-detail__card">
                <h3>Области применения</h3>
                <ul className="applications-list">
                  {product.applications.map((app, i) => (
                    <li key={i}>{app}</li>
                  ))}
                </ul>
              </div>

              <div className="card product-detail__card mt-2">
                <h3>Нужна помощь?</h3>
                <p>Наши специалисты помогут подобрать оптимальное решение под ваши задачи</p>
                <Link to="/contacts" className="btn btn--primary" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>
                  Связаться с нами
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
