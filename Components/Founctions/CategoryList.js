import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import COLORS from "../Const/Color";

const CategoryList = ({ navigation }) => {
  const [selectedCategoryListIndex, setselectedCategoryListIndex] = useState(0);
  const Categories = ["All", "Popular", "Top Rated", "Featured", "Luxury"];
  return (
    <View style={style.categoryListContainer}>
      {Categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setselectedCategoryListIndex(index)}
        >
          <View>
            <Text
              style={{
                ...style.categoryListText,
                color:
                  selectedCategoryListIndex == index
                    ? COLORS.primary
                    : COLORS.grey,
              }}
            >
              {item}
            </Text>

            {selectedCategoryListIndex == index && (
              <View
                style={{
                  height: 3,
                  width: 30,
                  backgroundColor: COLORS.primary,
                  marginTop: 2,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default CategoryList;

const style = StyleSheet.create({
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
