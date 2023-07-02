import { useEffect,useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Recipes = ({partyAllergies}) => {  
  console.log(partyAllergies);
  const healthParams = new URLSearchParams();
  healthParams.append("type","public");
  healthParams.append("app_id","162a32d0");
  healthParams.append("app_key","65ebf6faccbb0d0d696eaefb2708b549");
  healthParams.append("q",'NOT REQUIRED');
  console.log(healthParams);
    // const healthArray = ["dairy-free", "egg-free", "fish-free", "fodmap-free"];
    if(Array.isArray(partyAllergies)){
      partyAllergies.forEach((item)=>{
        healthParams.append("health", item)})

    }
  
    

    useEffect(()=>{
      axios({

        method: 'get',
        url: ' https://api.edamam.com/api/recipes/v2',
        params:healthParams    
      })
      .then(function (response) {
      console.log(response.data.hits);
  });



    },[])
  return (
    <div>Receipes</div>
  )
}
Recipes.prototype={
  partyAllergies:PropTypes.array.isRequired
}
export default Recipes


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