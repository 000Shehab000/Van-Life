import { NavLink, Link, Outlet, useParams } from 'react-router-dom'
import '../../style/header.css'
import '../../style/hostVans.css'
import { useEffect, useState } from 'react'

export default function HostVansDetails() {
  const { id } = useParams()

  const [hostVanDetails, setHostVanDetails] = useState({})

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setHostVanDetails(data.vans))
  }, [id])

  return (
    <>
      <nav className="back-button">
        <Link to=".." relative="path">
          &larr;Back to all vans
        </Link>
      </nav>
      <div className="host-van-container">
        <div className="host-van-details-container">
          <img src={hostVanDetails.imageUrl} alt="" />
          <div className="host-van-details-text">
            <div className={`category ${hostVanDetails.type}`}>
              {hostVanDetails.type}
            </div>
            <h2>{hostVanDetails.name}</h2>
            <span className="price">
              <b>${hostVanDetails.price} </b>/day
            </span>
          </div>
        </div>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="."
            end
          >
            Details
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="photos"
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={hostVanDetails} />
      </div>
    </>
  )
}
