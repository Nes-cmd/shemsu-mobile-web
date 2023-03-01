import BackNav from "../layouts/BackNav";

import './../styles/checkout.css'

const Checkout = () => {
    return (
        <>
            <BackNav currentName="Checkout" toPath="/" />
            <section>
                <h3>Order Details</h3>
                <div className="checkout">
                    <div className="checkout-container">
                        <div className="checkout-img">
                            <img src="storage/app/public/product/thumbnail/2022-11-02-6361f35fef605.png" alt="" />
                        </div>
                        <div className="checkout-detail">
                            <div>
                                <div className="checkout-name">Name of product may apear here</div>
                                <div className="checkout-quty">Qty - 2</div>
                            </div>
                            <div className="checkout-price">
                                54876.545 Birr
                            </div>
                        </div>
                    </div>

                    <div className="checkout-container">
                        <div className="checkout-img">
                            <img src="storage/app/public/category/2022-09-11-631e248cb4db8.png" alt="" />
                        </div>
                        <div className="checkout-detail">
                            <div>
                                <div className="checkout-name">Other name may apear here</div>
                                <div className="checkout-quty">Qty - 2</div>
                            </div>
                            <div className="checkout-price">
                                4344.545 Birr
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cupon-container">
                    <input placeholder="Have a cupon?" type="text" />
                    <button>Apply</button>
                </div>
                <div className="summary">
                    <h3>Order summary</h3>
                    <div className="summary-item">
                        <div>Sub total</div>
                        <div>210022.33 Birr</div>
                    </div>
                    <div className="summary-item">
                        <div>Shipping fee</div>
                        <div>2100 Birr</div>
                    </div>
                    <hr />
                    <div className="summary-item">
                        <div>Sub total</div>
                        <div>210022.33 Birr</div>
                    </div>
                </div>
                <div className="payment">
                    <h3>Payment method</h3>
                    <div className="payments">
                        <div className="payment-methods">
                            <input id="cash" type="radio" />
                            <label for="cash">Cash on delivery</label>
                        </div>
                        <div className="payment-methods">
                            <input id="cash" type="radio" />
                            <label for="cash">Digital</label>
                        </div>
                    </div>
                </div>
                <div className="shippment">
                    <h3>Shippment method</h3>
                    <label className="shippment-item">
                        <div><input id="normal" type="radio" />Normal</div>
                        <div>544.33</div>
                    </label>
                    <label className="shippment-item">
                        <div><input id="normal" type="radio" />Fast</div>
                        <div>1054.3</div>
                    </label>
                </div>

                <div className="checkout-bar-container">
                <div className="proceed-bar">
                    <a className="proceed-btn" href="#">
                        Proceed
                    </a>
                </div>
            </div>

            </section>
        </>
    )
}

export default Checkout;