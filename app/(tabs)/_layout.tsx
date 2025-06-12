import { Tabs } from "expo-router";
import React from "react";
import { colors } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const { t } = useTranslation();
  const SIZE = 24;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ORANGE_600,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("Home"),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={SIZE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: t("Profile"),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
              size={SIZE}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: t("Setting"),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
              size={SIZE}
            />
          ),
        }}
      />
    </Tabs>
  );
}
