import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div className="item">
            <h2>{props.articulo}</h2>
            <p>{props.precio}</p>
        </div>
    )
}

export default ItemListContainer
