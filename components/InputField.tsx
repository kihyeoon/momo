import { colors } from "@/constants";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { forwardRef, ReactNode } from "react";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "standard" | "outlined";
  error?: string;
  rightChild?: ReactNode;
}

const InputField = (
  {
    label,
    variant = "filled",
    error,
    rightChild = null,
    ...props
  }: InputFieldProps,
  ref: React.Ref<TextInput>
) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          props.multiline && styles.multiline,
          !!error && styles.inputError,
        ]}
      >
        <TextInput
          placeholderTextColor={colors.GRAY_500}
          style={[styles.input, styles[`${variant}Text`]]}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          ref={ref}
          {...props}
        />
        {rightChild}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: colors.GRAY_700,
    marginBottom: 4,
  },
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  filled: {
    backgroundColor: colors.GRAY_100,
  },
  standard: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.ORANGE_600,
  },
  filledText: {
    color: colors.BLACK,
  },
  standardText: {
    color: colors.BLACK,
  },
  outlinedText: {
    color: colors.ORANGE_600,
    fontWeight: "bold",
  },
  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
  inputError: {
    backgroundColor: colors.RED_100,
  },
  error: {
    fontSize: 12,
    color: colors.RED_500,
    marginTop: 5,
  },
  multiline: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
});

export default forwardRef(InputField);
