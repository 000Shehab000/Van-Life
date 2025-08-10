import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Layout from './Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import makeServer from './server'
import HostLayout from './components/HostLayout'
import HostVans from './pages/host/HostVans'
import HostVansDetails from './pages/host/HostVansDetails'
import Details from './pages/host/Details'
import Pricing from './pages/host/Pricing'
import Photos from './pages/host/Photos'

makeServer()

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
