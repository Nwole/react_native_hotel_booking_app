import { Feather } from "@expo/vector-icons";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import COLORS from "../Const/Color";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

const Card = ({ hotel, index }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      onPress={() => navigation.navigate("DetailsScreen", hotel)}
    >
      <View style={{ ...style.card }}>
        <View style={{ ...style.cardOverLay, opacity: 0 }} />
        <View style={style.priceTag}>
          <Text
            style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold" }}
          >
            ${hotel.price}
          </Text>
        </View>
        <Image source={hotel.image} style={style.cardImage} />
        <View style={style.cardDetails}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {hotel.name}
              </Text>
              <View>
                <Text style={{ fontSize: 12, color: COLORS.grey }}>
                  {hotel.location}
                </Text>
              </View>
            </View>
            <MaterialIcons name="bookmark-border" size={26} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star" size={15} color={COLORS.orange} />
              <MaterialIcons name="star" size={15} color={COLORS.orange} />
              <MaterialIcons name="star" size={15} color={COLORS.orange} />
              <MaterialIcons name="star" size={15} color={COLORS.orange} />
              <MaterialIcons name="star" size={15} color={COLORS.orange} />
              <MaterialIcons name="star" size={15} color={COLORS.grey} />
            </View>
            <Text style={{ fontSize: 15, color: COLORS.grey }}>365reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const style = StyleSheet.create({
  card: {
    height: 200,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.orange,
  },
  cardImage: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    // borderRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: "absolute",
    zIndex: 1,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 15,
  },
  cardDetails: {
    height: 100,
    width: "100%",
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    padding: 15,
  },
  cardOverLay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: "absolute",
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
});
