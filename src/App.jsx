import { Routes, Route } from "react-router-dom";
import { AmazonStyleCart, WishList } from "./components";
import Register from './components/Register';
import Checkout from "./Checkout.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WishList />} />
            <Route path="/cart" element={<AmazonStyleCart />} />
            <Route path="/register" element={<Register />} />
            return <Checkout />;
        </Routes>
    );
};

export default App;
