import { Link, useLoaderData } from 'react-router-dom'
import HostVanCard from '../../components/HostVanCard'
import '../../style/hostVans.css'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader() {
  await requireAuth()
  return getHostVans()
}

export default function HostVans() {
  const hostVans = useLoaderData()

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
