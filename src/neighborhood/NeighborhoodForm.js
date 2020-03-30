import React, { useContext, useState, useEffect, useRef } from "react";
import { NeighborhoodContext } from "./NeighborhoodProvider";

export default props => {
  const { addNeighborhood, neighborhoods, updateNeighborhood } = useContext(NeighborhoodContext);
  const [neighborhood, setNeighborhood] = useState({});

  const neighborhoodName = useRef(null);

  const editMode = props.match.params.hasOwnProperty("neighborhoodId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
    */
    const newNeighborhood = Object.assign({}, neighborhood);
    newNeighborhood[event.target.name] = event.target.value;
    setNeighborhood(newNeighborhood);
  };

  const setDefaults = () => {
    if (editMode) {
      const neighborhoodId = parseInt(props.match.params.neighborhoodId);
      const selectedNeighborhood = neighborhoods.find(n => n.id === neighborhoodId) || {};
      setNeighborhood(selectedNeighborhood);
    }
  };

  useEffect(() => {
    setDefaults();
    // eslint-disable-next-line
  }, [neighborhoods]);

  const constructNewNeighborhood = () => {
    if (editMode) {
      updateNeighborhood({
        id: neighborhood.id,
        name: neighborhoodName.current.value
      }).then(() => props.history.push("/neighborhoods"));
    } else {
      addNeighborhood({
        name: neighborhood.name
      }).then(() => props.history.push("/neighborhoods"));
    }
  };

  return (
    <>
      <section className="neighborhoodForm--">
        <form className="neighborhoodForm">
          <p className="neighborhoodForm__title">{editMode ? "Update Neighborhood" : "Add Neighborhood"}</p>
          <fieldset className="neighborhoodFieldSet">
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                ref={neighborhoodName}
                required
                autoFocus
                className="form-control"
                proptype="varchar"
                placeholder="Name"
                defaultValue={neighborhood.name}
                onChange={handleControlledInputChange}
              />
            </div>
          </fieldset>
          <section className="neighborhoodBtn">
            <button
              className="btn btn-primary neighborhoodFormSubmitBtn"
              type="submit"
              onClick={e => {
                e.preventDefault();
                constructNewNeighborhood();
              }}
            >
              {editMode ? "Save Updates" : "Save New Neighborhood"}
            </button>
            <button className="neighborhoodFormSubmitBtn" onClick={() => props.history.push("/neighborhoods")}>
              Previous
            </button>
          </section>
        </form>
      </section>
    </>
  );
};
