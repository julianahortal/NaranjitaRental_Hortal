import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useCarrito } from '../../context/CarritoContext';



const CartWidget = () => {
    const {carrito }= useCarrito();
    return (
        <div>
            <ShoppingBagIcon/>
        </div>
    )
}

export default CartWidget
