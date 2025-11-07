import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, Text, View } from "react-native";

export default function Splash(){
//      useEffect(function(){
//            AsyncStorage.getItem("user")
//     .then(function(user){
//       if(user){
//       router.replace("/")
//       }else{
//         router.replace("/Overboarding");
//       }
//     })
//      },[])
     return(
          <LinearGradient 
          colors={["#06b6d4","#3b82f6"]} style={{
               flex:1,
               alignItems:"center",
               justifyContent:"center",
          }}>
               <Image source={require("../assets/logo.png")} style={{
                    height:180,
                    width:200,
               }} />
               <View style={{
                    gap:5,
               }}>
               <Text style={{
                    fontSize:80,
                    fontWeight:"900",
                    color:"white",
                    letterSpacing:2,
                
               }}>Dhanno</Text>
                 <Text style={{
                    fontSize:20,
                    fontWeight:"500",
                    color:"white",
                    textAlign:"center",
                    letterSpacing:2,
               }}>Your Ride,Your Way</Text>
               </View>
               {/* // <Image source={require("../assets/splash-screen1.jpg")} style={{
                    height:"100%",
                    width:"100%",
                    resizeMode:"cover",
               }} /> */}

                    </LinearGradient>
          
     )
}