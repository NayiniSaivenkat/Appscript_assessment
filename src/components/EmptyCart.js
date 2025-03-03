import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

import "./EmptyCart.css";

const EmptyCart = () => {
    return (
        <>
        <Header />
        <div className="cart-empty-view-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                className="cart-empty-img"
                alt="cart empty"
            />
            <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

            <Link to="/">
                <button type="button" className="shop-now-btn">
                    Shop Now
                </button>
            </Link>
        </div>
        </>
    )
}

export default EmptyCart