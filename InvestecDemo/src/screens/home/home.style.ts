import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../../res';
import common from '../../commonStyles/common.style';
interface homeStyle {
  main: ViewStyle;
  container: ViewStyle;
  yellowText: TextStyle;
  title1: TextStyle;
  title2: TextStyle;
  welcomeTitle: TextStyle;
  button1: ViewStyle;
  button2: ViewStyle;
  button3: ViewStyle;
  button4: ViewStyle;
}

const styles = StyleSheet.create<homeStyle>({
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
  yellowText: {
    color: 'yellow',
    fontSize: 16,
    paddingVertical: 20,
    textAlign: 'center',
  },
  title1: {
    ...common.title,
    color: colors.blue,
  },
  title2: {
    ...common.title,
  },
  welcomeTitle: {
    ...common.title,
    fontSize: 25,
    textAlign: 'right',
    padding:20,
  },
  button1: {
    ...common.button,
  },
  button2: {
    ...common.button,
    backgroundColor: colors.blueBlack,
  },
  button3: {
    ...common.button,
    backgroundColor: colors.blue,
    alignSelf: 'stretch',
  },
  button4: {
    ...common.button,
    flexDirection: 'row',
    borderColor: colors.blueBlack,
    borderWidth: 2,
    padding: 8,
  },
});

export default styles;
