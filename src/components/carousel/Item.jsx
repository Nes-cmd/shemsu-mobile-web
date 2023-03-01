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
const Position = ({position}) => {
    return (
        <span className="positions" style={{ backgroundColor: position.positionColor }} />
    )
}

export {Item, Position};