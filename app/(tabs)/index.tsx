import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="인증 홈" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}
