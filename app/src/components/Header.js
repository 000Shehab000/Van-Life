import { Link, NavLink } from 'react-router-dom'
import '../style/header.css'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link className="title" to="/">
          VANLIFE
        </Link>
        <nav>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Vans
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
