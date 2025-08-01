'use client'

import './ProductsCarousel.css'
import CarouselCard from "./CarouselCard";
import ProductCircle from '../../../../assets/images/main/products/circle.jpg'
import Kolobaska from '../../../../assets/images/main/products/kolobaska.jpg'
import Kobilka from '../../../../assets/images/main/products/kobilka.jpg'
import Motilnica from '../../../../assets/images/main/products/motilnica.jpg'

export default function ProductsCarousel(){


    return (
        <div className='products-section-desktop'>
            <span className='products-section-label-desktop'>Ассортимент</span>
            <div className='products-slider-desktop'>
                <CarouselCard imgSrc={ProductCircle} title={'Кружок рыболовный'} description={'145мм-170мм неоснащённые/оснащённые: леска 10 метров 0.3-0.4'} />
                <CarouselCard imgSrc={Kolobaska} title={'Колобашка'} description={'Колобашка неоснащённая/оснащённая: леска 15 метров 0.3-0.4'} />
                <CarouselCard imgSrc={Kobilka} title={'Удочка кобылка'} description={'Удочка зимняя "Кобылка" с хлыстом неоснащённая'} />
                <CarouselCard imgSrc={Motilnica} title={'Мотыльница'} description={'Мотыльница зимняя красная/белая 3.5x10.5x7.5 см'} />
            </div>
        </div>
    )
}