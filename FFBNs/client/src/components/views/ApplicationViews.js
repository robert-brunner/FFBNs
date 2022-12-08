import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import  {Login}  from "../auth/Login";
import Register from "../auth/Register";


export default function ApplicationViews(){
    return(
        <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} />             */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        {/* <Route path="/Login" element={<Login/>} />
        <Route path= "/Register" element={<Register/>} />         */}
        
        

        </Routes>
    )
}