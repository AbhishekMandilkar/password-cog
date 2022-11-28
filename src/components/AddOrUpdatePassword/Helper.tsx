import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  bankingSites,
  foodOrderingSites,
  shoppingSites,
  socialMediaSites,
} from "../../constants/WebsiteTypes";
import { PasswordTag } from "../../interface/Password";

export const getPasswordIcon = (
  title: string
): {
  icon: JSX.Element;
  tag: PasswordTag;
} => {
  const type = title.toLowerCase();
  if (type === "") {
    return {
      icon: <Feather name="lock" size={92} color="black" />,
      tag: PasswordTag.None,
    };
  }
  if (socialMediaSites.some((item) => item.includes(type))) {
    return {
      icon: <Feather name="users" size={92} color="black" />,
      tag: PasswordTag.SocialMedia,
    };
  }
  if (shoppingSites.some((item) => item.includes(type))) {
    return {
      icon: <Feather name="shopping-cart" size={92} color="black" />,
      tag: PasswordTag.Shopping,
    };
  }
  if (foodOrderingSites.some((item) => item.includes(type))) {
    return {
      icon: <Ionicons name="fast-food-outline" size={92} color="black" />,
      tag: PasswordTag.Food,
    };
  }
  if (bankingSites.some((item) => item.includes(type))) {
    return {
      icon: <Feather name="credit-card" size={92} color="black" />,
      tag: PasswordTag.Banking,
    };
  }
  return {
    icon: <Feather name="lock" size={92} color="black" />,
    tag: PasswordTag.None,
  };
};
