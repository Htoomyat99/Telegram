import { useState } from "react";
import { Text } from "react-native";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { Link, router, Stack } from "expo-router";
import { useAuth } from "@/provider/AuthProvider";
import { User } from "@supabase/supabase-js";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Index() {
  const { user } = useAuth();

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Link
              asChild
              href={"(home)/users"}
              style={{ marginHorizontal: 15 }}
            >
              <FontAwesome5 name="users" size={22} color="gray" />
            </Link>
          ),
        }}
      />

      <ChannelList
        filters={{ members: { $in: [user ? user.id : null] } }}
        onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
      />
    </>
  );
}
