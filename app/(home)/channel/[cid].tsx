import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Channel as ChannelType } from "stream-chat";
import { useLocalSearchParams } from "expo-router";
import {
  Channel,
  MessageInput,
  MessageList,
  useChatContext,
} from "stream-chat-expo";
import { SafeAreaView } from "react-native-safe-area-context";

const ChannelIndex = () => {
  const { cid } = useLocalSearchParams<{ cid: string }>();
  const { client } = useChatContext();
  const [channel, setChannel] = useState<ChannelType | null>(null);

  useEffect(() => {
    const fetchChannel = async () => {
      const channel = await client.queryChannels({ cid });

      setChannel(channel[0]);
    };

    fetchChannel();
  }, [cid]);

  if (!channel) return <ActivityIndicator />;

  return (
    <Channel channel={channel}>
      <MessageList />
      <SafeAreaView edges={["bottom"]}>
        <MessageInput />
      </SafeAreaView>
    </Channel>
  );
};

export default ChannelIndex;
