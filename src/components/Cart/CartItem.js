import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price,image, currency, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}><img src={image}   width="50" height="50"/></button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price"><img src='../images/rupees.jpg'  width="20" height="20"/>{price}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
