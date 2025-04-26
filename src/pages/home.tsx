import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

import Menu from "../menu"
import Hero from "../assets/hero.jpeg"
import lavander from "../assets/lavender.png"

export default function Home() {
    return (
        <>
            <Menu />
            <div className="flex flex-1 flex-col items-center justify-center">
                <img 
                    src={Hero}
                    className="md:px-6 md:py-2"
                />
                <h1 className="font-serif text-olive-dark text-4xl sm:text-6xl text-center pt-8">
                    Boda <br/> Ramirez Schmidt
                </h1>
                <div className='flex inline-flex pt-2 pb-8'>
                    <img 
                        src={lavander} 
                        className='max-w-32 md:max-w-64 scale-x-[-1] translate-x-5'
                    />
                    <img 
                        src={lavander} 
                        className='max-w-32 md:max-w-64 -translate-x-5'
                    />
                </div>
                <p className="group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
                    <CalendarIcon aria-hidden="true" className="block size-6 mr-3" /> Agosto 02, 2025 
                </p>
                <p className="group relative inline-flex items-center justify-center pb-3 text-lg sm:text-xl">
                    <MapPinIcon aria-hidden="true" className="block size-6 mr-3" /> Guateamala, Guatemala
                </p>
                
            </div>
        </>
    )
}