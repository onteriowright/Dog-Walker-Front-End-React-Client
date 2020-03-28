import React from "react";
import { OwnerProvider } from "./owner/OwnerProvider";

export default props => {
  return (
    <>
      <OwnerProvider>{props.children}</OwnerProvider>
    </>
  );
};
