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
import friendLogo from './assets/friend.svg';
import mealLogo from './assets/meal.svg'

function App() {
  const [mealTypeInfo, setMealTypeInfo] = useState([])
  const [allergyInfo, setAllergyInfo] = useState([])
  const [addFriend, setAddFriend] =useState(true);

  return (
    <>
      <BrowserRouter>
        <MealTypeList.Provider
          value={{ mealTypeInfo, setMealTypeInfo }}>
          <AllergiesList.Provider
            value={{ allergyInfo, setAllergyInfo }}
          >
            <nav>
              <div className="wrapper navBtn">
                <Link to={`/friends`}>
                  <button className='btn' onClick={() => {
                    setAddFriend(true)
                  }}><img className="navIcons" src={friendLogo} alt="Add a friend button" label="Add a friend button" /></button>
                </Link>

                <Link to={`/party`}>
                  <button className='btn' onClick={() => {
                    setAddFriend(false);
                  }}><img className="navIcons" src={mealLogo} alt="Plan a party button" label="Plan a party button" /></button>
                </Link>
              </div>

            </nav>


            <section className="contentSection">
              <Routes>
                <Route path="/party" element={<Party />} />
                <Route path="/friends" element={addFriend && <AddYourFriend />} />
                <Route path="/party/:partyID" element={<PartyDetails />} />
              </Routes>
            </section>

          </AllergiesList.Provider>
        </MealTypeList.Provider>
      </BrowserRouter>

    </>
  )
}
      

export default App