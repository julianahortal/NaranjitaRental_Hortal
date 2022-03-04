import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useCarrito } from '../../context/CarritoContext';





const CartWidget = () => {
    const {cantidadCarrito}= useCarrito();

    return (
        <Badge badgeContent={cantidadCarrito} color='success'>            
            <ShoppingCartIcon />
        </Badge>

    )
}

export default CartWidget
