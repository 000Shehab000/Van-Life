import { useOutletContext } from 'react-router-dom'
import '../../style/hostVans.css'

export default function Pricing() {
  const hostVanDetails = useOutletContext()
  return (
    <p className="host-van-pricing">
      <span>${hostVanDetails.price}.00</span>/day
    </p>
  )
}
