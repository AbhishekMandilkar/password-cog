import { Box } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "../constants/Layout";
import Colors from "../../theme/Colors";
import { useRoute } from "@react-navigation/native";
import AppTopBar from "./AppTopBar/AppTopBar";

interface ScreenViewProps {
  children: React.ReactNode;
  hideTopBar?: boolean;
  extraProps?: any;
}

const ScreenView = ({ hideTopBar, children }: ScreenViewProps) => {
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.appBackground,
      }}
    >
      {!hideTopBar && <AppTopBar routeName={route.name} />}
      <Box flex={1} paddingX={SCREEN_WIDTH * 0.05}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default ScreenView;
