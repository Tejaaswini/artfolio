import React from 'react'
import coffee from '../assets/coffee.jpg'

function Header() {
    return (
        <div className="header">
            <p className="header-name">Tejaaswini Narendra</p>
            <div>
                <a target="_blank" href="https://www.buymeacoffee.com/thriss">
                    <img src={coffee} className="coffee-img" alt="Buy a coffee"/>
                </a>
            </div>
        </div>
    )
}

export default Header
