import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Ensure expo-router is installed

const TransferFundsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Transfers', 'Bills Payment'];

  const recipients: any[] = [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <View style={styles.notificationCircle}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsBar}>
      <View style={{ alignItems: "center" }}>
      <Ionicons name="qr-code-outline" size={32} color="#CDFF57" />
      <Text style={styles.actionText}>Scan QR</Text>
      </View>
      <Link href="/(tabs)/savings" style={{ alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
      <Ionicons name="trending-up-outline" size={32} color="#CDFF57" />
      <Text style={styles.actionText}>Invest</Text>
      </View>
      </Link>
      <Link href="/(tabs)/paybills" style={{ alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
      <Ionicons name="receipt-outline" size={32} color="#CDFF57" />
      <Text style={styles.actionText}>Pay Bills</Text>
      </View>
      </Link>
      <Link href="/(tabs)/savings" style={{ alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
      <Ionicons name="wallet-outline" size={32} color="#CDFF57" />
      <Text style={styles.actionText}>Savings</Text>
      </View>
      </Link>
      </View>

      <View style={styles.recipientsContainer}>
        <Text style={styles.recipientsTitle}>Saved recipients</Text>

        <View style={styles.tabs}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <ScrollView style={styles.recipientsList}>
          {recipients.length === 0 ? (
            <Text style={styles.emptyListText}>No saved recipients.</Text>
          ) : (
            recipients.map((recipient) => (
              <TouchableOpacity key={recipient.id} style={styles.recipientItem}>
                <Text style={styles.recipientName}>{recipient.name}</Text>
                <Text style={styles.recipientAccount}>{recipient.account}</Text>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.footer}>
        <Link href="/(tabs)/homepage" style={{ alignItems: 'center' }}>
          <Ionicons name="home" size={24} color="black" />
        </Link>
        <Link href="/(tabs)/transferfund" style={{ alignItems: 'center' }}>
          <Ionicons name="swap-horizontal" size={24} color="black" />
        </Link>
        <Link href="/(tabs)/history" style={{ alignItems: 'center' }}>
          <Ionicons name="document-text" size={24} color="black" />
        </Link>
        <Link href="/(tabs)/profile" style={{ alignItems: 'center' }}>
          <Ionicons name="person" size={24} color="black" />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: '#CDFF57',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 8,
  },
  notificationCircle: {
    backgroundColor: '#CDFF57',
    borderRadius: 20,
    padding: 8,
  },
  actionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionCircle: {
    backgroundColor: '#CDFF57',
    borderRadius: 24,
    padding: 8,
  },
  actionText: {
    color: '#CDFF57',
    marginTop: 4,
  },
  recipientsContainer: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flex: 1,
  },
  recipientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#444',
  },
  activeTab: {
    backgroundColor: '#CDFF57',
  },
  tabText: {
    color: '#B0B0B0',
  },
  activeTabText: {
    color: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: '#B0B0B0',
  },
  recipientsList: {
    flex: 1,
  },
  recipientItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  recipientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B0B0B0',
  },
  recipientAccount: {
    color: 'gray',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#C6FF33',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  emptyListText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#B0B0B0',
  },
});

export default TransferFundsScreen;