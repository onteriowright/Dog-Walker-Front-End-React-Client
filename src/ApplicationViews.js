import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./MainProvider";
import OwnerList from "./owner/OwnerList";

export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/" render={props => <OwnerList {...props} />} />
      </MainProvider>
    </>
  );
};
