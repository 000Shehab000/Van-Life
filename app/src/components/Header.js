import { Link, NavLink } from 'react-router-dom'
import '../style/header.css'
import profileImage from '../images/profile.png'

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
          <Link to="login" className="login-link">
            <img src={profileImage} alt="" className="login-icon" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
