import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site, nav } from '../config/site'
import Icon from './Icon'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // 라우트가 바뀌면 모바일 메뉴를 닫는다.
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand">
          <span className="brand__mark" aria-hidden>
            <Icon name="fa-solid fa-wand-magic-sparkles" />
          </span>
          {site.brand}
        </Link>

        {/* 모바일 햄버거 — 로고 줄 오른쪽 끝 */}
        <button
          type="button"
          className="site-nav__toggle"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>

        <nav id="site-nav" className={`site-nav${open ? ' is-open' : ''}`}>
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
