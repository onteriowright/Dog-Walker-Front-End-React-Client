import React, { useContext } from "react";
import { NeighborhoodContext } from "./NeighborhoodProvider";

export default ({ neighborhood, props }) => {
  const { deleteNeighborhood } = useContext(NeighborhoodContext);

  return (
    <>
      <section className="neighborhoodCard">
        <div className="neighborhoodInfo">Name: {neighborhood.name}</div>
        <section className="neighborhoodBtn">
          <button
            className="neighborhoodIndividualBtn"
            onClick={() => props.history.push(`/neighborhoods/edit/${neighborhood.id}`)}
          >
            Edit
          </button>
          <button
            className="neighborhoodIndividualBtn"
            onClick={() => {
              if (window.confirm("Are you sure?")) {
                deleteNeighborhood(neighborhood).then(() => props.history.push("/neighborhoods"));
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
