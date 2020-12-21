import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StoreProvider from './src/redux/store/store';
// Navigation
import Navigation from './src/navigation/Navigation';
const App = () => {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <StatusBar barStyle="default" />
        <Navigation />
      </StoreProvider>
    </SafeAreaProvider>
  );
};

export default App;
