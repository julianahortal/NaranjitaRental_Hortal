import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    return (
        <div className="item">
            <h2>{props.articulo}</h2>
            <p>{props.precio}</p>
            <p>Stock disponible: {props.stock}</p>
            <ItemCount stock={props.stock}/>
        </div>
    )
}

export default ItemListContainer
