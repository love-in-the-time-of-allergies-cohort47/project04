import { MealTypeList } from "./FriendInfoContext";
import {useContext } from "react";
import{mealTypesArray, dishTypeArray, cuisineType} from './allergens';
import RadioButtons from "./RadioButtons";

const TypeOfParty = () => {
    const { mealTypeInfo, setMealTypeInfo } = useContext(MealTypeList);
    
    return (
        <div>
            <form action="">
                <RadioButtons
                radioButtonArray={mealTypesArray}
                category={'mealType'}
                updateMealTypeInfo={setMealTypeInfo}/>
                <RadioButtons
                radioButtonArray={dishTypeArray}
                category={'dishType'}
                updateMealTypeInfo={setMealTypeInfo}/>
                <RadioButtons
                radioButtonArray={cuisineType}
                category={'cuisineType'}
                updateMealTypeInfo={setMealTypeInfo}/>
                
            </form>
        </div>
    )
}

export default TypeOfParty;