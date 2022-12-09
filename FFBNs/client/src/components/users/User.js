import React, { useEffect, useState } from "react";
import { getRandomUser } from "../../managers/UserProfileManager";
import { Table } from "reactstrap";
import { UserProfileItem } from "./UserProfileItem";


export const UserProfile = () => {
   const [userPawFiles, setUserPawfiles] = useState({});

    const getDogProfile = () => {
        getRandomUser()
        .then(allUsers => {
          setUserPawfiles(allUsers)})
    }
    useEffect(() =>{
        getDogProfile();
    }, []);

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
      </tbody>
    </Table>
    </div>
  );
}

// "id": 1,
// "displayName": "Rufus",
// "email": "rufus@throwAbone.com",
// "pawFilePic": null,
// "interests": "Fetch"