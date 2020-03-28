import React, { useContext } from "react";
import { OwnerContext } from "./OwnerProvider";
import Owner from "./Owner";

export default props => {
  const { owners } = useContext(OwnerContext);

  return (
    <>
      {owners.map(owner => (
        <Owner key={owner.id} owner={owner} />
      ))}
    </>
  );
};
