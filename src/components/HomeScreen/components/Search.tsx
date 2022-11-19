import { View, Text } from "react-native";
import React from "react";
import { HStack, Input, PresenceTransition } from "native-base";
import { Feather } from "@expo/vector-icons";
import Colors from "../../../../theme/Colors";

interface ISearchProps {
  handleQueryChange: (text: string) => void;
  query: string;
}

const Search = (props: ISearchProps) => {
  const { query, handleQueryChange } = props;
  const isSearching = query.length === 0;
  return (
    <>
      <HStack alignItems={"center"}>
        {isSearching && (
          <PresenceTransition
            visible={isSearching}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 250,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 250,
              },
            }}
          >
            <Feather name="search" size={32} color={Colors.appText} />
          </PresenceTransition>
        )}
        <Input
          placeholder="Search for passwords"
          ml={isSearching ? 2 : 0}
          mr={!isSearching ? 2 : 0}
          variant={"rounded"}
          flex={1}
          color={Colors.appText}
          placeholderTextColor={Colors.appText}
          backgroundColor={Colors.appForeground}
          h={10}
          focusOutlineColor={Colors.appForeground}
          _focus={{
            backgroundColor: "white",
          }}
          onChangeText={(text) => handleQueryChange(text)}
          value={query}
        />
        {!isSearching && (
          <Feather
            name="x"
            size={32}
            color={Colors.appText}
            mr={2}
            onPress={() => handleQueryChange("")}
          />
        )}
      </HStack>
    </>
  );
};

export default Search;
