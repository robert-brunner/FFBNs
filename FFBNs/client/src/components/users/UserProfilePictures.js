import React, { useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";

function UserProfilePictures({ register, userObject, sendPublicIdToSQL, setPublicId, publicId }) { // Accept the register and userObject values as arguments
  const [imageSelected, setImageSelected] = useState("");
  

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "cPawFilePics");
    Axios.post("http://api.cloudinary.com/v1_1/dpwgvs3m0/image/upload", formData)
      .then((response) => {
        const uploadedPublicId = response.data.public_id;
        setPublicId(uploadedPublicId);
        console.log(response)
        console.log(response.data.public_id)
        // Use the register and userObject values that were passed as arguments
        register({ ...userObject, profilePicture: uploadedPublicId });
        sendPublicIdToSQL(uploadedPublicId);
      }); 
  };


  
//alright- assuming this is correct- i have publicId as the value- so now i need to send that value to sql server and retrieve it with the UserPawFile in place of the null value- as the picture
  return (
    <>
      <div>
        <input
          type="file"
          onChange={(event) => {
            setImageSelected(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload_Image</button>
        <Image style={{ width: 200 }} cloudName="cPawFilePics" publicId={`https://res.cloudinary.com/dpwgvs3m0/image/upload/v1671226865/${publicId}`} />
      </div>
    </>
  );
}

export default UserProfilePictures;
// export function sendPublicIdToSQL(uploadedPublicId) {
//   // function implementation goes here
// }






//    const uploadImageIdSQL = () => {}
        
// cPawFilePics



// const apiURL = "https://localhost:5001";

    
//     const publicId = response.data.public_id = () => {
//         return fetch (`${apiUrl}/api/UserProfile`, {
//             method: "POST",
//             headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userObject),
//   })
//       .then((response) => response.json())
//       .then((savedUserProfile) => {
//           localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
//       });
//   };
// //if the above command doesn't work- i could try calling importing UserProfilePictures on UserProfileManager- and trying my fetch there which makes more sense anyways in the grand scheme of things. 
        