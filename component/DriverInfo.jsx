import { CaretCircleLeftIcon, StarIcon } from "phosphor-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DriverInfo({setConfirm,setDetailPanel}){
     return(
          <View style={{
               height:"100%",
               padding:10,
          }}>
               
            <TouchableOpacity
              onPress={() => {
                setConfirm(false),
                setDetailPanel(true)
              }}
            >
              <CaretCircleLeftIcon size={32} />
            </TouchableOpacity>
               <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    height:60,
                    borderBottomWidth:3,
                    borderBottomColor:"lightgrey",
               }}>
                    <Text style={styles.text}>
                         Meet at the pickup point
                    </Text>
                    <Text style={styles.text}>
                         2 min
                    </Text>
               </View>
               <View style={{
                    marginTop:10,
                    flexDirection:"row",
                    justifyContent:"space-between",
                    borderBottomWidth:3,
                    borderBottomColor:"lightgrey",
               }}>
               <Image src="https://static.vecteezy.com/system/resources/previews/052/627/537/non_2x/chauffeur-wearing-suit-and-cap-icon-illustration-representing-transportation-service-vector.jpg" style={{
                    height:120,
                    width:100,
                    borderRadius:50,

               }}></Image>
               <View style={{
                    alignItems:"flex-end",
                    gap:5,
                     
               }}>
               <Text style={styles.text}>DRIVER</Text>
               <Text style={{
                    fontSize:25,
                    fontWeight:"700",
               }}>UP215AXXXX</Text>
               <Text style={{
                    fontSize:18,
                    color:"grey",
                    fontWeight:"500"
               }}>Maruti Suzuki Alto</Text>
               <View style={{
                    flexDirection:"row",
               }}>
                  <StarIcon size={20} weight="fill" style={{
                    marginTop:2,
                  }} />
                  <Text style={{
                    fontSize:18,
                    color:"black",
                    fontWeight:"500"
               }}> 4.9</Text>
               </View>
               </View>
               </View>
               <View style={styles.connect}>
                    <Text style={{
                         ...styles.text,
                         marginLeft:10,
                         }}>
                         Contact:
                    </Text>
                    <Text style={{
                         ...styles.text,
                         color:"grey",
                    }}>
                        +91-94930XXXXX
                    </Text>
               </View>
                <View style={styles.connect}>
                    <Text style={{
                         ...styles.text,
                         marginLeft:10,
                         }}>
                         Email:
                    </Text>
                    <Text style={{
                         ...styles.text,
                         color:"grey",
                    }}>
                       username@gmail.com
                    </Text>
               </View>
               <View style={{
                   flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    marginTop:"10%",
               }}>
               <TouchableOpacity
              onPress={() => {

              }}
              style={{
                backgroundColor: "purple",
                height: 50,
                width: 300,
                borderRadius: 200,
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "white",
                }}
              >
                Make Payment
              </Text>
            </TouchableOpacity>
            </View>

          </View>
     )
}

const  styles=StyleSheet.create(
     {
          text:{
                fontSize:20,
                         fontWeight:"600",
          },
          connect:{
                    marginTop:15,
                    flexDirection:"row",
                    justifyContent:"space-between",

          }
     }
)