import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const BillsPayment = () => {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (!accountNumber || !billAmount || !fullName || !email) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }
    router.push({
      pathname: "../PaymentConfirm",
      params: {
        accountNumber,
        billAmount,
      },
    });
    
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Bills</Text>
      </View>

      {/* Logo */}
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Account Number"
          placeholderTextColor="#888"
          value={accountNumber}
          onChangeText={setAccountNumber}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bill Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Bill Amount"
          placeholderTextColor="#888"
          value={billAmount}
          onChangeText={setBillAmount}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          placeholderTextColor="#888"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 50,
    alignSelf: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 12,
    color: "#fff",
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#A8E063",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginTop: 30,
  },
  continueButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BillsPayment;
