import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

import Menu from "../menu"
import Hero from "../assets/hero.jpeg"

export default function Home() {
    return (
        <>
            <Menu />
            <div className="flex flex-1 flex-col items-center justify-center">
                <img 
                    src={Hero}
                    className="md:px-6 md:py-2"
                />
                <h1 className="font-serif text-olive-dark text-4xl sm:text-8xl text-center py-8">
                    Boda <br/> Ramirez Schmidt
                </h1>
                <p className="group relative inline-flex items-center justify-center pb-3">
                    <CalendarIcon aria-hidden="true" className="block size-6 mr-3" /> Agosto 02, 2025 
                </p>
                <p className="group relative inline-flex items-center justify-center pb-3">
                    <MapPinIcon aria-hidden="true" className="block size-6 mr-3" /> Guateamala, Guatemala
                </p>
            </div>
        </>
    )
}