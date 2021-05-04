import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Divider } from "react-native-paper";
import { firebase } from "../firebase/Config";

function AppDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("ProfileScreens");
            }}
          >
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Icon size={50} icon="account"></Avatar.Icon>
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title style={styles.title}>Admin</Title>
                  <Caption style={styles.caption}>Point Of Sales</Caption>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Drawer.Section style={styles.drawerSection}>
            <Divider />
            <Drawer.Item
              label="Invoices"
              onPress={() => {
                props.navigation.navigate("HomeScreens");
              }}
              icon="file-document"
            />
            <Drawer.Item
              label="Stock"
              onPress={() => {
                props.navigation.navigate("StockScreens");
              }}
              icon="package-variant"
            />
            <Drawer.Item
              label="Store"
              onPress={() => {
                props.navigation.navigate("StoreScreens");
              }}
              icon="store"
            />
            <Drawer.Item
              label="Shops"
              onPress={() => {
                props.navigation.navigate("ShopScreens");
              }}
              icon="office-building"
            />
            <Drawer.Item
              label="Employees"
              onPress={() => {
                props.navigation.navigate("EmployeeScreens");
              }}
              icon="account-multiple"
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          label="Logout"
          onPress={() => {
            firebase
              .auth()
              .signOut()
              .then(
                () => {
                  props.navigation.navigate("LoginScreen");
                },
                function (error) {
                  // An error happened.
                }
              );
          }}
          icon="logout"
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
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
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default AppDrawerContent;
