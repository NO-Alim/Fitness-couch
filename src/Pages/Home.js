import React from 'react'
import './Home.scss'
import Header from '../Components/Header'
import About from '../Components/About'
import Services from '../Components/Services'
import Stories from '../Components/Stories'
import Contact from '../Components/Contact'
import Fade from 'react-reveal/Fade'
import {Element} from 'react-scroll'

const Home = () => {
    return (
        <>
            <div className="home">
                <Element name="Header">
                    <Header />
                </Element>
                <div className="home-heading">
                    <Fade top>
                    <h1>"WHAT SEEMS IMPOSSIBLE TODAY WILL SOON BECOME YOUR WARM-UP"</h1>
                    </Fade>
                </div>
                <Element name="About">
                    <About />
                </Element>
                <Element name="Services">
                    <Services />
                </Element>
                <Stories />
                <Element name="Contact">
                    <Contact />
                </Element>
            </div>
        </>
    )
}

export default Home
