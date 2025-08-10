import { useOutletContext } from 'react-router-dom'
import '../../style/hostVans.css'

export default function Details() {
  const hostVanDetails = useOutletContext()
  return (
    <section>
      <p>
        <b>Name:</b> {hostVanDetails.name}
      </p>
      <p>
        <b>Category:</b> {hostVanDetails.type}
      </p>
      <p>
        <b>Description :</b> {hostVanDetails.description}
      </p>
    </section>
  )
}
