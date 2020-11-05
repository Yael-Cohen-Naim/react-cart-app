import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ items }) {
  //Updating items state
  const [initialItems, setinitialItems] = useState(items);

  //Updating qty for each cartItem
  const updateQty = (id, newQty) => {
    const newItems = initialItems.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setinitialItems(newItems);
  };

  //All items total calculator
  const grandTotal = initialItems
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      <h1 className="Cart-title">Shopping Cart</h1>

      {/*Display cart items  */}
      <div className="Cart-items">
        {initialItems.map((item) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
      </div>

      {/*Display all items total  */}
      <h2 className="Cart-total">Grand total: ${grandTotal}</h2>
    </div>
  );
}

export default Cart;
