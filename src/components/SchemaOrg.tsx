import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SchemaOrgData {
  type: 'Organization' | 'Product' | 'Service' | 'Article' | 'FAQPage' | 'BreadcrumbList' | 'WebSite'
  data: Record<string, unknown>
}

const schemaOrgData: Record<string, SchemaOrgData[]> = {
  '/': [
    {
      type: 'Organization',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ВК ИТС',
        url: 'https://vc-its.ru',
        logo: 'https://vc-its.ru/favicon.svg',
        description: 'Интеллектуальные транспортные системы и решения видеоаналитики для бизнеса и государства',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Москва',
          streetAddress: 'ул. Примерная, д. 10',
          addressCountry: 'RU'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+7-495-123-45-67',
          contactType: 'customer service',
          email: 'info@vc-its.ru'
        }
      }
    },
    {
      type: 'WebSite',
      data: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ВК ИТС — Интеллектуальные транспортные системы',
        url: 'https://vc-its.ru',
        description: 'Разработка и внедрение систем видеоаналитики, распознавания номеров и ИТС',
        inLanguage: 'ru-RU'
      }
    }
  ],
  '/products': [
    {
      type: 'Product',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Фактор КФВФ',
        description: 'Комплекс фотовидеофиксации нарушений ПДД с распознаванием номеров до 98%',
        brand: {
          '@type': 'Brand',
          name: 'ВК ИТС'
        },
        category: 'Системы видеоаналитики',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'RUB'
        }
      }
    },
    {
      type: 'Product',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Фактор AI',
        description: 'AI-камера с аналитикой на борту, распознавание номеров до 99%',
        brand: {
          '@type': 'Brand',
          name: 'ВК ИТС'
        },
        category: 'AI-камеры',
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'RUB'
        }
      }
    }
  ],
  '/solutions': [
    {
      type: 'Service',
      data: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Решения для транспорта',
        description: 'Интеллектуальные транспортные системы, контроль скорости, перекрёстков, ВГК',
        provider: {
          '@type': 'Organization',
          name: 'ВК ИТС'
        },
        serviceType: 'Транспортные системы',
        areaServed: {
          '@type': 'Country',
          name: 'Россия'
        }
      }
    }
  ],
  '/support': [
    {
      type: 'FAQPage',
      data: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Какие продукты входят в линейку Фактор?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'В линейку Фактор входят: Фактор КФВФ (комплекс фотовидеофиксации), Фактор Б2 (базовая система видеоаналитики) и Фактор AI (AI-камера с аналитикой на борту).'
            }
          },
          {
            '@type': 'Question',
            name: 'Как получить техническую поддержку?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Техническая поддержка осуществляется по телефону +7 (495) 123-45-67, email support@vc-its.ru и через форму на сайте.'
            }
          }
        ]
      }
    }
  ]
}

function SchemaOrg() {
  const location = useLocation()

  useEffect(() => {
    // Находим подходящие данные для текущего пути
    const pathData = schemaOrgData[location.pathname] || schemaOrgData['/']

    // Создаём и добавляем скрипты с JSON-LD
    pathData.forEach((item, index) => {
      const scriptId = `schema-org-${item.type}-${index}`
      let script = document.getElementById(scriptId)

      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.setAttribute('type', 'application/ld+json')
        document.head.appendChild(script)
      }

      script.textContent = JSON.stringify(item.data, null, 2)
    })

    // Очистка старых скриптов при навигации
    return () => {
      const allScripts = document.querySelectorAll('script[type="application/ld+json"]')
      allScripts.forEach((script) => {
        if (!location.pathname.includes(script.id)) {
          script.remove()
        }
      })
    }
  }, [location.pathname])

  return null
}

export default SchemaOrg
