import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import DriverInfo from "./DriverInfo";

export default function LookingForDriver({setConfirm,setDetailPanel}){
     const [display,setDisplay]=useState(true);

     useEffect(()=>{
        const timer=setTimeout(()=>{
               setDisplay(false);
               router.replace('/');
          },3000)

          return ()=> clearTimeout(timer);
     },[])

     if(!display) return (
          <View>
               <DriverInfo setConfirm={setConfirm} setDetailPanel={setDetailPanel} />
          </View>
     )

     return(
          <View style={{
              height:"100%",
              alignItems:"center",
          }}>
                    <Text style={{
                    fontSize:25,
                    fontWeight:"700",
                    textAlign:"center",
                    marginBottom:30,
               }}>
                    Looking For Driver
               </Text>

                    <Image src="https://thumbs.dreamstime.com/b/black-white-icon-driver-behind-wheel-simple-silhouette-cap-uniform-hands-steering-378577106.jpg" style={{
                         height:250,
                         width:200,
                         marginBottom:30,
                    }}></Image>
                    <ActivityIndicator size="large" color="#0000ff" />
          </View>
               
     )
}