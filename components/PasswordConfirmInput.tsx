import { Controller, useFormContext, useWatch } from "react-hook-form";
import InputField from "./InputField";

const PasswordConfirmInput = () => {
  const { control } = useFormContext();
  const password = useWatch({ control, name: "password" });

  return (
    <Controller
      control={control}
      name="passwordConfirm"
      rules={{
        validate: (data: string) => {
          if (data !== password) {
            return "비밀번호가 일치하지 않습니다.";
          }
        },
      }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <InputField
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          textContentType="oneTimeCode"
          secureTextEntry
          value={value}
          ref={ref}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
};

export default PasswordConfirmInput;
