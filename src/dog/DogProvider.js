import React, { useState, useEffect } from "react";

export const DogContext = React.createContext();

export const DogProvider = props => {
  const [dogs, setDogs] = useState([]);

  const getDogs = () => {
    return fetch("http://localhost:5000/api/dog")
      .then(res => res.json())
      .then(setDogs);
  };

  const addDog = dog => {
    return fetch("http://localhost:5000/api/dog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dog)
    }).then(getDogs);
  };

  const updateDog = dogObject => {
    return fetch(`http://localhost:5000/api/dog/${dogObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dogObject)
    }).then(getDogs);
  };

  const deleteDog = dog => {
    return fetch(`http://localhost:5000/api/dog/${dog.id}`, {
      method: "DELETE"
    }).then(getDogs);
  };

  useEffect(() => {
    getDogs();
  }, []);

  return (
    <DogContext.Provider
      value={{
        dogs,
        addDog,
        updateDog,
        deleteDog
      }}
    >
      {props.children}
    </DogContext.Provider>
  );
};
