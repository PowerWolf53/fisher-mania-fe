'use client'

import './Footer.css'
import InstagramIcon from './../../../assets/images/main/common/insta.png'
import LinkIcon from './../../../assets/images/main/common/link.png'
import TelegramIcon from './../../../assets/images/main/common/telegram.png'
import WatsappIcon from './../../../assets/images/main/common/watsap.png'



const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo-container'>
                <h1>Fisher Mania</h1>
            </div>
            <div className='contacts-container'>
                <p>+375 (29) 590-80-29</p>
                <p>fishermaniaby@gmail.com</p>
                <p className='address-container'>р.Беларусь, Витебская обл, г. Витебск</p>
                <div className='social-media-container'>
                    <img className='telegram-icon' src={TelegramIcon.src}/>
                    <img className='watsapp-icon' src={WatsappIcon.src}/>
                    <img className='insta-icon' src={InstagramIcon.src}/>
                    <img className='link-icon' src={LinkIcon.src}/>
                </div>
            </div>

        </div>
    )
}

export default Footer;