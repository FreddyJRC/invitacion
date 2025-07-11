import { CalendarIcon, MapPinIcon, HomeIcon, MusicalNoteIcon, ClockIcon } from '@heroicons/react/24/outline'

import Menu from "../menu"
import Hero from "../assets/hero.jpg"
import lavander from "../assets/lavender.png"
import { Link } from 'react-router'

function Place() {
  return (
    <>
      <h2 className="font-serif group relative pt-6 pb-4 text-center text-3xl text-bold">
        ~ Misa ~
      </h2>
      <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
        <HomeIcon aria-hidden="true" className="block size-6 mr-3" /> Nuestra Señora de las Angustias Yurrita
      </p>
      <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
        <ClockIcon aria-hidden="true" className="block size-6 mr-3" /> 3:30 PM
      </p>
      <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
        <MapPinIcon aria-hidden="true" className="block size-6 mr-3" /> Casa Yurrita, 8-52 Ruta 6, Zona 4
      </p>
      <h2 className="font-serif group relative pt-6 pb-4 text-center text-3xl text-bold">
        ~ Recepción ~
      </h2>
      <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
        <MusicalNoteIcon aria-hidden="true" className="block size-6 mr-3" /> Teatro Abril
      </p>
      <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
        <ClockIcon aria-hidden="true" className="block size-6 mr-3" /> 6:30 PM
      </p>
      <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
        <MapPinIcon aria-hidden="true" className="block size-6 mr-3" /> 9A Avenida 14-22, Zona 1
      </p>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Menu name='Home' />
      <div className="flex flex-col sm:flex-row justify-center content-center text-olive-dark mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className='basis-1/2 justify-items-center'>
          <img
            src={Hero}
            className="md:px-6 md:py-2 max-h-175"
          />
        </div>
        <div className='basis-1/2 flex flex-col items-center'>
          <h1 className="font-serif text-4xl sm:text-5xl text-center pt-8">
            Boda <br /> Ramirez Schmidt
          </h1>
          <div className='flex inline-flex pt-2 pb-8'>
            <img
              src={lavander}
              className='max-w-32 md:max-w-52 scale-x-[-1] translate-x-5'
            />
            <img
              src={lavander}
              className='max-w-32 md:max-w-52 -translate-x-5'
            />
          </div>
          <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
            <CalendarIcon aria-hidden="true" className="block size-6 mr-3" /> Agosto 02, 2025
          </p>
          <p className="font-serif group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
            <MapPinIcon aria-hidden="true" className="block size-6 mr-3" /> Guateamala, Guatemala
          </p>
          {
            (localStorage.getItem("c") === "1") ? 
              <Place />
            : 
              <Link
                to="/invitacion/rsvp"
                className='px-4 py-2 mb-10 bg-olive text-white'
              >Confirma tu asistencia</Link>
          }
        </div>
      </div>
    </>
  )
}