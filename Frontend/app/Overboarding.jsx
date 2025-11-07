import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ArrowRightIcon } from "phosphor-react-native";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Overboarding(){
     const[currentIndex,setCurrentIndex]=useState(0);

     const boardingScreen=[
          {
               "text1":"Book Rides",
               "text2":"Instantly",
               "image":require("../assets/logo3.png")
          },
           {
               "text1":"Track Your",
               "text2":"Driver Live",
               "image":require("../assets/logo22.png")
          },
          {
               "text1":"Easy",
               "text2":"Payments",
               "image":require("../assets/paylogo.png")
          }

]
     function handleNext(){
              if(currentIndex < boardingScreen.length-1){
               setCurrentIndex(currentIndex+1);
              }else{
               router.replace("/select")
              }
          }
     return(
           <LinearGradient 
                    colors={["#06b6d4","#3b82f6"]} style={{
                         flex:1,
                         alignItems:"center",
                    }}>
                        <View style={{
                              marginBottom:"10%",
                              marginTop:"30%"
                         }}>
                         <Text style={styles.text}>{boardingScreen[currentIndex].text1}</Text>
                           <Text style={styles.text}>{boardingScreen[currentIndex].text2}</Text>
                         </View>
                          <Image source={boardingScreen[currentIndex].image} style={{
                              height:400,
                              width:350,
                         }} />
                         
                         <TouchableOpacity onPress={handleNext} style={{
                                alignItems:"center",
                          }}>
                        
                       
                              {(currentIndex===boardingScreen.length-1)? <View style={{
                                   height:55,
                                   width:300,
                                   backgroundColor:"rgba(248, 237, 237, 0.87)",
                                   alignItems:"center",
                                   justifyContent:"center",
                                   marginTop:"12%",
                                   borderRadius:200,
                              }}><Text style={{
                                   color:"rgba(20, 62, 200, 0.87)",
                                   fontSize:20,
                                   fontWeight:"600",
                              }}>Get Started</Text></View>:
                         <View style={{
                              flexDirection:"row",
                              marginTop:20,
                              gap:8,
                         }}>
                             <Text style={{
                              fontSize:20,
                              color:"white",
                              fontWeight:"600"
                         }}>   Click to move next  
                         </Text>
                         <ArrowRightIcon size={28} weight="bold" color="white" />
                         </View>}
          </TouchableOpacity>

                              </LinearGradient>
        
     )
}
const styles=StyleSheet.create({
     text:{
                              fontSize:50,
                              fontWeight:"600",
                              color:"rgba(240, 231, 231, 0.87)",
                              letterSpacing:1,
                              textAlign:"center",
                          
                         }
})