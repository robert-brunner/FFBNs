import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { Navigate, useParams } from "react-router-dom";
import { getALLMatches } from "../../managers/MatchManager";
import { UserProfileItem } from "../users/UserProfileItem";




export const Match = () => {

    const [match, setMatch] = useState([]);

    const getMatches = () => {
        getALLMatches()
        .then(allMatch => { setMatch(allMatch)});
    };


    useEffect(() =>{
        getMatches();
    }, []);


    return (<>
    
        <h2 className="welcome">Matches</h2>
          <form className="row g-3" >
          </form>
        <div className="container">
          <div className="row justify-content-center">
            <div className="cards-column">
              {match.map((match) => (
                <UserProfileItem key={match.id} user={match} setMatc = {setMatch} />  //using key and prop
              ))}
            </div>
          </div>
        </div>
        </>
      );
}