import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useCarrito } from '../../context/CarritoContext';




const CartWidget = () => {
    const {carrito}= useCarrito();

    return (
        <Badge badgeContent={carrito.length} color="secondary">            
            <ShoppingCartIcon />
        </Badge>

    )
}

export default CartWidget
