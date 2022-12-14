// import React, { useEffect, useState } from "react";
// import { getCurrentUser, getUserById } from "../../managers/UserProfileManager"
// import { Table, Button, FormGroup, Label, Input, Form, } from "reactstrap";



// export const CurrentUserPawfile = () => {


//     const localUserObject = localStorage.getItem("userProfile")
//     const CurrentUserObject = JSON.parse(localUserObject)
//     const CurrentUserId = CurrentUserObject.id;

//     const [userPawfile, setUserPawfile] = useState({
//         id:0,
//         DisplayName: "",
//         Email: "",
//         Avatar: undefined,
//         Interests: undefined
//         });

//     const getUserProfile = () =>{
//     CurrentDog(CurrentUserId)
//     .then(allUsers => setUserPawfile(allUsers))
//         }

//     useEffect(() => {
//         getUserProfile();
//     }, []); 
    
//   return (
//       <div className="m-5">
//     <Table>
//       <thead>
//         <tr>
//           <th>DisplayName</th>
//           <Label for="DisplayName" value={userPawfile.displayName}>PawFileName</Label>
          
//         </tr>
//       </thead>
//       <tbody>
        
//       </tbody>
//     </Table>
//     </div>
//   );
// }


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