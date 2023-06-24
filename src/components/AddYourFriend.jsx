import AllergensList from "./AllergensList";
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
       setFriendInfo(
        {
            name: friendName,
            allergies: allergyInfo
        }
       )
       
    };

    console.log(friendInfo)
    
    return (
        <div className="wrapper">
            <form action="">
                <label htmlFor="addAFriend" id="addAFriend">Add a Friend!</label>
                <input id="addAFriend" type="text" onChange={handleNameChange} value={name}/>

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

                <AllergensList 
                />
            </form>
        </div>
    )
}

export default AddYourFriend;
