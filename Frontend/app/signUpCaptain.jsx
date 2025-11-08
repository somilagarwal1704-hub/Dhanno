import { Link, router } from "expo-router";
import { useState } from "react";
import { View,Text, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import {BASE_URL} from "@env";
import { UserDataContext } from "../context/userContext";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SignUpUser(){
const [password,setPassword]=useState("");
const [showPassword,setShowPassword]=useState(false);
const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [email,setEmail]=useState("");



const {user,setUser}=useContext(UserDataContext);

async function handleCreate(){
     console.log("create")
     if(!firstName?.trim() || !email?.trim()  || !password?.trim()){
          return;
     }
const newCaptain={
     fullname:{
          firstname:firstName,
          lastname:lastName,
     },
     email:email,
     password:password
}
console.log(newUser)
try {
  const response = await axios.post(`${BASE_URL}/captains/register`, newCaptain);
  console.log("Response:", response.data);

  if (response.status === 201) {
      const data = response.data;
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(data.user);
      router.push("/");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
} catch (err) {
  console.log("Error Response:", err.response?.data || err.message);
}
}


     return(
          <View style={{
               paddingTop:40,
               paddingHorizontal:20,
               backgroundColor:"white",
               flex:1,
               gap:15,
          }}>
             <View>
               <Text style={styles.logo}>Dhanno</Text>
             </View>
             <View style={styles.View}>
               <Text style={styles.text}>What's Your Name</Text>
               <View style={{
                    flexDirection:"row",
                    gap:10,
                    marginTop:10,
               }}>
                   <TextInput placeholder="First Name" placeholderTextColor={"rgba(19, 8, 8, 0.87)"}
                   value={firstName}
                    onChangeText={setFirstName} style={styles.input1}/>
                   <TextInput placeholder="Last Name" placeholderTextColor={"rgba(19, 8, 8, 0.87)"}
                   value={lastName}
                    onChangeText={setLastName} style={styles.input1}/>
               </View>
             </View>
             <View style={styles.View}>
               <Text style={styles.text}>Enter Your Email</Text>
               <View style={{
                    marginTop:10,
               }}>
                   <TextInput placeholder="email@gmail.com" placeholderTextColor={"rgba(19, 8, 8, 0.87)"}
                   value={email}
                    onChangeText={setEmail} style={styles.input2}/>
               </View>
               
             </View>
             <View style={styles.View}>
               <Text style={styles.text}>Enter Password</Text>
               <View style={{
                    marginTop:10,
                    flexDirection:"row",
               }}>
                   <TextInput placeholder="Password" placeholderTextColor={"rgba(19, 8, 8, 0.87)"} secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword} style={styles.input2}/>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{
                         position:"absolute",
                         right:8,
                         top:14
                    }}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"} // 👁️ toggle icon
            size={24}
            color="#2b2525ff"
          />
        </TouchableOpacity>
               </View>
             </View>
               
             <View style={styles.View}>
             <TouchableOpacity onPress={handleCreate} style={{ backgroundColor:"rgba(7, 12, 7, 1)",
                                      height:55,
                                      borderRadius:8,
                                      justifyContent:"center",
                                      marginTop:15,
                                 }} ><Text style={{
                                      textAlign:"center",
                                      fontSize:22,
                                      color:"white",
                                      fontWeight:"600",
                                 }}>Create Account</Text></TouchableOpacity>
                                 </View>
              <View style={{
                         flexDirection:"row",
                           justifyContent:"center",
                         gap:5
                    }}>
                    <Text style={{
                         fontSize:18,
                         fontWeight:"600"
                    }}>
                         Already have an account?
                    </Text>
                     <Link href={`/loginUser`} style={{
                         color:"blue",
                         fontSize:18,
                         fontWeight:"400",
                    }}>Login here</Link>
                    </View>
                    <View style={{
                        position:"absolute",
                        bottom:40,
                        left:20
                   
                    }}>
                         <Text style={{
                              textAlign:"center",
                              color:"red"
                         }}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</Text>
                    </View>
                                 
          </View>
     )
}
const styles=StyleSheet.create({
     logo:{
          fontSize:30,
          fontWeight:"800",
          marginBottom:10,
     },
     View:{
          marginTop:20,
          marginHorizontal:10,
     },
     text:{
          fontSize:20,
          fontWeight:"700"
     },
     input1:{
                              color:"black",
                              backgroundColor:"rgba(129, 132, 135, 0.2)",
                              borderRadius:5,
                              height:55,
                              width:"50%",
                              paddingHorizontal:20,
     },
     input2:{
                              color:"black",
                              backgroundColor:"rgba(129, 132, 135, 0.2)",
                              borderRadius:8,
                              height:55,
                              width:"100%",
                              paddingHorizontal:20,
     }
})