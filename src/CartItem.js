import React from "react";
import "./CartItem.css"

function CartItem({ id, name, price, qty, updateQty }) {
  //Add to item calculator
  const addOne = () => {
    updateQty(id, qty + 1);
  };

  //Subtract to item calculator
  const subtractOne = () => {
    updateQty(id, qty - 1);
  };

  return (
    <div className="CartItem">
      {/*Display cart item*/}
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button onClick={subtractOne} disabled={qty <= 1}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>${qty * price}</div>
    </div>
  );
}

export default CartItem;
