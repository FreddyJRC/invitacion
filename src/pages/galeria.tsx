import Menu from "../menu"
import Hero from "../assets/hero.jpeg"
import Hero2 from "../assets/regalos.jpg"
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
    </>
  )
}