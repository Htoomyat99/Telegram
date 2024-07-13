import { PropsWithChildren, useEffect, useState } from "react";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import { ActivityIndicator } from "react-native";

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY!);

export default function ChatProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);

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

      setIsReady(true);

      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });

      // await channel.watch();
    };

    connect();

    return () => {
      client.disconnectUser();
      setIsReady(false);
    };
  }, []);

  if (!isReady) return <ActivityIndicator />;

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
}
