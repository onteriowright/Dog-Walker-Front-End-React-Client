import React, { useContext } from "react";
import { DogContext } from "./DogProvider";

export default ({ dog, props }) => {
  const { deleteDog } = useContext(DogContext);

  return (
    <>
      <div>Name: {dog.name}</div>
      <div>Breed: {dog.breed}</div>
      <div>Notes: {dog.notes}</div>
      <div>Owner: {dog.owner.name}</div>
      <button onClick={() => props.history.push(`/dogs/edit/${dog.id}`)}>Update</button>
      <button onClick={() => deleteDog(dog).then(() => props.history.push("/dogs"))}>Delete Dog</button>
    </>
  );
};
