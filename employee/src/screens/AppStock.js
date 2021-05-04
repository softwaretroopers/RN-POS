import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Avatar, Title, Chip } from "react-native-paper";
import { firebase } from "../database/config";

import AppColors from "../configs/AppColors";
import AppRenderIf from "../configs/AppRenderIf";

function AppStock(props) {
  const [StockItems, setStockItems] = useState([]);

  const stockRef = firebase.firestore().collection("stockItems");

  useEffect(() => {
    stockRef.onSnapshot(
      (querySnapshot) => {
        const newStock = [];
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          shop.id = doc.id;
          newStock.push(shop);
        });
        setStockItems(newStock);
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
                  0 == item.stock,
                  <Chip
                    selectedColor={AppColors.red}
                    style={{ margin: 10 }}
                    icon="circle"
                  >
                    Unavailable
                  </Chip>
                )}
                {AppRenderIf(
                  !0 == item.stock,
                  <Chip
                    selectedColor={AppColors.green}
                    style={{ margin: 10 }}
                    icon="circle"
                  >
                    Available
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
