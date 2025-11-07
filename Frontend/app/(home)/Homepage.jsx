import { CaretCircleLeftIcon } from "phosphor-react-native";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SearchBox from "../../component/LocationSearch";
import Ride from "../../component/Ride";

export default function HomePage() {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [input, setInput] = useState(true);
  const [ridePagePanel, setRidePagePanel] = useState(false);
  

  function handleSelectLocation(type, location) {
    const fullAddress = location.loc + ", " + location.address;
    if (type === "pickUp") setPickUp(fullAddress);
    else if (type === "destination") setDestination(fullAddress);
  }

  function handlePanel() {
    setPanel(true);
  }

  

  function ridePage(pickUp, destination) {
    if (pickUp.trim().toLowerCase() === destination.trim().toLowerCase()) {
      Alert.alert("Invalid Ride", "PickUp and Destination can't be the same");
    } else {
      setPanel(false);
      setInput(false), setRidePagePanel(true);
    }
  }
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <View>
          <Image
            source={require("../../assets/Moradabad-map.png")}
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "cover",
            }}
          />
        
        <View
          style={{
            position: "absolute",
            left: 10,
            top: 30,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image
            src="https://media.gettyimages.com/id/1309647827/vector/pin-map-car-location-flat-icon.jpg?s=612x612&w=gi&k=20&c=MozH1TbTjgMH6zEp97VUqUX7z4Sds59VYx_AJrJFrZc="
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              fontWeight: "900",
              fontSize: 30,
              fontFamily: "FiraCode-Regular",
            }}
          >
            Dhanno
          </Text>
        </View>
      </View>
      {input && (
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              height: "28%",
              padding: 25,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              {panel && (
                <TouchableOpacity
                  onPress={() => {
                    setPanel(false);
                  }}
                  style={{
                    marginTop: 8,
                  }}
                >
                  <CaretCircleLeftIcon size={32} />
                </TouchableOpacity>
              )}
              {!panel && (
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 24,
                    marginLeft: 10,
                    marginTop: 0,
                  }}
                >
                  Set Location
                </Text>
              )}
            </View>
            <TextInput
              value={pickUp}
              onChangeText={(text) => {
                setPickUp(text);
              }}
              onFocus={() => {
                handlePanel();
                setActiveField("pickUp");
              }}
              placeholder="PickUp Location"
              style={{
                backgroundColor: "#eee",
                textAlign: "center",
                borderRadius: 15,
                fontSize: 16,
                marginTop: 20,
                paddingHorizontal: "10%",
              }}
            />
            <TextInput
              value={destination}
              onChangeText={(text) => {
                setDestination(text);
              }}
              onFocus={() => {
                handlePanel();
                setActiveField("destination");
              }}
              placeholder="Enter Your Destination"
              style={{
                backgroundColor: "#eee",
                textAlign: "center",
                borderRadius: 15,
                fontSize: 16,
                marginVertical: 20,
                paddingHorizontal: "10%",
              }}
            />
            <View
              style={{
                backgroundColor: "black",
                width: 5,
                height: 75,
                position: "absolute",
                left: "13%",
                top: 92,
                borderRadius: 200,
              }}
            ></View>
          </View>
          {panel && (
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
              }}
            >
              <ScrollView
                contentContainerStyle={{
                  paddingTop: "10%",
                }}
              >
                <SearchBox
                  type={activeField}
                  onSelectLocation={(loc) =>
                    handleSelectLocation(activeField, loc)
                  }
                />
              </ScrollView>
              <TouchableOpacity
                disabled={!pickUp || !destination}
                onPress={() => {
                  ridePage(pickUp, destination);
                }}
                style={{
                  height: "8%",
                  width: "80%",
                  position: "absolute",
                  left: "10%",
                  right: 0,
                  backgroundColor: "purple",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "purple",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 18,
                    color:"white",
                  }}
                >
                  Find Your Ride
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      {ridePagePanel &&
        (
           <View style={{
            height:"55%",
            width:"100%",
            position:"absolute",
            bottom:0,
            backgroundColor:"white",

           }}>
            <ScrollView>
              <Ride
                setPanel={setPanel}
                setInput={setInput}
                setRidePagePanel={setRidePagePanel}
                pickUp={pickUp}
                destination={destination}
                setPickUp={setPickUp}
                setDestination={setDestination}
              />
              </ScrollView>
              </View>
            
        )}
    </KeyboardAvoidingView>
  );
}
