import React, { useContext } from "react";
import { OwnerContext } from "./OwnerProvider";

export default ({ owner, props }) => {
  const { deleteOwner } = useContext(OwnerContext);

  return (
    <>
      <div>Name: {owner.name}</div>
      <div>Address: {owner.address}</div>
      <div>City: {owner.neighborhood.name}</div>
      <div>Phone: {owner.phone}</div>
      <button onClick={() => props.history.push(`/owners/edit/${owner.id}`)}>Update</button>
      <button onClick={() => deleteOwner(owner).then(() => props.history.push("/owners"))}>Delete Owner</button>
    </>
  );
};
