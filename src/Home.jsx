import CategoryPreview from "./components/CategoryPreview";
import HorizontalProductSlider from "./components/HorizontalProductSlider";
import Carousel from "./components/carousel/Carousel";
import TopBar from "./layouts/TopBar";
import BottomBar from "./layouts/BottomBar";

const Home = () => {
    return (
        <>
            <TopBar />
            <Carousel />
            <CategoryPreview />
            <HorizontalProductSlider />
            <BottomBar />
        </>
    );
}

export default Home;