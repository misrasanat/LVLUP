import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function QuestLogScreen() {
  const [quests] = useState([
    { id: 1, title: 'Morning Workout', xp: 50, completed: false, difficulty: 'Medium' },
    { id: 2, title: 'Read for 30 minutes', xp: 30, completed: true, difficulty: 'Easy' },
    { id: 3, title: 'Meditation', xp: 40, completed: false, difficulty: 'Easy' },
  ]);

  return (
    <LinearGradient colors={['#0a0a0a', '#1a1a2e']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>QUEST LOG</Text>
          <Text style={styles.subtitle}>Daily Missions & Tasks</Text>
        </View>

        <View style={styles.questsContainer}>
          {quests.map((quest) => (
            <View key={quest.id} style={[styles.questCard, quest.completed && styles.completedCard]}>
              <View style={styles.questHeader}>
                <Text style={styles.questTitle}>{quest.title}</Text>
                <MaterialIcons 
                  name={quest.completed ? 'check-circle' : 'radio-button-unchecked'} 
                  size={24} 
                  color={quest.completed ? '#00ff88' : '#666'} 
                />
              </View>
              <View style={styles.questDetails}>
                <Text style={styles.questXP}>+{quest.xp} XP</Text>
                <Text style={styles.questDifficulty}>{quest.difficulty}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton}>
          <MaterialIcons name="add" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Add New Quest</Text>
        </TouchableOpacity>
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
  questsContainer: {
    marginBottom: 30,
  },
  questCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#00ff88',
  },
  completedCard: {
    opacity: 0.6,
    borderLeftColor: '#666',
  },
  questHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  questTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
  },
  questDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questXP: {
    fontSize: 14,
    color: '#00ff88',
    fontWeight: 'bold',
  },
  questDifficulty: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    backgroundColor: 'rgba(0, 255, 136, 0.1)',
    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00ff88',
  },
  addButtonText: {
    fontSize: 16,
    color: '#00ff88',
    fontWeight: '600',
    marginLeft: 10,
  },
});
