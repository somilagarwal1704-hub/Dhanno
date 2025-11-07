import { Ionicons } from "@expo/vector-icons";
import {BASE_URL} from "@env";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { CarIcon } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserDataContext } from "../context/userContext";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login(){
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     const [error,setError]=useState("");
     const [showPassword,setShowPassword]=useState(false)
    

     const {user,setUser}=useContext(UserDataContext);
async function handleLogin(){
 if(!email || !password) return;
 
 const user={
     email:email,
     password:password
 }
 try{
 const response=await axios.post(`${BASE_URL}/users/login`,user)

 console.log("Response:", response.data);

 if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      router.push("/Homepage");
    }

    setEmail("");
    setPassword("");


 }catch(err){
     const error=JSON.stringify(err.response?.data.message);
 setError(error);
 }
}
     return(
          

                  <LinearGradient 
                                   colors={["#06b6d4","#3b82f6"]} style={{
                                        flex:1,
                                        alignItems:"center",
                                   }}>
                    <CarIcon size={90} weight="fill" color="white" style={{
                         marginTop:"30%",
                    }}/>
                    <Text style={{
                         color:"white",
                         fontSize:50,
                         fontWeight:"700"
                    }}>Dhanno</Text>
                    <Text style={{
                         fontSize:25,
                         fontWeight:"500",
                         color:"rgba(247, 243, 54, 0.87)"
                    }}>
                         Your Ride, Your Way
                    </Text>
                    <View style={{
                  backgroundColor: "rgba(115, 190, 240, 0.5)",
                    borderRadius:20,
                    width:330,
                    height:380,
                    padding:30,
                    gap:10,
                    marginTop:"10%",
               }}>
                    <View  style={{
                         gap:10,
                         
                    }}>
                         <Text style={{
                              color:"rgba(255, 255, 247, 0.98)",
                              fontSize:20,
                              fontWeight:"500"
                         }}>Email</Text>
                         <TextInput  value={email} onChangeText={setEmail} placeholder="Enter your email" placeholderTextColor={"rgba(247, 242, 242, 0.87)"} style={styles.input}/>
                    </View>
               
               <View  style={{
                         gap:10,
                         
                    }}>
                         <Text style={{
                              color:"rgba(250, 248, 248, 0.87)",
                              fontSize:20,
                              fontWeight:"500"
                         }}>Password</Text>
                <View style={{
                    marginTop:10,
                    flexDirection:"row",
               }}>
                         <TextInput value={password} secureTextEntry={!showPassword} onChangeText={setPassword} placeholder="Enter your password" placeholderTextColor={"rgba(247, 242, 242, 0.87)"} style={styles.input}/>
                         <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{
                         position:"absolute",
                         right:8,
                         top:8
                    }}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"} // 👁️ toggle icon
            size={24}
            color="#888"
          />
        </TouchableOpacity>
        </View>
                    </View>

                    <TouchableOpacity onPressIn={handleLogin} style={{ backgroundColor:"rgba(10, 18, 10, 0.87)",
                         height:50,
                         borderRadius:8,
                         justifyContent:"center",
                         marginTop:15,
                    }} ><Text style={{
                         textAlign:"center",
                         fontSize:22,
                         color:"white",
                         fontWeight:"600",
                    }}>Login</Text></TouchableOpacity>
                    <View style={{
                         flexDirection:"row",
                         justifyContent:"center",
                         gap:5
                    }}>
                    <Text style={{
                         fontSize:14,
                    }}>
                         New here?
                    </Text>
                     <Link href={`/signUpUser`} style={{
                         color:"blue",
                         fontSize:14,
                         fontWeight:"400",
                    }}>Create New Account </Link>
                    </View>
                    {error &&(
                    <Text style={{
                         textAlign:"center",
                         color:"red",
                         fontSize:17
                    }}>{error}</Text>)}
                    </View>
               </LinearGradient>
         
     )
}
const styles=StyleSheet.create(
    {
     input:{
                              color:"white",
                              backgroundColor:"rgba(239, 244, 247, 0.2)",
                              borderRadius:8,
                              height:45,
                              width:"100%",
                              paddingLeft:15,
                         }
                    }
)