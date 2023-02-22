import './../styles/carousel.css'

const Slider = () => {
    const slides = document.querySelectorAll(".slide")
    const positions = document.querySelectorAll('.positions')
    var counter = 0

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })

    const slideImage = () => {
        slides.forEach(
            (slide, index) => {
                slide.style.transform = `translateX(-${counter * 100}%)`;
            }
        );
    }
    const prev = () => {
        positions[counter].style.backgroundColor = 'rgb(133, 184, 184)';
        counter--;
        if (counter < 0) counter = slides.length - 1
        slideImage();
        positions[counter].style.backgroundColor = 'white';
    }
    const next = () => {
        positions[counter].style.backgroundColor = 'rgb(133, 184, 184)';
        counter++;
        counter = counter % slides.length
        slideImage();
        positions[counter].style.backgroundColor = 'white';
    }

    setInterval(next, 5000);

    return (
        <main className="carousel-container">
            <div>
                <div className="slide">
                    <div className="slider-item">
                        <img src="https://picsum.photos/id/237/1000/1000" alt="" />
                        <span className="legend">Here legend 1 goes</span>
                    </div>
                </div>
                <div className="slide">
                    <div className="slider-item">
                        <img src="https://picsum.photos/id/238/1000/1000" alt="" />
                        <span className="legend">Here legend 2 goes</span>
                    </div>
                </div>
                <div className="slide">
                    <div className="slider-item">
                        <img src="https://picsum.photos/id/239/1000/1000" alt="" />
                        <span className="legend">Here legend 3 goes</span>
                    </div>
                </div>
                <div className="slide">
                    <div className="slider-item">
                        <img src="https://picsum.photos/id/239/1000/1000" alt="" />
                        <span className="legend">Here legend 4 goes</span>
                    </div>
                </div>

                <div className="slide">
                    <div className="slider-item">
                        <img src="https://picsum.photos/id/240/1000/1000" alt="" />
                        <span className="legend">Here legend 5 goes</span>
                    </div>
                </div>
            </div>
            <div className="position-show">
                <span style={{backgroundColor: "white"}} className="positions"></span>
                <span className="positions"></span>
                <span className="positions"></span>
                <span className="positions"></span>
                <span className="positions"></span>
            </div>
            <div className="nav">
                <button onclick="prev()">
                    &larr;
                </button>
                <button onclick="next()">
                    &rarr;
                </button>
            </div>
        </main>
    )
}

export default Slider;