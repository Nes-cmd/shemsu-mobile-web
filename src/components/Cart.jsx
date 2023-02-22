import './../styles/cart.css'
import BackNav from '../layouts/BackNav';
const Cart = () => {
    return (
        <>
            <section>
                <BackNav currentName="Cart" toPath="/" />
                <div>
                    <div className="supplier">
                        AD online Market
                    </div>
                    <div className="cart-item">
                        <img src="storage/app/public/product/thumbnail/2022-11-02-6361f35fef605.png" />
                            <div className="cart-desc">
                                <div>Name of product</div>
                                <div>
                                    <span className="dis-price">233,233.332</span>
                                    <span className="main-price">43434.23 Birr</span>
                                </div>
                            </div>
                            <div className="cart-actions">
                                <div className="trash">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </div>
                                <div className="action">
                                    <button className="dec">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <span className="quantity">3</span>
                                    <button className="inc">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>

                <div>
                    <div className="supplier">
                        X Electronics center
                    </div>
                    <div className="cart-item">
                        <img src="storage/app/public/product/thumbnail/2022-11-01-63618d9a35a0e.png" />
                            <div className="cart-desc">
                                <div>Name of product</div>
                                <div>
                                    <span className="dis-price">233,233.332</span>
                                    <span className="main-price">43434.23 Birr</span>
                                </div>
                            </div>
                            <div className="cart-actions">
                                <div className="trash">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </div>
                                <div className="action">
                                    <button className="dec">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <span className="quantity">3</span>
                                    <button className="inc">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <div className="checkout-bar-container">
                <div className="checkout-bar">
                    <div className="checkout-price">
                        Total price : 43,54554.00 Br
                    </div>
                    <div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;