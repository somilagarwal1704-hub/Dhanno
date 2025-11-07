import { CaretCircleLeftIcon, UserIcon } from "phosphor-react-native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Detail from "./Detail";
export default function Ride({
  setPanel,
  setInput,
  setRidePagePanel,
  pickUp,
  destination,
  setPickUp,
  setDestination,
}) {
  const [detailPanel, setDetailPanel] = useState(false);
  const [id, setId] = useState("");
  function handleId(id) {
    setId(id);
  }
  function handleDetailPanel() {
    setDetailPanel(true);
  }
  return (
    <View style={{
      flex:1,
    }}>
      <View
        style={{
          height: 10,
          width: 50,
          backgroundColor: "lightgrey",
          borderRadius: 20,
          marginHorizontal: "44%",
          marginTop: 10,
        }}
      ></View>

      {!detailPanel && (
        <View>
          <View
            style={{
              marginTop: "10%",
              marginLeft: "5%",
              flexDirection: "row",
              gap: 5,
            }}
          >
            
            <TouchableOpacity
              onPress={() => {
                setPanel(true);
                setInput(true);
                setRidePagePanel(false);
              }}
            >
              <CaretCircleLeftIcon size={32} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
              }}
            >
              Choose Your Ride
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                handleDetailPanel();
                handleId("car");
              }}
            >
              <View style={{
                  flexDirection: "row",
                  borderWidth: 2,
                  width: "90%",
                  marginLeft: "5%",
                  marginTop: "5%",
                  borderRadius: 10,
                  height: 100,
                  backgroundColor: "white",
                }}
               
              >
                <Image
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
                  style={{
                    height: 90,
                    width: 100,
                  }}
                />
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      Car
                    </Text>
                    <UserIcon size={23} weight="fill" />
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      4
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                    }}
                  >
                    2 mins away
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Affordable,compact rides
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "900",
                      fontSize: 16,
                    }}
                  >
                    ₹150
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleDetailPanel();
                handleId("bike");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 2,
                  width: "90%",
                  marginLeft: "5%",
                  marginTop: "5%",
                  borderRadius: 10,
                  height: 100,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s"
                    style={{
                      height: 70,
                      width: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      Moto
                    </Text>
                    <UserIcon size={23} weight="fill" />
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      1
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                    }}
                  >
                    4 mins away
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Affordable,bike rides
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "900",
                      fontSize: 16,
                    }}
                  >
                    ₹50
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            

            <TouchableOpacity
              onPress={() => {
                handleDetailPanel();
                handleId("auto");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 2,
                  width: "90%",
                  marginLeft: "5%",
                  marginTop: "5%",
                  borderRadius: 10,
                  height: 100,
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    style={{
                      height: 70,
                      width: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    marginLeft: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      Auto
                    </Text>
                    <UserIcon size={23} weight="fill" />
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 15,
                      }}
                    >
                      3
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 12,
                    }}
                  >
                    5 mins away
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Affordable,auto rides
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "900",
                      fontSize: 16,
                    }}
                  >
                    ₹120
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {detailPanel && (
        <Detail
          setDetailPanel={setDetailPanel}
          pickUp={pickUp}
          destination={destination}
          id={id}
          setPickUp={setPickUp}
          setDestination={setDestination}
        />
      )}
    </View>
  );
}
