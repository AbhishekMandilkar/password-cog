import React from "react";
import { Heading, HStack } from "native-base";
import { SCREEN_WIDTH } from "../constants/Layout";
import { Feather } from "@expo/vector-icons";
import Colors from "../../theme/Colors";
import { useNavigation } from "@react-navigation/native";

const AppTopBar = (props: IAppTopBar) => {
  const navigation = useNavigation();
  const { title, leftIcon } = props;
  return (
    <HStack p={SCREEN_WIDTH * 0.05} alignItems="center">
      {leftIcon ? (
        leftIcon
      ) : (
        <Feather
          name="arrow-left"
          size={24}
          color={Colors.appText}
          mr={2}
          onPress={() => navigation.goBack()}
        />
      )}
      <Heading fontSize="xl" color={Colors.appText} ml={5}>
        {title}
      </Heading>
    </HStack>
  );
};

export default AppTopBar;
