import React from "react";
import { allergens } from "./allergens";
import { useState, useEffect, useContext } from "react";
import { AllergiesList } from './FriendInfoContext'

export default function AllergensList() {
  // const[allergies, setAllergies]=useState([])
  const {allergyInfo, setAllergyInfo} = useContext(AllergiesList)

  const handleClick = (e ) => {
    e.preventDefault();
   const item =e.target.value;
   setAllergyInfo([...allergyInfo, item])  
  //  setAllergies([...allergies, item])
  };



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

