import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Homepage"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: function ({ focused }) {
            return (
              <MaterialCommunityIcons
                name="home"
                size={24}
                color={focused ? "blue" : "black"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: false,
          tabBarIcon: function ({ focused }) {
            return (
              <MaterialCommunityIcons
                name="apps"
                size={24}
                color={focused ? "blue" : "black"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: function ({ focused }) {
            return (
              <MaterialCommunityIcons
                name="widgets"
                size={24}
                color={focused ? "blue" : "black"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: function ({ focused }) {
            return (
              <MaterialCommunityIcons
                name="account"
                size={24}
                color={focused ? "blue" : "black"}
              />
            );
          },
        }}
      />
    </Tabs>
    
  );
}
