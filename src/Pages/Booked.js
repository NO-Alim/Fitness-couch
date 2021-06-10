import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useGlobalContext} from '../Context/context'
import './Booked.scss'
import BookedFinish from './BookedFinish'

const Booked = () => {
    
    const {info} = useGlobalContext();
 
    

    if (!info) {
        return <Redirect to="/bookOnline" />
    }

    return (
        <>
            <BookedFinish />
        </>
    )
}

export default Booked


                    // <div className="booked-info">
                    //     <div className="left-info">
                    //         <h1 className="day">12</h1>
                    //         <h4 className="month">June</h4>
                    //         <span className="hr"></span>
                    //         <p>sat 09:00 am</p>
                    //     </div>
                    //     <div className="right-info">
                    //         <h2 className="course">name of course</h2>
                    //         <p>staff member #1</p>
                    //         <span>duration | price</span>
                    //         <p>500 Terry A Francois Boulevard, San Francisco,</p>
                    //         <p>CA, USA</p>
                    //         <Link to="/bookOnline" className="Book-btn">Book More</Link>
                    //     </div>
                    // </div>