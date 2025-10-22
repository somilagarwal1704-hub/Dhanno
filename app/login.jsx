import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { CarIcon } from "phosphor-react-native";
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login(){
     const [email,setEmail]=useState("");
     const [pass,setPass]=useState("");
     const [error,setError]=useState("");
     const users=[
     {
          Email:"somil17",
          Pass:"1704",
     },
     {
          Email:"harsh27",
          Pass:"2004",
     },
     {
          Email:"om2005",
          Pass:"2005",
     },

];
function handleLogin(){
 if(!email || !pass) return;
 const user=users.find(function(item){
     if(item.Email==email && item.Pass==pass){
          return true;
     }
 })
 if(user){
     AsyncStorage.setItem("user",(user.Email)) 
     .then(function(){
            router.replace("/");
     })
   
 }else{
     setError("Invalid Credentials");
 }
}
     return(
          
               <ImageBackground source ={require("../assets/back-image.jpg")} style={{
                 height:"100%",
                 alignItems:"center",
               }}>
                    <CarIcon size={90} weight="fill" color="white" style={{
                         marginTop:"30%",
                    }}/>
                    <Text style={{
                         color:"white",
                         fontSize:50,
                         fontWeight:"700"
                    }}>RideEase</Text>
                    <Text style={{
                         fontSize:20,
                         color:"rgba(183, 177, 177, 0.87)"
                    }}>
                         Your ride, your way
                    </Text>
                    <View style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                              color:"rgba(232, 226, 226, 0.87)",
                              fontSize:20,
                              fontWeight:"500"
                         }}>Email</Text>
                         <TextInput  value={email} onChangeText={setEmail} placeholder="Enter your email" placeholderTextColor={"rgba(232, 226, 226, 0.87)"} style={styles.input}/>
                    </View>
               
               <View  style={{
                         gap:10,
                         
                    }}>
                         <Text style={{
                              color:"rgba(232, 226, 226, 0.87)",
                              fontSize:20,
                              fontWeight:"500"
                         }}>Password</Text>
                         <TextInput value={pass} onChangeText={setPass} placeholder="Enter your password" placeholderTextColor={"rgba(232, 226, 226, 0.87)"} style={styles.input}/>
                    </View>

                    <TouchableOpacity onPressIn={handleLogin} style={{ backgroundColor:"rgba(94, 165, 231, 0.87)",
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
                         justifyContent:"space-between"
                    }}>
                    <TouchableOpacity style={{
                         marginTop:15,
                    }}><Text style={{
                         color:"rgba(183, 177, 177, 0.87)",
                         fontSize:18,

                    }}>Forgot Password?</Text></TouchableOpacity>
                     <Link href={`/Overboarding`} style={{
                         color:"rgba(98, 167, 232, 0.87)",
                         marginTop:15,
                         fontSize:19,
                         fontWeight:"600",
                    }}>Sign Up </Link>
                    </View>
                    {error &&(
                    <Text style={{
                         textAlign:"center",
                         color:"red",
                    }}>{error}</Text>)}
                    </View>
                  </ImageBackground>
         
     )
}
const styles=StyleSheet.create(
    {
     input:{
                              color:"white",
                              backgroundColor:"rgba(255, 255, 255, 0.1)",
                              borderRadius:8,
                              height:45,
                              paddingLeft:15,
                         }
                    }
)