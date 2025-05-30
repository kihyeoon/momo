import { colors } from "@/constants";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "standard" | "outlined";
  error?: string;
}

const InputField = ({
  label,
  variant = "filled",
  error,
  ...props
}: InputFieldProps) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          !!error && styles.inputError,
        ]}
      >
        <TextInput
          placeholderTextColor={colors.GRAY_500}
          style={styles.input}
          {...props}
        />
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
  standard: {},
  outlined: {},
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
});

export default InputField;
