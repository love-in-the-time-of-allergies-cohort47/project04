import { MealTypeList } from "./FriendInfoContext";
import {useContext, useState } from "react";
import{mealTypesArray, dishTypeArray, cuisineType} from './appArrays';
import RadioButtons from "./RadioButtons";
import RecipesCollection from "./RecipesCollection";


const TypeOfParty = () => {
    const { mealTypeInfo, setMealTypeInfo } = useContext(MealTypeList);
    const [showRecipes, setShowRecipes] = useState(false);

    const uncheckFunction= ()=>{
        const radioBtns = document.querySelectorAll('form input[type="radio"]');
        radioBtns.forEach((radioButton)=>{
            if(radioButton.checked){
                radioButton.checked=false;

            }
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('search button clicked');
        setShowRecipes(true);
        uncheckFunction();
    }
    
    return (
        <>
            <div>
                <form action="submit" onSubmit={handleSubmit}>
                    <RadioButtons
                    radioButtonArray={mealTypesArray}
                    category={'mealType'}
                    setShowRecipes={setShowRecipes}
                    />
                    <RadioButtons
                    radioButtonArray={dishTypeArray}
                    category={'dishType'}
                    setShowRecipes={setShowRecipes}
                    />
                    <RadioButtons
                    radioButtonArray={cuisineType}
                    category={'cuisineType'}
                    setShowRecipes={setShowRecipes}
                    />

                    <button className="btn" type="submit"
                    >Search Recipes</button>
                    
                </form>
            </div>
            <div>
            { showRecipes && <RecipesCollection/> }

            </div>
        </>
    )
}

export default TypeOfParty;