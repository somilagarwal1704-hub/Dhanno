// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Tabs } from "expo-router";
// import { View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { GearIcon, MapPinIcon, PhoneIcon, SignOutIcon } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Account(){
  const [email,setEmail]=useState("");
  const [user,setUser]=useState(null);
  const users=[
    {
      "Name":"Somil😎",
      "Email":"somil17",
      "Address":"Shakti Nagar,Chandausi",
      "PhoneNo":"9410827XXX",
    },
     {
      "Name":"Harsh🐵",
      "Email":"harsh27",
      "Address":"Gaushala Road,Chandausi",
      "PhoneNo":"88791229XXX",
    },
     {
      "Name":"Om👻",
      "Email":"om2005",
      "Address":"Aadat Wale ,Bahjoi",
      "PhoneNo":"9045081XXX",
    }
  ]
  useEffect(()=>{
  AsyncStorage.getItem("user").then(function(storedUser){
   if(storedUser){
    const foundUser =users.find((item)=>
    item.Email===storedUser);
    setUser(foundUser);
     
}
})
  },[])
 

  function handleLogOut(){
    AsyncStorage.removeItem("user")
    .then(function(){
      router.replace("/select")
    })
  }
  return(
    <View style={{
      flex:1,
      backgroundColor:"rgba(171, 214, 245, 0.87)",
      alignItems:"center",
      justifyContent:"center",
    }}>
      <View style={{
                  backgroundColor: "rgba(253, 236, 236, 1)",
                    borderRadius:20,
                    width:280,
                    height:450,
                    marginTop:"10%",
               }}>
                <View  style={{
                  alignItems:"center",
                }}>
                <Image source={require("../../assets/dp.png")} style={{
                  height:150,
                  width:150,
                }}></Image>
                <Text style={{
                  fontSize:22,
                  fontWeight:"600",
                }}>
                  {user?.Name}
                </Text>
                <Text style={{
                  fontSize:17,
                  color:"grey",
                  
                }}>
                 {user ? `${user.Email}@gmail.com` : ""}
                </Text>
                </View>
                <View style={{
                  margin:"10%",
                  gap:10,
                }}>
                  <View style={{
                    flexDirection:"row",
                    gap:10,
                  }}>
                    <PhoneIcon size={28} weight="fill" color="grey"/>
                  <Text style={styles.text}>{user?.PhoneNo}</Text>
                  </View>
                  <View style={{
                    flexDirection:"row",
                    gap:10,
                  }}>
                   <MapPinIcon size={28} weight="fill" color="grey" />
                  <Text style={styles.text}>{user?.Address}</Text>
                  </View>
                 
                </View>
                <View style={{
                  margin:"10%",
                  marginTop:0,
                  gap:10,
                }}>
                  <TouchableOpacity>
                  <View style={{
                    flexDirection:"row",
                    gap:10,
                  }}>
                  <GearIcon size={28} weight="fill" />
                  <Text style={styles.text1}>Settings</Text>
                  </View>
                  </TouchableOpacity>
                   <TouchableOpacity onPress={handleLogOut}>
                  <View style={{
                    flexDirection:"row",
                    gap:10,
                  }}>
                  <SignOutIcon size={28} weight="fill" />
                  <Text style={styles.text1}>Sign Out</Text>
                  </View>
                  </TouchableOpacity>
                 
                </View>
                
               </View>
    {/* <View style={{
      flex:1,
     justifyContent:"flex-end"
    }}>
      <TouchableOpacity onPress={handleLogOut} style={{
        backgroundColor:"rgba(58, 61, 63, 0.87)",
        height:50,
        justifyContent:"center",
      }}>
        <Text style={{
          color:"white",
          textAlign:"center",
          fontSize:20,
          fontWeight:"600",
        }}>Log Out</Text>
      </TouchableOpacity>
    </View> */}
    </View>
  )
}
const  styles=StyleSheet.create({
  text:{
    fontSize:18,
    color:"grey",

  },
  text1:{
    fontSize:18,
    fontWeight:"500",

  }
})