import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link, useParams } from 'react-router-dom';
import {useGlobalContext} from '../Context/context'
import './Schedule.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { render } from '@testing-library/react';


const Schedule = () => {
    const {table, startDate, setStartDate, isClicked, SetIsClicked, warning, SetWarning, setSheduleId, sheduleId,setDate} = useGlobalContext();
    const { id } = useParams();

    const filterItem = table.filter(item => item.id == id);
    


    const onChangeHandle = (dates) => {
        var date = dates.toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
        replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
        setDate(dates);
        setStartDate(date)
        SetIsClicked(true);
        setSheduleId(id);
    };

    const handleClick = () => {
        SetWarning(true);
    }



    return (
        <>
            <div className="schedule">
                <div className="schedule-container">
                    <Link to="/bookOnline" className="back-btn">Back</Link>
                    <h2>Schedule Online</h2>
                    <span className="time-Zone">Time Zone: PST <Link to="/" className="time-link">View in my local time zone</Link></span>
                    {filterItem.map((item,ind) => {
                        const {id,name,duration, price} = item;
                        return (
                            <div key={ind} className="discription">
                               <div className="calendar">
                                    <Calendar onClickDay={onChangeHandle}  />
                                    {/* <DatePicker
                                    onChange={onChangeHandle}
                                    inline
                                    /> */}
                               </div>
                               <div className="table-content">
                                    <div className="content">
                                        <h3>{name}</h3>
                                        <span>{startDate}</span>
                                        <span>{price} | {duration}</span>
                                        <div>
                                            {isClicked ? <Link to="/info" className="next-btn" id={id}>Next</Link> : <button className="next-btn" onClick={handleClick}>Next</button>}

                                            {isClicked ? '' : <p className={`warning ${warning ? 'active' : ''}`}>Choose a date and time <br /> to continue</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Schedule
