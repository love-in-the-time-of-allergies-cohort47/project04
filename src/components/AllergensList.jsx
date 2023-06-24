import { useState } from "react";
import { allergens } from "./allergens";

export default function AllergensList() {
  const[allergies, setAllergies]=useState([])
  const handleClick = (e ) => {
    e.preventDefault();
   const item =e.target.value;
   setAllergies([...allergies, item])

  };
console.log(allergies);
  return (
    <div>
      {allergens.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}

