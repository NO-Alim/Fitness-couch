import React from 'react'
import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
    return (
        <>
        <div className="error">
            <h1>404</h1>
            <h4>Page Not Found</h4>
            <Link to="/" className="home-btn">Back To Home</Link>
        </div>
        </>
    )
}

export default Error
