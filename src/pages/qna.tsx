import Menu from "../menu"
// import { Link } from 'react-router'

export default function QNA() {

  return (
    <>
      <Menu name="Q & A" />
      <div className="flex flex-1 flex-col text-olive-dark mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
        <h2 className="font-serif group relative pt-10 pb-4 text-center text-4xl">
            ¿Hasta cuándo puedo confirmar mi asistencia?
        </h2>
        <p className="font-serif group relative pb-8 text-lg sm:text-xl text-justify">
            Te agradeceríamos que fuera lo antes posible, la última fecha para confirmar tu asistencia es el <span className="font-bold">15 de Julio.</span>
        </p>

        <hr className="mx-20 sm:mx-40"/>
        
        <h2 className="font-serif group relative pt-10 pb-4 text-center text-4xl">
            ¿Se permite el ingreso de niños?
        </h2>
        <p className="font-serif group relative pb-8 text-lg sm:text-xl text-justify">
            Apreciamos a todos los pequeños de nuestra familia, sin embargo el lugar donde realizaremos nuestra boda no permitiría que los pequeños se diviertan y estén seguros. 
            <br/>
            <span className="font-bold">Por lo que lamentablemente no podrán acompañarnos.</span>
        </p>
        
        <hr className="mx-20 sm:mx-40"/>
        
        <h2 className="font-serif group relative pt-10 pb-4 text-center text-4xl">
            ¿Cuál es el código de vestimenta?
        </h2>
        <p className="font-serif group relative pb-8 text-lg sm:text-xl text-justify">
            Lo más importante para nosotros es tu presencia. El lugar que elegimos es un teatro por lo que el código de vestimenta más adecuado es <span className="font-bold">Etiqueta formal.</span>
        </p>
        <p className="font-serif group relative pb-8 text-lg sm:text-xl text-justify">
            Si no tienes idea de que es etiqueta formal acá te dejamos algunas referencias para que te inspires:
        </p>
        
        <hr className="mx-20 sm:mx-40"/>
        
        <h2 className="font-serif group relative pt-10 pb-4 text-center text-4xl">
            ¿Puedo llevar un regalo físico para la celebración?
        </h2>
        <p className="font-serif group relative pb-8 text-lg sm:text-xl text-justify">
            Preferimos que elijas algo de nuestras listas de regalos, sin embargo, si no te es posible puede llevarlo el día del evento.
            <br />
            <span className="font-bold">Agradecemos mucho tu generosidad y el deseo de celebrar con nosotros.</span>
        </p>
    </div>
    </>
  )
}