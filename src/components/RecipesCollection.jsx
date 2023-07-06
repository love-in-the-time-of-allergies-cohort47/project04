import { useEffect,useState,useContext } from 'react';
import { MealTypeList } from "./FriendInfoContext";
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipesCollection = ({partyAllergies}) => { 
  const { mealTypeInfo} = useContext(MealTypeList); 
  const [recipes,setRecipes]= useState([])
  // console.log(partyAllergies);
  const apiParams = new URLSearchParams();
 apiParams.append("type","any");
 apiParams.append("app_id","162a32d0");
 apiParams.append("app_key","65ebf6faccbb0d0d696eaefb2708b549");
 apiParams.append("q",'NOT REQUIRED');
  // apiParams.append("random", true);
  // console.log apiParams);
    // const healthArray = ["dairy-free", "egg-free", "fish-free", "fodmap-free"];
    if(Array.isArray(partyAllergies)){
      partyAllergies.forEach((item)=>{
       apiParams.append("health", item)})

    }
    if(Array.isArray(mealTypeInfo)){
      mealTypeInfo.forEach((category)=>{
        for(let key in category){
          apiParams.append(key, category[key])
        }
      })
     

    }
  
    console.log(apiParams);

    useEffect(()=>{
      const recipeList = []
      axios({

        method: 'get',
        url: ' https://api.edamam.com/api/recipes/v2',
        params :apiParams    
      })
      .then(function (response) {
        // const recipeHits= response.data.hits
        console.log(response);
        // console.log(response.data['_links'].next.href);
        const recipeObject = response.data.hits;
        for(let key in recipeObject){
          recipeList.push(recipeObject[key].recipe)
          // console.log(recipeObject[key].recipe);
        }
        // console.log(recipeList.length);
        setRecipes(recipeList)

  });
  


    },[])
  
    console.log(mealTypeInfo);
    console.log(partyAllergies);
  return (
    <div>
      <ul>
        {
          recipes.map((recipe, i)=>{
            return(
              <li key={i} style={{listStyle: "none"}}>
                <h2>{recipe.label}</h2>
              <img src={`${recipe.image}`} alt={`${recipe.label}`} />
              </li>
            )
          })

      }

      </ul>
        {/* <button>Next</button>   */}
    </div>
  )
}
RecipesCollection.prototype={
  partyAllergies:PropTypes.array.isRequired
}
export default RecipesCollection


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