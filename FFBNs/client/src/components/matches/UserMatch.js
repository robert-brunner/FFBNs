import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { Navigate, useParams } from "react-router-dom";
import { getALLMatches } from "../../managers/MatchManager";
import { MatchItem } from "./MatchItem";
import { getImagesByUserId } from "../users/UserProfilePictures";





export const Match = () => {

    const [matches, setMatch] = useState([]);
    const [userPawFiles, setUserPawfiles] = useState();

    const getMatches = () => {
        getALLMatches()
        .then(allMatch => { setMatch(allMatch)});
    };


    useEffect(() =>{
        getMatches();
        getImagesByUserId(getMatches)
        .then(setUserPawfiles)
    }, []);

    if (!matches) {
      return null;
    }
    return (<>
    
        <h2 className="welcome">Matches</h2>
        <Table>
        {/* <th>{matches.displayName}</th> */}
          <form className="row g-3" >
          </form>
        <div className="container">
          <div className="row justify-content-center">
            <div className="cards-column">
              {matches.map((match) => (
                <MatchItem key={match.id} user={match} setMatch = {setMatch} />  //using key and prop
              ))}
            </div>
            
          </div>
        </div>
        
        </Table>
        </>
      );
}


//cant display matches- MatchManager.js:5          GET https://localhost:5001/UserProfile/GetAll 404