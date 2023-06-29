import { useEffect } from 'react';
import axios from 'axios';


const Recipes = ({partyAllergies}) => {
    console.log(partyAllergies)
    useEffect(() => {
        const apiKey = '0364971235b98e447450d193f7298b69'
        const appId = 'ea09d762'
        // const apiParams = {
        //     type: "public",
        //     app_id: appId,
        //     app_key: apiKey,
        // }

        // const healthSearch = partyAllergies.join(" ` " `, health : ` " ` ")
        // // const healthSearch = partyAllergies.join('", health : "');

        // // const healthSearch = () => {
        // //     partyAllergies.map((partyAllergy) => apiParams.health=partyAllergy)
        // // }
        // console.log(healthSearch)



        axios({
            url: 'https://api.edamam.com/api/recipes/v2',
            method: 'GET',
            // dataResponse: 'json',
            params: {
                type: "public",
                app_id: appId,
                app_key: apiKey,
                // health: 'gluten-free',
                // health: 'vegan',
                dishType: 'main course',
            },
        }).then((response) => {
            console.log(response);
        })
    }, []);
    return (
        <main>
            <h1>I am recipes hi</h1>
        </main>
    )
}

export default Recipes;