import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from "stream-chat-expo";

export default function HomeLayout() {
  const client = StreamChat.getInstance("cmwn5v3mc7w2");

  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "john",
          name: "John Doe",
          image: "https://getstream.io/random_svg/?name=John",
        },
        client.devToken("john")
      );

      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });

      // await channel.watch();
    };

    connect();
  });

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="channel" /> */}
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
