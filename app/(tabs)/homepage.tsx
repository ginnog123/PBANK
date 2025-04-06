import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router"; // Ensure you have expo-router installed

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Header */}
      <View style={{ backgroundColor: "#111", padding: 20, paddingTop: 50 }}>
        <Text
          style={{
            color: "#CDFF57",
            fontSize: 18,
            fontWeight: "bold",
            position: "relative",
            left: 100,
            top: -5,
          }}
        >
          Welcome Back!
        </Text>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
            position: "absolute",
            left: 20,
            top: 40,
          }}
        />
        <Ionicons
          name="notifications-outline"
          size={24}
          color="#CDFF57"
          style={{ position: "absolute", right: 20, top: 45 }}
        />
      </View>

      <Text
        style={{
          fontSize: 10,
          fontWeight: "bold",
          color: "white",
          marginTop: 10,
          textAlign: "left",
          position: "absolute",
          left: 20,
          top: 80,
        }}
      >
        CHECKING & SAVINGS
      </Text>

      {/* Account Info */}
      <View
        style={{
          backgroundColor: "#CDFF57",
          margin: 15,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 10, color: "#333", marginTop: 5 }}>
          DEBIT ACCOUNT ******12345
        </Text>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 5 }}>
          PHP 100,000,000
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
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

      {/* Updates Section */}
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: 20,
          borderRadius: 10,
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
          Recommended for you!
        </Text>
        <Text style={{ fontSize: 16, marginTop: 20, textAlign: "center" }}>
          NO UPDATES AVAILABLE
        </Text>
      </ScrollView>

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
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  actionText: {
    color: "#CDFF57",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});

export default HomeScreen;