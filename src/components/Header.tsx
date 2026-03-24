import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

interface MenuItem {
  path: string
  label: string
  dropdown?: { path: string; label: string }[]
}

const menuItems: MenuItem[] = [
  { path: '/products', label: 'Продукты' },
  { path: '/solutions', label: 'Решения' },
  { path: '/cases', label: 'Кейсы' },
  { 
    path: '/knowledge', 
    label: 'База знаний',
    dropdown: [
      { path: '/knowledge', label: 'Глоссарий' },
      { path: '/answers', label: 'Ответы на вопросы' },
      { path: '/resources', label: 'Полезные материалы' }
    ]
  },
  { path: '/documents', label: 'Документы' },
  { path: '/support', label: 'Поддержка' },
  { path: '/contacts', label: 'Контакты' }
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDropdown = (path: string) => {
    setOpenDropdown(openDropdown === path ? null : path)
  }

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 20L18 26L28 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="header__logo-text">
            <strong>ВК</strong> ИТС
          </span>
        </Link>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          {menuItems.map((item) => (
            <div key={item.path} className="header__nav-item">
              {item.dropdown ? (
                <>
                  <button
                    className={`header__nav-link header__nav-link--dropdown ${openDropdown === item.path ? 'open' : ''}`}
                    onClick={() => toggleDropdown(item.path)}
                  >
                    {item.label}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="header__dropdown-icon">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`header__dropdown ${openDropdown === item.path ? 'open' : ''}`}>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={`header__dropdown-link ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setOpenDropdown(null)
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`header__nav-link ${location.pathname === item.path ? 'header__nav-link--active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/search" className="header__search" aria-label="Поиск">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
          <a href="tel:+74951234567" className="header__phone">+7 (495) 123-45-67</a>
          <button 
            className="header__burger" 
            onClick={toggleMobileMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
