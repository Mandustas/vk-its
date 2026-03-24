import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Resources.scss'

interface Resource {
  id: string
  title: string
  type: 'checklist' | 'calculator' | 'presentation' | 'ebook' | 'template'
  description: string
  size?: string
  format?: string
  leadsTo: string
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Чек-лист: Как выбрать систему видеоаналитики для предприятия',
    type: 'checklist',
    description: 'Полный чек-лист из 25 пунктов для выбора оптимальной системы видеоаналитики. Включает критерии по камерам, аналитике, интеграции и бюджету.',
    size: '1.2 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '2',
    title: 'Чек-лист: Подготовка ТЗ на систему фотовидеофиксации',
    type: 'checklist',
    description: 'Пошаговый чек-лист для составления технического задания на комплекс фотовидеофиксации нарушений ПДД.',
    size: '0.9 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '3',
    title: 'Калькулятор: Расчёт объёма хранилища для видеонаблюдения',
    type: 'calculator',
    description: 'Онлайн-калькулятор для расчёта необходимого объёма дискового пространства с учётом количества камер, разрешения, битрейта и срока хранения.',
    leadsTo: 'email'
  },
  {
    id: '4',
    title: 'Калькулятор: TCO системы видеоаналитики на 5 лет',
    type: 'calculator',
    description: 'Расчёт совокупной стоимости владения системой видеоаналитики: оборудование, монтаж, обслуживание, электроэнергия, обновления.',
    leadsTo: 'email'
  },
  {
    id: '5',
    title: 'Презентация: Продукты ВК ИТС 2024',
    type: 'presentation',
    description: 'Полная презентация продуктовой линейки ВК ИТС: Фактор КФВФ, Фактор Б2, Фактор AI, серверная аналитика.',
    size: '15.6 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '6',
    title: 'Презентация: Решения для транспорта',
    type: 'presentation',
    description: 'Обзор решений для транспортных систем: контроль скорости, перекрёстков, ВГК, ИТС.',
    size: '12.3 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '7',
    title: 'Презентация: Решения для промышленности',
    type: 'presentation',
    description: 'Решения для промышленной безопасности, контроля технологических процессов и защиты периметра.',
    size: '10.8 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '8',
    title: 'Кейсы внедрения: Подборка 2023-2024',
    type: 'ebook',
    description: 'Сборник из 20 реализованных проектов с описанием задач, решений и измеримых результатов.',
    size: '25.4 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '9',
    title: 'Гайд: Внедрение ANPR-системы — от проекта до запуска',
    type: 'ebook',
    description: 'Подробное руководство по внедрению системы распознавания номеров: проектирование, монтаж, настройка, тестирование.',
    size: '8.7 МБ',
    format: 'PDF',
    leadsTo: 'email'
  },
  {
    id: '10',
    title: 'Шаблон: Техническое задание на систему видеонаблюдения',
    type: 'template',
    description: 'Готовый шаблон ТЗ для закупки системы видеонаблюдения. Включает все необходимые разделы и требования.',
    size: '0.5 МБ',
    format: 'DOCX',
    leadsTo: 'email'
  },
  {
    id: '11',
    title: 'Шаблон: Регламент технического обслуживания',
    type: 'template',
    description: 'Шаблон документа с регламентом планового технического обслуживания системы видеоаналитики.',
    size: '0.7 МБ',
    format: 'DOCX',
    leadsTo: 'email'
  },
  {
    id: '12',
    title: 'Сравнительная таблица: Фактор КФВФ vs Фактор Б2 vs Фактор AI',
    type: 'checklist',
    description: 'Детальное сравнение продуктов линейки Фактор по всем характеристикам и сценариям применения.',
    size: '0.3 МБ',
    format: 'XLSX',
    leadsTo: 'email'
  }
]

const typeLabels: Record<Resource['type'], string> = {
  'checklist': 'Чек-лист',
  'calculator': 'Калькулятор',
  'presentation': 'Презентация',
  'ebook': 'Гайд / Книга',
  'template': 'Шаблон'
}

const typeIcons: Record<Resource['type'], JSX.Element> = {
  'checklist': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'calculator': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 10H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 14H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 18H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'presentation': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'ebook': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19.5C4 19.5 4 7.5 4 5.5C4 4.11929 5.11929 3 6.5 3C7.88071 3 19 3 19 3V21C19 21 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5V19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'template': (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function Resources() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [showModal, setShowModal] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const filteredResources = selectedType === 'all'
    ? resources
    : resources.filter(r => r.type === selectedType)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setShowModal(null)
      setEmail('')
    }, 3000)
  }

  return (
    <div className="resources-page">
      <section className="page-hero">
        <div className="container">
          <h1>Полезные материалы</h1>
          <p>
            Чек-листы, калькуляторы, презентации и шаблоны документов 
            для специалистов по видеоаналитике и транспортным системам
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="resources-filters">
            <button
              className={`resources-filter-btn ${selectedType === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedType('all')}
            >
              Все материалы
            </button>
            {(Object.keys(typeLabels) as Array<Resource['type']>).map((type) => (
              <button
                key={type}
                className={`resources-filter-btn ${selectedType === type ? 'active' : ''}`}
                onClick={() => setSelectedType(type)}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>

          <div className="resources-grid">
            {filteredResources.map((resource) => (
              <article key={resource.id} className="resource-card">
                <div className="resource-card__icon">
                  {typeIcons[resource.type]}
                </div>
                <span className="resource-card__type">{typeLabels[resource.type]}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="resource-card__meta">
                  {resource.size && <span>{resource.size}</span>}
                  {resource.format && <span>{resource.format}</span>}
                </div>
                <button
                  className="btn btn--secondary btn--sm"
                  onClick={() => setShowModal(resource.id)}
                >
                  Получить
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="resources-cta">
            <h2>Нужен индивидуальный подбор материалов?</h2>
            <p>
              Свяжитесь с нами — подготовим подборку документов 
              и презентаций под ваши задачи
            </p>
            <Link to="/contacts" className="btn btn--primary">
              Запросить подборку
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setShowModal(null)}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h3>Получение материала</h3>
            {submitted ? (
              <div className="modal__success">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>Материал отправлен на ваш email!</p>
              </div>
            ) : (
              <>
                <p>Укажите email для получения материала</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
                    Отправить
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Resources
