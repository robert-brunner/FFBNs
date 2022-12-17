import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { UserProfileItem } from "./UserProfileItem";
// import UserProfilePictures from "./UserProfilePictures";

export const CurrentUserPawfile = () => {
  const [userPawFiles, setUserPawfiles] = useState({});

  // Retrieve the logged in user's details from local storage
  const localUserObject = localStorage.getItem("userProfile")
  const currentUserObject = JSON.parse(localUserObject)
  
  return(
      <div className="m-5">
      <Table>
        <thead>
          <tr>
            <th>{currentUserObject.displayName}</th>
            <th>{currentUserObject.interests}</th>
            <th>{currentUserObject.pawFilePic}</th>
            {/* <th><UserProfilePictures/></th> */}
            <th>{currentUserObject.email}</th>
          </tr>
        </thead>
        <tbody>
            {
                <UserProfileItem key={currentUserObject.id} user={currentUserObject} setUserPawfile={setUserPawfiles} />
            }
        </tbody>
      </Table>
    </div>
  );
}




// // 1.) ...Controller 
// //     [Http] NewCommand
// //     public IActionResult NewCommand(x,y) 

// // 2.) ...Repository 
// //     public NewCommand(x,y)

// // 3.) I...Repository
// //     NewCommand(x,y)


// // ---Front End---

// // 1.) ...Manager ---fetch call
// // 2.) Components>Users>ViewList
// // 3.) Application Views