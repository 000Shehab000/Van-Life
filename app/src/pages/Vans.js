import Header from '../components/Header'
import Footer from '../components/Footer'
import Van from '../components/VanCard'
import '../style/vans.css'
import { useState, useEffect } from 'react'
import '../server'

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const allVans = vans.map((vanObject) => (
    <Van
      key={vanObject.id}
      name={vanObject.name}
      imageUrl={vanObject.imageUrl}
      type={vanObject.type}
      price={vanObject.price}
    />
  ))

  return (
    <>
      <Header />
      <div className="vans-container">
        <h1>Explore our van options</h1>
        <div className="vans-card-container">{allVans}</div>
      </div>
      <Footer />
    </>
  )
}
