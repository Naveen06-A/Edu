import React from 'react';
import { View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

export function HelloWave() {
  const rotate = useSharedValue(0);

  React.useEffect(() => {
    rotate.value = withRepeat(
      withSequence(
        withTiming(15, { duration: 200 }),
        withTiming(-15, { duration: 200 }),
        withTiming(0, { duration: 200 })
      ),
      -1
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}deg` }],
  }));

  return (
    <Animated.Text style={[{ fontSize: 28 }, animatedStyle]}>
      👋
    </Animated.Text>
  );
}

export default HelloWave;