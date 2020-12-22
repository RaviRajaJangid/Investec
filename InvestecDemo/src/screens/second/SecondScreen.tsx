import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// Redux stuff
import {connect} from 'react-redux';
// Resource
import {types} from '../../res';
const SecondScreen = (props: types.SecondScreen) => {
  const {greeting} = props;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {greeting?.data?.message && (
          <Text style={styles.welcomeTitle}>{greeting.data.message}</Text>
        )}
      </View>
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

const mapStateToProps = (state: types.State) => {
  return {
    greeting: state.greeting,
  };
};
export default connect(mapStateToProps, null)(SecondScreen);
