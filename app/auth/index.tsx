import { SafeAreaView, Image, StyleSheet, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.bottomContainer}>
        <CustomButton label="이메일 로그인" />
        <Link href="/" style={styles.signupText}>
          이메일로 가입하기
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 32,
  },
  logo: {
    width: 112,
    height: 112,
  },
  signupText: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 16,
  },
});

export default Index;
