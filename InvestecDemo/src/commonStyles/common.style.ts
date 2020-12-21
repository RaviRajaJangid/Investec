import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '../res'

interface commonStyle {
  title: TextStyle;
  button: ViewStyle;
}

const common = StyleSheet.create<commonStyle>({
  button: {
    marginVertical: 7,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
  },
});

export default common;
