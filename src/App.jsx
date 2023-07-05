// import Connect from './components/Connect'
import AddYourFriend from './components/AddYourFriend'
// import ShowFriends from './components/ShowFriends'
// import Party from './components/Party'
import { AllergiesList, MealTypeList } from './components/FriendInfoContext'
import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Party from './components/Party';
import PartyDetails from './components/Party';
import { Link } from 'react-router-dom';



function App() {
  const [mealTypeInfo, setMealTypeInfo] = useState([])
  const [allergyInfo, setAllergyInfo] = useState([])
  const [addFriend, setAddFriend] =useState(true);

  return (
    <BrowserRouter>
    <MealTypeList.Provider
      value={{ mealTypeInfo, setMealTypeInfo}}>
    <AllergiesList.Provider
      value={{ allergyInfo, setAllergyInfo }}
    >
    
      <main>
        
        <Link to={`/`}>  
        <button className='btn' onClick={()=>{
          setAddFriend(true)
        }}>Add a Friend!</button>
        </Link>
        
        <Link to={`/party`}>
        <button className='btn' onClick={()=>{
          setAddFriend(false);
        }}>Plan a Party</button>
        </Link>
        
      <Routes>
        <Route path="/party" element={ <Party/> } />
        <Route path="/" element={ addFriend && <AddYourFriend/> } />
        <Route path="/party/:partyID" element={ <PartyDetails/> } />
      </Routes>

      </main>
    </AllergiesList.Provider>
    </MealTypeList.Provider>
    </BrowserRouter>
  )
}
      

export default App