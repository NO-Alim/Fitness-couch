import React,{useState, useEffect } from 'react'
import './BookOnline.scss'
import {useGlobalContext} from '../Context/context'
import { Link } from 'react-router-dom'
//import { Parallax } from 'react-parallax';


//if you want to use parallax you should be change this image link;

//const image1 = "https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_960_720.jpg"



const BookOnline = () => {
    const {data, dataTwo, table, setTable, setActive, setStartDate} = useGlobalContext();

    const [catagory, setCatagory] = useState('class')
    const reasetDate = () => {
        setStartDate(null)
    }

    useEffect(() => {
        const handleActive = () => {
            {table.map((Item,ind) =>{
                const {catagory} = Item;
                setCatagory(catagory)
            })}
        }

        handleActive();

        return () => {
            handleActive();
        }
    },[table])
    return (
        <>
            {/* <Parallax bgImage={image1} strength={-100} className="parallax"> */}
            <div className="bookOnline">
                <h1>BOOK AN ONLINE WORKOUT</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <div className="table-container">
                    <div className="btn-group">
                        <span className={catagory === 'class' ? 'active' : ''} onClick={() => {setTable(data)}}>Class</span>
                        <span className={catagory === 'workout' ? 'active' : ''}onClick={() => {setTable(dataTwo)}}>Personal WorkOut</span>
                    </div> 
                    {table.map((Item,ind) =>{
                        const {id, name, duration, price} = Item;
                        return(
                            <table key={ind}>
                                <td className="name">{name}</td>
                                <td className="duration">{duration} <br /> {price}</td>
                                <td className="link-btn"><Link to={`/schedule/${id}`} onClick={reasetDate} className="btn">Buy Now</Link></td>
                            </table>
                        )
                    })}
                </div>
            </div>
            {/* </Parallax> */}
        </>
    )
}

export default BookOnline
