import React, { useContext } from "react";
import { DogContext } from "./DogProvider";

export default ({ dog, props }) => {
  const { deleteDog } = useContext(DogContext);

  return (
    <>
      <section className="dogCard">
        <div className="dogInfo">Name: {dog.name}</div>
        <div className="dogInfo">Breed: {dog.breed}</div>
        <div className="dogInfo">Notes: {dog.notes}</div>
        <div className="dogInfo">Owner: {dog.owner.name}</div>
        <section className="dogBtn">
          <button className="dogIndividualBtn" onClick={() => props.history.push(`/dogs/edit/${dog.id}`)}>
            Edit
          </button>
          <button className="dogIndividualBtn" onClick={() => deleteDog(dog).then(() => props.history.push("/dogs"))}>
            Delete
          </button>
        </section>
      </section>
    </>
  );
};
