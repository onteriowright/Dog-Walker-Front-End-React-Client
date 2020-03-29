import React, { useContext, useState, useEffect, useRef } from "react";
import { OwnerContext } from "./OwnerProvider";

export default props => {
  const { addOwner, owners, updateOwner } = useContext(OwnerContext);
  const [owner, setOwner] = useState({});

  const ownerName = useRef(null);
  const address = useRef(null);
  const neighborhoodId = useRef(null);
  const phone = useRef(null);

  const editMode = props.match.params.hasOwnProperty("ownerId");

  const handleControlledInputChange = event => {
    /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    const newOwner = Object.assign({}, owner);
    newOwner[event.target.name] = event.target.value;
    setOwner(newOwner);
  };

  const setDefaults = () => {
    if (editMode) {
      const ownerId = parseInt(props.match.params.ownerId);
      const selectedOwner = owners.find(o => o.id === ownerId) || {};
      setOwner(selectedOwner);
    }
  };

  useEffect(() => {
    setDefaults();
    // eslint-disable-next-line
  }, [owners]);

  const constructNewOwner = () => {
    if (editMode) {
      updateOwner({
        id: owner.id,
        name: ownerName.current.value,
        address: address.current.value,
        neighborhoodId: parseInt(neighborhoodId.current.value),
        phone: phone.current.value
      }).then(() => props.history.push("/owners"));
    } else {
      addOwner({
        name: owner.name,
        address: owner.address,
        neighborhoodId: parseInt(owner.neighborhoodId),
        phone: owner.phone
      }).then(() => props.history.push("/owners"));
    }
  };

  return (
    <form className="ownerForm">
      <h2 className="ownerForm__title">{editMode ? "Update Owner" : "Add New Owner"}</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            ref={ownerName}
            required
            autoFocus
            className="form-control"
            proptype="varchar"
            placeholder="Name"
            defaultValue={owner.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            ref={address}
            required
            className="form-control"
            proptype="varchar"
            placeholder="Address"
            defaultValue={owner.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="neighborhoodId">Neighborhood Id: </label>
          <input
            name="neighborhoodId"
            ref={neighborhoodId}
            required
            className="form-control"
            proptype="varchar"
            placeholder="Neighborhood Id"
            defaultValue={owner.neighborhoodId}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="phone">Phone: </label>
          <input
            name="phone"
            ref={phone}
            required
            className="form-control"
            proptype="varchar"
            placeholder="Phone"
            defaultValue={owner.phone}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          constructNewOwner();
        }}
        className="btn btn-primary"
      >
        {editMode ? "Save Updates" : "Add New Owner"}
      </button>
      <button onClick={() => props.history.push("/owners")}>Previous</button>
    </form>
  );
};