import { useEffect, useState, useContext } from "react";
import { MealTypeList, UniqueAllergies } from "./FriendInfoContext";
import axios from "axios";
import PropTypes from "prop-types";
import "./RecipeCollection.css";

const RecipesCollection = () => {
  const { mealTypeInfo, setMealTypeInfo } = useContext(MealTypeList);
  const { partyAllergies } = useContext(UniqueAllergies);
  const [recipes, setRecipes] = useState([]);
  const uniqueAllergies = new Set(partyAllergies);

  const apiParams = new URLSearchParams();
  apiParams.append("type", "any");
  apiParams.append("app_id", "162a32d0");
  apiParams.append("app_key", "65ebf6faccbb0d0d696eaefb2708b549");
  apiParams.append("q", "NOT REQUIRED");
  // apiParams.append("random", true);
  uniqueAllergies.forEach((item) => {
    apiParams.append("health", item);
  });
  for (let key in mealTypeInfo) {
    apiParams.append(key, mealTypeInfo[key]);
  }
  useEffect(() => {
    const recipeList = [];
    axios({
      method: "get",
      url: " https://api.edamam.com/api/recipes/v2",
      params: apiParams,
    }).then(function (response) {
      console.log(response);
      // console.log(response.data['_links'].next.href);
      const recipeObject = response.data.hits;
      for (let key in recipeObject) {
        recipeList.push(recipeObject[key].recipe);
      }
      setRecipes(recipeList);
      setMealTypeInfo({});
    });
  }, []);
  console.log(apiParams);

  return (
    <div className="recipeGallery">
      <p>Here are some dishes your guests might enjoy:</p>
      <ul className="flexContainer">
        {recipes.map((recipe, i) => {
          return (
            <li onClick={() => { window.open(recipes[i].url, '_blank'); }} className="flexItem" key={i} style={{ listStyle: "none" }}>
              <div className="textContainer">
                <h2>{recipe.label}</h2>
              </div>
              <div className="imageContainer">
                <img src={`${recipe.image}`} alt={`${recipe.label}`} />
              </div>
            </li>
          );
        })}
      </ul>
      {/* <button>Next</button>   */}
    </div>
  );
};
RecipesCollection.prototype = {
  partyAllergies: PropTypes.array.isRequired,
};
export default RecipesCollection;

// params:{
//     type:"public",
//     app_id:"162a32d0",
//     app_key:"65ebf6faccbb0d0d696eaefb2708b549",
//     q:'NOT REQUIRED',

// }

// const url = new URL(`https://api.edamam.com/api/recipes/v2`);
//  url.search = new URLSearchParams({
//     type:"public",
//     app_id:"162a32d0",
//     app_key:"65ebf6faccbb0d0d696eaefb2708b549",
//     q:'NOT REQUIRED',
//     health:"gluten-free",
//     health:"fish-free"

//   });
//   fetch(url)
//   .then((response)=>{
//     return response.json()
//   })
//   .then(data=> console.log(data.hits))
