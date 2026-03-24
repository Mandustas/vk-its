import { useState, FormEvent } from 'react'
import './Contacts.scss'

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contacts-page">
      <section className="page-hero">
        <div className="container">
          <h1>Контакты</h1>
          <p>
            Свяжитесь с нами для консультации, запроса коммерческого предложения 
            или технической поддержки
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contacts-grid">
            <div className="contacts-info">
              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Адрес</h3>
                  <p>г. Москва, ул. Примерная, д. 10, офис 500</p>
                  <a href="https://yandex.ru/maps" target="_blank" rel="noopener noreferrer" className="contact-card__link">
                    Показать на карте →
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3511 21.4035C21.1449 21.5934 20.9003 21.7404 20.6319 21.8359C20.3634 21.9315 20.0768 21.9736 19.79 21.96C16.7428 21.6144 13.787 20.5895 11.19 18.98C8.77382 17.4739 6.72533 15.4254 5.219 13.01C3.60915 10.4123 2.58399 7.45575 2.24 4.41C2.22684 4.1235 2.26928 3.83729 2.36483 3.56907C2.46038 3.30085 2.60711 3.05649 2.79699 2.85007C2.98687 2.64366 3.21633 2.48004 3.47152 2.36909C3.72671 2.25814 4.00238 2.20216 4.28 2.205H7.28C7.75056 2.20147 8.20547 2.3746 8.55499 2.69022C8.90452 3.00584 9.12366 3.44108 9.17 3.91C9.23716 4.85232 9.41177 5.78601 9.69 6.69C9.80125 7.03906 9.8008 7.41519 9.689 7.764C9.5772 8.11281 9.36096 8.41779 9.07 8.64L7.93 9.5C9.23293 11.7672 11.0968 13.6311 13.364 14.934L14.227 13.794C14.5512 13.3773 15.0331 13.1136 15.56 13.064C15.6756 13.0533 15.7916 13.0476 15.907 13.047C16.4484 13.047 16.9773 13.2003 17.437 13.492C18.3413 13.7706 19.2756 13.9451 20.218 14.012C20.6921 14.0649 21.1324 14.2872 21.4494 14.6382C21.7665 14.9892 21.9371 15.4456 21.93 15.92V16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Телефоны</h3>
                  <p>
                    <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                  </p>
                  <p className="contact-card__note">Пн-Пт: 9:00 - 18:00 (МСК)</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@vc-its.ru">info@vc-its.ru</a>
                  </p>
                  <p className="contact-card__note">Ответ в течение 24 часов</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-card__content">
                  <h3>Реквизиты</h3>
                  <p>ООО «ВК ИТС»</p>
                  <p className="contact-card__note">ИНН 1234567890 / КПП 123456789</p>
                </div>
              </div>
            </div>

            <div className="contacts-form-wrapper">
              <div className="contacts-form-card">
                <h2>Напишите нам</h2>
                <p>Заполните форму и мы свяжемся с вами в ближайшее время</p>

                {submitted && (
                  <div className="form-success">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className={`contacts-form ${submitted ? 'submitted' : ''}`}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">ФИО *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Иванов Иван Иванович"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Компания</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Название компании"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@company.ru"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">Интересующий продукт/решение</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option value="">Выберите из списка</option>
                      <option value="factor-kfvvf">Фактор КФВФ</option>
                      <option value="factor-b2">Фактор Б2</option>
                      <option value="factor-ai">Фактор AI</option>
                      <option value="server-analytics">Серверная аналитика</option>
                      <option value="plate-enhancement">Раскрытие ГРЗ</option>
                      <option value="video-surveillance">Видеонаблюдение</option>
                      <option value="solution-transport">Решение для транспорта</option>
                      <option value="solution-industry">Решение для промышленности</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Сообщение *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Опишите вашу задачу или вопрос..."
                    />
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>
                    Отправить заявку
                  </button>

                  <p className="form-note">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-placeholder">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#f1f5f9"/>
                <circle cx="200" cy="150" r="80" fill="rgba(37, 99, 235, 0.1)"/>
                <circle cx="200" cy="150" r="40" fill="rgba(37, 99, 235, 0.2)"/>
                <path d="M200 130V150L215 160" stroke="rgba(37, 99, 235, 0.5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="200" y="200" textAnchor="middle" fill="#64748b" fontSize="14">Интерактивная карта Яндекс</text>
              </svg>
              <a 
                href="https://yandex.ru/maps" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-link"
              >
                Открыть в Яндекс.Картах →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts
