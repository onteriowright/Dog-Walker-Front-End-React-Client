import React, { useContext } from "react";
import { NeighborhoodContext } from "./NeighborhoodProvider";
import Neighborhood from "./Neighborhood";

export default props => {
  const { neighborhoods } = useContext(NeighborhoodContext);

  return (
    <>
      <section className="neighborhoodTitleAndBtn">
        <p className="neighborhoodTitle">Add New City</p>
        <button onClick={() => props.history.push("neighborhoods/create")}>Add City</button>
      </section>
      <section className="neighborhoodList">
        {neighborhoods.map(neighborhood => (
          <Neighborhood key={neighborhood.id} props={props} neighborhood={neighborhood} />
        ))}
      </section>
    </>
  );
};
