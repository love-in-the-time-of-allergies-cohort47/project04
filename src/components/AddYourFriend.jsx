import AllergensList from "./AllergensList";
import { useState, useContext, useEffect } from "react";
import { AllergiesList } from './FriendInfoContext';
import firebase from '../firebase';
import {
    getDatabase,
    ref,
    push,
} from "firebase/database";
import './AddYourFriend.css';

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

  

    return (
        <div className="wrapper friendContainer formContainer">
            <form action="" onSubmit={handleSubmit}>
                <div className="textInput">
                    <label htmlFor="addAFriend" id="addAFriend">Add a Friend:</label>
                    <input className="friendInput" id="addAFriend" type="text" onChange={handleNameChange} value={name} required/>
                </div>

                <AllergensList
                />
                <button className="save" type="submit">Save Friend!</button>
            </form>
        </div>
    )
}

export default AddYourFriend;
