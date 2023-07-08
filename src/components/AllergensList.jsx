import './AllergensList.css'
import { allergens } from "./allergens";
import {useContext, useState } from "react";
import { AllergiesList } from './FriendInfoContext'


export default function AllergensList() {
  // const[allergies, setAllergies]=useState([])
  const {allergyInfo, setAllergyInfo} = useContext(AllergiesList)
  const [isButtonActive, setButtonActive] = useState([]);

  const handleClick = (e ) => {
    if(isButtonActive.includes(e)){
      const delButtons = [...isButtonActive];
      delButtons.splice(isButtonActive.indexOf(e), 1);
      setButtonActive(delButtons)
    }else {
    setButtonActive([...isButtonActive, e]);
    }
    console.log(isButtonActive, e);
    // e.preventDefault();
     
    // e.target.style.backgroundColor= "rgb(202, 150, 39)"
   //  const item =e.target.value;
   const item = allergens[e];
   setAllergyInfo([...allergyInfo, item])  
  //  setAllergies([...allergies, item])
  };



  return (
    <div>
      {allergens.map((item, index) => (
        <button value={item} onClick={() => handleClick(index)} key={index} 
          className={isButtonActive.includes(index) ? 'allergySelected' : ''}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

