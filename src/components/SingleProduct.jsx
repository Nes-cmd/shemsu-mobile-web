import Carousel from "./carousel/Carousel";
import BackNav from './../layouts/BackNav'

import './../styles/single-product.css'
import { Link } from "react-router-dom";

const SingleProduct = () => {
    return (
        <section>
            <BackNav currentName="Single Product" toPath="/" />
            <div className="detail">
                <Carousel />
                <div className="detail-desc">
                    <div className="desc-header">
                        <div className="name">Samsung Galaxy</div>
                        <div className="price">
                            <small>4567 Birr</small>
                            <span>344.33 Birr</span>
                        </div>
                    </div>
                    <div className="desc-rating">
                        <span className="rate">43 reviews| 45 orders | 233 wish</span>
                        <span className="star">
                            <span>4.3</span>
                            <svg className="goldstar w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="rgb(255, 232, 58)"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </span>
                    </div>
                    <div className="desc-spec">
                        <div className="name">Specification</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores architecto
                            quibusdam,
                            eligendi provident consequatur similique deleniti perferendis molestias eveniet minus aperiam
                            dignissimos numquam totam ipsum dolorem atque distinctio sequi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis aut, commodi sapiente enim ipsa iusto, accusamus excepturi nesciunt magni quasi ut ab cupiditate non odit laudantium et hic omnis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores architecto
                            quibusdam,
                            eligendi provident consequatur similique deleniti perferendis molestias eveniet minus aperiam
                            dignissimos numquam totam ipsum dolorem atque distinctio sequi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis aut, commodi sapiente enim ipsa iusto, accusamus excepturi nesciunt magni quasi ut ab cupiditate non odit laudantium et hic omnis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores architecto
                            quibusdam,
                            eligendi provident consequatur similique deleniti perferendis molestias eveniet minus aperiam
                            dignissimos numquam totam ipsum dolorem atque distinctio sequi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis aut, commodi sapiente enim ipsa iusto, accusamus excepturi nesciunt magni quasi ut ab cupiditate non odit laudantium et hic omnis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maiores architecto
                            quibusdam,
                            eligendi provident consequatur similique deleniti perferendis molestias eveniet minus aperiam
                            dignissimos numquam totam ipsum dolorem atque distinctio sequi!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis aut, commodi sapiente enim ipsa iusto, accusamus excepturi nesciunt magni quasi ut ab cupiditate non odit laudantium et hic omnis!
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-bar-container">
                <div className="cart-bar">
                    <div className="cart-icon">
                        <span className="num">2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div>
                        <Link to="checkout">
                            <button className="cart-btn">Add to cart</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct;