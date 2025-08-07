import Header from '../components/Header'
import Footer from '../components/Footer'
import '../style/vans.css'
import Van from '../components/VanCard'

export default function Vans() {
  return (
    <>
      <Header />
      <div className="vans-container">
        <h1>Explore our van options</h1>
        <div className="vans-card-container">
          <Van />
          <Van />
          <Van />
          <Van />
        </div>
      </div>
      <Footer />
    </>
  )
}
