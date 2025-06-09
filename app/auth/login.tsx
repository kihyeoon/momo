import { View, StyleSheet } from "react-native";
import React from "react";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import { FormProvider, useForm } from "react-hook-form";
import EmailInput from "@/components/EmailInput";
import PasswordInput from "@/components/PasswordInput";
import useAuth from "@/hooks/queries/useAuth";
import usePushNotification from "@/hooks/usePushNotification";

interface FormValues {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const { loginMutation } = useAuth();
  const { expoPushToken } = usePushNotification();
  console.log("expoPushToken", expoPushToken);
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formValues: FormValues) => {
    loginMutation.mutate({ ...formValues, expoPushToken });
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedBottomCTA
        label="로그인하기"
        onPress={loginForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default LoginScreen;
