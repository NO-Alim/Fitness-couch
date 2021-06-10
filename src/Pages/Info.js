import userEvent from '@testing-library/user-event'
import { deprecationHandler } from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import {useGlobalContext} from '../Context/context'


const Info = () => {
    const {table,startDate, isClicked, sheduleId,setInfo} = useGlobalContext();
    const [codeActive, setCodeActive] = useState(false)
    const [nextPage, setNextPage] = useState(false);
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
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
        console.log("form submited");
        //check email contains @gmail.com
        var filter = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
        if (name === '') {
            nameRef.current.style.borderColor = "red"
            requiredName.current.style.display = "block"
            warningRef.current.style.display = "block"
            setNextPage(false)
        } else {
            nameRef.current.style.borderColor = '#f1f1f1'
            requiredName.current.style.display = "none"
            warningRef.current.style.display = "none"
            setNextPage(true)
        }

        if (filter.test(email)) {
            emailRef.current.style.borderColor = '#f1f1f1'
            requiredEmail.current.style.display = "none"
            warningRef.current.style.display = "none"
            setNextPage(true)
        } else {
            emailRef.current.style.borderColor = 'red'
            requiredEmail.current.style.display = "block"
            warningRef.current.style.display = "block"
            setNextPage(false)
        }
    }

    const helloWorld = () => {
        console.log("hello world");
    }

    useEffect(() => {
        var filter = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/
        const handleLink = () => {
            if (name != '' && filter.test(email)) {
                setNextPage(true);
                setInfo(true)
            } else {
                setNextPage(false)
                setInfo(false)
            }
        }
        handleLink();
        return () => {
            handleLink();
        }
    },[name,email])
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
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={nameRef}/>
                                <span className="required-name required" ref={requiredName}>Name field must required</span>
                                <label htmlFor="Email">Email*</label>
                                <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} ref={emailRef} required />
                                <span className="required-email required" ref={requiredEmail}>Email field must required</span>
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
                                                <button type="submit" form="InfoForm" onClick={helloWorld}>next</button>
                                            </Link> : <button type="submit" form="InfoForm" onClick={submitHandle}>Next</button>}
                                        </div>
                                        <span className="warning" ref={warningRef}>Complete the required fields to continue</span>
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
