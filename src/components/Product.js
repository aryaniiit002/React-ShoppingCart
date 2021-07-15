import React from 'react';
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const {name, size, price} = props.product;
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
                    <span>{price}</span>
                    <button className="bg-green-500: bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
                </div>
            </div>
            </>
        </Link>
    )
}

export default Product;
