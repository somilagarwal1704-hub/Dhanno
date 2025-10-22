import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import Splash from "../component/Splash";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Lay(){
     const [showSplash,setShowSplash]=useState(true);

     useEffect(function(){
          const timer=setTimeout(()=>{
       const user= AsyncStorage.getItem("user")
    .then(function(user){
      if(user){
      router.replace("/")
      }else{
        router.replace("/Overboarding");
      }
    });
     setShowSplash(false);
},2000);
          return()=>clearTimeout(timer);
     },[])
      if(showSplash){
          return <Splash />
     }

     return(
          <GestureHandlerRootView style={{
               flex:1,
          }}>
          <Stack screenOptions={{headerShown:false}} />
          </GestureHandlerRootView>
       
     )
}