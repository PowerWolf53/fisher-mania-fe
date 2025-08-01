import './ContactFormModal.css'
import {useEffect} from "react";
import CrossIcon from '../../../../../assets/images/main/common/cross.png'

const ContactFormModal = (
    {isOpen, onClose}: { isOpen: boolean, onClose: () => void }
) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll"
        }
        return () => {
            document.body.style.overflow = "scroll"
        };
    }, [isOpen]);

    if (!isOpen) {
        return <></>
    }
    return (
        <div className='modal-overlay'>

            <form className='modal-body'>
                <div className='form-line'>
                    <h1 className='modal-label'>Отправить заявку</h1>
                    <img src={CrossIcon.src} alt='Cross Icon' className='modal-close-icon' onClick={onClose}/>
                </div>
                <div className=' modal-form'>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-first-name">
                                Ваше имя *
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name" type="text" placeholder="Представьтесь пожалуйста"/>
                            {/*<p className="text-red-500 text-xs italic">Пожалуйста заполните это поле</p>*/}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-last-name">
                                Номер телефона
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name" type="text" placeholder="+7 XXX XXXXXXX"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-password">
                                Почта
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-password" type="email" placeholder="pochta@gmail.com"/>
                            <p className="text-gray-600 text-xs italic">Ваша почта для связи</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                Как с Вами связаться?
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state">
                                    <option>WhatsApp</option>
                                    <option>Telegram</option>
                                    <option>Viber</option>
                                    <option>Почта</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded submit-button">
                        Отправить
                    </button>
                </div>

            </form>

        </div>
    );
}

export default ContactFormModal;