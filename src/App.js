
import './App.css';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Header from './components/navbar/Header';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import OrderReview from './components/order-review/OrderReview';
import LoginRegister from './components/user/LoginRegister';
import Profile from './components/user/Profile';
import Index from './components/Index';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
<Router>
        <div>
        <Header />
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/order-review">
                    <OrderReview />
                </Route>
                <Route path="/login-register">
                    <LoginRegister />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
          <Footer />
        </div>
        </Router>
    </>
  );
}

export default App;
