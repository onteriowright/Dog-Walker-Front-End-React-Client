import React, { useContext, useState, useEffect, useRef } from "react";
import { DogContext } from "./DogProvider";

export default props => {
  const { addDog, dogs, updateDog } = useContext(DogContext);
  const [dog, setDog] = useState({});

  const dogName = useRef(null);
  const breed = useRef(null);
  const ownerId = useRef(null);
  const notes = useRef(null);

  const editMode = props.match.params.hasOwnProperty("dogId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newDog = Object.assign({}, dog);
    newDog[event.target.name] = event.target.value;
    setDog(newDog);
  };

  const setDefaults = () => {
    if (editMode) {
      const dogId = parseInt(props.match.params.dogId);
      const selectedDog = dogs.find(d => d.id === dogId) || {};
      setDog(selectedDog);
    }
  };

  useEffect(() => {
    setDefaults();
    // eslint-disable-next-line
  }, [dogs]);

  const constructNewDog = () => {
    if (editMode) {
      updateDog({
        id: dog.id,
        name: dogName.current.value,
        ownerId: parseInt(ownerId.current.value),
        breed: breed.current.value,
        notes: notes.current.value
      }).then(() => props.history.push("/dogs"));
    } else {
      addDog({
        name: dog.name,
        ownerId: parseInt(dog.ownerId),
        breed: dog.breed,
        notes: dog.notes
      }).then(() => props.history.push("/dogs"));
    }
  };

  return (
    <form className="dogForm">
      <h2 className="dogForm__title">{editMode ? "Update Dog" : "Add New Dog"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            ref={dogName}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Name"
            defaultValue={dog.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Breed: </label>
          <input
            type="text"
            name="breed"
            ref={breed}
            required
            className="form-control"
            proptype="varchar"
            placeholder="Breed"
            defaultValue={dog.breed}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="ownerId">Owner Id: </label>
          <input
            name="ownerId"
            ref={ownerId}
            required
            className="form-control"
            proptype="int"
            placeholder="Owner Id"
            defaultValue={dog.ownerId}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="phone">Notes: </label>
          <textarea
            name="notes"
            ref={notes}
            required
            className="form-control"
            proptype="varchar"
            placeholder="Notes"
            defaultValue={dog.notes}
            onChange={handleControlledInputChange}
          ></textarea>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          constructNewDog();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Save New Dog"}
      </button>
      <button onClick={() => props.history.push("/dogs")}>Previous</button>
    </form>
  );
};
