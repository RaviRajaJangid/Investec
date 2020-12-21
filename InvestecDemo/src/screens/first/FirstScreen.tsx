import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <Text> {'You are on FirstScreen'}</Text>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});
