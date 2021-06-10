import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt,FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa';
import './scss/Contact.scss'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Contact = () => {
    return (
        <>
            <div className="contact-container" id="contact">
                <div className="left">
                    <Fade top>
                    <h1>MICHAEL RYAN</h1>
                    </Fade>
                    <Fade top>
                    <h3>FITNESS COACH</h3>
                    </Fade>
                    <Fade top>
                    <div className="address contact-ads">
                        <p>500 Terry Francois Street</p>
                        <p>San Francisco, CA 94158</p>
                    </div>
                    </Fade>
                    <Fade top>
                    <div className="telephone contact-ads">
                        <p>Tel: 123-456-7890</p>
                        <p>Fax: 123-456-7890</p>
                    </div>
                    </Fade>
                    <Fade top>
                    <div className="mail contact-ads">
                        <p>info@gmail.com</p>
                    </div>
                    </Fade>

                    <div className="social-media">
                        <Fade left>
                        <Fade left>
                        <Link to="/" className="media-icon"><FaFacebookF /></Link>
                        </Fade>
                        </Fade>
                        <Fade left>
                        <Link to="/" className="media-icon"><FaTwitter /></Link>
                        </Fade>
                        <Fade right>
                        <Link to="/" className="media-icon"><FaInstagram /></Link>
                        </Fade>
                        <Fade right>
                        <Fade right>
                        <Link to="/" className="media-icon"><FaYoutube /></Link>
                        </Fade>
                        </Fade>
                    </div>
                </div>
                <div className="right">
                    <h1>GET IN TOUCH</h1>
                    <form>
                        <Fade top>
                        <label htmlFor="First Name">First Name *</label>
                        <input type="text" name="First Name" />
                        </Fade>
                        <Fade top>
                        <label htmlFor="Last Name">Last Name</label>
                        <input type="text" name="Last Name" />
                        </Fade>
                        <Fade top>
                        <label htmlFor="Email">Email *</label>
                        <input type="email" name="Email" />
                        </Fade>
                        <Fade top>
                        <label htmlFor="Phone">Phone</label>
                        <input type="number" name="Phone"/>
                        </Fade>
                        <label htmlFor="Message">Message</label>
                        <textarea  name="Message"></textarea>
                        <div className="btn-container">
                            <Zoom>
                            <button type="submit">Submit</button>
                            </Zoom>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
