import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import { firebase } from "../database/config";

import AppColors from "../configs/AppColors";
//import Shops from "../database/Shops";

function AppShop(props) {
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
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={shops}
        keyExtractor={(shop) => shop.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar.Icon size={40} icon="office-building" />
            <Title style={styles.title}>{item.name}</Title>
            <Caption>Category: {item.category}</Caption>
          </View>
        )}
      />
    </View>
  );
}

export default AppShop;

const styles = StyleSheet.create({
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
  title: { fontSize: 16 },
  screen: { flex: 1, justifyContent: "center" },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: AppColors.secondary,
  },
});
