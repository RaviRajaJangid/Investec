import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import StoreProvider from './src/redux/store/store';
// Navigation
import Navigation from './src/navigation/Navigation';
const App = () => {
  return (
    <View style={styles.container}>
      <StoreProvider>
        <StatusBar barStyle="default" />
        <SafeAreaView style={styles.main}>
          <Navigation />
        </SafeAreaView>
      </StoreProvider>
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
