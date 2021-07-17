import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';

export const Product = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const {name, size, price} = props.product;

    const addToCart = (event, product) => {
        event.preventDefault();
        let _cart = {...cart}; //(spread operator) cloning the cart object
        if(!_cart.items) {
            //create an emtpy object and we will store id's later in it
            _cart.items={}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }
        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setIsAdding(true);
        setTimeout(() => {
            setIsAdding(false);
        }, 1000);
    };
    return (
        // <Link to={`/products/${props.product.name}`}>
        <Link to={{pathname:`/products/${props.product.name}`, state:{product: props.product}}}>
            <>
            <div>
                <img src={`/images/${name}.jpg`} alt="pizza" />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{name}
                    </h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{size}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>₹ {price}</span>
                    <button disabled={isAdding} 
                    onClick={(e) => { addToCart(e, props.product) }} 
                    className={`${ isAdding ? 'bg-green-500': 'bg-yellow-500' } py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
                </div>
            </div>
            </>
        </Link>
    )
}

export default Product;
