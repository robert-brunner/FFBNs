const apiUrl = "https://localhost:5001";


export const addSwipe = (singleSwipe) => { //http Swipe request
    return fetch(`${apiUrl}/api/PotentialPlaymate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleSwipe),
    });
  };