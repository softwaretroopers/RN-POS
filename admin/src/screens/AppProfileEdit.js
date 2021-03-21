import React, { useState } from "react";
import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import { Appbar, TextInput, Avatar } from "react-native-paper";

import AppColors from "../configs/AppColors";
import RenderIf from "../configs/RenderIf";

const userDetails = [
  {
    detail: "Anonymous Inc",
    label: "Company Name",
    icon: "office-building",
  },
  { detail: "Mr.Anonymous", label: "Owner Name", icon: "account" },
  { detail: "support@softwaretroopers.com", label: "Email", icon: "email" },
];

function AppProfileEdit(props) {
  const [visibility, setVisibility] = useState(true);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <Appbar style={{ backgroundColor: AppColors.primary }}>
        <Appbar.BackAction />
        <Appbar.Content title="Edit Information" />
        {RenderIf(
          visibility,
          <Appbar.Action
            icon="square-edit-outline"
            onPress={() => {
              setVisibility(!visibility);
            }}
          />
        )}
        {RenderIf(
          !visibility,
          <Appbar.Action
            icon="content-save"
            onPress={() => {
              setVisibility(!visibility);
            }}
          />
        )}
      </Appbar>
      <View style={styles.containers}>
        <FlatList
          data={userDetails}
          keyExtractor={(listing) => listing.label}
          renderItem={({ item }) => (
            <TextInput
              label={item.label}
              disabled={visibility}
              value={item.detail}
              left={<TextInput.Icon name={item.icon} />}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    padding: 10,
  },
  ContainerButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerHeading: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: AppColors.background,
    padding: "5%",
    shadowColor: AppColors.primary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  containerTop: {
    alignItems: "center",
    marginTop: 5,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  HeadingFont: {
    fontWeight: "bold",
  },
});

export default AppProfileEdit;
