import AllergensList from "./AllergensList";
import { useState, useContext, useEffect } from "react";
import { AllergiesList } from './FriendInfoContext';
import firebase from '../firebase';
import {
    getDatabase,
    ref,
    push,
  } from "firebase/database";

const AddYourFriend = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    const [name, setName] = useState("");
    const {allergyInfo, setAllergyInfo} = useContext(AllergiesList);
    const [friendInfo, setFriendInfo] = useState({
        name: "",
        allergies: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setFriendInfo(
            {  
                // ...friendInfo, 
                name: name, 
                allergies: allergyInfo
            }
        )
    }

    // const fbUpdate = 
    useEffect(() => {    
        // push(dbRef, friendInfo)
        console.log(friendInfo)

        if (friendInfo.name) {
            push(dbRef, friendInfo)
            console.log(allergyInfo)
            setAllergyInfo([])
            setFriendInfo({})
        } 
    }, [friendInfo])

    const handleNameChange = (e) => {
       const friendName =e.target.value;
       setName(friendName)      
    };

    return (
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="addAFriend" id="addAFriend">Add a Friend!</label>
                <input id="addAFriend" type="text" onChange={handleNameChange} value={name}/>

                <AllergensList 
                />
                <button type="submit">Save Friend</button>
            </form>
        </div>
    )
}

export default AddYourFriend;


                {/* Mary's buttons */}
                {/* <fieldset>
                    <legend>Any dietary restrictions</legend>
                    <div>
                        <input type="checkbox" id="none" name="none" checked />
                            <label htmlFor="none">None</label>
                    </div>
                    <div>
                        <input type="checkbox" id="eggFree" name="eggFree" />
                            <label htmlFor="eggFree">Egg Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="glutenFree" name="glutenFree" />
                        <label htmlFor="glutenFree">Gluten Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="fishFree" name="fishFree" />
                        <label htmlFor="fishFree">Fish Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nutFree" name="nutFree" />
                        <label htmlFor="nutFree">Nut Free</label>
                    </div>
                    <div>
                        <input type="checkbox" id="eggFree" name="eggFree" />
                        <label htmlFor="meatFree">Meat Free</label>
                    </div>                    
                </fieldset> */}