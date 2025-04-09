import React from 'react';

import ProductsItem from './ProductsItem.js';
import Card from './Card.js';

import './Products.css';

const Products = (props) => {
  return (
    <Card className='style'>
      <ProductsItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ProductsItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ProductsItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ProductsItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Products;
