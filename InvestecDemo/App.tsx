import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
// Navigation
import Navigation from './src/navigation/Navigation';
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <SafeAreaView  style={styles.main} >
        <Navigation />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgb(35,33,49)',
  },
});

export default App;
