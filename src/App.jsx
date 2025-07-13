import { Routes, Route } from "react-router-dom";
import { AmazonStyleCart, WishList } from "./components";
import Register from './components/Register';
import Checkout from "./components/Checkout";
import CheckoutForm from "./components/CheckoutForm"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WishList />} />
            <Route path="/cart" element={<AmazonStyleCart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            
        </Routes>
    );
};

export default App;
