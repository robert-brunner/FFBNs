import React, {useEffect, useState} from "react";
import { GetUllPawFiles } from "../../managers/UserProfileManager";


export const getAllPawFiles = () => {
    const [userPawFiles, setUserPawfiles] = useState({});

    const lottaDogProfile = () => {
        GetUllPawFiles()
        .then(allUsers => {
          setUserPawfiles(allUsers)})
    }
    useEffect(() =>{
        lottaDogProfile();
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