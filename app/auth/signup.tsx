import { View, StyleSheet } from "react-native";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import FixedBottomCTA from "@/components/FixedBottomCTA";

const SignupScreen = () => {
  const [signupValues, setSignupValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = () => {
    console.log(signupValues);
    if (!signupValues.email) {
      setErrors({ ...errors, email: "이메일을 입력해주세요." });
    } else if (!signupValues.password) {
      setErrors({ ...errors, password: "비밀번호를 입력해주세요." });
    } else if (!signupValues.passwordConfirm) {
      setErrors({ ...errors, passwordConfirm: "비밀번호를 입력해주세요." });
    }
    if (signupValues.password !== signupValues.passwordConfirm) {
      setErrors({
        ...errors,
        passwordConfirm: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }
  };

  const handleChangeInput = (key: keyof typeof signupValues, value: string) => {
    setSignupValues({ ...signupValues, [key]: value });
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={signupValues.email}
          onChangeText={(text) => handleChangeInput("email", text)}
          error={errors.email}
        />
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={signupValues.password}
          onChangeText={(text) => handleChangeInput("password", text)}
          error={errors.password}
        />
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 입력해주세요."
          value={signupValues.passwordConfirm}
          onChangeText={(text) => handleChangeInput("passwordConfirm", text)}
          error={errors.passwordConfirm}
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default SignupScreen;
