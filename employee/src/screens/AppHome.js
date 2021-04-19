import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { Button, Avatar, Title, Caption, FAB } from "react-native-paper";

import AppColors from "../configs/AppColors";
import Invoices from "../database/Invoices";

function AppHome(props) {
  return (
    <View>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={Invoices}
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
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => props.navigation.navigate("AddInvoiceScreens")}
      />
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
  invoiceInfoSection: {
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
