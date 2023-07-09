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
    const dbRef = ref(database,`friends`);
    const [name, setName] = useState("");
    const { allergyInfo, setAllergyInfo } = useContext(AllergiesList);
    const [friendInfo, setFriendInfo] = useState({
        name: "",
        allergies: []
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setFriendInfo(
            {  
                name: name, 
                allergies: allergyInfo
            }
        )
    }

    useEffect(() => {      

        if (friendInfo.name) {
            push(dbRef, friendInfo )
            console.log(allergyInfo)
            setAllergyInfo([])
            setFriendInfo({})
            setName("");
        } 
       // eslint-disable-next-line
    }, [friendInfo])

    const handleNameChange = (e) => {
        const friendName = e.target.value;
        setName(friendName)
    };

    console.log(allergyInfo);

    return (
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="addAFriend" id="addAFriend">Add a Friend!</label>
                <input id="addAFriend" type="text" onChange={handleNameChange} value={name} required/>

                <AllergensList
                />
                <button type="submit">Save Friend</button>
            </form>
        </div>
    )
}

export default AddYourFriend;
