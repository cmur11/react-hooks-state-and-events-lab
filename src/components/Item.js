import React, {useState} from "react";

function Item({ name, category }) {
  const [click,setClick] = useState(false)

  function handleClick(e){
  
    setClick(!click)
  }
console.log(click)
  return (
    <li className={click ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick = {handleClick} className="add">{click ? "Remove From" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
