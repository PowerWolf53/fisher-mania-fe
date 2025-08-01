'use client'
import "./About.css"
import Shyka from '../../../../assets/images/main/shyka.jpg'
import Udochka from '../../../../assets/images/main/udochka.jpg'


const About = () => {

    return (
        <div className='about-section'>
            <div className='about-article'>
                <div>
                    <h1>О нас</h1>
                    <p>Fisher Mania - белорусский производитель рыболовных <br/> товаров,
                        предлагающий широкий ассортимент качественных <br/> товаров для рыбалки.
                        Наша цель - удовлетворить потребности <br/> продавцов на маркетплейсах
                        и оптовых поставщиков, <br/>
                        обеспечивая высокое качество и надежность продукции.</p>
                </div>

                <img src={Shyka.src}/>


            </div>
            <div className='about-image'>
                <img src={Udochka.src}/>
            </div>
        </div>
    )
}

export default About;