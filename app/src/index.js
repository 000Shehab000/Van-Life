import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans'
import VanDetails, { loader as VanDetailsLoader } from './pages/VanDetails'
import Layout from './Layout'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import './server'
import HostLayout from './components/HostLayout'
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans'
import HostVansDetails from './pages/host/HostVansDetails'
import Details from './pages/host/Details'
import Pricing from './pages/host/Pricing'
import Photos from './pages/host/Photos'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login from './pages/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={VanDetailsLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null
          }}
        />
        <Route path="reviews" element={<Reviews />} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          errorElement={<Error />}
        >
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
