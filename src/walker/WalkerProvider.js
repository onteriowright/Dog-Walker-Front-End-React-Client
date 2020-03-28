import React, { useState, useEffect } from "react";

export const WalkerContext = React.createContext();

export const WalkerProvider = props => {
  const [walkers, setWalkers] = useState([]);

  const getWalkers = () => {
    return fetch("http://localhost:5000/api/walker")
      .then(res => res.json())
      .then(setWalkers);
  };

  const addWalker = walker => {
    return fetch("http://localhost:5000/api/walker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(walker)
    }).then(getWalkers);
  };

  const updateWalker = walkerObject => {
    return fetch(`http://localhost:5000/api/walker/${walkerObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(walkerObject)
    }).then(getWalkers);
  };

  const deleteWalker = walker => {
    return fetch(`http://localhost:5000/api/walker/${walker.id}`, {
      method: "DELETE"
    }).then(getWalkers);
  };

  useEffect(() => {
    getWalkers();
  }, []);

  return (
    <WalkerContext.Provider
      value={{
        walkers,
        addWalker,
        updateWalker,
        deleteWalker
      }}
    >
      {props.children}
    </WalkerContext.Provider>
  );
};
