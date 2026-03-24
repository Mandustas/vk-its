import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 20L18 26L28 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="footer__logo-text">
                <strong>ВК</strong> ИТС
              </span>
            </div>
            <p className="footer__description">
              Интеллектуальные транспортные системы 
              и решения видеоаналитики для бизнеса и государства
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Продукты</h4>
            <ul className="footer__list">
              <li><Link to="/products/factor-kfvvf">Фактор КФВФ</Link></li>
              <li><Link to="/products/factor-b2">Фактор Б2</Link></li>
              <li><Link to="/products/factor-ai">Фактор AI</Link></li>
              <li><Link to="/products/server-analytics">Серверная аналитика</Link></li>
              <li><Link to="/products/video-surveillance">Видеонаблюдение</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Решения</h4>
            <ul className="footer__list">
              <li><Link to="/solutions">Транспорт и логистика</Link></li>
              <li><Link to="/solutions">Промышленность</Link></li>
              <li><Link to="/solutions">Умный город</Link></li>
              <li><Link to="/solutions">Критическая инфраструктура</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">База знаний</h4>
            <ul className="footer__list">
              <li><Link to="/knowledge">Глоссарий</Link></li>
              <li><Link to="/answers">Ответы на вопросы</Link></li>
              <li><Link to="/resources">Полезные материалы</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Компания</h4>
            <ul className="footer__list">
              <li><Link to="/about">О нас</Link></li>
              <li><Link to="/cases">Кейсы</Link></li>
              <li><Link to="/documents">Документы</Link></li>
              <li><Link to="/support">Поддержка</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__title">Контакты</h4>
            <ul className="footer__list footer__contacts">
              <li>
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </li>
              <li>
                <a href="mailto:info@vc-its.ru">info@vc-its.ru</a>
              </li>
              <li>
                <span>г. Москва, ул. Примерная, д. 10</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} ВК ИТС. Все права защищены.</p>
          <div className="footer__links">
            <Link to="/">Политика конфиденциальности</Link>
            <Link to="/">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
