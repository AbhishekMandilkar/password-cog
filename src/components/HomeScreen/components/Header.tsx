import React from "react";
import {
  Avatar,
  Heading,
  HStack,
  Pressable,
  Spacer,
  Text,
  VStack,
} from "native-base";
import Colors from "../../../../theme/Colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../navigation/interface";
type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;
const Header = () => {
  const navigate = useNavigation<homeScreenProp>();
  return (
    <HStack my={4} alignItems="center">
      <VStack>
        <Heading fontSize="lg" color={Colors.appText}>
          Password Cog
        </Heading>
        <Heading fontSize="xl" color={Colors.appText} fontWeight="bold">
          Hello, John
        </Heading>
      </VStack>
      <Spacer />
      <Pressable onPress={() => navigate.navigate("Profile")}>
        <Avatar
          bg="cyan.500"
          size={"md"}
          source={{
            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        ></Avatar>
      </Pressable>
    </HStack>
  );
};

export default Header;
