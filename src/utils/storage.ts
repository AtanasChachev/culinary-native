import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeItem = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, value);
}

export const getItem = async (key: string) => {
  return await AsyncStorage.getItem(key);
}
