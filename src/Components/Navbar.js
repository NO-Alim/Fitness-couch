import React, {useEffect, useRef, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { FaUserAlt,FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';
import  './scss/Navbar.scss'
import Headroom from 'react-headroom'
import Fade from 'react-reveal/Fade'
//for scroll link
//import {Link as ScrollLink} from 'react-scroll'
import {NavHashLink} from 'react-router-hash-link'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const navRef = useRef(null)
    let location = useLocation();


    const toggleClick = () => {
        setToggleNav(!toggleNav)
    }

    const handleClick = (e) => {
        if (!navRef.current.contains(e.target)) {
            setToggleNav(false);
        }
    }
    const handleScroll = () => {
        setToggleNav(false);
    }

    const handleToggle = () => {
        setToggleNav(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('click',handleClick)
        }
    })
    return (
        <>
            <Headroom >
                <nav ref={navRef}>
                    <div className={`nav-links-container ${toggleNav ? 'toggle': ''}`}>
                        <div className="menu-holder">
                            <div className={`menu-container ${toggleNav ? 'active' : ''}`} onClick={toggleClick}>
                                <span className="menu"></span>
                                <span className="menu"></span>
                                <span className="menu"></span>
                            </div>
                        </div>
                        <ul className="nav-links">
                            <Fade left>
                                <Fade left>
                                    <Fade left>
                                        <li>
                                        {/* <ScrollLink  activeClass="active" to="Header" spy={true} smooth={true} offset={0} duration={500} className="side-content"> */}
                                            <NavHashLink smooth  to="/#header" activeStyle={{ color: 'red' }} className="link" onClick={handleToggle}>Home</NavHashLink>
                                        {/* </ScrollLink> */}
                                        </li>
                                    </Fade>
                                </Fade>
                            </Fade>
                            <Fade left>
                                <Fade left>
                                    <li>
                                        <NavHashLink smooth to="/#about" activeStyle={{ color: 'red' }} className="link" onClick={handleToggle}>About</NavHashLink>
                                    </li>
                                </Fade>
                            </Fade>
                            <Fade left>
                            <li>
                                <NavHashLink smooth to="/#services" activeStyle={{ color: 'red' }} className="link" onClick={handleToggle}>Services</NavHashLink>
                            </li>
                            </Fade>
                            <Fade right>
                                <li>
                                    <Link to="/bookOnline" className="link" onClick={handleToggle}>Book Online</Link>
                                </li>
                            </Fade>
                            <Fade right>
                                <Fade right>
                                    <li>
                                        <Link to="/plans" className="link" onClick={handleToggle}>Plan & Pricing</Link>
                                    </li>
                                </Fade>
                            </Fade>
                            <Fade right>
                                <Fade right>
                                    <Fade right>
                                        <li>
                                            <NavHashLink smooth to="/#contact" activeStyle={{ color: 'red' }} className="link" onClick={handleToggle}>Contact</NavHashLink>
                                        </li>
                                    </Fade>
                                </Fade>
                            </Fade>
                        </ul>
                    </div>
                    <div className={`menu-container ${toggleNav ? 'active' : ''}`}>
                        <div className="menus" onClick={toggleClick}>
                            <span className="menu"></span>
                            <span className="menu"></span>
                            <span className="menu"></span>
                        </div>
                    </div>
                    <div className="social-container">
                        <div className="sign-up-container">
                            <Link to="/" className="sign-up-btn"><i className="user-icon"><FaUserAlt/></i>Log In</Link>
                        </div>
                        
                        <div className="social-media-container">
                            <ul>
                                <li>
                                    {/* use Link tag when put a link inside path */}
                                    <NavHashLink smooth  to="/#header" className="media-link" onClick={handleToggle}><FaFacebookF /></NavHashLink>
                                </li>
                                <li>
                                    {/* use Link tag when put a link inside path */}
                                    <NavHashLink smooth  to="/#header" className="media-link" onClick={handleToggle}><FaTwitter /></NavHashLink>
                                </li>
                                <li>
                                    {/* use Link tag when put a link inside path */}
                                    <NavHashLink smooth  to="/#header" className="media-link" onClick={handleToggle}><FaYoutube /></NavHashLink>
                                </li>
                                <li>
                                    {/* use Link tag when put a link inside path */}
                                    <NavHashLink smooth  to="/#header" className="media-link" onClick={handleToggle}><FaInstagram /></NavHashLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Headroom>
        </>
    )
}

export default Navbar
