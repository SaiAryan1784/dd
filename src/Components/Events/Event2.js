import React from 'react'
import "./style.css"
import Nav from '../Nav'
import HackOverseLogo from './Hackoverse.png'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Event2 = () => {
    return (
        <div>
            <Nav />
            <div class="div1">
                <h1>Events</h1>
                </div>
            <div class="column">
                <div class="event-card">
                    <div class="event-card-image car-1">
                        <img src={HackOverseLogo} alt="Hackoverselogo" width="300px" />
                    </div>
                    <h2>Hack-O-Verse</h2>
                    <p>Registration Fee:NA</p>
                    <p><i class="fa-solid fa-calendar" style={{color: "#cccccc"}}></i>Saturday,9 Dec</p>
                    <p><i class="fa-regular fa-clock" style={{color: "#cccccc"}}></i>10:00am-5.00pm</p>
                    <p>Mode:Offline</p>
                    <div class="register"><Link to="/hackoverse" >Register Now</Link></div>
                </div>
                {/* <div class="event-card">
                    <div class="event-card-image car-2">
                    </div>
                    <h2>title</h2>
                    <p>text</p>
                </div>
                <div class="event-card">
                    <div class="event-card-image car-3">
                    </div>
                    <h2>title</h2>
                    <p>text</p>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Event2