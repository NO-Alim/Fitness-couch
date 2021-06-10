import React from 'react'
import { Link } from 'react-router-dom'
import './scss/Services.scss'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Services = () => {
    return (
        <>
            <div className="services-container" id="services">
                <Fade top>
                <h1>CHOOSE YOUR <br /> ONLINE WORKOUT</h1>
                </Fade>
                <Fade top>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </Fade>
                <div className="services">
                    <div className="service">
                        <span className="back-num">1</span>
                        <Fade top>
                        <Link to="/bookOnline" className="service-link">TRX WORKOUT</Link>
                        </Fade>
                    </div>
                    <div className="service">
                        <span className="back-num">2</span>
                        <Fade top>
                        <Link to="/bookOnline" className="service-link">POSTURE CORRECTION</Link>
                        </Fade>
                    </div>
                    <div className="service">
                        <span className="back-num">3</span>
                        <Fade top>
                        <Link to="/bookOnline" className="service-link">MUSCLE TONE</Link>
                        </Fade>
                    </div>
                    <div className="service">
                        <span className="back-num">4</span>
                        <Fade top>
                        <Link to="/bookOnline" className="service-link">WEIGHT LOSS</Link>
                        </Fade>
                    </div>
                    <div className="service">
                        <span className="back-num">5</span>
                        <Fade top>
                        <Link to="/bookOnline" className="service-link">CARDIO FITNESS</Link>
                        </Fade>
                    </div>
                    <div className="service">
                        <span className="back-num">6</span>
                        <Fade top>
                        <Link to="/bookOnline" className="service-link">CORE STRENGTH</Link>
                        </Fade>
                    </div>
                </div>
                <Zoom>
                <Link to="bookOnline" className="book-btn">BOOK A WORD</Link>
                </Zoom>
            </div>
        </>
    )
}

export default Services
