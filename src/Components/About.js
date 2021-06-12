import React,{useEffect,useRef} from 'react'
import  './scss/About.scss'
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade'
import { useGlobalContext } from '../Context/context';

const image1 = "https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_960_720.jpg"


const About = () => {
    const{setAboutTop} = useGlobalContext();
    const aboutRef = useRef(null);
    const scrollHandler = () => {
        var top = aboutRef.current.offsetTop;
        var bottom = aboutRef.current.clientHeight + top;
        setAboutTop({top: top, bottom: bottom});
      };
      useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
          };
      },[]);
    return (
        <>
            <div className="about" id="about" ref={aboutRef}>
                <div className="img-container">
                <Parallax bgImage={image1} strength={300} className="parallax">
                    <div className="img-content"></div>
                </Parallax>
                </div>
                <div className="about-content-container">
                    <div className="content">
                        <Fade top>
                        <h2>ABOUT ME</h2>
                        </Fade>
                        <Fade top>
                        <h1>MICHAEL RYAN</h1>
                        </Fade>
                        <Fade top>
                        <img className="query-img" src="https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_960_720.jpg" alt="" />
                        </Fade>
                        <Fade top>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </Fade>
                        <Fade top>
                        <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
