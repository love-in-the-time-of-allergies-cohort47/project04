
import { allergens } from "./appArrays";
import {useContext,useEffect,useState} from "react";
import { AllergiesList } from './FriendInfoContext';
import './AllergensList.css';

export default function AllergensList() {
  // const[allergies, setAllergies]=useState([])
  const {allergyInfo, setAllergyInfo} = useContext(AllergiesList);
   const [isButtonActive, setButtonActive] = useState([]);
   const [allergyContainer, setAllergyContainer] = useState([]);


   useEffect(()=>{
    setAllergyContainer([])
    const allergensArray =[];
    isButtonActive.forEach((indexNumber)=>{
      console.log("inside useeffect " +   `${allergens[indexNumber]}`);
      allergensArray.push(allergens[indexNumber])
    })
    setAllergyContainer([...allergensArray])
    
   


   },[isButtonActive])

  const handleClick = (e, index ) => {
    e.preventDefault();
    setButtonActive([...isButtonActive, index]);
    if(isButtonActive.includes(index)){
      const delButtons = [...isButtonActive];
      delButtons.splice(isButtonActive.indexOf(index), 1);
      setButtonActive(delButtons)
    }

    if(allergyContainer.length !== 0){
      console.log("this worked");
      setAllergyInfo([...allergyContainer])
    }
  };
  return (
    <div>
      {allergens.map((item, index) => (
        <button value={item} onClick={(e)=>{
              handleClick(e, index)
        }} key={index}
        className={isButtonActive.includes(index) ? 'allergySelected' : ''}
        
        >
          {item.charAt(0).toUpperCase()+item.slice(1)}
        </button>
      ))}
    </div>
  );
}

