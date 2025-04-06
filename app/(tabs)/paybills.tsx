import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PayBillsScreen = () => {
  const router = useRouter();

  const handleInternetPress = () => {
    router.push('/internet');
  };

  const handleWaterPress = () => {
    router.push('/waterutility');
  };

  const handleElectricPress = () => {
    router.push('/electricutility');
  };

  const handleTransportationPress = () => {
    router.push('/transportation');
  };

  const handleStreamingPress = () => {
    router.push('/streamingservice');
  };

  const handleGameCreditsPress = () => {
    router.push('/gamecredit');
  };

  const handleTvCableBillsPress = () => {
    router.push('/cables');
  };

  const handleDirectSendPress = () => {
    router.push('/BillsPayment');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#CDFF57" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pay Bills</Text>
        <TouchableOpacity style={styles.optionsButton}>
          <Ionicons name="apps" size={24} color="#CDFF57" />
        </TouchableOpacity>
      </View>

      <View style={styles.logoSection}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.bankName}>POWERED BANK</Text>
      </View>

      <View style={styles.actionSection}>
        <Text style={styles.actionTitle}>Action</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="qr-code-outline" size={24} color="black" />
            <Text style={styles.actionButtonText}>Scan QR Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={handleDirectSendPress}>
            <Ionicons name="send" size={24} color="black" />
            <Text style={styles.actionButtonText}>Direct Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.billsSection}>
        <View style={styles.billsHeader}>
          <Text style={styles.billsTitle}>Bills, Recharge and more</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.billsGrid}>
          <TouchableOpacity style={styles.billItem} onPress={handleElectricPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="flash" size={24} color="black" />
            </View>
            <Text style={styles.billText}>Electricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billItem} onPress={handleWaterPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="water" size={24} color="black" />
            </View>
            <Text style={styles.billText}>Water</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billItem} onPress={handleInternetPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="wifi" size={24} color="black" />
            </View>
            <Text style={styles.billText}>Internet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billItem} onPress={handleStreamingPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="settings-outline" size={24} color="black" />
            </View>
            <Text style={styles.billText}>Streaming Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billItem} onPress={handleTvCableBillsPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="tv" size={24} color="black" />
            </View>
            <Text style={styles.billText}>TV & Cable Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billItem} onPress={handleGameCreditsPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="game-controller" size={24} color="black" />
            </View>
            <Text style={styles.billText}>Gaming Credits</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.billItem} onPress={handleTransportationPress}>
            <View style={styles.billIconContainer}>
              <Ionicons name="bus" size={24} color="black" />
            </View>
            <Text style={styles.billText}>Transportation</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#CDFF57',
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionsButton: {
    padding: 8,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  bankName: {
    color: '#CDFF57',
    fontSize: 16,
    marginTop: 10,
  },
  actionSection: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginTop: 20,
    borderRadius: 10,
  },
  actionTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: '#CDFF57',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionButtonText: {
    color: 'black',
    marginLeft: 8,
  },
  billsSection: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
    marginBottom: 20,
  },
  billsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  billsTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#000',
  },
  billsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  billItem: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 20,
  },
  billText: {
    color: '#000',
    marginTop: 8,
    textAlign: 'center',
  },
  billIconContainer: {
    backgroundColor: '#CDFF57',
    borderRadius: 30,
    padding: 10,
    marginBottom: 8,
  },
});

export default PayBillsScreen;

