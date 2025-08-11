import Van from '../components/VanCard'
import '../style/vans.css'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const filteredVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans

  const allVans = filteredVans.map((vanObject) => (
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
      <nav className="filter-buttons">
        <button
          className={`van-type simple ${typeFilter === 'simple' && 'selected'}`}
          onClick={() => setSearchParams({ type: 'simple' })}
        >
          Simple
        </button>
        <button
          className={`van-type rugged ${typeFilter === 'rugged' && 'selected'}`}
          onClick={() => setSearchParams({ type: 'rugged' })}
        >
          Rugged
        </button>
        <button
          className={`van-type luxury ${typeFilter === 'luxury' && 'selected'}`}
          onClick={() => setSearchParams({ type: 'luxury' })}
        >
          Luxury
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({ type: '' })}
          >
            Clear filter
          </button>
        )}
      </nav>

      <div className="vans-card-container">{allVans}</div>
    </div>
  )
}
