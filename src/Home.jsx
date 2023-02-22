import CategoryPreview from "./components/CategoryPreview";
import HorizontalProductSlider from "./components/HorizontalProductSlider";
import Slider from "./components/Slider";
import TopBar from "./layouts/TopBar";
import BottomBar from "./layouts/BottomBar";

const Home = () => {
    return (
        <>
            <TopBar />
            <Slider />
            <CategoryPreview />
            <HorizontalProductSlider />
            <BottomBar />
        </>
    );
}

export default Home;