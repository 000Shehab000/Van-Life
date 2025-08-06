import { Link } from 'react-router-dom'
import '../style/header.css'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link className="title" to="/">
          VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </div>
    </header>
  )
}
