import React from 'react'
import "./hack.css"
import Footer from '../Footer'
import Nav from '../Nav'
import HackOverseImage from "./hackoverse2.png"

const HackOverse = () => {
    return (
        <div>
            <Nav />
            <div class="hack-div1">
                <img src={HackOverseImage} alt="Hackoverse" />
            </div>
            <div class="hack-column">
                <div class="details"><h3>Hackathon Details:</h3></div>
                <div class="rules"><h3>Rule & Regulation:</h3></div>
            </div>
            <Footer />
            </div>
    )
}

export default HackOverse