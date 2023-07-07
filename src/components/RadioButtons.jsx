import { MealTypeList } from "./FriendInfoContext";
import { useContext, useState } from "react";
import './RadioButtons.css';


const RadioButtons = ({radioButtonArray, category, updateMealTypeInfo}) => {
    const { mealTypeInfo} = useContext(MealTypeList);
    const[meal, setMeal]= useState("");


    const handleChange = (e)=>{
        console.log(e.target);
        updateMealTypeInfo([...mealTypeInfo,{
        [e.target.name]:e.target.value
       }])       
    }
    console.log(mealTypeInfo);
    
  return (
    <fieldset>
                    <legend>Choose a {`${category[0].toUpperCase()+category.slice(1)}`} </legend>
                    {
                        radioButtonArray.map((meal, i)=>{                            
                            return(
                            <div key={i} >
                                <label htmlFor={category}>{meal}</label>
                                <input type="radio" name={category} value={meal} id={category} onChange={handleChange}/>
                            </div>
                            )
                        })
                    }
    </fieldset>
  )
}

export default RadioButtons;
