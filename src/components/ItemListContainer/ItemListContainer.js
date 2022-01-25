import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({producto}) => {

    return (
        <div className="item">
            <ItemList product={producto}/>
        </div>
    )
}

export default ItemListContainer

