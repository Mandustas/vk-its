import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './Compare.scss'

function Compare() {
  const mainProducts = products.filter(p => ['factor-kfvvf', 'factor-b2', 'factor-ai'].includes(p.id))

  const specs = [
    { key: 'type', label: 'Тип устройства' },
    { key: 'analytics', label: 'Аналитика' },
    { key: 'recognition', label: 'Распознавание ГРЗ' },
    { key: 'weather', label: 'Всепогодное исполнение' },
    { key: 'night', label: 'Работа ночью' },
    { key: 'integration', label: 'Интеграции' },
    { key: 'storage', label: 'Хранение данных' },
    { key: 'power', label: 'Питание' }
  ]

  const productSpecs: Record<string, Record<string, string>> = {
    'factor-kfvvf': {
      type: 'Стационарный комплекс',
      analytics: 'Базовая детекция',
      recognition: 'Да, до 98%',
      weather: 'IP66, -40°C... +50°C',
      night: 'Да, ИК-подсветка до 30м',
      integration: 'REST API, SDK',
      storage: 'Локальное + серверное',
      power: '220В, PoE (опция)'
    },
    'factor-b2': {
      type: 'IP-камера с аналитикой',
      analytics: 'Детекция движения, пересечение линий',
      recognition: 'Опционально',
      weather: 'IP67, -30°C... +45°C',
      night: 'Да, ИК-подсветка до 20м',
      integration: 'REST API, ONVIF',
      storage: 'microSD до 256ГБ, облако',
      power: 'PoE, 12В'
    },
    'factor-ai': {
      type: 'AI-камера с edge-аналитикой',
      analytics: 'AI-аналитика на борту',
      recognition: 'Да, до 99%',
      weather: 'IP67, -40°C... +55°C',
      night: 'Да, ИК-подсветка до 40м',
      integration: 'REST API, ONVIF, RTSP',
      storage: 'microSD до 512ГБ',
      power: 'PoE+, 24В'
    }
  }

  return (
    <div className="compare-page">
      <section className="page-hero">
        <div className="container">
          <h1>Сравнение продуктов</h1>
          <p>
            Сравните характеристики продуктов линейки Фактор 
            и выберите оптимальное решение для ваших задач
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="compare-intro">
            <div className="compare-intro__card">
              <h3>🎯 Фактор КФВФ</h3>
              <p>Для фиксации нарушений ПДД и контроля скоростного режима</p>
              <Link to="/products/factor-kfvvf" className="btn btn--primary">Подробнее</Link>
            </div>
            <div className="compare-intro__card">
              <h3>💼 Фактор Б2</h3>
              <p>Оптимальное решение для бизнеса по доступной цене</p>
              <Link to="/products/factor-b2" className="btn btn--primary">Подробнее</Link>
            </div>
            <div className="compare-intro__card">
              <h3>🤖 Фактор AI</h3>
              <p>Максимальная аналитика на борту с использованием ИИ</p>
              <Link to="/products/factor-ai" className="btn btn--primary">Подробнее</Link>
            </div>
          </div>

          <div className="compare-table-wrapper">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-table__header-cell">Характеристика</th>
                  {mainProducts.map((product) => (
                    <th key={product.id} className="compare-table__product-cell">
                      <div className="compare-table__product-name">{product.name}</div>
                      <div className="compare-table__product-desc">{product.shortDescription}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map((spec) => (
                  <tr key={spec.key} className="compare-table__row">
                    <td className="compare-table__label">{spec.label}</td>
                    {mainProducts.map((product) => (
                      <td key={product.id} className="compare-table__value">
                        {productSpecs[product.id]?.[spec.key] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="compare-recommendations">
            <h2>Рекомендации по выбору</h2>
            <div className="compare-rec-grid">
              <div className="compare-rec-card">
                <h3>Выбирайте Фактор КФВФ, если:</h3>
                <ul>
                  <li>Нужна фиксация нарушений ПДД</li>
                  <li>Требуется контроль скоростного режима</li>
                  <li>Работа в составе комплекса фотовидеофиксации</li>
                  <li>Интеграция с ЦАФАП</li>
                </ul>
              </div>
              <div className="compare-rec-card">
                <h3>Выбирайте Фактор Б2, если:</h3>
                <ul>
                  <li>Нужно бюджетное решение для бизнеса</li>
                  <li>Достаточно базовой аналитики</li>
                  <li>Важна простота установки и настройки</li>
                  <li>Планируется масштабирование системы</li>
                </ul>
              </div>
              <div className="compare-rec-card">
                <h3>Выбирайте Фактор AI, если:</h3>
                <ul>
                  <li>Нужна максимальная аналитика на борту</li>
                  <li>Важна минимальная задержка обработки</li>
                  <li>Требуется работа без постоянного подключения к серверу</li>
                  <li>Планируется edge-вычисления</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="compare-cta">
            <h2>Нужна помощь с выбором?</h2>
            <p>
              Наши специалисты помогут подобрать оптимальное решение 
              с учетом ваших задач и бюджета
            </p>
            <Link to="/contacts" className="btn btn--primary btn--lg">
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Compare
