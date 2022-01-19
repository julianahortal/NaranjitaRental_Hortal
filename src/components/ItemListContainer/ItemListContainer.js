import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    return (
        <div className="item">
            <h2>{props.articulo}</h2>
            <p>{props.precio}</p>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer
