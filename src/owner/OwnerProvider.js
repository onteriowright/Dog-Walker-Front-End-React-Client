import React, { useState, useEffect } from "react";

export const OwnerContext = React.createContext();

export const OwnerProvider = props => {
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    return fetch("http://localhost:5000/api/owner")
      .then(res => res.json())
      .then(setOwners);
  };

  const addOwner = owner => {
    return fetch("http://localhost:5000/api/owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(owner)
    }).then(getOwners);
  };

  const updateOwner = ownerObject => {
    return fetch(`http://localhost:5000/api/owner/${ownerObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ownerObject)
    }).then(getOwners);
  };

  const deleteOwner = owner => {
    return fetch(`http://localhost:5000/api/owner/${owner.id}`, {
      method: "DELETE"
    }).then(getOwners);
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <OwnerContext.Provider
      value={{
        owners,
        addOwner,
        updateOwner,
        deleteOwner
      }}
    >
      {props.children}
    </OwnerContext.Provider>
  );
};
