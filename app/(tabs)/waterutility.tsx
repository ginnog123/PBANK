import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons'; // Import an icon for the back button

interface Provider {
  name: string;
  logo: any;
}

const WaterUtilityScreen = () => {
  const router = useRouter();

  const providers: Provider[] = [
    { name: 'Angat Water District', logo: require('../../assets/images/angatwater.jpg') }, 
    { name: 'Basic Water Enterprises, Inc', logo: require('../../assets/images/basicwater.jpg') }, 
    { name: 'Manila Water', logo: require('../../assets/images/manilawater.jpg') }, 
    { name: 'Maynilad', logo: require('../../assets/images/maynilad.jpg') }, 
    { name: 'PrimeWater', logo: require('../../assets/images/primewater.jpg') },
  ];

  const handleProviderPress = (providerName: string) => {
    router.push({
      pathname: '../BillsPayment', 
      params: { provider: providerName },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header with Centered Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Water Utility</Text>
        <View style={styles.backButtonPlaceholder} />
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search Billers"
        placeholderTextColor="#888"
      />

      {providers.map((provider) => (
        <TouchableOpacity
          key={provider.name}
          style={styles.providerButton}
          onPress={() => handleProviderPress(provider.name)}
        >
          <Image source={provider.logo} style={styles.providerLogo} />
          <Text style={styles.providerName}>{provider.name}</Text>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonPlaceholder: {
    width: 34,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchBar: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    color: '#fff',
  },
  providerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A8E063',
    padding: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
  providerLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  providerName: {
    flex: 1,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  arrow: {
    color: '#000',
    fontSize: 22,
  },
});

export default WaterUtilityScreen;