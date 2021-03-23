import React from "react";
import { useFormikContext } from "formik";
import { View, StyleSheet } from "react-native";
import { Text, IconButton } from "react-native-paper";

import AppPicker from "./AppPicker";
import AppColors from "../../configs/AppColors";

function AppFormPicker({
  items,
  name,
  placeholder,
  placeholderIcon,
  desc,
  icon,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        {placeholderIcon && (
          <IconButton
            icon={placeholderIcon}
            size={20}
            color={AppColors.black}
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>{desc}</Text>
        <AppPicker
          items={items}
          onSelectItem={(item) => setFieldValue(name, item)}
          placeholder={placeholder}
          selectedItem={values[name]}
          icon={icon}
          numberOfColumns={numberOfColumns}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#cdcdcd",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e7e7e7",
    marginBottom: "2%",
  },
  text: {
    color: "#747474",
    fontSize: 16,
  },
  icon: {
    marginLeft: 12,
  },
});

export default AppFormPicker;
