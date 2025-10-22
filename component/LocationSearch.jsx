import { MapPinIcon } from "phosphor-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function SearchBox({ type, onSelectLocation }) {
  const location = [
    //    " Railway Station,Rampur Road,Budh Bazar, Moradabad",
    //    " MIT College,Ram Ganga Vihar,Phase 2, Moradabad",
    //    "Bus Stand,Rampur Road,Gandhi Nagar,Moradabad",
    //    "District Hospital,Civil Lines, Moradabad",
    //    "Government Polytechnic College,Kanth Road,Harthala,Moradabad",
    {
      loc: "Railway Station",
      address: "Rampur Road Budh Bazar Moradabad",
    },
    {
      loc: "MIT College",
      address: "Ram Ganga Vihar Phase II Moradabad",
    },
    {
      loc: "Bus Stand",
      address: "Rampur Road Gandhi Nagar Moradabad",
    },
    {
      loc: "Government Polytechnic College",
      address: "Kanth Road Harthala Moradabad",
    },
    {
      loc: "District Hospital",
      address: "Civil Lines Moradabad",
    },
  ];
  const [blink, setBlink] = useState(null);
  function handleBlink(index) {
    setBlink(index);
    setTimeout(() => setBlink(null), 300);
  }
  return (
    <View
      style={{
        margin: 30,
        gap: 30,
      }}
    >
      {location.map(function (elem, index) {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handleBlink(index);
              onSelectLocation(elem, type);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                padding: 10,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: blink === index ? "black" : "grey",
              }}
            >
              <MapPinIcon
                size={32}
                weight="fill"
                style={{
                  borderRadius: 50,
                }}
              />
              <View>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: "600",
                    fontSize: 17,
                  }}
                >
                  {elem.loc}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    fontWeight: "400",
                    fontSize: 12,
                  }}
                >
                  {elem.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
