import React, { useContext } from "react";
import { OwnerContext } from "./OwnerProvider";
import Owner from "./Owner";

export default props => {
  const { owners } = useContext(OwnerContext);

  return (
    <>
      <section className="ownerTitleAndBtn">
        <p className="ownerTitle">Add New Owner</p>
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
