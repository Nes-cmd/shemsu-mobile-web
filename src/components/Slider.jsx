import { useEffect, useState } from 'react'
import './../styles/carousel.css'
import {Item, Position} from './carousel/Item'

const Slider = () => {
    // const [counter, setCounter] = useState(1)

    let myDatas = {
        counter: 0,
        data: [
            {
                id: "1",
                image: "storage/picsum/237-1000x1000.jpg",
                legend: "Here legend 1 goes",
                style: { left: "0%" },
                positionColor:"white",
            },
            {
                id: "2",
                image: "storage/picsum/238-1000x1000.jpg",
                legend: "Here legend 2 goes",
                style: { left: "100%" },
                positionColor:"rgb(133, 184, 184)",
            },
            {
                id: "3",
                image: "storage/picsum/239-1000x1000.jpg",
                legend: "Here legend 3 goes",
                style: { left: "200%" },
                positionColor:"rgb(133, 184, 184)",
            },
            {
                id: "4",
                image: "storage/picsum/240-1000x1000.jpg",
                legend: "Here legend 4 goes",
                style: { left: "300%" },
                positionColor:"rgb(133, 184, 184)",
            },
            {
                id: "5",
                image: "storage/picsum/238-1000x1000.jpg",
                legend: "Here legend 5 goes",
                style: { left: "400%" },
                positionColor:"rgb(133, 184, 184)",
            }
        ]
    };
    const [datas, setDatas] = useState(myDatas)
    const prevSlide = () => {
        setDatas((prevData) => {
            let nextCounter = prevData.counter - 1
            if (nextCounter < 0) nextCounter = datas.data.length - 1
            let nextData = datas.data.map((data) => {
                return { ...data, style: { ...data.style, transform: `translateX(${-nextCounter * 100}%)` } }
            })
            nextData[prevData.counter].positionColor = "rgb(133, 184, 184)";
            nextData[nextCounter].positionColor = "white";
            return { ...prevData, counter: nextCounter, data: nextData }
        });
        // console.log(datas)
    }
    const nextSlide = () => {
        setDatas((prevData) => {
            let nextCounter = (prevData.counter + 1) % datas.data.length
            let nextData = datas.data.map((data) => {
                return { ...data, style: { ...data.style, transform: `translateX(${-nextCounter * 100}%)` } }
            })
            nextData[prevData.counter].positionColor = "rgb(133, 184, 184)";
            nextData[nextCounter].positionColor = "white";
            console.log(nextData)
            return { ...prevData, counter: nextCounter, data: nextData }
        });
    }
    useEffect(() => {
        setInterval(nextSlide, 5000);
    }, [])

    

    return (
        <section className="carousel-container">
            <div>
                { datas.data.map((data) => <Item key={ data.id } item={data} />) }
            </div>
            <div className="position-show">
                { datas.data.map((data) => <Position key={ data.id } position={data} />) }
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