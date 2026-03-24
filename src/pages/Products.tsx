import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Products.scss'

function Products() {
  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="container">
          <h1>Продукты</h1>
          <p>
            Полный спектр решений для видеоаналитики и распознавания — 
            от камер с AI на борту до серверных платформ масштабируемости
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id} className="card product-item">
                <div className="product-item__icon">
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
                <div className="product-item__content">
                  <h3 className="product-item__title">{product.name}</h3>
                  <p className="product-item__desc">{product.shortDescription}</p>
                  <ul className="product-item__features">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <span className="product-item__link">Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="compare-banner">
            <h2>Затрудняетесь с выбором?</h2>
            <p>Сравните характеристики продуктов и подберите оптимальное решение для ваших задач</p>
            <Link to="/compare" className="btn btn--primary">
              Сравнить продукты
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
