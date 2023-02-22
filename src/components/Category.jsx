import './../styles/category.css'
import BottomBar from './../layouts/BottomBar'
import BackNav from '../layouts/BackNav';
const Category = () => {
    return (
        <section>
            <BackNav currentName="Categories" toPath="/" />
            <BottomBar />

            <div className="side-category">
                <div className="category-el">
                    <img src="storage/app/public/category/2022-09-11-631e24aebad09.png" alt="" />
                    <span>Shoes</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-11-02-6361e907523db.png" alt="" />
                    <span>Gaming</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-09-11-631e249f0afa3.png" alt="" />
                    <span>Raiments</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-11-07-6368c137b109a.png" alt="" />
                    <span>Accesseries</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-09-11-631e248cb4db8.png" alt="" />
                    <span>Electronics</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-09-11-631e247c3327b.png" alt="" />
                    <span>Food</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-09-11-631e2463ec3ab.png" alt="" />
                    <span>Jwelery</span>
                </div>
                <div className="category-el">
                    <img src="storage/app/public/category/2022-09-11-631e26602f3d8.png" alt="" />
                    <span>Car Accesseries</span>
                </div>
            </div>

            <div className="sub-category" >
                <div style={{ paddingLeft: "8px" }}>
                    <div className="sub-category-el">
                        <span>All</span>
                        <span>&gt</span>
                    </div>
                    <div className="sub-category-el">
                        <span>Mobile accesseries</span>
                        <span>&gt</span>
                    </div>
                    <div className="sub-category-el">
                        <span>Desktops and Laptops</span>
                        <span>&gt</span>
                    </div>
                    <div className="sub-category-el">
                        <span>TV and G-pass</span>
                        <span>&gt</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;