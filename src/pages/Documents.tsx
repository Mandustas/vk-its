import { useState } from 'react'
import './Documents.scss'

type DocCategory = 'all' | 'certificates' | 'technical' | 'presentations' | 'other'

interface Document {
  id: string
  title: string
  category: DocCategory
  type: 'pdf' | 'doc' | 'xlsx'
  size: string
  date: string
  description: string
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Сертификат соответствия ГОСТ Р — Фактор КФВФ',
    category: 'certificates',
    type: 'pdf',
    size: '2.4 МБ',
    date: '10.02.2024',
    description: 'Сертификат соответствия национального стандарта'
  },
  {
    id: '2',
    title: 'Сертификат соответствия ГОСТ Р — Фактор Б2',
    category: 'certificates',
    type: 'pdf',
    size: '2.1 МБ',
    date: '15.01.2024',
    description: 'Сертификат соответствия национального стандарта'
  },
  {
    id: '3',
    title: 'Сертификат соответствия ГОСТ Р — Фактор AI',
    category: 'certificates',
    type: 'pdf',
    size: '2.3 МБ',
    date: '20.01.2024',
    description: 'Сертификат соответствия национального стандарта'
  },
  {
    id: '4',
    title: 'Выписка из реестра ПО Минцифры России',
    category: 'certificates',
    type: 'pdf',
    size: '1.8 МБ',
    date: '05.12.2023',
    description: 'Подтверждение включения ПО в реестр российских программ'
  },
  {
    id: '5',
    title: 'Техническая документация Фактор КФВФ',
    category: 'technical',
    type: 'pdf',
    size: '5.6 МБ',
    date: '01.03.2024',
    description: 'Паспорт изделия, руководство по эксплуатации, монтаж'
  },
  {
    id: '6',
    title: 'Техническая документация Фактор Б2',
    category: 'technical',
    type: 'pdf',
    size: '4.2 МБ',
    date: '01.03.2024',
    description: 'Паспорт изделия, руководство по эксплуатации'
  },
  {
    id: '7',
    title: 'Техническая документация Фактор AI',
    category: 'technical',
    type: 'pdf',
    size: '6.1 МБ',
    date: '01.03.2024',
    description: 'Паспорт изделия, руководство по эксплуатации, API'
  },
  {
    id: '8',
    title: 'Руководство по интеграции (SDK)',
    category: 'technical',
    type: 'pdf',
    size: '3.8 МБ',
    date: '15.02.2024',
    description: 'Документация для разработчиков по интеграции с продуктами'
  },
  {
    id: '9',
    title: 'Презентация компании ВК ИТС',
    category: 'presentations',
    type: 'pdf',
    size: '12.5 МБ',
    date: '01.01.2024',
    description: 'Общая презентация компании, продуктов и решений'
  },
  {
    id: '10',
    title: 'Презентация продукта Фактор КФВФ',
    category: 'presentations',
    type: 'pdf',
    size: '8.3 МБ',
    date: '15.01.2024',
    description: 'Детальная презентация комплекса фотовидеофиксации'
  },
  {
    id: '11',
    title: 'Презентация продукта Фактор AI',
    category: 'presentations',
    type: 'pdf',
    size: '7.9 МБ',
    date: '20.01.2024',
    description: 'Презентация AI-камеры с аналитикой на борту'
  },
  {
    id: '12',
    title: 'Презентация решений для транспорта',
    category: 'presentations',
    type: 'pdf',
    size: '9.2 МБ',
    date: '10.02.2024',
    description: 'Обзор решений для транспортных систем'
  },
  {
    id: '13',
    title: 'Лицензионное соглашение',
    category: 'other',
    type: 'pdf',
    size: '1.2 МБ',
    date: '01.01.2024',
    description: 'Пользовательское соглашение на использование ПО'
  },
  {
    id: '14',
    title: 'Политика конфиденциальности',
    category: 'other',
    type: 'pdf',
    size: '0.8 МБ',
    date: '01.01.2024',
    description: 'Документ о защите персональных данных'
  },
  {
    id: '15',
    title: 'Прайс-лист на продукцию',
    category: 'other',
    type: 'xlsx',
    size: '0.5 МБ',
    date: '01.03.2024',
    description: 'Актуальные цены на продукты и услуги'
  }
]

const categoryLabels: Record<DocCategory, string> = {
  'all': 'Все документы',
  'certificates': 'Сертификаты',
  'technical': 'Техническая документация',
  'presentations': 'Презентации',
  'other': 'Прочее'
}

function Documents() {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('all')

  const filteredDocs = selectedCategory === 'all'
    ? documents
    : documents.filter(d => d.category === selectedCategory)

  return (
    <div className="documents-page">
      <section className="page-hero">
        <div className="container">
          <h1>Документы</h1>
          <p>
            Техническая документация, сертификаты, презентации продуктов 
            и другие материалы для скачивания
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="documents-filters">
            {(Object.keys(categoryLabels) as DocCategory[]).map((category) => (
              <button
                key={category}
                className={`documents-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          <div className="documents-grid">
            {filteredDocs.map((doc) => (
              <article key={doc.id} className="document-card">
                <div className="document-card__icon">
                  {doc.type === 'pdf' && (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                  {doc.type === 'doc' && (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 17V13L12 15L16 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {doc.type === 'xlsx' && (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
                <div className="document-card__content">
                  <div className="document-card__meta">
                    <span className={`document-card__category document-card__category--${doc.category}`}>
                      {categoryLabels[doc.category]}
                    </span>
                    <span className="document-card__size">{doc.size}</span>
                  </div>
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div className="document-card__footer">
                    <span className="document-card__date">{doc.date}</span>
                    <button className="btn btn--secondary btn--sm">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', marginRight: '6px' }}>
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Скачать
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredDocs.length === 0 && (
            <div className="documents-empty">
              <p>В этой категории документов нет</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="documents-cta">
            <h2>Не нашли нужный документ?</h2>
            <p>
              Свяжитесь с нами — мы вышлем вам необходимую документацию 
              в течение рабочего дня
            </p>
            <a href="/contacts" className="btn btn--primary">Запросить документы</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Documents
