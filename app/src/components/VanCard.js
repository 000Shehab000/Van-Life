import '../style/vans.css'

export default function Van(props) {
  return (
    <div className="van-container">
      <img src={props.imageUrl} alt="van" />
      <div className="van-details">
        <h3>{props.name}r</h3>
        <span className="price">
          <b>${props.price} </b>
          <br /> /day
        </span>
      </div>
      <div className={`category ${props.type}`}>{props.type}</div>
    </div>
  )
}
