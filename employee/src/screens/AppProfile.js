import React, { useCallback } from "react";
import { View, StyleSheet, StatusBar, Linking } from "react-native";
import { Avatar, Button, Chip } from "react-native-paper";

import AppColors from "../configs/AppColors";

function AppProfile(props) {
  const handlePress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openURL("tel:+94717827878");
  }, []);
  const handleEmailPress = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openURL("mailto: support@expo.io");
  }, []);
  return (
    <View>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.accountTop}>
        <Avatar.Image
          size={80}
          source={require("../assets/adaptive-icon.png")}
          style={{ margin: "2%", backgroundColor: "white" }}
        />
        <View style={{ flexDirection: "row" }}>
          <Chip style={{ margin: "3%" }} icon="phone" onPress={handlePress}>
            Contact Us
          </Chip>
          <Chip
            style={{ margin: "3%" }}
            icon="email"
            onPress={handleEmailPress}
          >
            Email Us
          </Chip>
        </View>

        <Button
          style={{ marginVertical: "5%" }}
          mode="contained"
          icon="logout"
          color={AppColors.primary}
          onPress={() => props.navigation.popToTop()}
        >
          Logout
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountTop: {
    backgroundColor: AppColors.background,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
    elevation: 10,
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
});

export default AppProfile;
