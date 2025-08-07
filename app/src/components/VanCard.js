import vanImage from '../images/van.png'
import '../style/vans.css'

export default function Van() {
  return (
    <div className="van-container">
      <img src={vanImage} alt="van" />
      <div className="van-details">
        <h3>Modest Explorer</h3>
        <span className="price">
          <b>$60 </b>
          <br /> /day
        </span>
      </div>
      <div className="category">Simple</div>
    </div>
  )
}
