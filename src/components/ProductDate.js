import React from 'react';

import './ProductsDate.css';

const ProductDate = (props) => {
    const month = props.date.toLocalString('en-US',{ month:"long" })
    const day = props.date.toLocalString('en-US',{ day:"2-digit" })
    const year = props.date.getFullYear();

    return (
        <div classNmae="product_data">
            <div className="product_month">{month}</div>
            <div className="product_month">{year}</div>
            <div className="product_month">{day}</div>
        </div>
    );
};

export default ProductDate;