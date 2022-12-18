import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import  {Login}  from "../auth/Login";
import Register from "../auth/Register";
// import Deck from '../swipes/Deck';
import {PotentialPlaymate} from '../users/PotentialPlaymate'
import { UserPawfileEdit } from "../users/UserPawfileEdit"
import { CurrentUserPawfile } from "../users/CurrentUserPawFile"
import { Match } from "../matches/UserMatch"




export default function ApplicationViews(localUserObject){
    return(
        <Routes>
            {/* <Route path="/" element={<Deck/>} /> */}
            <Route path="/UserMatch" element={<Match localUserObject={localUserObject}/>} />
            <Route path="/PotentialPlaymate" element={<PotentialPlaymate localUserObject={localUserObject}/>} />
            <Route path="/userEdit" element={<UserPawfileEdit localUserObject={localUserObject}/>} />
            <Route path="/CurrentUserPawfile" element={<CurrentUserPawfile localUserObject={localUserObject}/>} />
            
        </Routes>
    )
}































{/* <Route path= "categories" element={<RandomUser/>}             
 <Route path="*" element={<Navigate to="/" />} /> 
 <Route path="/Login" element={<Login/>} />
<Route path= "/Register" element={<Register/>} />          */}