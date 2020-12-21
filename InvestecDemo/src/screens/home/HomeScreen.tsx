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
// resource
import {images, strings, colors, route} from '../../res';
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
      <View
        style={styles.bottomContainer}>
        <View style={styles.container}>
          <Text style={styles.yellowText}>{strings.fourVariations}</Text>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              navigation.navigate(route.firstScreen);
            }}>
            <Text style={styles.title1}>{strings.pressMe}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2}>
            <Text style={styles.title1}>{strings.pressMe}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3}>
            <Text style={styles.title2}>{strings.pressMe}</Text>
          </TouchableOpacity>
          <View style={styles.slideButtonContainer}>
            <View style={styles.slideButtonTitleContainer}>
              <Text style={styles.title1}>{strings.slideMe}</Text>
            </View>
            <View style={styles.slideButtonThumb}>
              <Image style={styles.thumbImage} source={images.diamond} />
            </View>
          </View>
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

// const mapDispatchToProps = {prepareGreet};

export default connect(mapStateToProps, null)(HomeScreen);
