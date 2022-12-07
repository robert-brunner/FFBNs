
  const apiUrl = "https://localhost:5001";

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

  export const logout = () => {
        localStorage.clear()
  };

  export const register = (userObject) => {
      return  fetch(`${apiUrl}/api/userprofile`, {
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
  
  export const getRandomUser = () => {
      return fetch(`${apiUrl}/api/userProfile`)//http GET request or  `/api/userProfile`
      .then((res) => res.json())
  };

  
  //   export const getCurrentUser = () => {
  //     const currentUser = localStorage.getItem("userProfile");
  
  //     return JSON.parse(currentUser);  //JSON.parse()  the local user object coming back from API to use properties of that object
  //   };
