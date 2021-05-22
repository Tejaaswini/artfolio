import React from 'react'
import potrait from '../assets/potraits/rahul.jpeg'
import characters from '../assets/characters/suits.jpeg'
import scenes from '../assets/scenarios/identity.jpeg'
import mandala from '../assets/mandalas/lions.jpg'
import misc from '../assets/misc/balance.jpg'

function Display() {
    return (
        <div>
            <div className="display">
                <div className="potraits-div">
                    <p>Misc</p>
                    <img src={misc} className="potrait" />
                </div>
                <div className="potraits-div">
                    <p>Scenarios</p>
                    <img src={scenes} className="potrait" />
                </div>
                <div className="potraits-div">
                    <p>Mandalas and more</p>
                    <img src={mandala} className="potrait" />
                </div>
            </div>
            <div className="display-two">
                <div className="potraits-div">
                    <p>Potraits</p>
                    <img src={potrait} className="potrait" />
                </div>
                <div className="potraits-div">
                    <p>Characters</p>
                    <img src={characters} className="potrait" />
                </div>
            </div>
        </div>
    )
}

export default Display
