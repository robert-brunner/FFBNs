const apiUrl = "https://localhost:5001";

//http request to get matches where DogId and OtherDogId have both liked eachother.
export const getALLMatches = () => {
    return fetch(`${apiUrl}/UserProfile/GetAll`) 
      .then((res) => res.json())
  };