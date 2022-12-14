import React, { useEffect, useState } from "react";
import { getRandomUser, Like} from "../../managers/UserProfileManager";
import { Table, Button } from "reactstrap";
import { UserProfileItem } from "./UserProfileItem";
import { addSwipe } from "../../managers/SwipeManager";
import { Navigate } from "react-router-dom";


export const PotentialPlaymate = () => {
   const [userPawFiles, setUserPawfiles] = useState({});

    const localUserObject = localStorage.getItem("userProfile")
    console.log(localUserObject)
    const CurrentUserObject = JSON.parse(localUserObject)
    const CurrentUserId = CurrentUserObject.id;
   
    const getDogProfile = () => {
        getRandomUser()
        .then(allUsers => {
          setUserPawfiles(allUsers)})
    }
    useEffect(() =>{
        getDogProfile();
    }, []);

    const handleSaveNewSwipe = (event) => {
      event.preventDefault()
      const LikeToSendToAPI = {
          DogId: CurrentUserId,
          OtherDogId: userPawFiles.id,  
          Like: (event.target.value === 'true')
      }
      console.log(LikeToSendToAPI)
  //     return (
  //         addSwipe(LikeToSendToAPI)  // navigation correct?
  //          .then((p)=> {
  //             Navigate("/");
  //          })
  //     )
  }

    return(
    <div className="m-5">
    <Table>
      <thead>
        <tr>
          <th>{userPawFiles.displayName}</th>
          <th>{userPawFiles.interests}</th>
          <th>{userPawFiles.pawFilePic}</th>
        </tr>
      </thead>
      <tbody>
          {
            <UserProfileItem key={userPawFiles.id} user={userPawFiles} setUserPawfile={setUserPawfiles} />
          }

      <Button color="success" value={true} onClick={(e) => { 
        handleSaveNewSwipe(e)
          console.log("1")}} >Like</Button>
      <Button color="danger" value={false} onClick={(e) => { handleSaveNewSwipe(e)
          console.log("2")}} >Dislike</Button>
      
      </tbody>
    </Table>
    </div>
  );
}

