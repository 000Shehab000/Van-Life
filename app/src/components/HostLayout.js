import { NavLink, Outlet } from 'react-router-dom'
import '../style/header.css'

export default function HostLayout() {
  return (
    <>
      <nav className="dashboard-nav">
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="." //it links to /host which is the parent route
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}
