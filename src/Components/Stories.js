import React from 'react'
import './scss/Stories.scss'
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade'


const image1 = "https://cdn.pixabay.com/photo/2019/08/28/14/58/body-4436985_960_720.jpg"
const Stories = () => {
    
    return (
        <>
            <div className="Stories-container">
                <div className="img-container">
                    
                    <Parallax bgImage={image1} strength={300} className="parallax">
                        <div className="img-content">
                                <h1>SUCCESS STORIES</h1>
                        </div>
                    </Parallax>
                </div>
                <div className="stories">
                    <Fade top>
                        <h1>SUCCESS STORIES</h1>
                    </Fade>
                    <Fade top>
                    <Fade top>
                    <Fade top>
                    <div className="story">
                        <h2>"In just 6 months of training with Michael I lost 38 pounds"</h2>
                        <h3>JACK</h3>
                        <span>January 10,2021</span>
                    </div>
                    </Fade>
                    </Fade>
                    </Fade>
                    <Fade top>
                    <Fade top>
                    <div className="story">
                        <h2>"Reaching my goal of 22% body fat was so easy with Michael"</h2>
                        <h3>CARRIE</h3>
                        <span>February 10, 2023</span>
                    </div>
                    </Fade>
                    </Fade>
                    <Fade top>
                    <div className="story">
                        <h2>"I crossed the finish line on my first marathon"</h2>
                        <h3>IRIS</h3>
                        <span>March 10, 2023</span>
                    </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Stories
