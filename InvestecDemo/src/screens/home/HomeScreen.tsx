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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// action
import prepareGreet from '../../redux/action/prepareGreet';
// resource
import {images, strings, colors} from '../../res';
// style
import styles from './home.style';
const HomeScreen = (props) => {
  const {navigation, greeting, prepareGreet} = props;
console.log('GEET ', greeting);
  useEffect(() => {
    prepareGreet('Ravi');
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

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.title1}>{}</Text>
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
  console.log('mapStateToProps', state);
  return {
    greeting: state.greeting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      prepareGreet: prepareGreet,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
//export default HomeScreen;
