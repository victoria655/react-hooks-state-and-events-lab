import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle handler for the button
  function handleClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Dynamically set the class based on the state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
