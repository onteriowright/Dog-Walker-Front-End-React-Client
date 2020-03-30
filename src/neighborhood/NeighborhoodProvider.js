import React, { useState, useEffect } from "react";

export const NeighborhoodContext = React.createContext();

export const NeighborhoodProvider = props => {
  const [neighborhoods, setNeighborhoods] = useState([]);

  const getNeighborhoods = () => {
    return fetch("http://localhost:5000/api/neighborhood")
      .then(res => res.json())
      .then(setNeighborhoods);
  };

  const addNeighborhood = neighborhood => {
    return fetch("http://localhost:5000/api/neighborhood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(neighborhood)
    }).then(getNeighborhoods);
  };

  const updateNeighborhood = neighborhoodObject => {
    return fetch(`http://localhost:5000/api/neighborhood/${neighborhoodObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(neighborhoodObject)
    }).then(getNeighborhoods);
  };

  const deleteNeighborhood = neighborhood => {
    return fetch(`http://localhost:5000/api/neighborhood/${neighborhood.id}`, {
      method: "DELETE"
    }).then(getNeighborhoods);
  };

  useEffect(() => {
    getNeighborhoods();
  }, []);

  return (
    <NeighborhoodContext.Provider
      value={{
        neighborhoods,
        addNeighborhood,
        updateNeighborhood,
        deleteNeighborhood
      }}
    >
      {props.children}
    </NeighborhoodContext.Provider>
  );
};
