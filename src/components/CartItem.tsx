import React from 'react';
import {useShoppingCart} from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utils/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
}

const CartItem = ({id, quantity}: CartItemProps) => {
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item === null) return null;

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item?.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}}/>
            <div className="me-auto">
                <div>
                    {item?.name} {quantity > 1 &&
                    <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
                </div>

                <span className="text-muted" style={{fontSize: ".75rem"}}>{formatCurrency(item?.price)}</span>
            </div>
            <span className="text-muted">{formatCurrency(item?.price * quantity)}</span>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    );
};

export default CartItem;