import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Avatar, Title, Caption, FAB } from "react-native-paper";

import AppColors from "../configs/AppColors";

const shops = [
  {
    shopID: "#001",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#002",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#003",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#004",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#005",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#006",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#007",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#008",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#009",
    shopName: "Anonymous Shop",
    category: "A",
  },
  {
    shopID: "#010",
    shopName: "Anonymous Shop",
    category: "A",
  },
];

function AppShop(props) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={shops}
        keyExtractor={(shop) => shop.shopID.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar.Icon size={40} icon="office-building" />
            <Title style={styles.title}>{item.shopName}</Title>
            <Caption>Category: {item.category}</Caption>
          </View>
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => props.navigation.navigate("AddShopScreen")}
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
