
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
  
//----------------------------------------
//gets the current userProfile information
export const getCurrentUser = () => {
  const currentUser = localStorage.getItem("userProfile");

  return JSON.parse(currentUser);  //JSON.parse()  the local user object coming back from API to use properties of that object
};

//uses the Get UserProfile Fetch Command that returns a randomized sql query
export const getRandomUser = () => {
    return fetch(`${apiUrl}/api/UserProfile`)//http GET request or  `/api/userProfile`
    .then((res) => res.json())
};
export const GetUllPawFiles = () => {
    return fetch(`${apiUrl}/api/UserProfile/GetAll`)//http GET request or  `/api/userProfile`
    .then((res) => res.json())
};


  // export const getAll = () => {
  //   return fetch(`${apiUrl}/Post`)
  //     .then((res) => res.json())
  // };