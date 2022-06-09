import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";
import COLORS from "../Const/Color";
import { MaterialIcons } from "@expo/vector-icons";

const TopHotelsCard = ({ hotel }) => {
  return (
    <View style={style.TopHotelsCard}>
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
          flexDirection: "row",
        }}
      >
        <MaterialIcons name="star" size={15} color={COLORS.orange} />
        <Text style={{ color: COLORS.white, fontSize: 15, fontWeight: "bold" }}>
          5.0
        </Text>
      </View>
      <Image style={style.topHotelCardImage} source={hotel.image} />
      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>{hotel.name}</Text>
        <Text style={{ fontSize: 7, fontWeight: "bold", color: COLORS.grey }}>
          {hotel.location}
        </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  TopHotelsCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
export default TopHotelsCard;
