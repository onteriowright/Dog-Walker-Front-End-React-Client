import React, { useContext } from "react";
import { DogContext } from "./DogProvider";
import Dog from "./Dog";

export default props => {
  const { dogs } = useContext(DogContext);

  return (
    <>
      <h3>Add A New Dog</h3>
      <button onClick={() => props.history.push("/dogs/create")}>Add Dog</button>
      {dogs.map(dog => (
        <Dog key={dog.id} props={props} dog={dog} />
      ))}
    </>
  );
};
