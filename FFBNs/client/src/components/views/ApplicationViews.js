import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {UserProfiles} from "../users/UserProfiles";
import {UserProfileDetails} from "../users/UserProfileDetails";

export default function ApplicationViews(){
    return(
        <Route path="*" element={<Navigate to="/" />} />
    )
}