import React, { useContext } from "react";
import { DogContext } from "./DogProvider";

export default () => {
  const { dogs } = useContext(DogContext);

  return <>{dogs.map(dog => console.log(dog.name))}</>;
};
