import { useOutletContext } from 'react-router-dom'
import '../../style/hostVans.css'

export default function Photos() {
  const hostVanDetails = useOutletContext()

  return <img className="host-van-photo" src={hostVanDetails.imageUrl} alt="" />
}
