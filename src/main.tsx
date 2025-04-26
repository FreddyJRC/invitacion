import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './pages/home.tsx'
import RSVP from './pages/rsvp.tsx'

const router = createHashRouter([
  {
    Component: Home,
    index: true
  },
  {
    Component: RSVP,
    path: "rsvp"
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
