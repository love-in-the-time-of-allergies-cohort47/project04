import AllergensList from "./AllergensList";
import {AllergiesList} from "./FriendInfoContext";
import { useState, useContext } from 'react'


const AddYourFriend = () => {
    const [name, setName] = useState("");
    const {allergyInfo} = useContext(AllergiesList);
    const [friendInfo, setFriendInfo] = useState({
        name: "",
        allergies: []
    })


    const handleNameChange = (e) => {
       const friendName =e.target.value;
       setName(friendName)  
    };

    console.log(friendInfo)
    
    return (
        <div className="wrapper">
            <form action="">
                <label htmlFor="addAFriend" id="addAFriend">Add a Friend!</label>
                <input id="addAFriend" type="text" onChange={handleNameChange} value={name}/>

                <AllergensList 
                />
            </form>
        </div>
    )
}

export default AddYourFriend;
