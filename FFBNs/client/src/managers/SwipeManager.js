const apiUrl = "https://localhost:5001";



//http Swipe request
export const addSwipe = (singleSwipe) => { 
    return fetch(`${apiUrl}/api/Swipe/${singleSwipe.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleSwipe),
    });
  };