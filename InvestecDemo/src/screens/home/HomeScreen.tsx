import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
// Redux stuff
import {connect} from 'react-redux';
// Resource
import {strings, route, types} from '../../res';
// Component
import SlideButton from '../../components/SlideButton';
// Style
import styles from './home.style';

const HomeScreen = (props: types.HomeScreen) => {
  const {navigation, greeting} = props;
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        {greeting?.data?.message && (
          <Text style={styles.welcomeTitle}>{greeting?.data?.message}</Text>
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

const mapStateToProps = (state: types.State) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
