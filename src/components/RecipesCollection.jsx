import { useEffect, useState, useContext } from "react";
import { MealTypeList, UniqueAllergies } from "./FriendInfoContext";
import axios from "axios";
import PropTypes from "prop-types";
import "./RecipeCollection.css";

const RecipesCollection = () => {
  const { mealTypeInfo, setMealTypeInfo } = useContext(MealTypeList);
  const { partyAllergies } = useContext(UniqueAllergies);
  const [recipes, setRecipes] = useState([]);
  const [mealTypeValues, setMealTypeValues] = useState([]);
  const uniqueAllergies = new Set(partyAllergies);
  const [nextUrl, setNextUrl] = useState("");
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  
  const apiParams = new URLSearchParams();
  apiParams.append("type", "any");
  apiParams.append("app_id", "162a32d0");
  apiParams.append("app_key", "65ebf6faccbb0d0d696eaefb2708b549");
  apiParams.append("q", "NOT REQUIRED");
  // add the allergies to the api params
  uniqueAllergies.forEach((item) => {
    apiParams.append("health", item);
  });
  for (let key in mealTypeInfo) {
    apiParams.append(key, mealTypeInfo[key]);
  }
  useEffect(() => {
    setMealTypeValues([...Object.values(mealTypeInfo)]);
    const recipeList = [];
    axios({
      method: "get",
      url: " https://api.edamam.com/api/recipes/v2",
      params: apiParams,
    })
      .then(function (response) {
        console.log(response);
        // console.log(response.status);
        // console.log(response.data.count);
        // console.log(response.data['_links'].next.href);
        // setNextUrl(response.data["_links"].next.href);
        if (response.data.count !== 0 && response.status === 200) {
          if (response.data.count > 20) {
            setNextUrl(response.data["_links"].next.href);
          }
          setCount(response.data.count);
          const recipeObject = response.data.hits;
          for (let key in recipeObject) {
            recipeList.push(recipeObject[key].recipe);
          }
          setRecipes(recipeList);
          setMealTypeInfo({});
        }
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  }, []);

  // handle click function to get more results when load more is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    })
  }
  
  const handleClick = () => {
    setClickCount(clickCount + 1);
    const recipeList = [];
    axios({
      method: "get",
      url: nextUrl,
    })
      .then(function (response) {
        scrollToTop()
        console.log(response);
        console.log(count);
        console.log(Math.floor(count / 20));
        if (response.data.count !== 0 && response.status === 200) {
          if (
            response.data.count > 20 &&
            response.data["_links"].next !== undefined
          ) {
            setCount(count - 20);
            setNextUrl(response.data["_links"].next.href);
          }
          setCount(response.data.count);
          const recipeObject = response.data.hits;
          for (let key in recipeObject) {
            recipeList.push(recipeObject[key].recipe);
          }
          setRecipes(recipeList);
          setMealTypeInfo({});
        }
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  };
  return (
    <div className="recipeGallery">
      {/* <p>Here are some dishes your guests might enjoy:</p>
      <p>Here are some dishes your guests might enjoy:</p> */}
      <p>
        {recipes.length === 0
          ? "Sorry! There are no results for your search. Please try again with different selections."
          : "Here are some dishes your guests might enjoy:"}
      </p>

      <ul className="flexContainer">
        {recipes.map((recipe, i) => {
          return (
            <li
              onClick={() => {
                window.open(recipes[i].url, "_blank");
              }}
              className="flexItem"
              key={i}
              style={{ listStyle: "none" }}
            >
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
      {clickCount < Math.floor(count / 20) ? (
        <span>
          <button className="btn" onClick={handleClick}>
            Load More!
          </button>
        </span>
      ) : count === 0 ? (
        ""
      ) : (
        <p>You've reached the end of results. For more options, please try again with different selections.</p>
      )}
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
