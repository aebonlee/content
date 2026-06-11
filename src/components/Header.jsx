import { Link, NavLink } from 'react-router-dom'
import { site, nav } from '../config/site'
import Icon from './Icon'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand">
          <span className="brand__mark" aria-hidden>
            <Icon name="fa-solid fa-wand-magic-sparkles" />
          </span>
          {site.brand}
        </Link>
        <nav className="site-nav">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to}>{n.label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
