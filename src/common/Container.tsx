import { Box } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_WIDTH } from "../constants/Layout";
import Colors from "../../theme/Colors";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.appBackground,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;
