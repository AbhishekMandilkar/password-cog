import React from "react";
import Container from "../common/Container";
import HomeScreenView from "../components/HomeScreen/HomeScreenView";
const HomeScreen = () => {
  return (
    <Container hideTopBar>
      <HomeScreenView />
    </Container>
  );
};

export default HomeScreen;
