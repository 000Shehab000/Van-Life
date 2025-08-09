import vanImage from '../images/van.png'
import '../style/hostVans.css'

export default function HostVanCard() {
  return (
    <div className="host-van-card-container">
      <img src={vanImage} alt="" />
      <div className="host-van-card-text">
        <h4>Modest Explorer</h4>
        <p>$60/day</p>
      </div>
    </div>
  )
}
