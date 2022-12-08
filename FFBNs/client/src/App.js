import React, { useState }  from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/nav/Header";
import ApplicationViews from "./components/views/ApplicationViews";
import { useEffect } from 'react';
import {Authorize} from './components/views/Authorize';
import Deck from './components/swipes/Deck';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);


  
     //fixed bug...changed initial state to false
  useEffect(()=>{  
    if(!localStorage.getItem("userProfile")){
      setIsLoggedIn(false)
      
    }
  },[isLoggedIn])

  return (
    <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        { isLoggedIn ?
        <ApplicationViews  />
        :
        <Authorize setIsLoggedIn={setIsLoggedIn}/>
        }
        <Deck/>
    </Router>
  );
}

export default App;

//element = { different version of home page}

// / home - same but with carousel