import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, G, Line } from 'react-native-svg';

const CircularProgress = ({ progress1, progress2, progress3 }) => {
  const radius = 50; // Adjust the radius as needed
  const strokeWidth = 10; // Adjust the stroke width as needed
  const circumference = 2 * Math.PI * radius;

  // Calculate the dash offset for each segment based on its progress
  const dashOffset1 = circumference * (1 - progress1);
  const dashOffset2 = circumference * (1 - progress2);
  const dashOffset3 = circumference * (1 - progress3);

  return (
    <View style={styles.container}>
      <Svg height="200" width="200">
        <G>
          {/* Background Circle */}
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#ddd"
            strokeWidth={strokeWidth}
            fill="transparent"
          />

          {/* First Progress Segment */}
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#3498db"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset1}
          />

          {/* Second Progress Segment */}
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#e74c3c"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset2}
          />

          {/* Third Progress Segment */}
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="#2ecc71"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset3}
          />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CircularProgress;
