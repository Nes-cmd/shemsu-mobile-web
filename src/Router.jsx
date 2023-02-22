import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Category from './components/Category'
import Cart from './components/Cart'

const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="categories" element={<Category />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes;