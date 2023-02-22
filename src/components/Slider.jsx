import { useEffect, useState } from 'react'
import './../styles/carousel.css'
import Item from './carousel/Item'

const Slider = () => {
    const [counter, setCounter] = useState(1)

    let myDatas = [
        {
            id: "1",
            image: "storage/picsum/237-1000x1000.jpg",
            legend: "Here legend 1 goes",
            style: {left: "0%"},
        },
        {
            id: "2",
            image: "storage/picsum/238-1000x1000.jpg",
            legend: "Here legend 2 goes",
            style: {left: "100%"},
        },
        {
            id: "3",
            image: "storage/picsum/239-1000x1000.jpg",
            legend: "Here legend 3 goes",
            style: {left: "200%"},
        },
        {
            id: "4",
            image: "storage/picsum/241-1000x1000.jpg",
            legend: "Here legend 4 goes",
            style: {left: "300%"},
        },
        {
            id: "5",
            image: "storage/picsum/240-1000x1000.jpg",
            legend: "Here legend 5 goes",
            style: {left: "400%"},
        }
    ];
    const [datas, setDatas] = useState(myDatas)


    const prevSlide = () => {
        let nextCounter = counter - 1;
        if (nextCounter < 0) nextCounter = datas.length - 1
        setCounter(() => nextCounter)
        let nextData = datas.map((data) => {return {...data, style:{...data.style, transform:`translateX(${-counter * 100}%)`} } })
        setDatas(() => nextData);
        console.log(counter)
        // positions[counter].style.backgroundColor = "rgb(133, 184, 184)";
        // positions[counter].style.backgroundColor = "white";
    }
    const nextSlide = () => {
        setCounter((prevCounter) => ((prevCounter + 1) % datas.length))
        let nextData = datas.map((data) => {return {...data, style:{...data.style, transform:`translateX(${-counter * 100}%)`} } })
        setDatas(() => nextData);
        console.log(counter)
        // positions[counter].style.backgroundColor = "rgb(133, 184, 184)";
        // positions[counter].style.backgroundColor = "white";
    }

    // setInterval(nextSlide, 5000);

    return (
        <section className="carousel-container">
            <div>
                <Item item={datas[0]}/>
                <Item item={datas[1]}/>
                <Item item={datas[2]}/>
                <Item item={datas[3]}/>
                <Item item={datas[4]}/>
            </div>
            <div className="position-show">
                <span style={{backgroundColor: "white"}} className="positions"></span>
                <span className="positions"></span>
                <span className="positions"></span>
                <span className="positions"></span>
                <span className="positions"></span>
            </div>
            <div className="nav">
                <button onClick={prevSlide}>
                    &larr;
                </button>
                <button onClick={nextSlide}>
                    &rarr;
                </button>
            </div>
        </section>
    )
}

export default Slider;