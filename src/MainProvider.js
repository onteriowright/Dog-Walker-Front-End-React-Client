import React from "react";
import { OwnerProvider } from "./owner/OwnerProvider";
import { DogProvider } from "./dog/DogProvider";
import { WalkerProvider } from "./walker/WalkerProvider";
import { NeighborhoodProvider } from "./neighborhood/NeighborhoodProvider";

export default props => {
  return (
    <>
      <DogProvider>
        <WalkerProvider>
          <NeighborhoodProvider>
            <OwnerProvider>{props.children}</OwnerProvider>
          </NeighborhoodProvider>
        </WalkerProvider>
      </DogProvider>
    </>
  );
};
