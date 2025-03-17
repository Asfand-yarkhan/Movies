import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full-screen layout
    justifyContent: 'center',
    alignItems: 'center',
  },
});
