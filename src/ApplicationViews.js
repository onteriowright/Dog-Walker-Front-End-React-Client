import React from "react";
import { Route } from "react-router-dom";
import MainProvider from "./MainProvider";
import OwnerList from "./owner/OwnerList";
import OwnerForm from "./owner/OwnerForm";
import DogList from "./dog/DogList";
import DogForm from "./dog/DogForm";
import WalkerList from "./walker/WalkerList";
import WalkerForm from "./walker/WalkerForm";
import NeighborhoodList from "./neighborhood/NeighborhoodList";
import NeighborhoodForm from "./neighborhood/NeighborhoodForm";
import WelcomePageList from "./welcomePage/WelcomePageList";

export default props => {
  return (
    <>
      <MainProvider>
        <Route exact path="/" render={props => <WelcomePageList {...props} />} />

        <Route exact path="/owners" render={props => <OwnerList {...props} />} />
        <Route exact path="/owners/create" render={props => <OwnerForm {...props} />} />
        <Route exact path="/owners/edit/:ownerId(\d+)" render={props => <OwnerForm {...props} />} />

        <Route exact path="/dogs" render={props => <DogList {...props} />} />
        <Route exact path="/dogs/create" render={props => <DogForm {...props} />} />
        <Route exact path="/dogs/edit/:dogId(\d+)" render={props => <DogForm {...props} />} />

        <Route exact path="/walkers" render={props => <WalkerList {...props} />} />
        <Route exact path="/walkers/create" render={props => <WalkerForm {...props} />} />
        <Route exact path="/walkers/edit/:walkerId(\d+)" render={props => <WalkerForm {...props} />} />

        <Route exact path="/neighborhoods" render={props => <NeighborhoodList {...props} />} />
        <Route exact path="/neighborhoods/create" render={props => <NeighborhoodForm {...props} />} />
        <Route
          exact
          path="/neighborhoods/edit/:neighborhoodId(\d+)"
          render={props => <NeighborhoodForm {...props} />}
        />
      </MainProvider>
    </>
  );
};
