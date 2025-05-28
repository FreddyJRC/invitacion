import Menu from "../menu"
import Hero from "../assets/hero.jpeg"
import Hero2 from "../assets/regalos.jpg"
import { Link } from 'react-router'
import Carousel from "../components/carousel"

export default function Galeria() {

    const images = [
        Hero,
        Hero2
    ]

  return (
    <>
      <Menu name='Photos' />
      <div className="flex flex-1 flex-col items-center justify-center">
        <Carousel images={images} />
      </div>
      <div className="flex flex-1 flex-col sm:mx-40 text-olive-dark">
        <p className="font-serif group relative p-8 text-lg sm:text-xl text-center">
            La lista de regalos la hemos creado a través de Siman y Bodas CEMACO. Puedes ver nuestra selección de regalos y opciones disponibles aqui
        </p>
        <div className='flex justify-center'>
          <Link to="https://www.cemaco.com/list/bodaramirezschmidt" className='px-4 py-2 mx-3 bg-olive text-white'>Cemaco</Link>
          <Link to="https://simangiftregistry.web.app/table/20005887" className='px-4 py-2 mx-3 bg-olive text-white'>Siman</Link>
        </div>
        <p className="font-serif group relative p-8 text-lg sm:text-xl text-center">
            ¡Gracias por ser parte de este momento especial!
        </p>
      </div>
    </>
  )
}