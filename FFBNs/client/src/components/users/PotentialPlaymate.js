import React, { useEffect, useState } from "react";
import { getRandomUser, Like} from "../../managers/UserProfileManager";
import { Table, Button } from "reactstrap";
import { UserProfileItem } from "./UserProfileItem";
import { addSwipe, Undo, UndoLike } from "../../managers/SwipeManager";
import { Navigate } from "react-router-dom";
import { Image } from "cloudinary-react";


export const PotentialPlaymate = () => {
   const [userPawFiles, setUserPawfiles] = useState({});

    const [previousDog, setPreviousDog] = useState({});
    

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
      setPreviousDog(userPawFiles.id)
      const LikeToSendToAPI = {
        DogId: CurrentUserId,
        OtherDogId: userPawFiles.id,  
        Like: (event.target.value === 'true')
      }
      
      console.log(LikeToSendToAPI);
      // console.log(DislikeToSendToAPI);
      return (
        addSwipe(LikeToSendToAPI)  // navigation correct?
        .then((p)=> {
          getDogProfile()
        })
        )
      }
      //Dislike
      const handleSaveNewDisSwipe = (event) => {
        event.preventDefault()
        const currentId = userPawFiles.id
        setPreviousDog(currentId)
        const DisLikeToSendToAPI = {
            DogId: CurrentUserId,
            OtherDogId: userPawFiles.id,  
            Like: (false)
        }
      return (
        addSwipe(DisLikeToSendToAPI)  // navigation correct?
        .then((p)=> {
          getDogProfile()
        })
        )
      }
  // assuming I have this right- this should find the previous dog value and delete the like that was added to it from the database in the Swipes Table. 
  //Delete Swipe is called in the button, Undo Like is the fetch call; previousDog.id should be pulling the id of the former dog that was just barely swiped on whether its like or dislike. 
      const DeleteSwipe = () => {
        UndoLike(previousDog)
        .then(() =>{
          getDogProfile()
          console.log(previousDog)
        })
      }
      
    return(
    <div className="m-5">
    <Table>
      <thead>
        <tr>
          <th>{userPawFiles.displayName}</th>
          <th>{userPawFiles.interests}</th>
          <img style= {{width: 200}}src= {userPawFiles.pawFilePic} />
        </tr>
      </thead>
      <tbody>
          {
            <UserProfileItem key={userPawFiles.id} user={userPawFiles} setUserPawfile={setUserPawfiles} />
          }

      <Button color="warning" value={false} onClick={(e) => { DeleteSwipe(e)
        console.log("3")}} >UnFetch</Button>
      <Button color="danger" value={false} onClick={(e) => { handleSaveNewDisSwipe(e)
        console.log("2")}} >Scaredey-Cat</Button>
      <Button color="success" value={true} onClick={(e) => { 
        handleSaveNewSwipe(e)
          console.log("1")
          }} >Go-Fetch!</Button>
      
      </tbody>
    </Table>
    </div>
  );
}


        // //undo- 3rd button - instead of post request-eventlistener -send delete request
        // const handleSaveNewUnSwipe = () => {
        //   UndoSwipe()
        //   const UndoSwipe = {
        //       DogId: CurrentUserId,
        //       OtherDogId: userPawFiles.id,  
        //       Like: ()
        //   }
        // return (
        //   UndoLike(UndoSwipe)  // navigation correct?
        //   .then((p)=> {
        //     getDogProfile()
        //   })
        //   )
        // }