import '../style/hostVans.css'

export default function HostVanCard(props) {
  return (
    <div className="host-van-card-container">
      <img src={props.image} alt="" />
      <div className="host-van-card-text">
        <h4>{props.name}</h4>
        <p>${props.price}/day</p>
      </div>
    </div>
  )
}
