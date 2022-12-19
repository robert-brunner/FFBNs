import { Image } from "cloudinary-react";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getImagesByUserId}  from "./UserProfilePictures";



export const CurrentUserPawfile = () => {
  const [userPawFiles, setUserPawfiles] = useState();

  // Retrieve the logged in user's details from local storage
  let localUserObject = localStorage.getItem("userProfile")
  const currentUserObject = JSON.parse(localUserObject)
  const CurrentUserId = currentUserObject.id;
  const apiUrl = "https://localhost:5001";
  const [publicId, setPublicId] = useState("");
  
  useEffect(()=>{
    let localUserObject = localStorage.getItem("userProfile")
    const currentUserObject = JSON.parse(localUserObject)
    const CurrentUserId = currentUserObject.id;
    getImagesByUserId(CurrentUserId)
    .then(setUserPawfiles)
}, []);

// const PostDetails = () => {
//   const [post, setPost] = useState();
//   const { id } = useParams();

//   useEffect(() => {
//     getPost(id).then(setPost);
//   }, []);

if (!userPawFiles) {
  return null;
}

console.log(userPawFiles)
  return(
      <div className="m-5">
      <Table>
        
        <thead>
          <tr>
            <th>{currentUserObject.displayName}</th>
            <th>{currentUserObject.interests}</th>
            <th>{currentUserObject.email}</th> 
          </tr>
        </thead>

        
      </Table>
      {
        userPawFiles.map((pawfileObject) => {
          return <img className="PawFileImg" src={pawfileObject.imageUrl} />
        })
      }
    

    </div>
  );
}

{/* {
userPawFiles.map(pawfileObject => {
  return <img src={pawfileObject.imgUrl} />
})
} */}



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