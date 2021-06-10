import React, {useState} from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from '../Context/context';
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa';


import './SinglePlan.scss'
import { Link } from 'react-router-dom';

Modal.setAppElement("#root");

const SinglePlan = () => {
    const {id} = useParams();
    const {planList} = useGlobalContext();

    //modal
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);


    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const toggleModalTwo = () => {
        setIsOpenTwo(!isOpenTwo);
    }

    return (
        <>
            <div className="checkout-container">
                <div className="checkout">
                    <h1>Checkout</h1>
                    <span className="hr-one hr"></span>
                    <div className="content">
                        <div className="left-content">
                            <h2>1 &nbsp; Sing Up</h2>
                            <p>To purchase this plan and use its benefits in the future, log in to your account or sign up.</p>
                            <div className="btn-group">
                                <button onClick={toggleModal}>Sign Up</button>
                                <button onClick={toggleModalTwo}>Log In</button>
                            </div>
                            <Modal
                            isOpen={isOpen}
                            onRequestClose={toggleModal}
                            contentLabel="My dialog" className="modal">
                                <div className="modal-content">
                                    <div className="btn-container">
                                        <button className="modal-close" onClick={toggleModal}><FaTimes /></button>
                                    </div>
                                    <h1>SIGN UP</h1>
                                    <p>Already a member ? </p>
                                    <form>
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" required />
                                        <label htmlFor="password">password</label>
                                        <input type="password" />
                                        <input type="submit" value="Sign Up" />
                                    </form>
                                </div>
                            </Modal>

                            <Modal
                            isOpen={isOpenTwo}
                            onRequestClose={toggleModalTwo}
                            contentLabel="My dialog" className="modal">
                                <div className="modal-content">
                                    <div className="btn-container">
                                        <button className="modal-close" onClick={toggleModalTwo}><FaTimes /></button>
                                    </div>
                                    <h1>Log In</h1>
                                    <p>New On This Site ? </p>
                                    <form>
                                        <label htmlFor="Email">Email</label>
                                        <input type="email" required />
                                        <label htmlFor="password">password</label>
                                        <input type="password" />
                                        <input type="submit" value="Log In" />
                                    </form>
                                    <Link to="*" className="forget-pass">Forgot Password</Link>
                                </div>
                            </Modal>
                            <span className="hr-three hr"></span>
                            <h2 className="payment">2 &nbsp;Payment</h2>
                        </div>
                        <div className="right-content">
                            <h2>order Summary</h2>
                            <div>
                                <p className="name">plan &nbsp;</p>
                                <p>Platinum Membership</p>
                            </div>
                            <div>
                                <p className="name">Duration &nbsp;</p>
                                <p>Until Canceled</p>
                            </div>
                            <span className="hr"></span>
                            <div>
                                <p>Billed monthly</p>
                                <p className="price">$40</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default SinglePlan
