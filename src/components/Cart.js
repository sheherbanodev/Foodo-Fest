import React, { useState } from 'react';
import { readFileSync, writeFileSync } from 'fs';

function AddToCartButton(props) {
  const [cart, setCart] = useState([]);

  function handleClick() {
    // Add the item to the cart
    setCart([...cart, props.item]);

    // Update the JSON file to reflect the added item
    const data = JSON.parse(readFileSync('bd.json'));
    data.cart.push(props.item);
    writeFileSync('bd.json', JSON.stringify(data));
  }

  return (
    <button onClick={handleClick}>Add to Cart</button>
  );
}
export default AddToCartButton
