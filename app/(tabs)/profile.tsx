import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Ensure expo-router is installed

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      {/* Profile Header */}
      <View style={styles.card}>
        <Ionicons name="person-circle" size={60} color="black" style={styles.icon} />
        <Text style={styles.subtitle}>It's a good day for banking.</Text>
        <Text style={styles.name}>RIEYAN JIN WOO</Text>
      </View>

      {/* Account Information */}
      <View style={styles.card}>
        <Text style={styles.label}>ACCOUNT NUMBER</Text>
        <View style={styles.row}>
          <Text style={styles.value}>0121 6651 6516 184</Text>
          <TouchableOpacity>
            <Feather name="copy" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.label}>Contact Number:</Text>
          <View style={styles.row}>
            <Text style={styles.value}>+63 989 456 213</Text>
            <TouchableOpacity>
              <MaterialIcons name="edit" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>E-mail Address:</Text>
          <View style={styles.row}>
            <Text style={styles.value}>rieyanjinwoo</Text>
            <TouchableOpacity>
              <MaterialIcons name="edit" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Password:</Text>
          <View style={styles.row}>
            <Text style={styles.value}>********</Text>
            <TouchableOpacity>
              <MaterialIcons name="edit" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>DELETE ACCOUNT</Text>
        </TouchableOpacity>
      </View>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#C6FF33',
    borderRadius: 10,
    padding: 20, // Increased padding for better spacing
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  value: {
    color: 'black',
    fontSize: 14,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10, // Added spacing between rows
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  logoutButton: {
    backgroundColor: '#C6FF33',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#C6FF33',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 8,
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
});