import React, { useEffect, useState } from "react";
import { getCurrentUser, getUserById } from "../../managers/UserProfileManager"
import { UserProfileItem } from "./UserProfileItem";
import { Table } from "reactstrap";



export const CurrentUserPawfile = () => {
    const [userProfiles, setUserProfiles] = useState([]);
    const getCurrentDog = () =>{
        getCurrentUser().then(allUsers => setUserProfiles(allUsers))
    }
    
    useEffect(() => {
        setUserProfiles(getCurrentDog);
    }, []); 
    
  return (
      <div className="m-5">
    <Table>
      <thead>
        <tr>
          <th>DisplayName</th>
          <th>Email</th>
          <th>User Type</th>
          <th>Activate/Deactivate</th>
          
        </tr>
      </thead>
      <tbody>
          {userProfiles.map((dog) => (
              <UserProfileItem key={dog.id} dog={dog} setUserProfiles={setUserProfiles} />
              ))}
      </tbody>
    </Table>
    </div>
  );
}


// 1.) ...Controller 
//     [Http] NewCommand
//     public IActionResult NewCommand(x,y) 

// 2.) ...Repository 
//     public NewCommand(x,y)

// 3.) I...Repository
//     NewCommand(x,y)


// ---Front End---

// 1.) ...Manager ---fetch call
// 2.) Components>Users>ViewList
// 3.) Application Views