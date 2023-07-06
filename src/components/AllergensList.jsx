
import { allergens } from "./appArrays";
import {useContext } from "react";
import { AllergiesList } from './FriendInfoContext'

export default function AllergensList() {
  // const[allergies, setAllergies]=useState([])
  const {allergyInfo, setAllergyInfo} = useContext(AllergiesList)

  const handleClick = (e ) => {
    e.preventDefault();
    e.target.style.backgroundColor= "rgb(202, 150, 39)"
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

