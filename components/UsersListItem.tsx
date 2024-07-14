import { View, Text } from "react-native";
import React from "react";

const UsersListItem = ({ item }: any) => {
  return (
    <View>
      <Text style={{ padding: 15, backgroundColor: "#FFF", fontWeight: "600" }}>
        {item.full_name}
      </Text>
    </View>
  );
};

export default UsersListItem;
