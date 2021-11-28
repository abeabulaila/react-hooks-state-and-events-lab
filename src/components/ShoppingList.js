import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const[category, setCategory] = useState("All")

    function changeCategory(event) {
    setCategory(event.target.value)
    }
    const showItems = items.filter((item) => {
      if(category === "All") return true;
      return item.category === category;
    
    })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {changeCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {showItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
