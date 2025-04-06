import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Ensure expo-router is installed

interface Transaction {
  type: string;
  details?: string;
  amount: string;
  status: string;
  transactionId: string;
  date: string;
  time: string;
}

const TransactionHistoryScreen = () => {
  const transactions: Transaction[] = [
    {
      type: 'Cash - in',
      details: 'From ABC Bank ATM',
      amount: '$ 100.00',
      status: 'Confirmed',
      transactionId: '564925374920',
      date: '17 Sep 2023',
      time: '10:34 AM',
    },
    {
      type: 'Cashback from purchase',
      details: 'Purchase from Amazon.com',
      amount: '$ 1.75',
      status: 'Confirmed',
      transactionId: '685746354219',
      date: '16 Sep 2023',
      time: '16:08 PM',
    },
  ];

  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIcon}>
        <Ionicons name="receipt-outline" size={24} color="#CDFF57" />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionType}>{item.type}</Text>
        {item.details && (
          <Text style={styles.transactionDetailsText}>{item.details}</Text>
        )}
        <Text style={styles.transactionId}>Transaction ID: {item.transactionId}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.dateTime}>
          {item.date} {item.time}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Transaction History</Text>
      
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#CDFF57" />
        <TextInput style={styles.searchText} placeholder="Search Transactions" placeholderTextColor="#B0B0B0" />
      </View>

      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyTransactions}>
            <Text style={styles.emptyText}>No transactions yet.</Text>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.footer}>
        <Link href="/(tabs)/homepage" style={{ alignItems: "center" }}>
          <Ionicons name="home" size={24} color="black" />
        </Link>
        <Link href="/(tabs)/transferfund" style={{ alignItems: "center" }}>
          <Ionicons name="swap-horizontal" size={24} color="black" />
        </Link>
        <Link href="/(tabs)/history" style={{ alignItems: "center" }}>
          <Ionicons name="document-text" size={24} color="black" />
        </Link>
        <Link href="/(tabs)/profile" style={{ alignItems: "center" }}>
          <Ionicons name="person" size={24} color="black" />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 5,
  },
  headerTitle: {
    color: '#CDFF57',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    position: 'relative',
    top: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  searchText: {
    color: '#CDFF57',
    marginLeft: 10,
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  transactionIcon: {
    marginRight: 16,
  },
  transactionDetails: {
    flex: 2,
  },
  transactionType: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  transactionDetailsText: {
    color: 'black',
    fontSize: 12,
  },
  transactionId: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  transactionAmount: {
    flex: 1,
    alignItems: 'flex-end',
  },
  amount: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  status: {
    color: 'green',
    fontSize: 12,
    padding: 5,
    backgroundColor: '#CDFF57',
    borderRadius: 20,
    fontWeight: 'bold',
  },
  dateTime: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#C6FF33",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  emptyTransactions: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    color: '#B0B0B0',
    fontSize: 16,
  },
});

export default TransactionHistoryScreen;