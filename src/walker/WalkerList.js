import React, { useContext } from "react";
import { WalkerContext } from "./WalkerProvider";
import Walker from "./Walker";

export default props => {
  const { walkers } = useContext(WalkerContext);

  return (
    <>
      <section className="walkerTitleAndBtn">
        <p className="walkerTitle">Add New Walker</p>
        <button onClick={() => props.history.push("/walkers/create")}>Add Walker</button>
      </section>
      <section className="walkerList">
        {walkers.map(walk => (
          <Walker key={walk.id} props={props} walker={walk} />
        ))}
      </section>
    </>
  );
};
