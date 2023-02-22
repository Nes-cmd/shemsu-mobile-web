const Item = ({item}) => {
    return (
    <div key={item.id} className="slide" style={item.style}>
        <div className="slider-item">
            <img src={ item.image } alt="" />
            <span className="legend">{ item.legend }</span>
        </div>
    </div>
    )
}

export default Item;