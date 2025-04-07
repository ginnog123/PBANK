import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SavingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#C6FF00" />
        </TouchableOpacity>
        <Text style={styles.title}>Savings</Text>
        <TouchableOpacity style={styles.withdrawButton}>
          <Text style={styles.withdrawText}>Withdraw</Text>
        </TouchableOpacity>
      </View>

      {/* Total Savings Card */}
      <View style={styles.savingsCard}>
        <Text style={styles.totalLabel}>Total savings</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceText}>PHP 100,000,000</Text>
          <Ionicons name="eye" size={20} color="black" />
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Savings Activities */}
      <View style={styles.activitiesSection}>
        <Text style={styles.activitiesTitle}>Savings Activities</Text>
        <ScrollView>
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.activityPlaceholder} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SavingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  withdrawButton: {
    backgroundColor: '#C6FF00',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  withdrawText: {
    color: '#000000',
    fontWeight: '600',
  },
  savingsCard: {
    backgroundColor: '#C6FF00',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
  },
  totalLabel: {
    color: '#000000',
    fontSize: 12,
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 25,
  },
  actionText: {
    color: '#C6FF00',
    fontWeight: '600',
  },
  activitiesSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  activitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  activityPlaceholder: {
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 12,
  },
});
