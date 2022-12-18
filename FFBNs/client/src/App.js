import React, { useState }  from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/nav/Header";
import ApplicationViews from "./components/views/ApplicationViews";
import { useEffect } from 'react';
import {Authorize} from './components/views/Authorize';
import Deck from './components/swipes/Deck';

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  const [localUserObject, setLocalUserObject] = useState();
  
  
     //fixed bug...changed initial state to false
  useEffect(()=>{  
    if(!localStorage.getItem("userProfile")){
      setIsLoggedIn(false)
      
    }
  },[isLoggedIn])

  useEffect(()=>{
    setLocalUserObject(localStorage.getItem("userProfile"))

  }, [isLoggedIn]
  )

  return (
    <>
    <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        { isLoggedIn ?
        <ApplicationViews  localUserObject={localUserObject}/>        
        :
        <Authorize setIsLoggedIn={setIsLoggedIn}  localUserObject={localUserObject}/>
        }
    </Router>
    </>
  );
}

export default App;

//element = { different version of home page}

// / home - same but with carousel