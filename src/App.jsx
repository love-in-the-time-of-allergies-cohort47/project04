// import Connect from './components/Connect'
import AddYourFriend from './components/AddYourFriend'
// import ShowFriends from './components/ShowFriends'
// import Party from './components/Party'
import { AllergiesList, MealTypeList, UniqueAllergies } from './components/FriendInfoContext'
import { useState } from 'react'
import './App.css';
import './components/setUp.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Party from './components/Party';
import { Link } from 'react-router-dom';
import TypeOfParty from './components/TypeOfParty';



function App() {
  const [mealTypeInfo, setMealTypeInfo] = useState({});
  const [allergyInfo, setAllergyInfo] = useState([]);
  const [addFriend, setAddFriend] =useState(true);
  const [partyAllergies, setPartyAllergies] = useState([]);

  return (
    <BrowserRouter>
    <MealTypeList.Provider
      value={{ mealTypeInfo, setMealTypeInfo}}>
    <AllergiesList.Provider
      value={{ allergyInfo, setAllergyInfo }}
    >
    <UniqueAllergies.Provider
    value={{ partyAllergies, setPartyAllergies }}>
    
      <main>
        <header>
          <h1>Love In The Time Of Allergies</h1>

        </header>
        <Link to={`/`}>  
        <button className='btn' onClick={()=>{
          setAddFriend(true)
        }}>Add a Friend!</button>
        </Link>
        
        <Link to={`/party`}>
        <button className='btn' onClick={()=>{
          setAddFriend(false);
        }}>Plan Your Party!</button>
        </Link>
        
      <Routes>
        <Route path="/party" element={ <Party/> } />
        <Route path="/" element={ addFriend && <AddYourFriend/> } />
        <Route path="/pickRecipe" element={ <TypeOfParty/> } />
      </Routes>

      </main>
    </UniqueAllergies.Provider>
    </AllergiesList.Provider>
    </MealTypeList.Provider>
    </BrowserRouter>
  )
}
      

export default App