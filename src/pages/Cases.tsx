import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cases } from '../data/cases'
import { products } from '../data/products'
import './Cases.scss'

const industryLabels: Record<string, string> = {
  'transport': 'Транспорт',
  'industry': 'Промышленность',
  'smart-city': 'Умный город',
  'critical-infrastructure': 'Инфраструктура'
}

const getProductById = (id: string) => products.find(p => p.id === id)

function Cases() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')

  const filteredCases = selectedIndustry === 'all' 
    ? cases 
    : cases.filter(c => c.industry === selectedIndustry)

  const industries = ['all', ...Array.from(new Set(cases.map(c => c.industry)))]

  return (
    <div className="cases-page">
      <section className="page-hero">
        <div className="container">
          <h1>Реализованные проекты</h1>
          <p>
            Кейсы с измеримыми результатами и подтвержденной эффективностью. 
            Реальные истории внедрения наших решений
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cases-filters">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`cases-filter-btn ${selectedIndustry === industry ? 'active' : ''}`}
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry === 'all' ? 'Все проекты' : industryLabels[industry] || industry}
              </button>
            ))}
          </div>

          <div className="cases-grid">
            {filteredCases.map((caseItem) => (
              <article key={caseItem.id} className="case-item-card">
                <div className="case-item-card__image-wrapper">
                  {caseItem.image && (
                    <img src={caseItem.image} alt={caseItem.title} className="case-item-card__image" loading="lazy" />
                  )}
                </div>
                <div className="case-item-card__content">
                  <div className="case-item-card__header">
                    <span className={`case-item-card__tag case-item-card__tag--${caseItem.industry}`}>
                      {industryLabels[caseItem.industry] || caseItem.industry}
                    </span>
                  </div>
                  <h3 className="case-item-card__title">{caseItem.title}</h3>
                  <p className="case-item-card__client">{caseItem.client}</p>
                  <div className="case-item-card__body">
                    <div className="case-item-card__section">
                      <h4>Задача</h4>
                      <p>{caseItem.challenge}</p>
                    </div>
                    <div className="case-item-card__section">
                      <h4>Решение</h4>
                      <p>{caseItem.solution}</p>
                    </div>
                    <div className="case-item-card__section">
                      <h4>Результаты</h4>
                      <ul className="case-item-card__results">
                        {caseItem.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="case-item-card__footer">
                    <div className="case-item-card__products">
                      <span>Продукты:</span>
                      {caseItem.products.map((productId, i) => {
                        const product = getProductById(productId)
                        return product ? (
                          <Link key={i} to={`/products/${product.id}`} className="case-item-card__product">
                            {product.name}
                          </Link>
                        ) : (
                          <span key={i} className="case-item-card__product">{productId}</span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="cases-empty">
              <p>По выбранному фильтру проектов нет</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="cta-banner">
            <h2>Хотите реализовать похожий проект?</h2>
            <p>
              Свяжитесь с нами — обсудим ваши задачи и предложим 
              оптимальное решение с гарантированным результатом
            </p>
            <a href="/contacts" className="btn btn--primary btn--lg">
              Обсудить проект
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cases
