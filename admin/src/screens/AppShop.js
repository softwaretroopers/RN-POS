import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  FAB,
  Portal,
  Provider,
} from "react-native-paper";

import AppColors from "../configs/AppColors";

const shops = [
  {
    shopID: "#001",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#002",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#003",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#004",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#005",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#006",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#007",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#008",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#009",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
  {
    shopID: "#010",
    shopName: "Anonymous Shop",
    owner: "Mr.Anonymous",
  },
];

function AppShop(props) {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
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
            <Caption>{item.owner}</Caption>
          </View>
        )}
      />
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? "close" : "plus"}
            actions={[
              {
                icon: "office-building",
                label: "Shop",
                onPress: () => console.log("Pressed shop"),
              },
              {
                icon: "package-variant",
                label: "Stock",
                onPress: () => console.log("Pressed stock"),
              },
              {
                icon: "file-document",
                label: "Invoice",
                onPress: () => console.log("Pressed invoice"),
              },
              {
                icon: "account",
                label: "Employee",
                onPress: () => console.log("Pressed employee"),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
          />
        </Portal>
      </Provider>
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
