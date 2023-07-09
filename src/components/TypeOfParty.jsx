import { MealTypeList } from "./FriendInfoContext";
import {useContext, useState } from "react";
import{mealTypesArray, dishTypeArray, cuisineType} from './appArrays';
import RadioButtons from "./RadioButtons";
import RecipesCollection from "./RecipesCollection";
import './TypeOfParty.css'


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
        // console.log('search button clicked');
        setShowRecipes(true);
        uncheckFunction();
    }
    
    return (
        <div>
            <form action="submit" onSubmit={handleSubmit}>
                <div className="radioContainer">
                    <div className="buttonsContainer">
                        <RadioButtons
                        radioButtonArray={mealTypesArray}
                        category={'mealType'}
                        setShowRecipes={setShowRecipes}
                        />
                    </div>
                    <div className="buttonsContainer">
                        <RadioButtons
                        radioButtonArray={dishTypeArray}
                        category={'dishType'}
                        setShowRecipes={setShowRecipes}
                        />
                    </div>
                    <div className="buttonsContainer">
                        <RadioButtons
                        radioButtonArray={cuisineType}
                        category={'cuisineType'}
                        setShowRecipes={setShowRecipes}
                        />
                    </div>
                </div>
                <span>
                    <button className="btn" type="submit"
                    >Search Recipes</button>
                </span>
            </form>
            <div>
            { showRecipes && <RecipesCollection/> }

            </div>
        </div>
    )
}

export default TypeOfParty;