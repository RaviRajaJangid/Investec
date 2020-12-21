import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// redux stuff
import {connect} from 'react-redux';

const SecondScreen = (props: {
  navigation: any;
  greeting: {message: String};
}) => {
  const {greeting} = props;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {greeting?.message && (
          <Text style={styles.welcomeTitle}>{greeting.message}</Text>
        )}
      </View>
      <Text>{'SecondScreen'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
});

const mapStateToProps = (state: {greeting: any}) => {
  return {
    greeting: state.greeting,
  };
};
export default connect(mapStateToProps, null)(SecondScreen);
