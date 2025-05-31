import { Controller, useFormContext } from "react-hook-form";
import InputField from "./InputField";
import { TextInputProps } from "react-native";

interface PasswordInputProps extends TextInputProps {
  submitBehavior?: TextInputProps["submitBehavior"];
}

const PasswordInput = ({
  submitBehavior = "blurAndSubmit",
}: PasswordInputProps) => {
  const { control, setFocus } = useFormContext();

  return (
    <Controller
      control={control}
      name="password"
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "비밀번호를 입력해주세요.";
          }
          if (data.length < 8) {
            return "비밀번호는 8자 이상이어야 합니다.";
          }
        },
      }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <InputField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          textContentType="oneTimeCode"
          submitBehavior={submitBehavior}
          onSubmitEditing={() => setFocus("passwordConfirm")}
          secureTextEntry
          ref={ref}
          value={value}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
};

export default PasswordInput;
