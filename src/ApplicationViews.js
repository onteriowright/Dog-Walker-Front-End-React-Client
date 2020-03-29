import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./MainProvider";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import DogList from "./dog/DogList";
import DogForm from "./dog/DogForm";

export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/owners" render={props => <OwnerList {...props} />} />
        <Route exact path="/owners/create" render={props => <OwnerForm {...props} />} />
        <Route exact path="/owners/edit/:ownerId(\d+)" render={props => <OwnerForm {...props} />} />

        <Route exact path="/dogs" render={props => <DogList {...props} />} />
        <Route exact path="/dogs/create" render={props => <DogForm {...props} />} />
        <Route exact path="/dogs/edit/:dogId(\d+)" render={props => <DogForm {...props} />} />
      </MainProvider>
    </>
  );
};
