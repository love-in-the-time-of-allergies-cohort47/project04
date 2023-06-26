import React from "react";
import {allergens} from "./allergens"; 
import { useState, useEffect, useContext } from "react";
import {allergiesList} from "./FriendInfoContext";

export default function AllergensList( ) {

  const handleClick = (e) => {
    e.preventDefault();
    const item = e.target.value;
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
