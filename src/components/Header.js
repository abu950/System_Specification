
import { useState, useEffect } from 'react'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (<>

        <div className='header'>

            <div className='header_logo'>
                <img src='/assets/logo.png' />
                <p className='logo_text'>L O G O</p>
            </div>
            <div className='pages_head'>
                <a href='/'>Home</a>
                <a href='/'>Page 1</a>
                <a href='/'>Page 2</a>
            </div>
            <div className='hamburger_head'>
                <img src='/assets/hamburger.png' className='hamburger' />
            </div>
        </div>


      


    </>)
}

