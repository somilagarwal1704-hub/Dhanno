import { LinearGradient } from "expo-linear-gradient";
import { UserIcon } from "phosphor-react-native";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

export default function Select(){
     function loginPassenger(){
          router.push('/loginUser')
     }

      function loginCaptain(){
          router.push('/loginCaptain')
     }
     return(
           <LinearGradient 
                              colors={["#06b6d4","#3b82f6"]} style={{
                                   flex:1,
                                   alignItems:"center",
                              }}>
          <SafeAreaView style={{
               flex:1,
               marginTop:"60%",
               alignItems:"center",
               gap:10,
          }}>
               <Text style={{
                    color:"white",
                    fontSize:60,
                    fontWeight:"500"
               }}>
                    Welcome...
               </Text>
               <View style={{
                    gap:10,
               }}>
                    <TouchableOpacity onPress={loginPassenger} style={styles.touch}>
                         <View style={{
                              flexDirection:"row",
                         }}>
                         <UserIcon weight="fill" size={32} color="white" />
                         <Text style={styles.text}> Login as a Passenger</Text>
                         </View>
                    </TouchableOpacity>
                      <TouchableOpacity  onPress={loginCaptain} style={styles.touch}>
                         <View style={{
                              flexDirection:"row",
                         }}>
                         <Image  source={require("../assets/captain.png")} style={{
                              height:30,
                              width:35,
                         }}/>
                         <Text style={styles.text}> Login as a Captain</Text>
                         </View>
                    </TouchableOpacity>
               </View>
          </SafeAreaView>
          </LinearGradient>
     )
}
const styles= StyleSheet.create(
     {
          touch:{
               backgroundColor: "rgba(70, 142, 190, 0.5)",
               height:70,
               width:350,
               borderRadius:20,
               alignItems:"center",
               justifyContent:"center",
               marginTop:20,

          },
          text:{
               color:"white",
               fontSize:20,
               fontWeight:"500"
          }
     }
)