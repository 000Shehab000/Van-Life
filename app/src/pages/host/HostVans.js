import { Link } from 'react-router-dom'
import HostVanCard from '../../components/HostVanCard'
import '../../style/hostVans.css'
import { useState, useEffect } from 'react'

export default function HostVans() {
  const [hostVans, setHostVans] = useState([])
  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans))
  }, [])

  const allHostVans = hostVans.map((hostVanobj) => (
    <Link to={hostVanobj.id} key={hostVanobj.id}>
      <HostVanCard
        image={hostVanobj.imageUrl}
        name={hostVanobj.name}
        price={hostVanobj.price}
      />
    </Link>
  ))

  return (
    <div className="host-vans-container">
      <h1>Your listed vans</h1>
      {allHostVans}
    </div>
  )
}
