import { useState } from 'react'
import './Support.scss'

const faqCategories = [
  {
    id: 'general',
    name: 'Общие вопросы',
    questions: [
      {
        q: 'Какие продукты входят в линейку Фактор?',
        a: 'В линейку Фактор входят три основных продукта: Фактор КФВФ (комплекс фотовидеофиксации), Фактор Б2 (базовая система видеоаналитики для бизнеса) и Фактор AI (AI-камера с аналитикой на борту). Также мы предлагаем серверную видеоаналитику, модуль раскрытия ГРЗ и системы видеонаблюдения.'
      },
      {
        q: 'Как получить коммерческое предложение?',
        a: 'Вы можете оставить заявку на сайте через форму обратной связи, написать на info@vc-its.ru или позвонить по телефону +7 (495) 123-45-67. Наш менеджер свяжется с вами в течение рабочего дня.'
      },
      {
        q: 'Предоставляете ли вы тестовый период?',
        a: 'Да, мы предоставляем возможность тестирования оборудования в рамках пилотного проекта. Срок тестирования и условия обсуждаются индивидуально в зависимости от проекта.'
      },
      {
        q: 'Какие сроки поставки оборудования?',
        a: 'Стандартные сроки поставки — от 5 до 15 рабочих дней в зависимости от конфигурации и наличия на складе. Для крупных проектов сроки определяются индивидуально.'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Техническая поддержка',
    questions: [
      {
        q: 'Как получить техническую поддержку?',
        a: 'Техническая поддержка осуществляется по телефону, email и через форму на сайте. Для клиентов с действующим договором поддержки предоставляется выделенный канал связи.'
      },
      {
        q: 'Какие часы работы технической поддержки?',
        a: 'Базовая техническая поддержка работает в рабочее время (Пн-Пт, 9:00-18:00 МСК). Для клиентов с договором премиум-поддержки доступна круглосуточная поддержка 24/7.'
      },
      {
        q: 'Предоставляете ли вы удалённое подключение?',
        a: 'Да, наши специалисты могут подключиться удалённо для диагностики и решения проблем. Используем защищённые каналы связи.'
      },
      {
        q: 'Как обновить прошивку устройства?',
        a: 'Обновление прошивки выполняется через веб-интерфейс устройства или централизованно через сервер управления. Инструкции доступны в разделе Документы. Рекомендуем обращаться в службу поддержки для обновления.'
      }
    ]
  },
  {
    id: 'integration',
    name: 'Интеграция',
    questions: [
      {
        q: 'Какие интерфейсы интеграции доступны?',
        a: 'Наши продукты поддерживают REST API, SDK для популярных языков программирования, протоколы ONVIF и RTSP для видеопотоков. Подробная документация доступна после регистрации.'
      },
      {
        q: 'Как получить доступ к SDK?',
        a: 'Для получения доступа к SDK необходимо заполнить заявку на сайте. После подписания NDA мы предоставим доступ к документации и библиотекам.'
      },
      {
        q: 'Возможна ли интеграция с существующими системами?',
        a: 'Да, мы обеспечиваем интеграцию с популярными VMS, СКУД и другими системами безопасности. Возможна разработка индивидуальных интеграций под заказ.'
      }
    ]
  },
  {
    id: 'warranty',
    name: 'Гарантия и сервис',
    questions: [
      {
        q: 'Какой гарантийный срок на продукцию?',
        a: 'Стандартная гарантия на оборудование — 24 месяца с момента ввода в эксплуатацию. На некоторые компоненты может предоставляться расширенная гарантия.'
      },
      {
        q: 'Что делать в случае неисправности?',
        a: 'Необходимо обратиться в службу технической поддержки. После первичной диагностики мы организуем ремонт или замену оборудования в рамках гарантии.'
      },
      {
        q: 'Предоставляете ли вы сервисное обслуживание?',
        a: 'Да, мы предлагаем договоры сервисного обслуживания с регулярной профилактикой, проверкой и обновлением оборудования. Доступны различные тарифы.'
      }
    ]
  }
]

function Support() {
  const [activeCategory, setActiveCategory] = useState('general')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const currentCategory = faqCategories.find(c => c.id === activeCategory)

  return (
    <div className="support-page">
      <section className="page-hero">
        <div className="container">
          <h1>Поддержка</h1>
          <p>
            Техническая поддержка, документация, FAQ и контакты 
            для связи с нашими специалистами
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="support-cards">
            <div className="support-card">
              <div className="support-card__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3511 21.4035C21.1449 21.5934 20.9003 21.7404 20.6319 21.8359C20.3634 21.9315 20.0768 21.9736 19.79 21.96C16.7428 21.6144 13.787 20.5895 11.19 18.98C8.77382 17.4739 6.72533 15.4254 5.219 13.01C3.60915 10.4123 2.58399 7.45575 2.24 4.41C2.22684 4.1235 2.26928 3.83729 2.36483 3.56907C2.46038 3.30085 2.60711 3.05649 2.79699 2.85007C2.98687 2.64366 3.21633 2.48004 3.47152 2.36909C3.72671 2.25814 4.00238 2.20216 4.28 2.205H7.28C7.75056 2.20147 8.20547 2.3746 8.55499 2.69022C8.90452 3.00584 9.12366 3.44108 9.17 3.91C9.23716 4.85232 9.41177 5.78601 9.69 6.69C9.80125 7.03906 9.8008 7.41519 9.689 7.764C9.5772 8.11281 9.36096 8.41779 9.07 8.64L7.93 9.5C9.23293 11.7672 11.0968 13.6311 13.364 14.934L14.227 13.794C14.5512 13.3773 15.0331 13.1136 15.56 13.064C15.6756 13.0533 15.7916 13.0476 15.907 13.047C16.4484 13.047 16.9773 13.2003 17.437 13.492C18.3413 13.7706 19.2756 13.9451 20.218 14.012C20.6921 14.0649 21.1324 14.2872 21.4494 14.6382C21.7665 14.9892 21.9371 15.4456 21.93 15.92V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Телефон поддержки</h3>
              <p>+7 (495) 123-45-67</p>
              <p className="support-card__note">Пн-Пт: 9:00 - 18:00 (МСК)</p>
            </div>

            <div className="support-card">
              <div className="support-card__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email поддержки</h3>
              <p>support@vc-its.ru</p>
              <p className="support-card__note">Ответ в течение 24 часов</p>
            </div>

            <div className="support-card">
              <div className="support-card__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Документация</h3>
              <p>Руководства, инструкции, SDK</p>
              <a href="/documents" className="support-card__link">Перейти →</a>
            </div>

            <div className="support-card">
              <div className="support-card__icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Запросить обновление</h3>
              <p>Прошивки и обновления ПО</p>
              <a href="/contacts" className="support-card__link">Запросить →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="section-title">
            <h2>Часто задаваемые вопросы</h2>
            <p>
              Ответы на популярные вопросы по продуктам и поддержке
            </p>
          </div>

          <div className="faq-tabs">
            <div className="faq-tabs__nav">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  className={`faq-tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="faq-content">
              {currentCategory?.questions.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? 'open' : ''}`}
                >
                  <button
                    className="faq-item__question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{item.q}</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className="faq-item__answer">
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="support-cta">
            <h2>Не нашли ответ на свой вопрос?</h2>
            <p>
              Свяжитесь с нами — наши специалисты помогут решить вашу задачу
            </p>
            <a href="/contacts" className="btn btn--primary btn--lg">
              Задать вопрос
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
