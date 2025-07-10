import { Routes, Route } from "react-router-dom";
import { AmazonStyleCart, WishList } from "./components";
import Navbar from './components/Navbar';
import Register from './components/Register';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<WishList />} />
            <Route path="/cart" element={<AmazonStyleCart />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default App;
