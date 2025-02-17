'use client'

import './header-desktop.css'
import {useScrollDirection} from "@/app/common-components/desktop/header/hooks/useScrollDirection";

export default function HeaderDesktop() {
    const scrollDirection = useScrollDirection();

    return (
        <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} header-desktop transition-all duration-500`}>
            <span>Fisher Mania</span>
            <span className='desktop-mail'>fishermaniaby@gmail.com</span>
        </div>
    )
}