import React, { useContext } from "react";
import { DogContext } from "./DogProvider";
import Dog from "./Dog";

export default props => {
  const { dogs } = useContext(DogContext);

  return (
    <>
      <section className="dogTitleAndBtn">
        <p className="dogTitle">Add New Dog</p>
        <button onClick={() => props.history.push("/dogs/create")}>Add Dog</button>
      </section>
      <section className="dogList">
        {dogs.map(dog => (
          <Dog key={dog.id} props={props} dog={dog} />
        ))}
      </section>
    </>
  );
};
