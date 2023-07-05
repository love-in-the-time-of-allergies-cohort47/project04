import { useState, useEffect } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import RecipesCollection from "./RecipesCollection";
import TypeOfParty from "./TypeOfParty";


const WhosComingToParty = () => {
  const [searchableList, setSearchableList] = useState([]);
  const [partyAllergies, setPartyAllergies] = useState([]);
  const uniqueAllergies = new Set(partyAllergies);
  const [showRecipes, setShowRecipes] = useState(false);

  useEffect(() => {
    const newState = [];
    // create a variable to hold our database details and set the connection to the database.
    const database = getDatabase(firebase);
    // create a variable that makes reference to our database
    const dbRef = ref(database);
    // add an event listener to that 'dbRef' variable that will fire
    // from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
      // here we use Firebase's .val() method to parse our database info the way we want it
      const data = response.val();
      const friends = data.friends;
      // console.log(friends);
      for (let key in friends) {
        // console.log(key);
        // console.log(friends[key].name);
        newState.push({ key: key, friend: friends[key] });
      }
      setSearchableList(newState);
    });
  }, []);
  const handleClick =(e)=>{
    // console.log(e);
  }

  const handleSearchClick = () => {
    setShowRecipes(true);
  }


  console.log(partyAllergies)
  console.log(uniqueAllergies);

  return (
    <div className="friend__list">
      {/* <div className="nameContainer">
        <FaSearch id="search-icon" />
        <input
          className="nameContainer__input"
          type="text"
          id="searchFriend__name"
          placeholder="Type name to search"
        />
      </div> */}
      {
        searchableList.map((ele) => (
          <button key={ele.key} onClick={(e) => {
            console.log(ele.friend.allergies);
            setPartyAllergies([...partyAllergies, ...ele.friend.allergies])
            handleClick(e)
          }}>
            {ele.friend.name}

          </button>

        ))
      }
      <button onClick={handleSearchClick}>Find me recipes!</button>
      <div>
        <TypeOfParty />
      </div>
      <div>
        { showRecipes && <RecipesCollection partyAllergies={[...uniqueAllergies]} /> }

      </div>

    </div>



  )
}


const Party = () => {

  return (
    <div className="wrapper">
      <header>
        <h1>Plan A Party</h1>
      </header>
      <div>
        <label htmlFor="partyName">Party Name</label>
        <input type="text" id="partyName" placeholder="Enter your party name" />
      </div>
      <div>
        <h2>
          Who's Coming to party ?
        </h2>
        <div className="contactList">
          <WhosComingToParty />
        </div>

      </div>
    </div>
  );


};

export default Party;