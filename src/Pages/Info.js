import userEvent from '@testing-library/user-event'
import { deprecationHandler } from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import {useGlobalContext} from '../Context/context'
import './Info.scss'
import {FaTimes} from 'react-icons/fa'


const Info = () => {
    const {table,startDate, isClicked, sheduleId,setInfo, name , setName, email, setEmail} = useGlobalContext();
    const [codeActive, setCodeActive] = useState(false)
    const [nextPage, setNextPage] = useState(false);
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const [nameActive, setNameActive] = useState(true);
    const [emailActive, setEmailActive] = useState(true);
    const [warnignActive, setWarningActive] = useState(false);
    //const [phone, setPhone] = useState(0);
    //const [message, setMessage] = useState('');
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const requiredName = useRef(null)
    const requiredEmail = useRef(null)
    const warningRef = useRef(null)


    const filterItem = table.filter(item => item.id == sheduleId);

    const CuponHandle = () => {
        setCodeActive(!codeActive);
    }

    const submitHandle = (e) => {
        e.preventDefault();
        //check email contains @gmail.com
        var filter = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
        if (nameValue === '') {
            setNextPage(false)
        } else {
            setNextPage(true)
        }

        if (filter.test(emailValue)) {
            setNextPage(true)
        } else {
            setNextPage(false)
        }
        console.log("submited. go next");
    }

    const submitData = () => {
        setName(nameValue);
        setEmail(emailValue);
    }

    useEffect(() => {
        var filter = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
        const handleLink = () => {
            if (nameValue != '' && filter.test(emailValue)) {
                setNextPage(true);
                setInfo(true)
            } else {
                setNextPage(false)
                setInfo(false)
            }
            //for display block and none
            if (nameValue != '') {
                setNameActive(false);
            } else {
                setNameActive(true);
            }
            if (filter.test(emailValue)) {
                setEmailActive(false)
            } else {
                setEmailActive(true)
            }
            if (nameActive) {
                setWarningActive(true);
            } else if (emailActive) {
                setWarningActive(true);
                
            } else {
                setWarningActive(false)
            }
        }
        handleLink();
        return () => {
            handleLink();
        }
    },[nameValue,emailValue])
    //if any one type www.xyz.com/info that mean there is no date selected. without data info page incomplete 
    //that's why if any one type url then he/she go back or redirect to bookonline page.
    if (!isClicked) {
        return <Redirect to="/bookOnline" />
    }
//<button type="submit" id="InfoForm" onClick={submitHandle()}>Book It</button>
    return (
        <>
            <div className="info-container">
                <div className="info">
                <Link to={`/bookOnline`} className="back-btn">Back</Link>
                    <h2>Schedule Online</h2>
                    <h3>Tell us a bit about yourself</h3>

                    <div className="flex-container">
                        <div className="from-container">
                            <form id="InfoForm" method="get" action="">
                                <label htmlFor="Name">Name*</label>
                                <input className={`${nameActive ? 'active': null}`} type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)} ref={nameRef}/>
                                <span className={`required-name required ${nameActive ? 'active': null}`} ref={requiredName}>Name field must required</span>
                                <label htmlFor="Email">Email*</label>
                                <input className={`${emailActive ? 'active': null}`} type="email"  value={emailValue} onChange={(e) => setEmailValue(e.target.value)} ref={emailRef} required />
                                <span className={`required-email required ${emailActive ? 'active' : null}`} ref={requiredEmail}>Email field must required</span>
                                <label htmlFor="Phone">Phone Number</label>
                                <input type="number" />
                                <label htmlFor="message">Add Your Message</label>
                                <textarea name="message"></textarea>
                            </form>
                        </div>
                        <div className="submit-container">
                            <div>
                            {filterItem.map((item,ind) => {
                                const {id,name,duration, price} = item;
                                return(
                                    <div key={ind}  className="submit-content">
                                        <h3>{name}</h3>
                                        <span>{duration} | {price}</span>
                                        <hr />
                                        <span>{startDate}</span>
                                        <p className="type">Online</p>
                                        <hr />
                                        <span className="coupon"  onClick={CuponHandle}>Enter Your coupon code</span>
                                        <input type="text" className={`code ${codeActive ? 'active' : ''}`} />
                                        {/* <button type="submit" form="InfoForm" onClick={submitHandle}>submit</button> */}
                                        <div>
                                            { nextPage ? 
                                            <Link to="/booked" className="Next-btn">
                                                <button type="submit" form="InfoForm" onClick={submitData}>next</button>
                                            </Link> : <button type="submit" form="InfoForm" onClick={submitHandle} disabled>next</button>}
                                        </div>
                                        <span className={`warning ${warnignActive ? 'active' : null}`} ref={warningRef}>Complete the required fields to continue</span>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info
