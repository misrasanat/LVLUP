import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function XPBar({ current, max }) {
  const percentage = (current / max) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.barBackground} />
      <LinearGradient
        colors={['#00ff88', '#00cc6a', '#009950']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.barFill, { width: `${percentage}%` }]}
      />
      <View style={styles.glowOverlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 10,
  },
  barBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  barFill: {
    height: '100%',
    borderRadius: 6,
  },
  glowOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 6,
  },
});
