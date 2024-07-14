import { PropsWithChildren, useEffect, useState } from "react";
import { Chat, OverlayProvider } from "stream-chat-expo";
import { StreamChat } from "stream-chat";
import { ActivityIndicator } from "react-native";
import { useAuth } from "./AuthProvider";

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY!);

export default function ChatProvider({ children }: PropsWithChildren) {
  const { profile } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const connect = async () => {
      if (!profile) return;

      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: "https://getstream.io/random_svg/?name=John",
        },
        client.devToken(profile.id)
      );

      setIsReady(true);

      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });

      // await channel.watch();
    };

    connect();

    return () => {
      if (isReady) {
        client.disconnectUser();
      }
      setIsReady(false);
    };
  }, [profile?.id]);

  if (!isReady) return <ActivityIndicator />;

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
}
