import { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { UniqueAllergies } from "./FriendInfoContext";
import { Link } from "react-router-dom";
import './Party.css';

const WhosComingToParty = () => {
  const [searchableList, setSearchableList] = useState([]);
  const {partyAllergies, setPartyAllergies} = useContext(UniqueAllergies);
  const [isButtonActive, setButtonActive] = useState([]);
 

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
      for (let key in friends) {
        newState.push({ key: key, friend: friends[key] });
      }
      setSearchableList(newState);
    });
  }, []);
   useEffect(()=>{
    setPartyAllergies([])
    const allergensArray =[];
    isButtonActive.forEach((indexNumber)=>{
      const personAllergy = searchableList[indexNumber].friend.allergies;
      if(personAllergy){
        allergensArray.push(...personAllergy);
      }
      
    })
    setPartyAllergies(allergensArray)
    
    
    
   


   },[isButtonActive])
  const handleClick= (e, index)=>{
    setButtonActive([...isButtonActive, index]);
    if(isButtonActive.includes(index)){
      const delButtons = [...isButtonActive];
      delButtons.splice(isButtonActive.indexOf(index), 1);
      setButtonActive(delButtons)
    }
  }

 
  return (
    <div className="friend__list">
        {
          searchableList.map((ele, index) => (
            <button key={ele.key} 
            className={isButtonActive.includes(index) ? 'attendingParty' : ''}
            onClick={(e) => {
            handleClick(e, index)
              if(ele.friend.allergies){
                setPartyAllergies([...partyAllergies, ...ele.friend.allergies])
              }
              
            }}>
              {ele.friend.name}

            </button>

          ))
        }
        <span>
          <Link to={`/pickRecipe`}>
            <button className='btn menuButton' >Plan the Menu!</button>
          </Link>
        </span>
    </div>

  )
}


const Party = () => {

  return (
    <div className="wrapper">
      {/* <header>
        <h1>Plan A Party</h1>
      </header> */}
      {/* <div>
        <label htmlFor="partyName">Party Name</label>
        <input type="text" id="partyName" placeholder="Enter your party name" />
      </div> */}
      <div>
        <p>Select your guests:</p>
        <div className="contactList">
          <WhosComingToParty />
        </div>

      </div>
    </div>
  );


};

export default Party;