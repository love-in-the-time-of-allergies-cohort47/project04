import { FaSearch } from "react-icons/fa";
import {useState, useEffect} from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";


const WhosComingToParty=()=>{
    const [searchableList, setSearchableList] = useState([]);


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
      console.log(data);
      for (let key in data) {
        console.log(data[key].name);
        newState.push({ key: key, friend: data[key] });
      }
      setSearchableList(newState);
    });
  }, []);
  console.log(searchableList);

   return(
    <div className="friend__list">
      <div className="nameContainer">
        <FaSearch id="search-icon" />
        <input
          className="nameContainer__input"
          type="text"
          id="searchFriend__name"
          placeholder="Type name to search"
        />
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
        <input type="text" id="partyName" placeholder="Enter your party name"/>  
      </div>
      <div>
        <h2>
            Who&apos;s Coming to party ?
        </h2>
        <div className="contactList">
            <WhosComingToParty/>
        </div>

      </div>
    </div>
  );

    
};

export default Party;