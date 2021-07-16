import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import SingleProduct from './pages/SingleProduct';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
import { CartContext } from './CartContext';
// import products from './api/products';
import { getCart, storeCart } from './helpers';

const App = () => {

    const [cart, setCart] = useState({});
    // Fetch cart from local storage
    useEffect(() => {
        getCart().then(cart => {
        setCart(JSON.parse(cart));
        });
    }, []);
    
    useEffect(() => {
        storeCart(JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/products" exact component={ProductPage} />
                        <Route path="/products/:name" component={SingleProduct} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;