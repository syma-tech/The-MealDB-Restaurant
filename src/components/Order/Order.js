import './Order.css';
import React from 'react';

const Order = (props) => {
    console.log(props);
    const {orderName}=props;
    return (
        <li>{orderName}</li>
    );
};

export default Order;