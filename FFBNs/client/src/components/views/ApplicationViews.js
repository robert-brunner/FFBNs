import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import  {Login}  from "../auth/Login";
import Register from "../auth/Register";
// import Deck from '../swipes/Deck';
import {PotentialPlaymate} from '../users/PotentialPlaymate'
import { UserPawfileEdit } from "../users/UserPawfileEdit";




export default function ApplicationViews(){
    return(
        <Routes>
            {/* <Route path="/" element={<Deck/>} /> */}
            <Route path="/PotentialPlaymate" element={<PotentialPlaymate/>} />
            <Route path="/userEdit" element={<UserPawfileEdit/>} />
            
        </Routes>
    )
}































{/* <Route path= "categories" element={<RandomUser/>}             
 <Route path="*" element={<Navigate to="/" />} /> 
 <Route path="/Login" element={<Login/>} />
<Route path= "/Register" element={<Register/>} />          */}