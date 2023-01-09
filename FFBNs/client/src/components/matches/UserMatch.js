import React, { useEffect, useState } from "react";
import { Table, Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Navigate, useParams } from "react-router-dom";
import { getALLMatches } from "../../managers/MatchManager";
// import { getCurrentUserMatches } from "../../managers/UserProfileManager";
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
    
    <Card className="MatchCards"
  body
  outline
  style={{
    width: '18rem'
  }}
>
  {/* <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  /> */}
  <CardBody>
    <CardTitle tag="h5">
    You've Got Friends!
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Why Not Send Them A Message?
    </CardSubtitle>
    <CardText className="MtchTxt">
    {matches.map((match) => (
                <MatchItem key={match.id} user={match} setMatch = {setMatch} />  //using key and prop
              ))}
    </CardText>
    <Button className="MsgBtn">
      Messages
    </Button>
  </CardBody>
</Card>
        </>
      );
}


//cant display matches- MatchManager.js:5          GET https://localhost:5001/UserProfile/GetAll 404