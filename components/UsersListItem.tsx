import { View, Text, Pressable } from "react-native";
import React from "react";
import { useChatContext } from "stream-chat-expo";
import { useAuth } from "@/provider/AuthProvider";
import { router } from "expo-router";

const UsersListItem = ({ user }: any) => {
  const { client } = useChatContext();
  const { user: me } = useAuth();

  console.log(user);

  const goToChat = async () => {
    const channel = client.channel("messaging", {
      members: [me?.id, user.id],
    });

    await channel.watch();

    router.replace(`(home)/channel/${channel.cid}`);
  };

  return (
    <Pressable onPress={goToChat}>
      <Text
        style={{
          padding: 15,
          backgroundColor: "#FFF",
          fontWeight: "600",
          marginVertical: 5,
        }}
      >
        {user.full_name}
      </Text>
    </Pressable>
  );
};

export default UsersListItem;
