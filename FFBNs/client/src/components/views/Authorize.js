import React from "react"
import { Route, Routes, Navigate } from "react-router-dom";
import {Login} from '../auth/Login';
import Register from '../auth/Register'


export const  Authorize = ({ setIsLoggedIn, localUserObject }) => {

   return (
      <Routes>
         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  />} />
         <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
         <Route path="*" element={<Navigate to="/login" localUserObject={localUserObject} />} />
      </Routes>
   );

}