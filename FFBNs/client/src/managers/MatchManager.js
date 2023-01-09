const apiUrl = "https://localhost:5001";

//http request to get matches where DogId and OtherDogId have both liked eachother.
// export const getALLMatches = () => {
//     return fetch(`${apiUrl}/api/UserProfile/GetAllMatches`) 
//       .then((res) => res.json())
//   };   -- Original--


/* 
1.) In your front end, modify the getAllMatches fetch call to get the logged in user and attach to the end of the fetch call, similar to the getById fetch call. The url should look something like url/api/users/getallmatches/${loggedInUser.id}  That syntax might not be exactly right but use it as a template!

2.) In your user controller, add a parameter to the GetAllMatches() function. So it should look more like: GetAllMatches(int id).
3.) Inside that controller method, pass along the id to the repository. so it should look more like: _userRep.getMatches(id)
4.) In your user repository, make sure you add the parameter up top to the GetMatches method. Then add a SQL parameter to your SQL query for swipe.DogId and swipe.OtherDogId. (Basically everywhere you see a WHERE [some foreign key] = 1 , substitute the 1 for an @Id
5.) Then add a SQL parameter definition below the query like you do in GetById
*/


// export const getALLMatches = () => {
//   const currentUser = localStorage.getItem('userProfile');
//   const CurrentUserUserObject = Json.Parse(localStorage.getItem('userProfile').id)
//     return fetch(`${apiUrl}/api/UserProfile/GetAllMatches`) 
//       .then((res) => res.json())
//   };

  export const getALLMatches = () => {
    let localUserObject = localStorage.getItem("userProfile")
  const CurrentUserObject = JSON.parse(localUserObject).id
    return fetch(`${apiUrl}/api/UserProfile/GetAllMatches${CurrentUserObject}`) 
      .then((res) => res.json())
  }; 

 