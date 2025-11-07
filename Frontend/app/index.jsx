import { useEffect, useContext, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { UserDataContext } from "../context/userContext";

export default function Index() {
  const { setUser } = useContext(UserDataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          router.replace("/home/HomePage"); // go to home page
        } else {
          router.replace("/Overboarding");
        }
      } catch (e) {
        console.log("Error reading AsyncStorage:", e);
        router.replace("/Overboarding");
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return null;
}
