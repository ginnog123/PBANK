import { Link } from "expo-router";
import {  
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  KeyboardAvoidingView, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Platform, 
  Pressable,
  Image
} from "react-native";

export default function Login() {
    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "padding"} 
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.inner}>
            <Text style={styles.subtitle}>Welcome Back!</Text>

            <Image 
            source={require("../../assets/images/D2.png")}
            style={{ position: "absolute", right: -250, top: -350, width: 700, height: 375}} 
            />
             <Image 
            source={require("../../assets/images/logo.png")}
            style={{ position: "absolute", left: 80, top: -120, width: 200, height: 80, borderRadius: 50 }} 
            />
            <Image 
            source={require("../../assets/images/D3.png")}
            style={{ position: "absolute", right: -40, top: 300, width: 120, height: 120}} 
            />
            <Image 
            source={require("../../assets/images/D3.png")}
            style={{ position: "absolute", right: -20, top: 280, width: 120, height: 120}} 
            />
            <Image 
            source={require("../../assets/images/D3.png")}
            style={{ position: "absolute", right: -50, top: 340, width: 140, height: 140}} 
            />

        

        
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              placeholderTextColor="gray"
              keyboardType="numeric"
            />
  
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
            />

            
            <Link href="/fp" style={styles.forgotPassword}>Forgot Password?</Link>
            <Link href="/signup" style={styles.signup}>Create Account</Link>
  
            <Pressable style={styles.button} onPress={() => console.log("Logging in...")}>
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
  
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  inner: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    fontStyle: "italic",
    marginBottom: 20,
  },
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  forgotPassword: {
    color: "#CDFF57", 
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 15,
    position: "absolute",
    right: 50,
    top: 240,
  },
  signup: {
    color: "#CDFF57", 
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 15,
    position: "absolute",
    left: 50,
    top: 240,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#CDFF57",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
