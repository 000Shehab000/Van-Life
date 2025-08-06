import { Link } from 'react-router-dom'
import '../style/header.css'

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="title">VANLIFE</h1>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/">Vans</Link>
        </nav>
      </div>
    </header>
  )
}
