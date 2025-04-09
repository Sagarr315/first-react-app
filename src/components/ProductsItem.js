import React from 'react';
import ProductDate from './ProductDate.js';
import Card from './Card.js';

import './ProductsItem.css';

const ProductItem = (props) => {

    return(
        <Card className="fstyle">
            <ProductDate date={props.date} />
                <div className="product-item_description">
                    <h2>{props.title}</h2>
                </div>
            
        </Card>
    );
}
export default ProductItem;