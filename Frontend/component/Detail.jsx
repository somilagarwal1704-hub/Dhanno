import {
  CaretCircleLeftIcon,
  CoinsIcon,
  MapPinSimpleAreaIcon,
  MapPinSimpleIcon,
} from "phosphor-react-native";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LookingForDriver from "./LookingForDriver";

export default function Detail({
  setDetailPanel,
  id,
  pickUp,
  destination,
  setDestination,
  setPickUp,
}) {
  const detail = [
    {
      id: "car",
      poster:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png",
      current: pickUp,
      dest: destination,
    },
    {
      id: "bike",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s",
      current: pickUp,
      dest: destination,
    },
    {
      id: "auto",
      poster:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
      current: pickUp,
      dest: destination,
    },
  ];
  const selectedData = detail.find((item) => item.id === id);

  const [pickUploc,pickUpadd]=(selectedData.current||"").split(",");
  const [destinationloc,destinationadd]=(selectedData.dest||"").split(",");
  
  const [confirm, setConfirm] = useState(false);

  function handleConfirm() {
    setConfirm(true);
  }

  function reset() {
    setPickUp("");
    setDestination("");
  }
  return (
    <View>
      {!confirm && (
        <View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 35,
              marginLeft: 20,
              gap: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setDetailPanel(false);
              }}
              style={{}}
            >
              <CaretCircleLeftIcon size={32} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
              }}
            >
              Confirm Your Ride
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "95%",
                height: 3,
                backgroundColor: "purple",
                borderRadius: 20,
                marginTop: 20,
              }}
            ></View>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                shadowColor: "lightblue", // shadow color
                shadowOffset: { width: 0, height: 5 }, // shadow position
                shadowOpacity: 0.3, // shadow visibility
                shadowRadius: 6, // blur radius
                elevation: 10, // Android shadow
                borderRadius: 20, // match image roundness if needed
              }}
            >
              <Image
                src={selectedData.poster}
                style={{
                  height: 240,
                  width: 350,
                  marginVertical: 30,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 3,
              backgroundColor: "lightgrey",
              borderRadius: 20,
            }}
          ></View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <MapPinSimpleIcon
                size={32}
                weight="fill"
                style={{ marginTop: 10 }}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                gap: 5,
                justifyContent: "center",
                height: 70,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                }}
              >
                {pickUploc}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "grey",
                }}
              >
                {pickUpadd}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 3,
                backgroundColor: "lightgrey",
                borderRadius: 20,
                marginVertical: 15,
              }}
            ></View>
          </View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <MapPinSimpleAreaIcon
                size={32}
                weight="fill"
                style={{ marginTop: 10 }}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                justifyContent: "center",
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                }}
              >
                {destinationloc}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "grey",
                }}
              >
                {destinationadd}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 3,
                backgroundColor: "lightgrey",
                borderRadius: 20,
                marginVertical: 20,
              }}
            ></View>
          </View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <CoinsIcon size={32} weight="fill" />
            </View>
            <View
              style={{
                marginLeft: 10,
                gap: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                }}
              >
                ₹50
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: 3,
                backgroundColor: "lightgrey",
                borderRadius: 20,
                marginVertical: 20,
              }}
            ></View>
          </View>
          <View
            style={{
              alignItems: "center",
              flex: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleConfirm();
                reset();
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
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {confirm && <LookingForDriver setConfirm={setConfirm} setDetailPanel={setDetailPanel} />}
    </View>
  );
}
