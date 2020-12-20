import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const blueColor = 'rgb(114, 189, 255)';
const HomeScreen = (props) => {
  const title = 'Press me';
  const title2 = 'Slide me to continue';
  const {navigation} = props;
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.yellowText}>4 variations of buttons</Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.title1}>{title}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.title1}>{title}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
          <Text style={styles.title2}>{title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
          <Text style={styles.title1}>{title2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const button = {
  marginVertical: 7,
  padding: 15,
  justifyContent: 'center',
  borderRadius: 10,
  marginHorizontal:12,
};
const title={
  fontSize: 16,
  textAlign: 'center',
};
export default HomeScreen;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column-reverse',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgb(35,33,49)',
  },
  container: {
    width: '100%',
    backgroundColor: 'green',
  },
  yellowText: {
    color: 'yellow',
    fontSize: 16,
    paddingVertical: 20,
    textAlign: 'center',
  },
  title1: {
    ...title,
    color: blueColor,
  },
  title2: {
    ...title,
    color: 'white',
  },
  button1: {
    ...button,
  },
  button2: {
    ...button,
    backgroundColor: 'rgb(64,84,94)',
  },
  button3: {
    ...button,
    backgroundColor: blueColor,
    alignSelf: 'stretch', 
  },
  button4: {
    ...button,
  },
});
