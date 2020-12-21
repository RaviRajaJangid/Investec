import {StyleSheet, ViewStyle, TextStyle,ImageStyle, View} from 'react-native';
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
  slideButtonTitleContainer: ViewStyle;
  slideButtonContainer: ViewStyle;
  slideButtonThumb: ViewStyle;
  thumbImage: ImageStyle;
  bottomContainer: ViewStyle;
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
    backgroundColor: colors.background,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
    width: '100%',
    paddingBottom: 50,
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
    padding: 20,
    marginTop: 50,
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

  slideButtonContainer: {
    ...common.button,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.blueBlack,
    borderWidth: 1,
    padding: 0,
  },

  slideButtonTitleContainer: {
    ...common.button,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.blueBlack,
    borderWidth: 1,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  slideButtonThumb: {
    position: 'absolute',
    left: 0,
    backgroundColor: colors.blue,
    width: 53,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 0,
  },
  thumbImage: {
    height: 25,
    width: 25,
  },
});

export default styles;
