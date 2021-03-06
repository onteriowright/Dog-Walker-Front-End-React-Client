import React, { useContext } from "react";
import { OwnerContext } from "./OwnerProvider";

export default ({ owner, props }) => {
  const { deleteOwner } = useContext(OwnerContext);

  return (
    <>
      <section className="ownerCard">
        <div className="ownerInfo">Name: {owner.name}</div>
        <div className="ownerInfo">Address: {owner.address}</div>
        <div className="ownerInfo">City: {owner.neighborhood.name}</div>
        <div className="ownerInfo">Phone: {owner.phone}</div>

        <section className="ownerBtn">
          <button className="ownerIndividualBtn" onClick={() => props.history.push(`/owners/edit/${owner.id}`)}>
            Edit
          </button>
          <button
            className="ownerIndividualBtn"
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                deleteOwner(owner).then(() => props.history.push("/owners"));
              }
            }}
          >
            Delete
          </button>
        </section>
      </section>
    </>
  );
};
