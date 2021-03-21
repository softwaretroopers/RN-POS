import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import {
  Button,
  Avatar,
  Title,
  Caption,
  FAB,
  Portal,
  Provider,
} from "react-native-paper";

import AppColors from "../configs/AppColors";

const invoices = [
  {
    invoiceID: "#011801",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011802",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011803",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011804",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011805",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011806",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011807",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011808",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011809",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011810",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
  {
    invoiceID: "#011811",
    shopName: "Anonymous Shop",
    date: "01/03/2021",
  },
];

function AppHome() {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <View>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={invoices}
        keyExtractor={(invoice) => invoice.invoiceID.toString()}
        renderItem={({ item }) => (
          <View style={styles.invoiceInfoSection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar.Icon size={40} icon="file-document" />
                <Title style={{ fontSize: 12 }}>{item.invoiceID}</Title>
              </View>

              <View style={{ flexDirection: "column" }}>
                <Title style={styles.title}>{item.shopName}</Title>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Caption style={styles.caption}>{item.date}</Caption>
                </View>
              </View>
              <Button color={AppColors.primary} icon="eye">
                View
              </Button>
            </View>
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

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  userInfoSection: {
    backgroundColor: AppColors.background,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    margin: "1%",
    elevation: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: AppColors.secondary,
  },
});

export default AppHome;
