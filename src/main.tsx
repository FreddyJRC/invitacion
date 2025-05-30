import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './pages/home.tsx'
import RSVP from './pages/rsvp.tsx'
import Regalos from './pages/regalos.tsx'
import Galeria from './pages/galeria.tsx'

const router = createHashRouter([
  {
    Component: Home,
    path: "/"
  },
  {
    Component: RSVP,
    path: "rsvp"
  },
  {
    Component: Regalos,
    path: "regalos"
  },
  {
    Component: Galeria,
    path: "galeria"
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
