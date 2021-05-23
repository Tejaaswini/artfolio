import React from 'react'
import {Link} from 'react-router-dom'
import coffee from '../assets/coffee.png'

function Header() {
    return (
        <div className="header">
            <Link to="/" style={{textDecoration:'None'}}>
                <p className="header-name">Tejaaswini Narendra</p>
            </Link>
            <div>
                <a target="_blank" href="https://www.buymeacoffee.com/thriss">
                    <img src={coffee} className="coffee-img" alt="Buy a coffee" />
                </a>
            </div>
        </div>
    )
}

export default Header
