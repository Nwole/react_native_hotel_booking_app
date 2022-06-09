import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import CategoryList from "../../Founctions/CategoryList";
import COLORS from "../../Const/Color";
import Hotels from "../../Const/Hotel";
import Card from "../../Founctions/Card";
import TopHotelsCard from "../../Founctions/TopHotelsCard";

import { Feather, Evillcon, Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View style={{ paddingBottom: 15 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Find your hotel
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>in</Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: COLORS.primary,
                }}
              >
                Lagos State
              </Text>
            </View>
          </View>
          <Ionicons name="person-outline" size={30} />
        </View>

        {/* <Feather name="award" size={30} /> */}

        <View style={style.searchInputContainer}>
          <Feather name="search" size={25} />
          <TextInput
            placeholder="search"
            style={{ marginLeft: 20, fontSize: 20 }}
          />
        </View>
        <CategoryList />
        <FlatList
          horizontal
          data={Hotels}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 30, paddingLeft: 10 }}
          renderItem={({ item, index }) => <Card hotel={item} index={index} />}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: COLORS.grey }}>
            Top hotels
          </Text>
          <Text style={{ color: COLORS.grey }}>Show all</Text>
        </View>
        <FlatList
          horizontal
          data={Hotels}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({ item }) => <TopHotelsCard hotel={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.orange,
    marginTop: 15,
    marginHorizontal: 20,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    color: COLORS.grey,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
  },
});
