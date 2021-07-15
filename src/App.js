import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import SingleProduct from './pages/SingleProduct';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';

const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/products" exact component={ProductPage} />
                    <Route path="/products/:name" component={SingleProduct} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </Router>
        </>
    )
}

export default App;