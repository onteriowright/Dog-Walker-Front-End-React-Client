import React, { useContext, useState, useEffect, useRef } from "react";
import { WalkerContext } from "./WalkerProvider";
import { NeighborhoodContext } from "../neighborhood/NeighborhoodProvider";

export default props => {
  const { addWalker, walkers, updateWalker } = useContext(WalkerContext);
  const { neighborhoods } = useContext(NeighborhoodContext);
  const [walker, setWalker] = useState({});

  const walkerName = useRef(null);
  const neighborhood = useRef(null);

  const editMode = props.match.params.hasOwnProperty("walkerId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
    */
    const newWalker = Object.assign({}, walker);
    newWalker[event.target.name] = event.target.value;
    setWalker(newWalker);
  };

  const setDefaults = () => {
    if (editMode) {
      const walkerId = parseInt(props.match.params.walkerId);
      const selectedWalker = walkers.find(w => w.id === walkerId) || {};
      setWalker(selectedWalker);
    }
  };

  useEffect(() => {
    setDefaults();
    // eslint-disable-next-line
  }, [walkers]);

  const constructNewWalker = () => {
    if (editMode) {
      updateWalker({
        id: walker.id,
        name: walkerName.current.value,
        neighborhoodId: parseInt(neighborhood.current.value)
      }).then(() => props.history.push("/walkers"));
    } else {
      addWalker({
        name: walker.name,
        neighborhoodId: parseInt(walker.neighborhoodId)
      }).then(() => props.history.push("/walkers"));
    }
  };

  return (
    <>
      <section className="walkerForm--">
        <form className="walkerForm">
          <p className="walkerForm__title">{editMode ? "Update Walker" : "Add New Walker"}</p>
          <fieldset className="walkerFieldSet">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                ref={walkerName}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Name"
                defaultValue={walker.name}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <fieldset className="walkerFieldSet">
            <div className="form-group">
              <label htmlFor="neighborhoodId">Neighborhood: </label>
              <select
                name="neighborhoodId"
                ref={neighborhood}
                className="form-control"
                proptype="int"
                value={neighborhood.ownerId}
                onChange={handleControlledInputChange}
              >
                <option value="0">Select a neighborhood</option>
                {neighborhoods.map(neighborhood => (
                  <option key={neighborhood.id} value={neighborhood.id}>
                    {neighborhood.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <section className="walkerBtn">
            <button
              className="btn btn-primary walkerFormSubmitBtn"
              type="submit"
              onClick={e => {
                e.preventDefault();
                constructNewWalker();
              }}
            >
              {editMode ? "Save Updates" : "Save New Walker"}
            </button>
            <button className="walkerFormSubmitBtn" onClick={() => props.history.push("/walkers")}>
              Previous
            </button>
          </section>
        </form>
      </section>
    </>
  );
};
