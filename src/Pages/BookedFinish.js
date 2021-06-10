import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../Context/context'
import './Booked.scss'
const BookedFinish = () => {
    const {table,sheduleId,date,info} = useGlobalContext();


    const filterItem = table.filter(item => item.id == sheduleId);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: '2-digit' });
    const dayName = date.toLocaleString('default', { weekday: 'long' });
    return (
        <>
            <article className="Booked-container">
                <div className="booked">
                    <h2>Great, Your're Booked!</h2>
                    <p>A confirmation email is on its way to you.</p>
                    {filterItem.map((item,ind) => {
                        const {name,duration,price} = item;
                        return (
                        <div className="booked-info" key={ind}>
                            <div className="left-info">
                                <h1 className="day">{day}</h1>
                                <h4 className="month">{month}</h4>
                                <span className="hr"></span>
                                <p>{dayName} <br /> 09:00 am</p>
                            </div>
                            <div className="right-info">
                                <h2 className="course">{name}</h2>
                                <p>staff member #1</p>
                                <span>{duration} | {price}</span>
                                <p>500 Terry A Francois Boulevard, San Francisco,</p>
                                <p>CA, USA</p>
                                <Link to="/bookOnline" className="Book-btn">Book More</Link>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </article>
        </>
    )
}

export default BookedFinish
