import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { Caption, Title, Button, Avatar } from "react-native-paper";
import { firebase } from "../database/config";

import AppColors from "../configs/AppColors";

function AppAddInvoice(props) {
  const [shops, setShops] = useState([]);

  const shopRef = firebase.firestore().collection("shops");

  useEffect(() => {
    shopRef.onSnapshot(
      (querySnapshot) => {
        const newShops = [];
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          shop.id = doc.id;
          newShops.push(shop);
        });
        setShops(newShops);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text}>Enter Invoice Details</Text>
        <Button
          mode="contained"
          icon="check-circle"
          color={AppColors.background}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onPress={(values) => props.navigation.navigate("AddInvoiceScreens")}
        >
          Select
        </Button>
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: AppColors.background,
          },
        ]}
      >
        <View>
          <FlatList
            data={shops}
            keyExtractor={(shop) => shop.shopID.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight>
                <View style={styles.card}>
                  <Avatar.Icon size={40} icon="store" />
                  <Title style={styles.title}>{item.name}</Title>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default AppAddInvoice;

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
  card: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    elevation: 10,
    backgroundColor: AppColors.background,
    margin: "1%",
    borderRadius: 10,
    width: "60%",
    alignSelf: "center",
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
