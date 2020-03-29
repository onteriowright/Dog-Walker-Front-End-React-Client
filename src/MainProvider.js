import React from "react";
import { OwnerProvider } from "./owner/OwnerProvider";
import { DogProvider } from "./dog/DogProvider";
import { WalkerProvider } from "./walker/WalkerProvider";

export default props => {
  return (
    <>
      <DogProvider>
        <WalkerProvider>
          <OwnerProvider>{props.children}</OwnerProvider>
        </WalkerProvider>
      </DogProvider>
    </>
  );
};
