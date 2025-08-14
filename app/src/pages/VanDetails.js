import { useParams, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function VanDetails() {
  const { id } = useParams()
  const [van, setVan] = useState({})
  const location = useLocation()
  console.log(location)

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
  }, [id])

  // use optional chaining for returning search key if exist else ""
  const search = location.state?.search || ''

  return (
    <>
      <nav className="back-button">
        <Link
          // this to={} for returning back and keeping filters if exists ==> vans?type=...
          to={`..?${search}`}
          relative="path"
        >
          &larr;Back to all vans
        </Link>
      </nav>
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
    </>
  )
}
