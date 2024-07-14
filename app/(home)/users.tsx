import UsersListItem from "@/components/UsersListItem";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/provider/AuthProvider";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

export default function UserScreens() {
  const { user } = useAuth();
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .neq("id", user?.id);

      setUsers(data);
    };

    fetchProfiles();
  }, []);

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UsersListItem user={item} />}
      ListEmptyComponent={<ActivityIndicator />}
    />
  );
}
