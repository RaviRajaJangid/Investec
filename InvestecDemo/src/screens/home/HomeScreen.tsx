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
import {images, strings, colors} from '../../res';
// style
import styles from './home.style';
const HomeScreen = (props) => {
  const {navigation, greeting} = props;

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

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.title1}>{strings.pressMe}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
          <Text style={styles.title2}>{strings.pressMe}</Text>
        </TouchableOpacity>
        <View style={styles.button4}>
          <Image source={images.diamond} height={20} width={20} />
          <Text style={styles.title1}>{strings.slideMe}</Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

// const mapDispatchToProps = {prepareGreet};

export default connect(mapStateToProps, null)(HomeScreen);
