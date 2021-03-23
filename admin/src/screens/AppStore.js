import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Avatar, Title, Caption, FAB } from "react-native-paper";

import AppColors from "../configs/AppColors";

const stores = [
  {
    storeID: "#001",
    storeName: "Kadawatha",
    supervisor: "Mr.Anonymous",
  },
  {
    storeID: "#002",
    storeName: "Kelaniya",
    supervisor: "Mr.Anonymous",
  },
];

function AppStore(props) {
  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={stores}
        keyExtractor={(store) => store.storeID.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Avatar.Icon size={40} icon="store" />
            <Title style={styles.title}>{item.storeName}</Title>
            <Caption>{item.supervisor}</Caption>
          </View>
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => props.navigation.navigate("AddStoreScreen")}
      />
    </View>
  );
}

export default AppStore;

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
