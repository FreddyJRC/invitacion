import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './pages/home.tsx'
import RSVP from './pages/rsvp.tsx'
import Regalos from './pages/regalos.tsx'
import Galeria from './pages/galeria.tsx'
import QNA from './pages/qna.tsx'

const router = createBrowserRouter([{
  path: "/invitacion",
  children: [ 
    {
      Component: Home,
      index: true
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
    },
    {
      Component: QNA,
      path: "q-n-a"
    }
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
