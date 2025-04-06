import { View, Text, Image} from "react-native";
import { Link } from "expo-router"; 

export default function PBANKHOME() {
  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black"}}>
    <Image 
  source={require("../../assets/images/logo.png")}
  style={{ position: "absolute", left: 80, top: 100, width: 200, height: 80, borderRadius: 50 }} 
/>
<Image 
source={require("../../assets/images/D1.png")}
  style={{ position: "absolute", right: -60, top: 320, width: 650, height: 650}} 
/>
<Text style={{ position: "absolute", left: 20, top: 260, color: "white", fontWeight:"bold" }}>Welcome To...</Text>
    <Text style={{ position: "absolute", left: 20, top: 280, color: "white", fontWeight:"bold", fontSize: 60, fontStyle:"italic"}}>POWERED</Text>
    <Text style={{ position: "absolute", left: 20, top: 340, color: "white", fontWeight:"bold", fontSize: 60, fontStyle:"italic"}}>BANK</Text>
    <Link href='/login' style={{ position: "absolute", left: 80, top: 600, backgroundColor: "#CDFF57", padding: 10, borderRadius: 10, width: 200, textAlign: "center", color: "black", fontWeight: "bold"}}>Get started</Link>

     </View>};

