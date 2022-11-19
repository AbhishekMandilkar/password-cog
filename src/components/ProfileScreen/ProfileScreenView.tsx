import React from "react";
import { Avatar, Pressable, Text, VStack } from "native-base";
import Colors from "../../../theme/Colors";
import ProfileActionButton from "./components/ProfileActionButtons";
import { Feather } from "@expo/vector-icons";
import { IFeatherIcon } from "../../interface";

interface ProfileScreenActionsProps {
  action: () => void;
  title: string;
  iconName: IFeatherIcon;
}

const ProfileScreenView = () => {
  const dummyData: ProfileScreenActionsProps[] = [
    {
      title: "Edit Profile",
      action: () => console.log("Edit Profile"),
      iconName: "edit",
    },
    {
      title: "Change Password",
      action: () => console.log("Change Password"),
      iconName: "lock",
    },
    {
      title: "Delete Account",
      action: () => console.log("Delete Account"),
      iconName: "trash-2",
    },
    {
      title: "Logout",
      iconName: "log-out",
      action: () => console.log("Logout"),
    },
  ];
  return (
    <>
      <VStack alignItems="center">
        <Avatar
          my={10}
          bg="cyan.500"
          size={"2xl"}
          source={{
            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        />
        <Text color={Colors.appText} fontWeight="bold" fontSize="3xl">
          John Doe
        </Text>
        <VStack mt={4} alignSelf="stretch" pt={4}>
          {dummyData.map((item: ProfileScreenActionsProps, index) => (
            <ProfileActionButton
              key={index + "_" + item.title}
              title={item.title}
              action={() => item.action()}
              iconName={item.iconName}
            />
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default ProfileScreenView;
