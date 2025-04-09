import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card.js';

import './Products.css';

const Products= (props) => {

    return(
            <Card className='style'>
                <ProductItem>
                    title={props.item[0].title}
                    amount={props.amount[0].amount}
                    Date={props.Date[0].Date}
               </ProductItem>
              
               <ProductItem>
                    title={props.item[1].title}
                    amount={props.amount[1].amount}
                    Date={props.Date[1].Date}
               </ProductItem>
                
                <ProductItem>
                    title={props.item[2].title}
                    amount={props.amount[2].amount}
                    Date={props.Date[2].Date}
               </ProductItem>

               <ProductItem>
                    title={props.item[3].title}
                    amount={props.amount[3].amount}
                    Date={props.Date[3].Date}
               </ProductItem>
            </Card>
    );
}

export default Products;