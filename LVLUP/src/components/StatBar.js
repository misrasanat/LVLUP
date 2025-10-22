import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';

export default function StatBar({ label, value, color, icon, maxValue = 100 }) {
  const percentage = (value / maxValue) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.labelContainer}>
          <Icon name={icon} size={20} color={color} />
          <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={[styles.value, { color }]}>{value}</Text>
      </View>
      
      <View style={styles.barContainer}>
        <View style={styles.barBackground} />
        <LinearGradient
          colors={[color, `${color}80`]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.barFill, { width: `${percentage}%` }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  barContainer: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  barFill: {
    height: '100%',
    borderRadius: 4,
  },
});
