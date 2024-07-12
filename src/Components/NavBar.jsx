import React, { useState } from 'react'
// import downArrow from './assets/down-arrow.svg'
import samuraisizzle from '../assets/samuraisizzle.svg'
import { Link } from 'react-router-dom'



//SPA - Single Page Application
//2 types of routing - 1.Client side routing - 2. Server side routing

const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='navbar sticky top-0 bg-white'>
            <div className='flex justify-between sticky top-0'>
                <div className='flex'>

                    <a href='/'>
                        <img
                            className='logo'
                            src={samuraisizzle}
                            alt="" />
                    </a>

                    {/* <Link to='/'>
                        <img  
                        className='logo'
                        src={samuraisizzle}    alt="" />    
                        <p className='text-3xl	font-bold	pt-3'>Samurai Sizzle</p>
                        </Link> */}

                    <a href='/'>
                        <p className='text-3xl	font-bold	pt-3'>Samurai Sizzle</p>
                    </a>
                </div>

                <ul className='flex gap-4 align-end'>
                    {/* <li>Home</li> */}
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <li>Cart</li>
                    <li>{isLoggedIn ? <button onClick={() => setIsLoggedIn(false)} className='rounded-lg bg-indigo-400 px-2'>LogOut</button> :
                        <button onClick={() => setIsLoggedIn(true)} className='rounded-lg bg-indigo-400 px-2'>Login</button>}</li>
                </ul>

            </div>
        </div>
    )
}

export default NavBar