import Menu from "../menu"
import Hero from "../assets/regalos.jpg"
import { Link } from 'react-router'

export default function Regalos() {
  return (
    <>
      <Menu name='Gift List' />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-1 flex-col items-center justify-center">
          <img
            src={Hero}
            className="md:px-6 md:py-2"
          />
        </div>
        <div className="flex flex-1 flex-col text-olive-dark font-serif text-lg sm:text-3xl">
          <p className="group relative p-6 text-center">
              Gracias por acompañarnos y ser parte de este momento tan importante en nuestras vidas, el mejor regalo es tu presencia.
          </p>
          <p className="group relative p-6 text-center">
              Con la bendición de Dios y mucha alegría estamos empezando un nuevo capítulo en nuestras vidas, hemos seleccionado algunos artículos que nos gustaría y ayudarían a crear el hogar de nuestros sueños.
          </p>
          <div className='flex flex-col sm:flex-row justify-center p-6 text-center'>
            <Link to="https://www.cemaco.com/list/bodaramirezschmidt" className='px-6 py-3 mx-3 my-2 bg-olive text-white'>Bodas Cemaco</Link>
            <Link to="https://simangiftregistry.web.app/table/20005887" className='px-6 py-3 mx-3 my-2 bg-olive text-white'>Bodas Siman</Link>
          </div>
          <div className="flex flex-1 justify-center">
          <p className="p-6 text-center border-4 border-olive text-olive text-md rounded-md">
              Monetaria BI
              <br />
              Freddy Ramirez
              <br />
              4110000835
          </p>
          </div>
        </div>
      </div>
    </>
  )
}