import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../assets/logo.png")}
              ></Avatar.Image>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Admin</Title>
                <Caption style={styles.caption}>Point Of Sales</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <Divider />
            <DrawerItem
              label="Stock"
              onPress={() => {
                //   props.navigation.navigate("");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="book-search"
                  color={color}
                  size={size}
                />
              )}
            />
            <DrawerItem
              label="Sells"
              onPress={() => {
                //   props.navigation.navigate("");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="briefcase-check"
                  color={color}
                  size={size}
                />
              )}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Invoice Wise List"
              onPress={() => {
                //   props.navigation.navigate("");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="briefcase-edit-outline"
                  color={color}
                  size={size}
                />
              )}
            />
            <DrawerItem
              label="Due Receivable"
              onPress={() => {
                //   props.navigation.navigate("");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="calendar-export"
                  color={color}
                  size={size}
                />
              )}
            />

            <DrawerItem
              label="All Report"
              onPress={() => {
                //   props.navigation.navigate("");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="clipboard-list"
                  color={color}
                  size={size}
                />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Logout"
          onPress={() => props.navigation.popToTop()}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
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
export default DrawerContent;
