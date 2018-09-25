import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;
        var inventory = this.props.inventory;
        if (isInCart) {
            removeFromCart(id);
            inventory = inventory + 1;
            console.log(inventory);
        } else {    
            addToCart(id);
            inventory = inventory - 1;
            console.log(inventory);
        }
    }

    render() {
        const { name, price, image, isInCart, inventory } = this.props;

        return (
            <div className="product thumbnail">
                <div className="caption">
                    <div className="product__image"><img src={image}   width="150" height="150"/>
                        <h3>{name}</h3>
                    <div className="product__price">{price} </div>
                    </div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    inventory: PropTypes.number,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
