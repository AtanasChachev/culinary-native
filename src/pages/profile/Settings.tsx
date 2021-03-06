import React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const Settings = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <Button title="Back" onPress={() => {
        navigation.goBack();
      }} />
      <View>
        <Text>SEttings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;