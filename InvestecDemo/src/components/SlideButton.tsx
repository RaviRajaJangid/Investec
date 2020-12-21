import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {strings, images} from '../res';
import styles from './SlideButton.style';
import Animated from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
const {cond, eq, add, set, Value, event} = Animated;
// export default class SlideButton extends React.Component {
//   dragX = new Value(1);
//   dragY = new Value(1);
//   offsetX = new Value('0%');
//   offsetY = new Value(height / 2);
//   gestureState = new Value(0);
//   transX = cond(
//     eq(this.gestureState, State.ACTIVE),
//     add(this.offsetX, this.dragX),
//     set(this.offsetX, add(this.offsetX, 0)),
//   );

//   onGestureEvent = event([
//     {
//       nativeEvent: {
//         translationX: this.dragX,
//         translationY: this.dragY,
//         state: this.gestureState,
//       },
//     },
//   ]);

//   render() {
//     console.log('YYYYYYY', this.transX, this.gestureState);
//     return (
//       <View style={styles.slideButtonContainer}>
//         <View style={styles.slideButtonTitleContainer}>
//           <Text style={styles.buttonTitle}>{strings.slideMe}</Text>
//         </View>
//         <PanGestureHandler
//           maxPointers={1}
//           onGestureEvent={this.onGestureEvent}
//           onHandlerStateChange={this.onGestureEvent}>
//           <Animated.View
//             style={[
//               styles.slideButtonThumb,
//               {
//                 transform: [{translateX: this.transX}],
//               },
//             ]}>
//             <Image style={styles.thumbImage} source={images.diamond} />
//           </Animated.View>
//         </PanGestureHandler>
//       </View>
//     );
//   }
// }

import Swipeable from 'react-native-gesture-handler/Swipeable';
const SlideButton = ({onLeftSwipe}) => {
  const LeftActions = () => {
    return (
      <View
        style={{
          flex: 0.86,
          justifyContent: 'center',
          width: '100%',
          height: 53,
          backgroundColor: 'green',
        }}>
        <Text>{strings.slideToStop}</Text>
      </View>
    );
  };
  const rightActions = () => {
    return (
      <View
        style={{
          flex: 0.86,
          justifyContent: 'center',
          width: '100%',
          height: 53,
          backgroundColor: 'blue',
        }}
      />
    );
  };

  return (
    <View style={styles.slideButtonContainer}>
      <Swipeable
        onSwipeableLeftOpen={onLeftSwipe}
        renderLeftActions={LeftActions}
        renderRightActions={rightActions}>
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
