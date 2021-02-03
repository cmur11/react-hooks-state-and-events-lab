import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
console.log(itemData)

function App() {
  const [items, setItems] = useState(itemData);
  const [light, setDark] = useState(true)
  
  // console.log(light)

  function toggleSwitch(){
    setDark(!light)
  }
  // this data will be passed down to the ShoppingList as a prop
   console.log(items);
    return (
      <div className={"App " + (light ? "dark" : "light")}>
        {/* was false ^^ instead of light ? */}
        <header>
          <h2>Shopster</h2>
          <button onClick={toggleSwitch}>
            {light ? "dark" : "light"}</button>
          {/* why does ^ this work */}
        </header>
        <ShoppingList items={items} />
      </div>
    );
    
}

export default App;
