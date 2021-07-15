import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const SingleProduct = (props) => {

    const history = useHistory();
    const {name, size, price} = props.location.state.product;

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" 
            onClick={ () => { history.goBack() } }>Back</button>
            <div className="flex ">
            <img src={`/images/${name}.jpg`} alt="pizza" />
                <div className="ml-16">
                    <h1 className="text-xl font-bold">{ name }</h1>
                    <div className="text-md">{ size }</div>
                    <div className="font-bold mt-2"> { price }</div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
