import React from 'react'
import logo from '../Assets/DataVerseLogo.png';
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <nav className='flex items-center justify-between p-3 backdrop-blur-[2px] fixed top-0 left-0 right-0' >
                <div>
                    <Link to="/"><img src={logo} className='h-[80px] w-[80px]' alt="Logo" /></Link>
                </div>
                <div className='text-white mr-[50px] text-1xl font-Orbitron'>
                    <ul className="flex gap-[2.5rem]">
                        <li>
                            <Link to="/" className='hover:text-blue-600'>Home</Link>
                        </li>
                        <li>
                            <a href="/#about-section" className='hover:text-blue-600'>About</a>
                        </li>
                        <li>
                            <Link to="/event" className='hover:text-blue-600'>Event</Link>
                        </li>
                        <li>
                            <a href="/#team" className='hover:text-blue-600'>Team</a>
                        </li>
                    </ul>
                </div>
            </nav></div>
    )
}

export default Nav