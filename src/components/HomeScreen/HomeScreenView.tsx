import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import { Fab, HStack, Icon, Input, ScrollView } from "native-base";
import { Feather } from "@expo/vector-icons";
import Search from "./components/Search";

const HomeScreenView = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (text: string) => {
    setQuery(text);
  };

  return (
    <>
      <Header />
      <Search handleQueryChange={handleQueryChange} query={query} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView keyboardShouldPersistTaps="handled"></ScrollView>
      </TouchableWithoutFeedback>
      <Fab
        renderInPortal={false}
        shadow={2}
        placement="bottom-right"
        size="sm"
        mb={4}
        icon={<Icon color="white" as={Feather} name="plus" size="4" />}
        label="Password"
      />
    </>
  );
};

export default HomeScreenView;
