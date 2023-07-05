import { MealTypeList } from "./FriendInfoContext"
import { useState, useContext } from "react"

const TypeOfParty = () => {
    const { mealTypeInfo, setMealTypeInfo } = useContext(MealTypeList)

    return (
        <div>
            <h1>Party party!!</h1>
        </div>
    )
}

export default TypeOfParty;