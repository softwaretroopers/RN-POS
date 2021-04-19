import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Avatar, Title, Chip } from "react-native-paper";

import AppColors from "../configs/AppColors";
import AppRenderIf from "../configs/AppRenderIf";
import StockItems from "../database/StockItems";

const stocks = [
  {
    itemID: "#001",
    itemName: "Anonymous Item",
    stock: "10",
    unitPrice: "250",

    availability: true,
    store: "Kadawatha",
  },
  {
    itemID: "#002",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kadawatha",
  },
  {
    itemID: "#003",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kadawatha",
  },
  {
    itemID: "#004",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kelaniya",
  },
  {
    itemID: "#005",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kelaniya",
  },
  {
    itemID: "#006",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kadawatha",
  },
  {
    itemID: "#007",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kelaniya",
  },
  {
    itemID: "#008",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kadawatha",
  },
  {
    itemID: "#009",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kadawatha",
  },
  {
    itemID: "#010",
    itemName: "Anonymous Item",
    stock: "100",
    unitPrice: "250",

    availability: true,
    store: "Kelaniya",
  },
];

function AppStock(props) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={StockItems}
        keyExtractor={(stock) => stock.itemID.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar.Icon
                  size={40}
                  icon="package-variant"
                  style={{ marginRight: "2%" }}
                />
                <Title style={styles.title}>
                  {item.itemName} ({item.store})
                </Title>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {AppRenderIf(
                  item.availability,
                  <Chip
                    selectedColor={AppColors.green}
                    style={{ margin: 10 }}
                    icon="circle"
                  >
                    Available
                  </Chip>
                )}
                {AppRenderIf(
                  !item.availability,
                  <Chip
                    selectedColor={AppColors.red}
                    style={{ margin: 10 }}
                    icon="circle"
                  >
                    Unavailable
                  </Chip>
                )}
                {AppRenderIf(
                  10 < item.stock,
                  <Chip style={{ marginRight: "3%" }}>Qty: {item.stock}</Chip>
                )}
                {AppRenderIf(
                  10 >= item.stock,
                  <Chip
                    selectedColor={AppColors.orange}
                    style={{ marginRight: "3%" }}
                  >
                    Qty: {item.stock} (Low)
                  </Chip>
                )}
                <Chip style={{ marginLeft: "3%" }}>Rs.{item.unitPrice}</Chip>
              </View>
            </View>
          </View>
        )}
      />
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
    marginHorizontal: "2%",
    elevation: 10,
    backgroundColor: AppColors.background,
    margin: "1%",
    borderRadius: 10,
    flexDirection: "row",
  },
  title: { fontSize: 16 },
  screen: { flex: 1 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: AppColors.secondary,
  },
});
