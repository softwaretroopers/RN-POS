import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { IconButton, Text } from "react-native-paper";

import AppColors from "../../configs/AppColors";

function AppPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: AppColors.black,
        }}
      >
        {item.shopName}
      </Text>
      <IconButton icon="store" size={20} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "5%",
    marginTop: "3%",
    borderColor: AppColors.primary,
    flexDirection: "row",
    backgroundColor: AppColors.white,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default AppPickerItem;
