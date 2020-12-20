import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const SecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>SecondScreen </Text>
    </View>
  );
};
export default SecondScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
