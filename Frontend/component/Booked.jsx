import { CaretCircleLeftIcon } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function Booked({ setConfirm }) {
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setConfirm(false);
          }}
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <CaretCircleLeftIcon size={32} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: "45%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          Your Ride Is Booked
        </Text>
        <Text>👍</Text>
      </View>
    </View>
  );
}
