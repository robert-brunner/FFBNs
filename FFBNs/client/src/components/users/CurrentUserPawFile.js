import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { UserProfileItem } from "./UserProfileItem";
import {UserProfilePictures , getImagesByUserId}  from "./UserProfilePictures";
import { Axios } from "axios";
import { Image } from "cloudinary-react";

// import UserProfilePictures from "./UserProfilePictures";
// import Axios from "axios";
// import { Image } from "cloudinary-react";

export const CurrentUserPawfile = (localUserObject) => {
  const [userPawFiles, setUserPawfiles] = useState({});

  // Retrieve the logged in user's details from local storage
  
  const currentUserObject = JSON.parse(localUserObject)
  // const CurrentUserId = currentUserObject.id;
  // const apiUrl = "https://localhost:5001";
  const [publicId, setPublicId] = useState("");
  




  return(
      <div className="m-5">
      <Table>
        <thead>
          <tr>
            <th>{currentUserObject.displayName}</th>
            <th>{currentUserObject.interests}</th>
            <th>{currentUserObject.pawFilePic}</th>
            {/* <Image style={{ width: 200 }} cloudName="cPawFilePics" publicId={`https://res.cloudinary.com/dpwgvs3m0/image/upload/v1671226865/${publicId}`} />
      </div> */}
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