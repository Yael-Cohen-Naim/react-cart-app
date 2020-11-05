import React from "react";
import "./App.css";
import Cart from "./Cart";

//Cart items 
const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];
function App() {
  return (
    <div>
      <Cart items={items} />
    </div>
  );
}

export default App;
