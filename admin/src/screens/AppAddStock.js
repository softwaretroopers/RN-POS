import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { firebase } from "../firebase/Config";
import AppColors from "../configs/AppColors";

function AppAddStock(props) {
  const [itemName, setItemName] = React.useState("");
  const [unitPrice, setUnitPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [itemID, setItemID] = React.useState("");

  const stockRef = firebase.firestore().collection("stockItems");

  const onAddButtonPress = () => {
    if (itemName && itemName.length > 0) {
      const data = {
        itemName: itemName,
        unitPrice: unitPrice,
        stock: stock,
        itemID: itemID,
      };
      stockRef
        .add(data)
        .then((_doc) => {
          setItemName("");
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

      <ScrollView style={{ marginTop: "3%" }}>
        <TextInput
          placeholder="Item Name"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          mode="outlined"
          onChangeText={(text) => setItemName(text)}
          value={itemName}
        />
        <TextInput
          placeholder="Unit Price"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          mode="outlined"
          onChangeText={(text) => setUnitPrice(text)}
          value={unitPrice}
        />
        <TextInput
          placeholder="Stock"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          mode="outlined"
          onChangeText={(text) => setStock(text)}
          value={stock}
        />
        <TextInput
          placeholder="ID"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          mode="outlined"
          onChangeText={(text) => setItemID(text)}
          value={itemID}
        />
      </ScrollView>

      <Button
        mode="contained"
        icon="check-circle"
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        style={styles.button}
        onPress={() => onAddButtonPress()}
      >
        Submit
      </Button>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerFooter: { padding: "4%", marginTop: "5%" },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  button: {
    padding: "4%",
    marginVertical: "3%",
  },
  text: {
    color: AppColors.primary,
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppAddStock;
