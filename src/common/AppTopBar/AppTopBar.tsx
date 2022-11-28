import React from "react";
import { Heading, HStack } from "native-base";
import { SCREEN_WIDTH } from "../../constants/Layout";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../theme/Colors";
import { useNavigation } from "@react-navigation/native";
import { getTitleName } from "./AppTopBarHelper";

interface IAppTopBar {
  routeName: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const AppTopBar = (props: IAppTopBar) => {
  const navigation = useNavigation();
  const { routeName, leftIcon, rightIcon } = props;
  const title = getTitleName(routeName);

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
      {rightIcon && rightIcon}
    </HStack>
  );
};

export default AppTopBar;
