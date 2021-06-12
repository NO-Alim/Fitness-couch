import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/context'
import './PlanAndPricing.scss'

const PlanAndPricing = () => {
    window.scrollTo( 0 , 0);
    const {planList} = useGlobalContext();
    return (
        <>
            <div className="planAndPricing-container">
                <div className="planAndPricing">
                    <h1>Choose Your Pricing Plan</h1>
                    <div className="plan-container">
                        {planList.map((item, ind) => {
                            const {id,name,validation,payment,price,description,bestSell} = item;
                            return(
                                <article className="plan" key={ind}>
                                    <div>{bestSell ? <span className="best-tag">{bestSell}</span> : ''}</div>
                                    
                                    <h3>{name}</h3>
                                    <h1 className="price">$ {price}</h1>
                                    <div className="payment">
                                        <p className="payment-month">{payment}</p>
                                    </div>
                                    <div className="description">
                                        <p>{description}</p>
                                    </div>
                                    <div className="validation">
                                        <p>{validation}</p>
                                    </div>
                                    <Link to={`/plan/${id}`} className="select-btn">Select</Link>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanAndPricing
