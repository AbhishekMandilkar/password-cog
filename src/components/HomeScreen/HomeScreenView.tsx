import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState } from "react";
import Header from "./components/Header";
import { Fab, HStack, Icon, Input, ScrollView } from "native-base";
import { Feather } from "@expo/vector-icons";
import Search from "./components/Search";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../navigation/interface";
import ScreenView from "../../common/ScreenView";
import { supabase } from "../../lib/supbase";
type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;
const HomeScreenView = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigation<homeScreenProp>();
  const handleQueryChange = (text: string) => {
    setQuery(text);
  };
  const getAllPasswords = async () => {
    let { data: passwords, error } = await supabase
      .from("paswords")
      .select("*");
    console.log("paswords", passwords);
  };

  getAllPasswords();

  return (
    <ScreenView hideTopBar>
      <Header />
      <Search handleQueryChange={handleQueryChange} query={query} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView keyboardShouldPersistTaps="handled"></ScrollView>
      </TouchableWithoutFeedback>
      <Fab
        onPress={() => navigate.navigate("Add_Password")}
        renderInPortal={false}
        shadow={2}
        placement="bottom-right"
        size="sm"
        mb={4}
        icon={<Icon color="white" as={Feather} name="plus" size="4" />}
        label="Password"
      />
    </ScreenView>
  );
};

export default HomeScreenView;
