import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

import Menu from "../menu"
import Hero from "../assets/hero.jpg"
import lavander from "../assets/lavender.png"
import { Link } from 'react-router'

export default function Home() {
  return (
    <>
      <Menu name='Home' />
      <div className="columns-xs columns-2 justify-center text-olive-dark">
        <img
          src={Hero}
          className="md:px-6 md:py-2"
        />
        <div className='flex flex-1 flex-col items-center'>
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
          <Link
            to="rsvp"
            className='px-4 py-2 mb-10 bg-olive text-white'
          >Confirma tu asistencia</Link>
        </div>
      </div>
    </>
  )
}