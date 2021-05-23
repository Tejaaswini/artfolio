import React from 'react'
import {Link} from 'react-router-dom'
import potrait from '../assets/potraits/rahul.jpeg'
import characters from '../assets/characters/suits.jpeg'
import scenes from '../assets/scenarios/identity.jpeg'
import mandala from '../assets/mandalas/lions.jpg'
import misc from '../assets/misc/balance.jpg'

function Display() {
    return (
        <div>
            <div className="custom">
                <p>Want a customized artwork?<span> </span>
                    <a href="mailto:tejnaren0798@gmail.com?subject=Let's Connect!" rel="EMAIL" target="_blank">
                        <button className="custom-btn">Contact</button>
                    </a>
                </p>
            </div>
            <div className="display">
                <div className="potraits-div">
                    <p>Misc</p>
                    <img src={misc} className="potrait" />
                    <Link to='/artfolio/miscellaneous'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
                <div className="potraits-div">
                    <p>Scenarios</p>
                    <img src={scenes} className="potrait" />
                    <Link to='/artfolio/scenarios'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
                <div className="potraits-div">
                    <p>Mandalas</p>
                    <img src={mandala} className="potrait" />
                    <Link to='/artfolio/mandalas'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
            </div>
            <div className="display-two">
                <div className="potraits-div">
                    <p>Potraits</p>
                    <img src={potrait} className="potrait" />
                    <button className="view-btn">View More</button>
                </div>
                <div className="potraits-div">
                    <p>Characters</p>
                    <img src={characters} className="potrait" />
                    <button className="view-btn">View More</button>
                </div>
            </div>
        </div>
    )
}

export default Display
