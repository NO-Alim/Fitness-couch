import React from 'react'
import {Link} from 'react-router-dom'
import  './scss/Header.scss'
import vid from '../content/vid.mp4'
import Fade from 'react-reveal/Fade'
import {NavHashLink} from 'react-router-hash-link'


const Header = () => {
    return (
        <>
            <div className="header" id="header">
                <video autoPlay muted loop className="back-vid">
                    <source  src={vid}/>
                </video>
                <div className="header-content">
                    <Fade top>
                        <h1 className="heading">LET'S <br /> GET <br /> MOVING</h1>
                    </Fade>
                    <Fade top>
                    <h2>MICHAEL RYAN - ONLINE FITNESS COACH</h2>
                    </Fade>
                    <div className="button-group">
                        <Fade left>
                        <NavHashLink smooth to="/#services" className="btn">VIEWS SERVICES</NavHashLink>
                        </Fade>
                        <Fade right>
                        <Link to="/bookOnline" className="btn active">BOOK NOW</Link>
                        </Fade>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Header
