import React from 'react'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import ig from '../assets/ig.png'

function Footer() {
    return (
        <div className="footer">
            <div>
                <p>2021 - Tejaaswini Narendra</p>
            </div>
            <div className="footer-logos">
                <a href="https://github.com/Tejaaswini" target="_blank" rel="noreferrer">
                    <img className="github-img" src={github} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/tejaaswini/"  target="_blank" rel="noreferrer">
                <img className="linkedin" src={linkedin} alt="instagram"/>
                </a>
                <a href="https://www.instagram.com/messy_dodo/"  target="_blank" rel="noreferrer">
                <img className="ig" src={ig} alt="instagram"/>
                </a>
            </div>
        </div>
    )
}

export default Footer
