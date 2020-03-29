import React, { useContext } from "react";
import { WalkerContext } from "./WalkerProvider";

export default ({ walker, props }) => {
  const { deleteWalker } = useContext(WalkerContext);

  return (
    <>
      <section className="walkerCard">
        <div className="walkerInfo">Name: {walker.name}</div>
        <div className="walkerInfo">City: {walker.neighborhood.name}</div>
        <div className="walkerBtn">
          <button className="walkerBtnIndividual" onClick={() => props.history.push(`/walkers/edit/${walker.id}`)}>
            Edit
          </button>
          <button
            className="walkerBtnIndividual"
            onClick={() => deleteWalker(walker).then(() => props.history.push("/walkers"))}
          >
            Delete
          </button>
        </div>
      </section>
    </>
  );
};
