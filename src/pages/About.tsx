import officeTeam from '../assets/images/office-team.jpg'
import './About.scss'

const newsItems = [
  {
    id: 1,
    title: 'ВК ИТС представила новый комплекс Фактор AI на выставке Securika Moscow 2024',
    date: '15 марта 2024',
    category: 'Выставки',
    excerpt: 'Новая AI-камера с аналитикой на борту получила положительные отзывы профессионалов отрасли. Стенд ВК ИТС посетили более 500 специалистов.'
  },
  {
    id: 2,
    title: 'Завершен проект внедрения системы видеоаналитики для крупного промышленного предприятия',
    date: '28 февраля 2024',
    category: 'Проекты',
    excerpt: 'Система обеспечивает контроль соблюдения требований промышленной безопасности 24/7. Внедрение заняло 3 месяца.'
  },
  {
    id: 3,
    title: 'ВК ИТС получила сертификат соответствия ГОСТ Р для комплекса Фактор КФВФ',
    date: '10 февраля 2024',
    category: 'Сертификация',
    excerpt: 'Подтверждено соответствие всем требованиям национального стандарта. Сертификат действителен до 2027 года.'
  },
  {
    id: 4,
    title: 'ВК ИТС стала партнером года по версии производителя камер видеонаблюдения',
    date: '25 января 2024',
    category: 'Награды',
    excerpt: 'Награда присуждена за выдающиеся результаты в продвижении решений видеонаблюдения на российском рынке.'
  },
  {
    id: 5,
    title: 'Вебинар: «Современные системы фотовидеофиксации нарушений ПДД»',
    date: '18 января 2024',
    category: 'Мероприятия',
    excerpt: 'Приглашаем специалистов принять участие в бесплатном вебинаре. Регистрация открыта до 17 января.'
  },
  {
    id: 6,
    title: 'ВК ИТС расширяет линейку продуктов: анонсирован новый модуль VMS',
    date: '12 декабря 2023',
    category: 'Продукты',
    excerpt: 'Система управления видеонаблюдением нового поколения будет представлена в Q2 2024.'
  }
]

function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>О компании</h1>
          <p>
            ВК ИТС — разработчик и интегратор интеллектуальных систем 
            видеоаналитики и распознавания для транспорта, промышленности и умного города
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-content__main">
              <h2>Кто мы</h2>
              <p>
                Компания ВК ИТС специализируется на разработке и внедрении комплексных решений 
                в области видеоаналитики, распознавания государственных регистрационных знаков 
                и интеллектуальных транспортных систем.
              </p>
              <p>
                Наша миссия — повышение безопасности и эффективности транспортной инфраструктуры, 
                промышленных предприятий и городской среды с помощью передовых технологий 
                искусственного интеллекта и компьютерного зрения.
              </p>
              <p>
                Мы работаем на рынке с 2014 года и за это время реализовали более 500 проектов 
                различной сложности — от локальных систем видеонаблюдения до масштабных 
                территориально-распределенных комплексов.
              </p>

              <h2 className="mt-3">Что мы предлагаем</h2>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature__icon">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M24 16V24L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Собственная разработка</h3>
                  <p>Продукты линейки Фактор с уникальными алгоритмами распознавания и аналитики</p>
                </div>
                <div className="about-feature">
                  <div className="about-feature__icon">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
                      <path d="M24 16V24L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3>Полный цикл</h3>
                  <p>От аудита и проектирования до внедрения, обучения и технической поддержки</p>
                </div>
                <div className="about-feature">
                  <div className="about-feature__icon">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4L8 10V20C8 30 15 38 24 42C33 38 40 30 40 20V10L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M18 24L22 28L30 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Гарантия качества</h3>
                  <p>Все продукты сертифицированы, решения соответствуют требованиям ГОСТ и отраслевых стандартов</p>
                </div>
              </div>
            </div>

            <aside className="about-sidebar">
              <div className="about-stats-card">
                <h3>Цифры компании</h3>
                <div className="about-stats">
                  <div className="about-stat">
                    <div className="about-stat__value">10+</div>
                    <div className="about-stat__label">лет на рынке</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat__value">500+</div>
                    <div className="about-stat__label">проектов</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat__value">10 000+</div>
                    <div className="about-stat__label">камер в системе</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat__value">98%</div>
                    <div className="about-stat__label">точность ANPR</div>
                  </div>
                </div>
              </div>

              <div className="about-team-photo mt-2">
                <img src={officeTeam} alt="Команда ВК ИТС" className="about-team-photo__img" loading="lazy" />
              </div>

              <div className="about-card mt-2">
                <h3>Документы</h3>
                <ul className="about-docs">
                  <li>
                    <a href="#" className="about-doc">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Сертификат ГОСТ Р</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="about-doc">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Реестр ПО Минцифры</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="about-doc">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Презентация компании</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-title">
            <h2>Новости и мероприятия</h2>
            <p>
              Последние события компании, пресс-релизы, анонсы выставок и вебинаров
            </p>
          </div>

          <div className="news-grid">
            {newsItems.map((news) => (
              <article key={news.id} className="news-item-card">
                <div className="news-item-card__meta">
                  <span className="news-item-card__category">{news.category}</span>
                  <span className="news-item-card__date">{news.date}</span>
                </div>
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
                <a href="#" className="news-item-card__link">Читать далее →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
