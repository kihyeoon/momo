import { colors } from "@/constants";
import { Link, Stack } from "expo-router";
import { Foundation } from "@expo/vector-icons";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerLeft: () => (
            <Link href="/" replace>
              <Foundation name="home" size={24} color="black" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
