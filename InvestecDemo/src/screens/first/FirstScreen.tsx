import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
// redux stuff
import {connect} from 'react-redux';
// action
import prepareGreet from '../../redux/action/prepareGreet';
// resource
import {strings, route} from '../../res';
// style
import styles from './first.style';
const FirstScreen = (props) => {
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
