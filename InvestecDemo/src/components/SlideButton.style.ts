import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {colors} from '../res';
import common from '../commonStyles/common.style';

interface SlideStyle {
  slideButtonContainer: ViewStyle;
  slideButtonTitleContainer: ViewStyle;
  slideButtonThumb: ViewStyle;
  thumbImage: ImageStyle;
  buttonTitle: TextStyle;
  leftActionView: ViewStyle;
}

const styles = StyleSheet.create<SlideStyle>({
  slideButtonContainer: {
    ...common.button,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: colors.blueBlack,
    borderWidth: 2,
    padding: 0,
    height: 52,
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  slideButtonTitleContainer: {
    ...common.button,
    flexDirection: 'row',
    marginVertical: 0,
    marginHorizontal: 0,
    backgroundColor: colors.background,
    height: 48,
  },
  slideButtonThumb: {
    position: 'absolute',
    left: 0,
    backgroundColor: colors.blue,
    width: 52,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    top: -3,
  },
  thumbImage: {
    height: 25,
    width: 25,
  },
  buttonTitle: {
    ...common.title,
    width: '100%',
    color: colors.blue,
  },
  leftActionView:{
    flex: 0.865,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
