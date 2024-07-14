import { useState } from "react";
import { Text } from "react-native";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { router } from "expo-router";
import { useAuth } from "@/provider/AuthProvider";
import { User } from "@supabase/supabase-js";

export default function Index() {
  const { user } = useAuth();

  return (
    <ChannelList
      filters={{ members: { $in: [user ? user.id : null] } }}
      onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
    />
  );
}
