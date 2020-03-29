import React from "react";
import { OwnerProvider } from "./owner/OwnerProvider";
import { DogProvider } from "./dog/DogProvider";

export default props => {
  return (
    <>
      <DogProvider>
        <OwnerProvider>{props.children}</OwnerProvider>
      </DogProvider>
    </>
  );
};
