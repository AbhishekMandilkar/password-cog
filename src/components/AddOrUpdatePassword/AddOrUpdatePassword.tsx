import {
  Actionsheet,
  Box,
  Button,
  HStack,
  Input,
  KeyboardAvoidingView,
  VStack,
} from "native-base";
import { Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../../theme/Colors";
import { useEffect, useState } from "react";
import { getPasswordIcon } from "./Helper";
const AddOrUpdatePassword = () => {
  const [passwordState,setPasswordState] = useState({
    title:'',
    password:'',
  });
  const [icon,setIcon] = useState<JSX.Element>(<Feather name="lock" size={92} color="black" />);
  const handleTitleChange = (text:string) => {
    setPasswordState({
      ...passwordState,
      title:text,
    })
  }

  useEffect(() => {
    setIcon(getPasswordIcon(passwordState.title));
  },[passwordState.title])

  return (
    <VStack>
      <KeyboardAvoidingView>
        <HStack justifyContent={'center'} p={10}>
          <Box backgroundColor={Colors.appForeground} rounded='full' h={'180'} w={'180'} justifyContent='center' alignItems={'center'}>
          {icon}
          </Box>
        </HStack>
        <Input value={passwordState.title} onChangeText={(text) => handleTitleChange(text)} size="2xl" placeholder="Name" rounded={"lg"} my={2} />
        <Input value={passwordState.password} size="2xl" placeholder="Password" rounded={"lg"} my={2}/>
        <Button mt={10} rounded={'full'} leftIcon={<Feather name="plus" size={24} color="white" />}>
          Add Password
        </Button>
        
      </KeyboardAvoidingView>
    </VStack>
  );
};

export default AddOrUpdatePassword;
