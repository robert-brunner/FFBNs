import UserProfilePictures from "../components/users/UserProfilePictures";
import Axios from "axios";

const apiUrl = "https://localhost:5001";
//checks the database for a user matching the current email. Logs in if found. 
  export const login = (userObject) => {
    return fetch(`${apiUrl}/api/UserProfile/GetByEmail?email=${userObject.Email}`)
    .then((r) => r.json())
      .then((userProfile) => {
        if(userProfile.id){
          localStorage.setItem("userProfile", JSON.stringify(userProfile));
          return userProfile
        }
        else{
          return undefined
        }
      });
  };
// Logout
  export const logout = () => {
        localStorage.clear()
  };

  //POST a new user to SQL server
  export const register = (userObject) => {
      return  fetch(`${apiUrl}/api/UserProfile`, {
          method: "POST",
          headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
})
    .then((response) => response.json())
    .then((savedUserProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
    });
};
  

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
//----------------------------------------
// //gets the current userProfile information
// export const getCurrentUser = () => {
//   const currentUser = localStorage.getItem("UserProfile");

//   return JSON.parse(currentUser);  //JSON.parse()  the local user object coming back from API to use properties of that object
// };


// I need to affix publicID from UploadProfilePictures to the update UserPawFile so I can store the hash data from my picture in the database- this is the method that I think I need to use.  

// Function that sends a POST request with the public id string to the server
// function sendPublicIdToSQL(publicId, userId) {
//   Axios.post(`/server/endpoint/${userId}`, {
//     publicId: publicId
//   })
//   .then(response => {
//     // Do something with the response
//   })
//   .catch(error => {
//     // Handle the error
//   });
// }

// export const UpdateDog = (user) => {
//   // Call the sendPublicIdToSQL function and pass the public id and user id as arguments
//   sendPublicIdToSQL(user.profilePicture, user.id);

//   return fetch(`${apiUrl}/api/userProfile/${user.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   }); 
// }


export const UpdateDog = (user) => {
   return fetch(`${apiUrl}/api/userProfile/${user.id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(user),
   }) 
       
 }

 //ideally Like should put a Like on the User in SQL-C#
 //Onclick should sendLike to the below method which in turn should add a value of "like" to Dog in SQL; 
 // if both Dogs have a key of like than a match should be generated
 export const Like = (user) => {
   return fetch(`${apiUrl}/api/userProfile/${user.id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(user),
   }) 
       
 }



//uses the Get UserProfile Fetch Command that returns a randomized sql query
export const getRandomUser = () => {
    return fetch(`${apiUrl}/api/UserProfile`)//http GET request or  `/api/userProfile`
    .then((res) => res.json())
};
export const GetUllPawFiles = () => {
    return fetch(`${apiUrl}/api/UserProfile/GetAll`)//http GET request or  `/api/userProfile`
    .then((res) => res.json())
};


export const getUserById = (userId) => {
  return fetch(`${apiUrl}/api/UserProfile/${userId}`)//http GET request or  `/api/userProfile`
  .then((res) => res.json())
};

export const getCurrentUser = () => {
  const currentUser = localStorage.getItem('userProfile');
  const CurrentUserObject = JSON.parse(localStorage.getItem('userProfile').id)
  return CurrentUserObject
};




/* 

THE PROBLEM-
You have no way of identifying the current logged in user.  You are confusing yourself trying to sort thru all this hubub-  You need to pull the user from LOCAL STORAGE- How do you do that? 


You could use this local storage command on line 68 but the problem is the the link references a method that gets a random user instead of the current one.   
You need to either go change the names so you aren't confused or- think of another way to do this.  


My code is a mess- what do you do when you create a new method
-- Back End --

1.) ...Controller 
    [Http] NewCommand
    public IActionResult NewCommand(x,y) 

2.) ...Repository 
    public NewCommand(x,y)

3.) I...Repository
    NewCommand(x,y)


---Front End---

1.) ...Manager ---fetch call
2.) Components>Users>ViewList
3.) Application Views

*/
