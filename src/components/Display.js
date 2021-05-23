import React from 'react'
import {Link} from 'react-router-dom'
import potrait from '../assets/portraits/rahul.jpeg'
import characters from '../assets/characters/suits.jpeg'
import scenes from '../assets/scenarios/identity.jpeg'
import mandala from '../assets/mandalas/lions.jpg'
import misc from '../assets/misc/balance.jpg'

function Display() {
    return (
        <div>
            <div className="custom">
                <p>Want a customized artwork?<span> </span>
                    <a href="mailto:tejnaren0798@gmail.com?subject=Let's Connect!" target="_blank" rel="noreferrer">
                        <button className="custom-btn">Contact</button>
                    </a>
                </p>
            </div>
            <div className="display">
                <div className="portraits-div">
                    <p>Misc</p>
                    <img src={misc} className="potrait" alt=""/>
                    <Link to='/artfolio/miscellaneous'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
                <div className="portraits-div">
                    <p>Scenarios</p>
                    <img src={scenes} className="potrait" alt=""/>
                    <Link to='/artfolio/scenarios'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
                <div className="portraits-div">
                    <p>Mandalas</p>
                    <img src={mandala} className="potrait" alt=""/>
                    <Link to='/artfolio/mandalas'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
            </div>
            <div className="display-two">
                <div className="portraits-div">
                    <p>Portraits</p>
                    <img src={potrait} className="potrait" alt=""/>
                    <Link to='/artfolio/portraits'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
                <div className="portraits-div">
                    <p>Characters</p>
                    <img src={characters} className="potrait" alt=""/>
                    <Link to='/artfolio/characters'>
                        <button className="view-btn">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Display
