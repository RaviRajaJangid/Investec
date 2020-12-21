import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
// redux stuff
import {connect} from 'react-redux';
// action
import prepareGreet from '../../redux/action/prepareGreet';
// resource
import {images, strings, colors} from '../../res';
// style
import styles from './first.style';
const FirstScreen = (props) => {
  const {navigation, greeting, prepareGreet} = props;
  useEffect(() => {
    prepareGreet();
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {greeting?.message && (
          <Text style={styles.welcomeTitle}>{greeting.message}</Text>
        )}
      </View>
      <View style={styles.container}>
        <Text style={styles.yellowText}>{strings.fourVariations}</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.title1}>{strings.pressMe}</Text>
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