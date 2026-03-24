import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Knowledge.scss'

type Category = 'all' | 'anpr' | 'video' | 'its' | 'security' | 'integration'

interface Term {
  id: string
  term: string
  category: Category
  definition: string
  example?: string
  related?: string[]
}

const terms: Term[] = [
  {
    id: '1',
    term: 'ANPR (Automatic Number Plate Recognition)',
    category: 'anpr',
    definition: 'Автоматическое распознавание государственных регистрационных знаков. Технология компьютерного зрения для идентификации номерных знаков транспортных средств на изображениях или видео.',
    example: 'Система ANPR распознаёт номер автомобиля А123АА777 за 0.2 секунды',
    related: ['LPR', 'ГРЗ', 'Распознавание']
  },
  {
    id: '2',
    term: 'LPR (License Plate Recognition)',
    category: 'anpr',
    definition: 'Распознавание номерных знаков. Синоним ANPR, используется преимущественно в американской литературе.',
    related: ['ANPR', 'ГРЗ']
  },
  {
    id: '3',
    term: 'ГРЗ (Государственный Регистрационный Знак)',
    category: 'anpr',
    definition: 'Номерная пластина транспортного средства, содержащая буквенно-цифровую комбинацию установленного образца.',
    related: ['ANPR', 'LPR', 'Распознавание ГРЗ']
  },
  {
    id: '4',
    term: 'VMS (Video Management System)',
    category: 'video',
    definition: 'Система управления видеонаблюдением. Программное обеспечение для управления камерами видеонаблюдения, записи и воспроизведения видео, интеграции с другими системами.',
    example: 'VMS позволяет управлять 1000+ камерами с единого интерфейса',
    related: ['Видеонаблюдение', 'NVR', 'Камеры']
  },
  {
    id: '5',
    term: 'NVR (Network Video Recorder)',
    category: 'video',
    definition: 'Сетевой видеорегистратор. Устройство для записи и хранения видео от IP-камер видеонаблюдения.',
    related: ['DVR', 'VMS', 'Видеонаблюдение']
  },
  {
    id: '6',
    term: 'DVR (Digital Video Recorder)',
    category: 'video',
    definition: 'Цифровой видеорегистратор. Устройство для записи и хранения видео от аналоговых камер видеонаблюдения.',
    related: ['NVR', 'Видеонаблюдение']
  },
  {
    id: '7',
    term: 'RTSP (Real Time Streaming Protocol)',
    category: 'integration',
    definition: 'Протокол потоковой передачи в реальном времени. Сетевой протокол прикладного уровня для управления передачей потоковых данных.',
    example: 'Камера передаёт видеопоток по RTSP: rtsp://192.168.1.100:554/stream1',
    related: ['ONVIF', 'Потоковое видео']
  },
  {
    id: '8',
    term: 'ONVIF (Open Network Video Interface Forum)',
    category: 'integration',
    definition: 'Отраслевой стандарт для обеспечения совместимости между устройствами видеонаблюдения от различных производителей.',
    related: ['RTSP', 'IP-камеры']
  },
  {
    id: '9',
    term: 'ИТС (Интеллектуальная Транспортная Система)',
    category: 'its',
    definition: 'Комплекс технических средств и программного обеспечения для управления транспортными потоками, повышения безопасности и эффективности дорожного движения.',
    example: 'ИТС Москвы включает более 5000 камер фотовидеофиксации',
    related: ['Фотовидеофиксация', 'Управление трафиком']
  },
  {
    id: '10',
    term: 'ЦАФАП (Центр Автоматизированной Фиксации Административных Правонарушений)',
    category: 'its',
    definition: 'Подразделение ГИБДД, осуществляющее обработку материалов с комплексов фотовидеофиксации нарушений ПДД.',
    related: ['Фотовидеофиксация', 'ПДД', 'Нарушения']
  },
  {
    id: '11',
    term: 'ВГК (Весогабаритный Контроль)',
    category: 'its',
    definition: 'Система контроля веса и габаритов транспортных средств. Используется для выявления перегруженных грузовых автомобилей.',
    related: ['Грузовой транспорт', 'ПДД']
  },
  {
    id: '12',
    term: 'Edge Analytics (Периферийная аналитика)',
    category: 'video',
    definition: 'Обработка данных и выполнение аналитических алгоритмов непосредственно на устройстве (камере), а не на сервере.',
    example: 'Фактор AI выполняет распознавание номеров непосредственно на камере',
    related: ['AI', 'Видеоаналитика']
  },
  {
    id: '13',
    term: 'REST API',
    category: 'integration',
    definition: 'Интерфейс программирования приложений, основанный на протоколе HTTP. Используется для интеграции систем и обмена данными.',
    example: 'POST /api/v1/recognize — запрос на распознавание номера',
    related: ['API', 'Интеграция', 'SDK']
  },
  {
    id: '14',
    term: 'SDK (Software Development Kit)',
    category: 'integration',
    definition: 'Набор инструментов для разработки программного обеспечения. Включает библиотеки, документацию и примеры кода для интеграции.',
    related: ['API', 'Интеграция']
  },
  {
    id: '15',
    term: 'СКУД (Система Контроля и Управления Доступом)',
    category: 'security',
    definition: 'Комплекс технических и программных средств для ограничения и контроля доступа людей и транспортных средств на охраняемые территории.',
    related: ['Доступ', 'Безопасность', 'Распознавание']
  },
  {
    id: '16',
    term: 'Computer Vision (Компьютерное зрение)',
    category: 'video',
    definition: 'Область искусственного интеллекта, занимающаяся извлечением информации из изображений и видео.',
    related: ['AI', 'Видеоаналитика', 'Распознавание']
  },
  {
    id: '17',
    term: 'Neural Network (Нейронная сеть)',
    category: 'video',
    definition: 'Математическая модель, вдохновлённая биологическими нейронными сетями. Используется для распознавания образов, классификации и прогнозирования.',
    related: ['AI', 'Deep Learning', 'Computer Vision']
  },
  {
    id: '18',
    term: 'Deep Learning (Глубокое обучение)',
    category: 'video',
    definition: 'Подраздел машинного обучения, использующий многослойные нейронные сети для решения сложных задач распознавания.',
    related: ['Neural Network', 'AI']
  },
  {
    id: '19',
    term: 'IP-камера',
    category: 'video',
    definition: 'Цифровая видеокамера для передачи видеопотока по сети Ethernet/IP. Имеет встроенный процессор и сетевой интерфейс.',
    related: ['Видеонаблюдение', 'RTSP', 'ONVIF']
  },
  {
    id: '20',
    term: 'PoE (Power over Ethernet)',
    category: 'integration',
    definition: 'Технология передачи электропитания вместе с данными по кабелю Ethernet. Позволяет подключать устройства без отдельного источника питания.',
    related: ['IP-камера', 'Сеть']
  },
  {
    id: '21',
    term: 'Фотовидеофиксация',
    category: 'its',
    definition: 'Автоматическая фиксация нарушений правил дорожного движения с использованием фото- и видеосъёмки.',
    related: ['ПДД', 'ЦАФАП', 'Нарушения']
  },
  {
    id: '22',
    term: 'API (Application Programming Interface)',
    category: 'integration',
    definition: 'Интерфейс программирования приложений. Набор правил и протоколов для взаимодействия различных программных компонентов.',
    related: ['REST API', 'SDK', 'Интеграция']
  },
  {
    id: '23',
    term: 'ROI (Region of Interest)',
    category: 'video',
    definition: 'Область интереса. Выделенная область на изображении или видео, которая обрабатывается с повышенным вниманием или качеством.',
    related: ['Видеоаналитика', 'Сжатие']
  },
  {
    id: '24',
    term: 'FPS (Frames Per Second)',
    category: 'video',
    definition: 'Количество кадров в секунду. Мера частоты смены кадров в видео.',
    example: '30 FPS обеспечивает плавное видео, 15 FPS достаточно для наблюдения',
    related: ['Видео', 'Кадровая частота']
  },
  {
    id: '25',
    term: 'IR-подсветка (Инфракрасная подсветка)',
    category: 'video',
    definition: 'Подсветка в инфракрасном диапазоне для съёмки в условиях недостаточной освещённости или полной темноты.',
    related: ['Ночная съёмка', 'Камера']
  }
]

const categoryLabels: Record<Category, string> = {
  'all': 'Все термины',
  'anpr': 'ANPR / Распознавание',
  'video': 'Видеоаналитика',
  'its': 'ИТС / Транспорт',
  'security': 'Безопасность',
  'integration': 'Интеграция'
}

function Knowledge() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)

  const filteredTerms = terms.filter((term) => {
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="knowledge-page">
      <section className="page-hero">
        <div className="container">
          <h1>База знаний</h1>
          <p>
            Глоссарий терминов, статьи и ответы на вопросы 
            о видеоаналитике, распознавании и интеллектуальных транспортных системах
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="knowledge-search">
            <div className="knowledge-search__input">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Поиск терминов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="knowledge-filters">
            {(Object.keys(categoryLabels) as Category[]).map((category) => (
              <button
                key={category}
                className={`knowledge-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          <div className="terms-count">
            Найдено терминов: <strong>{filteredTerms.length}</strong>
          </div>

          <div className="terms-grid">
            {filteredTerms.map((term) => (
              <article
                key={term.id}
                className={`term-card ${expandedTerm === term.id ? 'expanded' : ''}`}
              >
                <div className="term-card__header">
                  <span className={`term-card__category term-card__category--${term.category}`}>
                    {categoryLabels[term.category]}
                  </span>
                  <button
                    className="term-card__toggle"
                    onClick={() => setExpandedTerm(expandedTerm === term.id ? null : term.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <h3 className="term-card__title">{term.term}</h3>
                <div className="term-card__content">
                  <p className="term-card__definition">{term.definition}</p>
                  {term.example && (
                    <div className="term-card__example">
                      <strong>Пример:</strong> {term.example}
                    </div>
                  )}
                  {term.related && (
                    <div className="term-card__related">
                      <span>См. также:</span>
                      {term.related.map((rel, i) => (
                        <span key={i} className="term-card__related-tag">{rel}</span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="terms-empty">
              <p>По вашему запросу терминов не найдено</p>
            </div>
          )}
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="knowledge-cta">
            <h2>Не нашли нужный термин?</h2>
            <p>
              Сообщите нам — мы добавим объяснение термина в базу знаний
            </p>
            <Link to="/contacts" className="btn btn--primary">
              Предложить термин
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Knowledge
