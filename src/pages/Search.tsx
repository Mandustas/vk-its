import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { solutions } from '../data/solutions'
import { cases } from '../data/cases'
import './Search.scss'

interface SearchResult {
  type: 'product' | 'solution' | 'case' | 'page'
  title: string
  description: string
  url: string
  category?: string
}

const pages: SearchResult[] = [
  {
    type: 'page',
    title: 'Главная',
    description: 'Обзор продуктов, решений и кейсов компании ВК ИТС',
    url: '/'
  },
  {
    type: 'page',
    title: 'О компании',
    description: 'Информация о компании, новости, достижения',
    url: '/about'
  },
  {
    type: 'page',
    title: 'Контакты',
    description: 'Контактная информация, форма обратной связи',
    url: '/contacts'
  },
  {
    type: 'page',
    title: 'Документы',
    description: 'Сертификаты, техническая документация, презентации',
    url: '/documents'
  },
  {
    type: 'page',
    title: 'Поддержка',
    description: 'Техническая поддержка, FAQ, контакты',
    url: '/support'
  },
  {
    type: 'page',
    title: 'Глоссарий',
    description: 'Термины и определения в области видеоаналитики',
    url: '/knowledge'
  },
  {
    type: 'page',
    title: 'Ответы на вопросы',
    description: 'Развёрнутые ответы на популярные вопросы',
    url: '/answers'
  },
  {
    type: 'page',
    title: 'Полезные материалы',
    description: 'Чек-листы, калькуляторы, шаблоны документов',
    url: '/resources'
  }
]

function Search() {
  const [query, setQuery] = useState('')

  const results: SearchResult[] = useMemo(() => {
    if (!query.trim()) return []

    const normalizedQuery = query.toLowerCase().trim()
    const scoredResults: (SearchResult & { score: number })[] = []

    // Поиск по продуктам
    products.forEach((product) => {
      let score = 0
      if (product.name.toLowerCase().includes(normalizedQuery)) score += 10
      if (product.shortDescription.toLowerCase().includes(normalizedQuery)) score += 5
      if (product.description.toLowerCase().includes(normalizedQuery)) score += 3
      if (product.features.some(f => f.toLowerCase().includes(normalizedQuery))) score += 3
      
      if (score > 0) {
        scoredResults.push({
          type: 'product',
          title: product.name,
          description: product.shortDescription,
          url: `/products/${product.id}`,
          category: 'Продукт',
          score
        })
      }
    })

    // Поиск по решениям
    solutions.forEach((solution) => {
      let score = 0
      if (solution.name.toLowerCase().includes(normalizedQuery)) score += 10
      if (solution.shortDescription.toLowerCase().includes(normalizedQuery)) score += 5
      if (solution.description.toLowerCase().includes(normalizedQuery)) score += 3
      if (solution.problems.some(p => p.toLowerCase().includes(normalizedQuery))) score += 2
      
      if (score > 0) {
        scoredResults.push({
          type: 'solution',
          title: solution.name,
          description: solution.shortDescription,
          url: '/solutions',
          category: 'Решение',
          score
        })
      }
    })

    // Поиск по кейсам
    cases.forEach((caseItem) => {
      let score = 0
      if (caseItem.title.toLowerCase().includes(normalizedQuery)) score += 10
      if (caseItem.client.toLowerCase().includes(normalizedQuery)) score += 5
      if (caseItem.challenge.toLowerCase().includes(normalizedQuery)) score += 3
      if (caseItem.solution.toLowerCase().includes(normalizedQuery)) score += 3
      
      if (score > 0) {
        scoredResults.push({
          type: 'case',
          title: caseItem.title,
          description: caseItem.client,
          url: '/cases',
          category: 'Кейс',
          score
        })
      }
    })

    // Поиск по страницам
    pages.forEach((page) => {
      let score = 0
      if (page.title.toLowerCase().includes(normalizedQuery)) score += 10
      if (page.description.toLowerCase().includes(normalizedQuery)) score += 3
      
      if (score > 0) {
        scoredResults.push({
          ...page,
          score
        })
      }
    })

    // Сортировка по релевантности
    return scoredResults.sort((a, b) => b.score - a.score)
  }, [query])

  const groupedResults = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {
      'Продукты': [],
      'Решения': [],
      'Кейсы': [],
      'Страницы': []
    }

    results.forEach((result) => {
      if (result.type === 'product') groups['Продукты'].push(result)
      else if (result.type === 'solution') groups['Решения'].push(result)
      else if (result.type === 'case') groups['Кейсы'].push(result)
      else groups['Страницы'].push(result)
    })

    return Object.fromEntries(
      Object.entries(groups).filter(([_, items]) => items.length > 0)
    )
  }, [results])

  return (
    <div className="search-page">
      <section className="page-hero">
        <div className="container">
          <h1>Поиск по сайту</h1>
          <p>
            Найдите нужную информацию среди продуктов, решений, кейсов и документов
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="search-box">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Введите запрос..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button className="search-box__clear" onClick={() => setQuery('')}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>

          {query && (
            <div className="search-results">
              {Object.keys(groupedResults).length > 0 ? (
                <>
                  <div className="search-results__count">
                    Найдено: <strong>{results.length}</strong> результатов
                  </div>
                  
                  {Object.entries(groupedResults).map(([group, items]) => (
                    <div key={group} className="search-results__group">
                      <h3>{group}</h3>
                      <div className="search-results__list">
                        {items.map((result, index) => (
                          <Link key={index} to={result.url} className="search-result-item">
                            <div className="search-result-item__type">
                              {result.category || result.type}
                            </div>
                            <div className="search-result-item__content">
                              <h4>{result.title}</h4>
                              <p>{result.description}</p>
                            </div>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="search-empty">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 11L14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <h3>Ничего не найдено</h3>
                  <p>Попробуйте изменить запрос или используйте другие ключевые слова</p>
                </div>
              )}
            </div>
          )}

          {!query && (
            <div className="search-popular">
              <h3>Популярные запросы:</h3>
              <div className="search-popular__tags">
                <Link to="/products/factor-kfvvf">Фактор КФВФ</Link>
                <Link to="/products/factor-ai">Фактор AI</Link>
                <Link to="/knowledge">Глоссарий</Link>
                <Link to="/support">Поддержка</Link>
                <Link to="/documents">Сертификаты</Link>
                <Link to="/cases">Кейсы</Link>
                <Link to="/compare">Сравнение продуктов</Link>
                <Link to="/resources">Чек-листы</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Search
