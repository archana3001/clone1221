import React from 'react'
import "../styles/Header.scss"

function Header() {
    return (
        <div className='Header-main'>
            <img className='Header-logo' src='logo.png'></img>
            <div className='Header-profile'></div>
        </div>
    )
}

export default Header