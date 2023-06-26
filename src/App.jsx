import Connect from './components/Connect'
import AddYourFriend from './components/AddYourFriend'
import ShowFriends from './components/ShowFriends'
import Party from './components/Party'
import { AllergiesList } from './components/FriendInfoContext'

import { useState } from 'react'

import './App.css'

function App() {
  const [allergyInfo, setAllergyInfo] = useState([])

  return (
    <AllergiesList.Provider
      value={{ allergyInfo, setAllergyInfo }}
    >
      <main>
        <AddYourFriend />
      </main>
    </AllergiesList.Provider>
  )
}

export default App
