import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../api'

export function loader({ params }) {
  return getVans(params.id)
}

export default function VanDetails() {
  const location = useLocation()
  const van = useLoaderData()

  // use optional chaining for returning search key if exist else ""
  const search = location.state?.search || ''
  // use optional chaining for editing back button text ex: simple, luxury, all
  const type = location.state?.type || 'all'

  return (
    <>
      <nav className="back-button">
        <Link
          // this to={} for returning back and keeping filters if exists ==> vans?type=...
          to={`..?${search}`}
          relative="path"
        >
          &larr;{`Back to ${type} vans`}
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
