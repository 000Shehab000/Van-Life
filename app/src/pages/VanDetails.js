import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function VanDetails() {
  const { id } = useParams()
  const [van, setVan] = useState({})

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
  }, [id])

  return (
    <div className="van-details-container">
      <img src={van.imageUrl} alt="" />
      <div className={`category ${van.type}`}>{van.type}</div>
      <h1>{van.name}</h1>
      <span className="price">
        <b>${van.price} </b> /day
      </span>
      <p>{van.description}</p>
      <Link className="button-link" to={'/vans'}>
        Rent this van
      </Link>
    </div>
  )
}
