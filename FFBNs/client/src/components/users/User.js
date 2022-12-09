import React, { useEffect, useState } from "react";
import { getRandomUser } from "../../managers/UserProfileManager";
import { Table } from "reactstrap";
import { UserProfileItem } from "./UserProfileItem";


export default function UserProfile () {
    [userPawFiles, setUserPawfiles] = useState([]);

    const getDogProfile = () => {
        getRandomUser()
        .then(allUsers => setUserPawfiles(allUsers))
    }
    useEffect(() =>{
        getDogProfile();
    }, []);

    return(
    <div className="m-5">
    <Table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Display Name</th>

          
        </tr>
      </thead>
      <tbody>
          {userPawFiles.map((user) => (
            <UserProfileItem key={user.id} user={user} setUserPawfile={setUserPawfiles} />
          ))}
      </tbody>
    </Table>
    </div>
  );
}