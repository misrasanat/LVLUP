import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useUser } from '../context/UserContext';
import StatBar from '../components/StatBar';
import XPBar from '../components/XPBar';

const { width } = Dimensions.get('window');

export default function StatusScreen() {
  const { userData } = useUser();

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading Hunter Profile...</Text>
      </View>
    );
  }

  const { level, xp, xpToNext, stats } = userData;

  return (
    <LinearGradient colors={['#0a0a0a', '#1a1a2e']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>HUNTER STATUS</Text>
          <Text style={styles.subtitle}>System Interface v2.0</Text>
        </View>

        {/* Level Card */}
        <View style={styles.levelCard}>
          <Text style={styles.levelLabel}>LEVEL</Text>
          <Text style={styles.levelValue}>{level}</Text>
          <XPBar current={xp} max={xpToNext} />
          <Text style={styles.xpText}>{xp} / {xpToNext} XP</Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>ATTRIBUTES</Text>
          
          <StatBar 
            label="STRENGTH" 
            value={stats.strength} 
            color="#ff4444" 
            icon="fitness-center"
          />
          <StatBar 
            label="INTELLIGENCE" 
            value={stats.intelligence} 
            color="#4488ff" 
            icon="psychology"
          />
          <StatBar 
            label="DISCIPLINE" 
            value={stats.discipline} 
            color="#ff8800" 
            icon="self-improvement"
          />
          <StatBar 
            label="ENDURANCE" 
            value={stats.endurance} 
            color="#44ff44" 
            icon="directions-run"
          />
        </View>

        {/* Quick Stats */}
        <View style={styles.quickStats}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>TOTAL POWER</Text>
            <Text style={styles.statValue}>
              {Object.values(stats).reduce((sum, stat) => sum + stat, 0)}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>RANK</Text>
            <Text style={styles.statValue}>E-RANK</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ff88',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  levelCard: {
    backgroundColor: 'rgba(0, 255, 136, 0.1)',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#00ff88',
  },
  levelLabel: {
    fontSize: 14,
    color: '#888',
    letterSpacing: 1,
  },
  levelValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00ff88',
    marginVertical: 10,
  },
  xpText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 10,
  },
  statsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    letterSpacing: 1,
  },
  quickStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ff88',
  },
  loadingText: {
    color: '#00ff88',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
  },
});
