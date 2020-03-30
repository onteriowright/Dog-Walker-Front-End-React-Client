import React, { useContext } from "react";
import { OwnerContext } from "./OwnerProvider";
import Owner from "./Owner";

export default props => {
  const { owners } = useContext(OwnerContext);

  return (
    <>
      <section className="ownerTitleAndBtn">
        <h3>Add New Owner</h3>
        <button onClick={() => props.history.push("owners/create")}>Add Owner</button>
      </section>
      <section className="ownerList">
        {owners.map(owner => (
          <Owner key={owner.id} props={props} owner={owner} />
        ))}
      </section>
    </>
  );
};
