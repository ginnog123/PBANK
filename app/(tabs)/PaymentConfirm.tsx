import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const PaymentConfirm = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Extract values with proper handling
  const accountNumber = typeof params.accountNumber === "string" ? params.accountNumber : "N/A";
  const billAmount = typeof params.billAmount === "string" ? parseFloat(params.billAmount) || 0 : 0;

  const convenienceFee = 10.0;
  const totalAmount = billAmount + convenienceFee;

  const handlePay = () => {
    router.push({
      pathname: "../PaymentSuccessful",
      params: { totalAmount: totalAmount.toFixed(2) },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm Payment</Text>
      </View>

      {/* Payment Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Account Number</Text>
          <Text style={styles.inputValue}>{accountNumber}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Bill Amount</Text>
          <Text style={styles.inputValue}>₱{billAmount.toFixed(2)}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Convenience Fee</Text>
          <Text style={styles.inputValue}>₱{convenienceFee.toFixed(2)}</Text>
        </View>
      </View>

      {/* Total Amount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>₱{totalAmount.toFixed(2)}</Text>
      </View>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
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
    marginBottom: 20,
    justifyContent: "center",
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
  detailsContainer: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  detailLabel: {
    color: "#fff",
    fontSize: 16,
  },
  inputValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  totalLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    color: "#A8E063",
    fontSize: 18,
    fontWeight: "bold",
  },
  payButton: {
    backgroundColor: "#A8E063",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  payButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default PaymentConfirm;
