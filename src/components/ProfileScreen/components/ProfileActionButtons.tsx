import { Feather } from "@expo/vector-icons";
import { HStack, Pressable, Text } from "native-base";
import Colors from "../../../../theme/Colors";
import { IFeatherIcon } from "../../../interface";

interface ProfileActionButtonsProps {
  action: () => void;
  title: string;
  iconName: IFeatherIcon;
}

const ProfileActionButton = (props: ProfileActionButtonsProps) => {
  const { action, title, iconName } = props;
  const profileActionIconSize = 22;

  return (
    <Pressable
      my={1}
      onPress={() => action()}
      p={4}
      rounded="lg"
      alignSelf="stretch"
      backgroundColor={Colors.appForeground}
      flexDirection="row"
      width={"100%"}
    >
      <Feather
        name={iconName}
        size={profileActionIconSize}
        color={Colors.appText}
      />
      <Text ml={2} color={Colors.appText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default ProfileActionButton;
