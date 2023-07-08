import { MealTypeList } from "./FriendInfoContext";
import { useContext, useState } from "react";
import './RadioButtons.css';


const RadioButtons = ({radioButtonArray, category,setShowRecipes}) => {
    const { mealTypeInfo,setMealTypeInfo} = useContext(MealTypeList);
    // const mealTypeApiInfo={
    //   mealType:"",
    //   dishType:"",
    //   cuisineType:""
    // }


    const handleChange = (e)=>{
      console.log(e.target.name);
      console.log(e.target.value);
      console.log(e.target.checked);
        switch(e.target.name){
          case'mealType':
         setMealTypeInfo({...mealTypeInfo,
        mealType:e.target.value})
        break;
          case'dishType':
         setMealTypeInfo({...mealTypeInfo,
        dishType:e.target.value})
        break;
          case'cuisineType':
         setMealTypeInfo({...mealTypeInfo,
        cuisineType:e.target.value})
        break;
        }
        setShowRecipes(false)
    }

    
  return (
    <fieldset>
                    <legend>Choose a {`${category[0].toUpperCase()+category.slice(1)}`} </legend>
                    {
                        radioButtonArray.map((meal, i)=>{                            
                            return(
                            <div key={i} >
                                <label htmlFor={meal}>{meal}</label>
                                <input type="radio" 
                                name={category}
                                value={meal}
                                id={meal}
                                onChange={handleChange}/>
                            </div>
                            )
                        })
                    }
    </fieldset>
  )
}

export default RadioButtons;
