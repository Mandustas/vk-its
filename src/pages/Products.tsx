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
                <div className="product-item__image-wrapper">
                  {product.image && (
                    <img src={product.image} alt={product.name} className="product-item__image" loading="lazy" />
                  )}
                </div>
                <div className="product-item__content">
                  <h3 className="product-item__title">{product.name}</h3>
                  <p className="product-item__desc">{product.shortDescription}</p>
                  <ul className="product-item__features">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                  <span className="product-item__link">Подробнее →</span>
                </div>
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
