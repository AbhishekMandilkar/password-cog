import {
  Actionsheet,
  Box,
  Button,
  HStack,
  Input,
  KeyboardAvoidingView,
  VStack,
} from "native-base";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../../theme/Colors";
import { useEffect, useState } from "react";
import { getPasswordIcon } from "./Helper";
import { useDebouncedCallback } from "use-debounce";
import { IPassword, PasswordTag } from "../../interface/Password";
import { useKeyboard } from "../../hooks/useKeyboard";
import { SCREEN_HEIGHT } from "../../constants/Layout";
import { Keyboard, Platform } from "react-native";
import ScreenView from "../../common/ScreenView";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { supabase } from "../../lib/supbase";
import uuid from "react-uuid";
const AddOrUpdatePassword = () => {
  const keyboardHeight = useKeyboard();
  const [passwordState, setPasswordState] = useState<IPassword>({
    title: "",
    password: "",
    tag: PasswordTag.None,
  });
  const [icon, setIcon] = useState<JSX.Element>(
    <Feather name="lock" size={92} color="black" />
  );
  const debounced = useDebouncedCallback((value) => {
    const result =
      value.length > 0 ? getPasswordIcon(value) : getPasswordIcon("");
    setIcon(result.icon);
    setPasswordState((prevState) => ({
      ...prevState,
      passwordTag: result.tag,
    }));
  }, 1000);

  const handleTitleChange = (text: string) => {
    debounced(text);
    setPasswordState({
      ...passwordState,
      title: text,
    });
  };
  const handlePasswordChange = (text: string) => {
    setPasswordState({
      ...passwordState,
      password: text,
    });
  };
  const onSave = async () => {
    const { data, error } = await supabase.from("passwords").insert([
      {
        id: uuid(),
        title: passwordState.title,
        password: passwordState.password,
        tag: passwordState.tag,
        type: "password",
      },
    ]);
    console.log("result", data, error?.message);
  };
  return (
    <ScreenView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        height={SCREEN_HEIGHT - keyboardHeight}
      >
        <HStack justifyContent={"center"} p={10}>
          <Box
            backgroundColor={Colors.appForeground}
            rounded="full"
            h={"180"}
            w={"180"}
            justifyContent="center"
            alignItems={"center"}
          >
            {icon}
          </Box>
        </HStack>
        <Input
          value={passwordState.title}
          onChangeText={(text) => handleTitleChange(text)}
          size="2xl"
          placeholder="Name"
          rounded={"lg"}
          my={2}
          focusOutlineColor={"transparent"}
          _focus={{
            backgroundColor: "gray.100",
          }}
        />
        <Input
          value={passwordState.password}
          onChangeText={(text) => handlePasswordChange(text)}
          size="2xl"
          placeholder="Password"
          rounded={"lg"}
          my={2}
          _focus={{
            backgroundColor: "gray.100",
          }}
          focusOutlineColor={"transparent"}
        />
        <Button
          rounded={"lg"}
          backgroundColor={Colors.primary}
          onPress={() => onSave()}
        >
          Add
        </Button>
      </KeyboardAvoidingView>
    </ScreenView>
  );
};

export default AddOrUpdatePassword;
