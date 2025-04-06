import { useState } from "react";
import { 
  View, Text, TextInput, StyleSheet, Pressable, Platform 
} from "react-native";
import { Link } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

export default function SignUp() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <Pressable style={styles.backButton}>
        <Ionicons name="arrow-back-circle" size={30} color="#CDFF57" />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Hi there!</Text>
      <Text style={styles.heading}>Let’s Get Started</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Ionicons name="card-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Account Number or Debit Card Number" placeholderTextColor="gray" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Email linked to Account" placeholderTextColor="gray" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Mobile number linked to Account" placeholderTextColor="gray" keyboardType="phone-pad" />
      </View>

      {/* Date of Birth */}
      <Text style={styles.dobLabel}>Date of Birth:</Text>
      <View style={styles.dobContainer}>
        <Picker selectedValue={selectedMonth} style={styles.picker} onValueChange={(itemValue) => setSelectedMonth(itemValue)}>
          <Picker.Item label="Month" value="" />
          <Picker.Item label="January" value="Jan" />
          <Picker.Item label="February" value="Feb" />
          <Picker.Item label="March" value="Mar" />
          {/* Add more months */}
        </Picker>
        <Picker selectedValue={selectedDay} style={styles.picker} onValueChange={(itemValue) => setSelectedDay(itemValue)}>
          <Picker.Item label="Day" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          {/* Add more days */}
        </Picker>
        <Picker selectedValue={selectedYear} style={styles.picker} onValueChange={(itemValue) => setSelectedYear(itemValue)}>
          <Picker.Item label="Year" value="" />
          <Picker.Item label="2000" value="2000" />
          <Picker.Item label="2001" value="2001" />
          <Picker.Item label="2002" value="2002" />
          {/* Add more years */}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="gray" secureTextEntry />
      </View>

      {/* Create Account Button */}
      <Pressable style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create an Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60,
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "black",
  },
  dobLabel: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  dobContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  picker: {
    width: "32%",
    backgroundColor: "white",
    borderRadius: 8,
  },
  createAccountButton: {
    backgroundColor: "#CDFF57",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  createAccountText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
