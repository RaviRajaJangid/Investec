import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,Alert} from 'react-native';
// redux stuff
import {connect} from 'react-redux';
// action
import prepareGreet from '../../redux/action/prepareGreet';
// resource
import {strings, route} from '../../res';
// style
import styles from './first.style';
// Native Module
import {NativeModules} from 'react-native';
const FirstScreen = (props) => {
  const {DeviceModule} = NativeModules;
  const [name, setName] = useState('');
  const {navigation, greeting, prepareGreet} = props;
  console.log(greeting);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.welcomeTitleContainer}>
          {greeting?.message && (
            <Text style={styles.welcomeTitle}>{greeting.message}</Text>
          )}
        </View>

        <View style={styles.textFieldContainer}>
          {greeting?.error && (
            <Text style={styles.error}>{greeting.error}</Text>
          )}
          <TextInput
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
            prepareGreet(name);
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
};

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};
const mapDispatchToProps = {prepareGreet};

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
