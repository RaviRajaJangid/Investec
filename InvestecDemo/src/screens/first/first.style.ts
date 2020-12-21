import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../res';
import common from '../../commonStyles/common.style';
interface firstStyle {
  main: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  welcomeTitleContainer: TextStyle;
  welcomeTitle: TextStyle;
  button: ViewStyle;
  button2: ViewStyle;
  textFieldContainer: ViewStyle;
  textField: TextStyle;
  error: TextStyle;
}

const styles = StyleSheet.create<firstStyle>({
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  container: {
    width: '100%',
    flex: 1,
  },
  title: {
    ...common.title,
  },
  error: {
    ...common.title,
    color: 'red',
  },
  welcomeTitleContainer:{
    width: '100%',
    height: '15%',
  },
  welcomeTitle: {
    ...common.title,
    fontSize: 25,
    textAlign: 'right',
    padding: 20,
  },

  button: {
    ...common.button,
    backgroundColor: colors.blue,
    marginVertical: 30,
    alignSelf: 'center',
    width: '50%',
  },
  button2: {
    ...common.button,
    backgroundColor: colors.blue,
    marginVertical: 30,
    alignSelf: 'center',
    width: '90%',
  },
  textField: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    padding: 15,
  },
  textFieldContainer: {
    marginTop: 40,
  },
});

export default styles;
