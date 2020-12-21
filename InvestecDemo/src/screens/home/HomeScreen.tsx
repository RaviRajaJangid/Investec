import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
// redux stuff
import {connect} from 'react-redux';
// resource
import {strings, route} from '../../res';
import SlideButton from '../../components/SlideButton';

// style
import styles from './home.style';
// is it
const HomeScreen = (props: {navigation: any; greeting: {message: String}}) => {
  const {navigation, greeting} = props;
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {greeting?.message && (
          <Text style={styles.welcomeTitle}>{greeting.message}</Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.container}>
          <Text style={styles.yellowText}>{strings.fourVariations}</Text>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              navigation.navigate(route.firstScreen);
            }}>
            <Text style={styles.title1}>{strings.pressMe}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              navigation.navigate(route.firstScreen);
            }}>
            <Text style={styles.title1}>{strings.pressMe}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button3}
            onPress={() => {
              navigation.navigate(route.firstScreen);
            }}>
            <Text style={styles.title2}>{strings.pressMe}</Text>
          </TouchableOpacity>
          <SlideButton
            onSlideOpen={() => {
              Alert.alert(strings.appName, strings.slideOpned);
            }}
            onSlideClose={() => {
              Alert.alert(strings.appName, strings.slideClosed);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state: {greeting: any}) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
