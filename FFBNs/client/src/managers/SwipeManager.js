const apiUrl = "https://localhost:5001";


export const addSwipe = (singleSwipe) => { //http Swipe request
    return fetch(`${apiUrl}/api/PotentialPlaymate`, {// Potential playate needs to be set to the endpoint on api url. Current is WRONG
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleSwipe),
    });
  };