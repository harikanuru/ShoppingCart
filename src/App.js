import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import { Route, Link } from "react-router-dom";

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 align="center"> Shopping Cart</h1>
                </div>
            </div>
            <nav>
                <Link to="/items">ITEMS</Link>&nbsp;&nbsp;
                <Link to="/checkout">CHECKOUT</Link>
            </nav>
            <div className="row">
                <div className="col-md-8">
                    <Route path="/items" component={ProductList} />
                </div>
                <div className="col-md-4">
                    <Route path="/checkout" component={Cart} />
                </div>
            </div>
            <footer>
                <small>
                    <div class="col-xs-3" id="footer-text">
						<h5>© 2018 Nisum Consulting Pvt Ltd.</h5>
					</div>
                </small>
            </footer>
        </div>
    );
}

export default App;
