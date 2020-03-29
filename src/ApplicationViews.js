import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./MainProvider";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";

export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/owners" render={props => <OwnerList {...props} />} />
        <Route exact path="/owners/create" render={props => <OwnerForm {...props} />} />
        <Route exact path="/owners/edit/:ownerId(\d+)" render={props => <OwnerForm {...props} />} />
      </MainProvider>
    </>
  );
};
