import Menu from "../menu"
import Carousel from "../components/carousel"

import img1 from "../assets/galery/1.jpg"
import img2 from "../assets/galery/2.jpg"
import img3 from "../assets/galery/3.jpg"
import img4 from "../assets/galery/4.jpg"
import img5 from "../assets/galery/5.jpg"
import img6 from "../assets/galery/6.jpg"
import img7 from "../assets/galery/7.jpg"
import img8 from "../assets/galery/8.jpg"
import img9 from "../assets/galery/9.jpg"
import img10 from "../assets/galery/10.jpg"
import img11 from "../assets/galery/11.jpg"
import img12 from "../assets/galery/12.jpg"

export default function Galeria() {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12
    ]

  return (
    <>
      <Menu name='Photos' />
      <div className="flex flex-1 flex-col items-center justify-center m-4 sm:mt-4 h-[80vh]">
        <Carousel images={images} />
      </div>
    </>
  )
}