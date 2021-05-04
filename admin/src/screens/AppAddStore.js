import React, { useState } from "react";
import { StyleSheet, View, Text, Dimensions, StatusBar } from "react-native";
import { Caption, ToggleButton, Button, TextInput } from "react-native-paper";
import { firebase } from "../firebase/Config";

import AppColors from "../configs/AppColors";

function AppAddStore(props) {
  const [supervisor, setSupervisor] = useState("");

  const [entityText, setEntityText] = useState("");

  const entityRef = firebase.firestore().collection("stores");

  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
      const data = {
        name: entityText,
        supervisor: supervisor,
        id,
      };
      entityRef
        .add(data)
        .then((_doc) => {
          setEntityText("");
          props.navigation.goBack();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text}>Enter New Store Details</Text>
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: AppColors.background,
          },
        ]}
      >
        <View style={styles.innerFooter}>
          <TextInput
            placeholder="Store Name"
            onChangeText={(text) => setEntityText(text)}
            value={entityText}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            mode="outlined"
          />
          <TextInput
            placeholder="Supervisor"
            onChangeText={(text) => setSupervisor(text)}
            value={supervisor}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            mode="outlined"
          />

          <Button
            mode="contained"
            icon="check-circle"
            style={styles.button}
            onPress={() => onAddButtonPress()}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AppAddStore;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: "5%",
    justifyContent: "center",
  },
  innerFooter: { padding: "4%", marginTop: "5%" },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  button: {
    padding: "4%",
    marginTop: "5%",
  },
  forget: {
    color: AppColors.primaryVariant,
    fontSize: 16,
    marginTop: "3%",
    alignSelf: "center",
  },
  text: {
    color: AppColors.background,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
