import * as SecureStore from "expo-secure-store";

async function saveSecureStore(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getSecureStore(key: string) {
  return (await SecureStore.getItemAsync(key)) ?? null;
}

async function deleteSecureStore(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export { saveSecureStore, getSecureStore, deleteSecureStore };
