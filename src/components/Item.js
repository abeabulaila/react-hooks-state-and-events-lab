import React, {useState} from "react";



function Item({ name, category }) {

  const [cartStatus, setCartStatus] = useState(false)
  
  function handleCart() {
  setCartStatus ((cartStatus) => !cartStatus)
  }

  return (
    <li className={cartStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={cartStatus ? "remove" : "add"}>{cartStatus ? "Remove From" : "Add  to"} Cart</button>
    </li>
  );
}

export default Item;
