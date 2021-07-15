import { useState, useEffect } from 'react';
import Product from './Product';
import api from '../api/products';

export const Products = () => {
    const [products, setProducts] = useState([]);

    const retrieveProducts = async () => {
        const response = await api.get("/products");
        return response.data;
    };
    
    useEffect(() => {
        // fetch('/api/products')
        // .then(response => {
        //     response.json()
        // })
        // .then(products => {
        //     setProducts(products);
        // });

        const getAllProducts = async () => {
            const allProducts = await retrieveProducts();
            //console.log(allProducts);
            setProducts(allProducts);
        }

        getAllProducts();
    }, []);
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-3xl md:text-3xl font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                   products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default Products;
