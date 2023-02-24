import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Category from './components/Category'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct';

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="categories" element={<Category />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="single-product" element={<SingleProduct />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes;