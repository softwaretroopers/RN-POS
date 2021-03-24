import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { FAB, Avatar, Title, Subheading, Caption } from "react-native-paper";

import AppColors from "../configs/AppColors";

function AppProfile(props) {
  return (
    <View>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.accounttop}>
        <FAB
          style={styles.fab}
          small
          icon="pen"
          onPress={() => props.navigation.navigate("ProfileEditScreen")}
        />
        <Avatar.Icon size={100} icon="account" />
        <Title style={{ color: AppColors.background }}>Mr. Anonymous</Title>

        <Caption style={{ color: AppColors.background }}>
          support@softwaretroopers.com
        </Caption>
        <Caption style={{ color: AppColors.background }}>+94717827878</Caption>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: AppColors.primary,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
  },
  accountMiddle: {
    padding: 20,
  },
  accountMiddleDetail: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  accountBottom: {
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "18%",
    height: 30,
    marginLeft: "40%",
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "white",
  },
});

export default AppProfile;
