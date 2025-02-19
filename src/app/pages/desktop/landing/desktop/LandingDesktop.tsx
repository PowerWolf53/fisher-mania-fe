'use client'
import './landing-desktop.css'
import {useState} from "react";
import ContactFormModal from "@/app/pages/desktop/landing/desktop/contact-form-modal/ContactFormModal";

export default function LandingDesktop() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () =>{
        setIsModalOpen(false);
    }

    const onOpen = () =>{
        window.scrollTo({top:0});
        setIsModalOpen(true);
    }

    return (
        <div className="welcome-desktop">
            <div className="home-image-desktop">
            </div>
            <div className='landing-text-wrapper-desktop'>
                <p className="landing-welcome-text-desktop">Добро пожаловать на <br/>
                    Fisher Mania <br/>
                </p>
                <span className='lending-sub-logo-desktop'>Ваш надёжный выбор рыболовных товаров</span>
                <div className='more-button-desktop' onClick={onOpen}>Узнать больше</div>
            </div>
            <ContactFormModal isOpen={isModalOpen} onClose={onClose}/>
        </div>
    );

}