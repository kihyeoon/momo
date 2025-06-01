import { SafeAreaView, Button } from "react-native";
import AuthRoute from "@/components/AuthRoute";
import useAuth from "@/hooks/queries/useAuth";

export default function SettingScreen() {
  const { logout } = useAuth();

  return (
    <AuthRoute>
      <SafeAreaView>
        <Button title="로그아웃" onPress={logout} />
      </SafeAreaView>
    </AuthRoute>
  );
}
