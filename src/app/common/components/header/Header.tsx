'use client'

import './Header.css'
import {useScrollDirection} from "./hooks/useScrollDirection";

const Header = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} header-desktop transition-all duration-500`}>
            <span>Fisher Mania</span>
            <span className='desktop-mail'>fishermaniaby@gmail.com</span>
        </div>
    )
}

export default Header;