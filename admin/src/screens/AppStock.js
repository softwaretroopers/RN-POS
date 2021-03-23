import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Avatar, Title, FAB, Chip } from "react-native-paper";

import AppColors from "../configs/AppColors";

const stocks = [
  {
    itemID: "#001",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#002",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#003",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#004",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#005",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#006",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#007",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#008",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#009",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#010",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#011",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#012",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#013",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#014",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#015",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#016",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#017",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#018",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#019",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#020",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#021",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
  {
    itemID: "#022",
    itemName: "Anonymous Item",
    quantity: "100",
    unitPrice: "250",
  },
];

function AppStock(props) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        key={2}
        numColumns={2}
        data={stocks}
        keyExtractor={(stock) => stock.itemID.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar.Icon size={40} icon="package-variant" />
            <Title style={styles.title}>
              {item.itemName} ({item.itemID})
            </Title>
            <View style={{ flexDirection: "row" }}>
              <Chip style={{ marginRight: "3%" }}>Qty: {item.quantity}</Chip>
              <Chip style={{ marginLeft: "3%" }}>Rs.{item.unitPrice}</Chip>
            </View>
          </View>
        )}
      />
      <FAB style={styles.fab} icon="plus" />
    </View>
  );
}

export default AppStock;

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
  },
  title: { fontSize: 16 },
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: AppColors.secondary,
  },
});
