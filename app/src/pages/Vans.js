import Van from '../components/VanCard'
import '../style/vans.css'
import { useState, useEffect } from 'react'
import '../server'
import { Link } from 'react-router-dom'

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const allVans = vans.map((vanObject) => (
    <Link key={vanObject.id} to={`/vans/${vanObject.id}`}>
      <Van
        name={vanObject.name}
        imageUrl={vanObject.imageUrl}
        type={vanObject.type}
        price={vanObject.price}
      />
    </Link>
  ))

  return (
    <div className="vans-container">
      <h1>Explore our van options</h1>
      <div className="vans-card-container">{allVans}</div>
    </div>
  )
}
