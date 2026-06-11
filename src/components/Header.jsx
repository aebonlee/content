import { Link, NavLink } from 'react-router-dom'
import { site } from '../config/site'
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
          <NavLink to="/curriculum">커리큘럼</NavLink>
          <NavLink to="/stamps">도장깨기</NavLink>
          <NavLink to="/gallery">갤러리</NavLink>
        </nav>
      </div>
    </header>
  )
}
