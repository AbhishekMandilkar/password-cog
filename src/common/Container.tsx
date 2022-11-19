import { Box } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "../constants/Layout";
import Colors from "../../theme/Colors";
import AppTopBar from "./AppTopBar";
import { useRoute } from "@react-navigation/native";

interface ContainerProps {
  children: React.ReactNode;
  hideTopBar?: boolean;
}

const Container = ({ hideTopBar, children }: ContainerProps) => {
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.appBackground,
      }}
    >
      {!hideTopBar && <AppTopBar title={route.name} />}
      <Box flex={1} paddingX={SCREEN_WIDTH * 0.05}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Container;
