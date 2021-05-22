import React from 'react'
import coffee from '../assets/coffee.jpg'

function Header() {
    return (
        <div className="header">
            <p className="header-name">Tejaaswini Narendra</p>
            <div className="header-right">
                <img src={coffee} className="coffee-img" alt="Buy a coffee"/>
            </div>
        </div>
    )
}

export default Header
