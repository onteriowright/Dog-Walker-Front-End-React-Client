import React, { useContext } from "react";
import { OwnerContext } from "./OwnerProvider";
import Owner from "./Owner";

export default props => {
  const { owners } = useContext(OwnerContext);

  return (
    <>
      <h3>Add New Owner</h3>
      <button onClick={() => props.history.push("owners/create")}>Add Owner</button>
      {owners.map(owner => (
        <Owner key={owner.id} props={props} owner={owner} />
      ))}
    </>
  );
};
