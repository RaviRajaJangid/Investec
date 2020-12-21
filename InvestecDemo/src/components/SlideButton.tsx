import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {strings, images} from '../res';
import styles from './SlideButton.style';
import Animated from 'react-native-reanimated';
import Swipeable from 'react-native-gesture-handler/Swipeable';
type Callback = () => void;
interface SlideButtonProps {
  onSlideOpen: () => void;
  onSlideClose: () => void;
}
const SlideButton = (props: SlideButtonProps) => {
  const LeftActions = () => {
    return (
      <View style={styles.leftActionView}>
        <Animated.Text style={styles.buttonTitle}>
          {strings.slideToStop}
        </Animated.Text>
      </View>
    );
  };

  return (
    <View style={styles.slideButtonContainer}>
      <Swipeable
        onSwipeableLeftOpen={props?.onSlideOpen}
        renderLeftActions={LeftActions}
        onSwipeableClose={props?.onSlideClose}>
        <View style={styles.slideButtonTitleContainer}>
          <Text style={styles.buttonTitle}>{strings.slideMe}</Text>
        </View>
        <View style={[styles.slideButtonThumb]}>
          <Image style={styles.thumbImage} source={images.diamond} />
        </View>
      </Swipeable>
    </View>
  );
};

export default SlideButton;
