import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
// Redux stuff
import {connect} from 'react-redux';
// Action
import prepareGreet from '../../redux/action/prepareGreet';
// Resource
import {strings, route, types} from '../../res';
// Styles
import styles from './first.style';
// Native Module
import {NativeModules} from 'react-native';
function FirstScreen(props: types.FirstScreen) {
  const {DeviceModule} = NativeModules;
  const [name, setName] = useState(''); // we can replace with redux state if we need synchronus update
  const {navigation, greeting, prepareGreeting} = props;
  useEffect(() => {
    setName(greeting?.data?.name);
  }, [greeting]);
  console.log(greeting);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.welcomeTitleContainer}>
          {greeting?.data?.message && (
            <Text style={styles.welcomeTitle}>{greeting?.data?.message}</Text>
          )}
        </View>

        <View style={styles.textFieldContainer}>
          {greeting?.error && (
            <Text style={styles.error}>{greeting.error}</Text>
          )}
          <TextInput
            value={name}
            placeholder={strings.enterName}
            style={styles.textField}
            onChangeText={(value) => setName(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (DeviceModule.isEmulator()) {
              Alert.alert(strings.appName, strings.appOnSimulator);
            }
            prepareGreeting(name);
          }}>
          <Text style={styles.title}>{strings.save}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate(route.secondScreen);
          }}>
          <Text style={styles.title}>{strings.navigateToSecond}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state: types.State) => {
  return {
    greeting: state.greeting,
  };
};
const mapDispatchToProps = {prepareGreeting: prepareGreet};

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
