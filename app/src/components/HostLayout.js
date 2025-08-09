import { NavLink, Outlet } from 'react-router-dom'
import '../style/header.css'

export default function HostLayout() {
  return (
    <>
      <nav className="dashboard-nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
